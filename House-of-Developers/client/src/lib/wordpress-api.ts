const WP_API_URL = "https://olive-lyrebird-997264.hostingersite.com/wp-json/wp/v2";

export interface WPPost {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  featured_media: number;
  categories: number[];
  tags: number[];
  _embedded?: {
    author?: Array<{
      name: string;
      avatar_urls?: Record<string, string>;
    }>;
    "wp:featuredmedia"?: Array<{
      source_url: string;
      alt_text?: string;
      media_details?: {
        sizes?: {
          medium_large?: { source_url: string };
          large?: { source_url: string };
          full?: { source_url: string };
        };
      };
    }>;
    "wp:term"?: Array<
      Array<{
        id: number;
        name: string;
        slug: string;
        taxonomy: string;
      }>
    >;
  };
}

export interface WPCategory {
  id: number;
  name: string;
  slug: string;
  count: number;
}

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  categorySlug: string;
  author: {
    name: string;
    avatar: string;
  };
  featuredImage: string | null;
  categoryId: number;
  tags: string[];
  readingTime: number;
}

function decodeHtmlEntities(text: string): string {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&#8217;/g, "\u2019")
    .replace(/&#8216;/g, "\u2018")
    .replace(/&#8220;/g, "\u201C")
    .replace(/&#8221;/g, "\u201D")
    .replace(/&#8211;/g, "\u2013")
    .replace(/&#8212;/g, "\u2014")
    .replace(/&#8230;/g, "\u2026")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(parseInt(n, 10)));
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").trim();
}

function calculateReadingTime(content: string): number {
  const text = stripHtml(content);
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function addHeadingIds(html: string): string {
  return html.replace(
    /<(h[23])([^>]*)>(.*?)<\/h[23]>/gi,
    (match, tag, attrs, content) => {
      if (/id="/.test(attrs)) return match;
      const id = slugify(stripHtml(content));
      return `<${tag}${attrs} id="${id}">${content}</${tag}>`;
    }
  );
}

function transformPost(wp: WPPost): BlogPost {
  const embedded = wp._embedded;

  const authorData = embedded?.author?.[0];
  const authorName = authorData?.name || "House of Developers";
  const authorAvatar = authorData?.avatar_urls?.["96"] || authorData?.avatar_urls?.["48"] || "";

  const media = embedded?.["wp:featuredmedia"]?.[0];
  const featuredImage =
    media?.media_details?.sizes?.large?.source_url ||
    media?.media_details?.sizes?.medium_large?.source_url ||
    media?.source_url ||
    null;

  const terms = embedded?.["wp:term"] || [];
  const categories = terms[0] || [];
  const tags = terms[1] || [];

  const primaryCategory = categories[0];

  const rawContent = wp.content.rendered;
  const contentWithIds = addHeadingIds(rawContent);

  return {
    id: wp.id,
    slug: wp.slug,
    title: decodeHtmlEntities(wp.title.rendered),
    excerpt: stripHtml(decodeHtmlEntities(wp.excerpt.rendered)),
    content: contentWithIds,
    date: wp.date,
    category: primaryCategory?.name || "Uncategorized",
    categorySlug: primaryCategory?.slug || "uncategorized",
    categoryId: primaryCategory?.id || 0,
    author: {
      name: authorName,
      avatar: authorAvatar,
    },
    featuredImage,
    tags: tags.map((t: { name: string }) => t.name),
    readingTime: calculateReadingTime(rawContent),
  };
}

export async function fetchPosts(options?: {
  page?: number;
  perPage?: number;
  category?: number;
  search?: string;
}): Promise<{ posts: BlogPost[]; totalPages: number; totalPosts: number }> {
  const params = new URLSearchParams();
  params.set("_embed", "true");
  params.set("per_page", String(options?.perPage || 9));
  params.set("page", String(options?.page || 1));
  params.set("orderby", "date");
  params.set("order", "desc");

  if (options?.category && options.category > 0) {
    params.set("categories", String(options.category));
  }
  if (options?.search) {
    params.set("search", options.search);
  }

  const res = await fetch(`${WP_API_URL}/posts?${params.toString()}`);

  if (!res.ok) {
    if (res.status === 400) {
      return { posts: [], totalPages: 0, totalPosts: 0 };
    }
    throw new Error(`WordPress API error: ${res.status}`);
  }

  const totalPages = parseInt(res.headers.get("X-WP-TotalPages") || "1", 10);
  const totalPosts = parseInt(res.headers.get("X-WP-Total") || "0", 10);

  const wpPosts: WPPost[] = await res.json();
  const posts = wpPosts.map(transformPost);

  return { posts, totalPages, totalPosts };
}

export async function fetchPostBySlug(slug: string): Promise<BlogPost | null> {
  const params = new URLSearchParams();
  params.set("_embed", "true");
  params.set("slug", slug);

  const res = await fetch(`${WP_API_URL}/posts?${params.toString()}`);
  if (!res.ok) throw new Error(`WordPress API error: ${res.status}`);

  const wpPosts: WPPost[] = await res.json();
  if (wpPosts.length === 0) return null;

  return transformPost(wpPosts[0]);
}

export async function fetchCategories(): Promise<WPCategory[]> {
  const params = new URLSearchParams();
  params.set("per_page", "100");
  params.set("hide_empty", "true");
  params.set("orderby", "count");
  params.set("order", "desc");

  const res = await fetch(`${WP_API_URL}/categories?${params.toString()}`);
  if (!res.ok) throw new Error(`WordPress API error: ${res.status}`);

  const categories: WPCategory[] = await res.json();
  return categories.filter((c) => c.slug !== "uncategorized" || c.count > 0);
}

export async function fetchRelatedPosts(
  categoryId: number,
  excludeId: number,
  count = 3
): Promise<BlogPost[]> {
  const params = new URLSearchParams();
  params.set("_embed", "true");
  params.set("per_page", String(count));
  params.set("exclude", String(excludeId));
  if (categoryId > 0) {
    params.set("categories", String(categoryId));
  }

  const res = await fetch(`${WP_API_URL}/posts?${params.toString()}`);
  if (!res.ok) return [];

  const wpPosts: WPPost[] = await res.json();
  return wpPosts.map(transformPost);
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
