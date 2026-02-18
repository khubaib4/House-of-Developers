import { useState, useEffect, useMemo } from "react";
import { useRoute, Link } from "wouter";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Twitter,
  Linkedin,
  Facebook,
  Copy,
  Check,
  Rocket,
  Tag,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import {
  getPostBySlug,
  getRelatedPosts,
  formatDate,
  type BlogPost,
} from "@/lib/blog-data";

interface Heading {
  id: string;
  text: string;
  level: number;
}

function extractHeadings(html: string): Heading[] {
  const regex = /<h([23])\s+id="([^"]*)"[^>]*>(.*?)<\/h[23]>/g;
  const headings: Heading[] = [];
  let match;
  while ((match = regex.exec(html)) !== null) {
    headings.push({
      level: parseInt(match[1]),
      id: match[2],
      text: match[3].replace(/<[^>]*>/g, ""),
    });
  }
  return headings;
}

function TableOfContents({ content }: { content: string }) {
  const headings = useMemo(() => extractHeadings(content), [content]);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-80px 0px -80% 0px" }
    );

    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <Card className="p-6 mb-8">
      <h4 className="font-semibold mb-3">Table of Contents</h4>
      <nav>
        <ul className="space-y-2">
          {headings.map((h) => (
            <li key={h.id}>
              <a
                href={`#${h.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(h.id)?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`text-sm transition-colors block ${
                  h.level === 3 ? "pl-4" : ""
                } ${
                  activeId === h.id
                    ? "text-primary font-medium"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {h.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </Card>
  );
}

function ShareButtons({ title, slug }: { title: string; slug: string }) {
  const [copied, setCopied] = useState(false);
  const url = `https://houseofdevelopers.co.uk/blog/${slug}`;

  function copyLink() {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const shares = [
    {
      icon: Twitter,
      label: "Share on Twitter",
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    },
    {
      icon: Linkedin,
      label: "Share on LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    },
    {
      icon: Facebook,
      label: "Share on Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    },
  ];

  return (
    <Card className="p-6">
      <h4 className="font-semibold mb-3">Share this article</h4>
      <div className="flex flex-col gap-3">
        {shares.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-3 border rounded-lg hover:bg-muted transition-colors text-sm"
          >
            <s.icon size={18} />
            {s.label}
          </a>
        ))}
        <button
          onClick={copyLink}
          className="flex items-center gap-3 px-4 py-3 border rounded-lg hover:bg-muted transition-colors text-sm text-left"
        >
          {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
          {copied ? "Copied!" : "Copy Link"}
        </button>
      </div>
    </Card>
  );
}

function RelatedPosts({ post }: { post: BlogPost }) {
  const related = useMemo(() => getRelatedPosts(post, 3), [post]);

  if (related.length === 0) return null;

  const gradients = [
    "from-blue-600 to-cyan-500",
    "from-purple-600 to-violet-500",
    "from-green-600 to-emerald-500",
  ];

  return (
    <Card className="p-6">
      <h4 className="font-semibold mb-4">Related Articles</h4>
      <div className="space-y-4">
        {related.map((r, i) => (
          <Link key={r.id} href={`/blog/${r.slug}`}>
            <div className="cursor-pointer group">
              <div className={`w-full aspect-video rounded-lg bg-gradient-to-br ${gradients[i % gradients.length]} flex items-center justify-center mb-2`}>
                <span className="text-white/20 text-3xl font-bold">{r.title.charAt(0)}</span>
              </div>
              <h5 className="text-sm font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                {r.title}
              </h5>
              <p className="text-xs text-muted-foreground mt-1">
                {r.readingTime} min read
              </p>
            </div>
          </Link>
        ))}
      </div>
    </Card>
  );
}

export default function BlogPostPage() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug || "";
  const post = useMemo(() => getPostBySlug(slug), [slug]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-6">The article you're looking for doesn't exist.</p>
          <Link href="/blog">
            <Button>
              <ArrowLeft size={16} className="mr-2" /> Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="py-16 md:py-20"
      >
        <div className="max-w-4xl mx-auto px-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: post.category, href: "/blog" },
              { label: post.title },
            ]}
          />

          <Badge className="bg-primary/10 text-primary mt-6 mb-4">{post.category}</Badge>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                {post.author.name.charAt(0)}
              </div>
              <span className="font-medium text-foreground">{post.author.name}</span>
            </div>
            <span className="flex items-center gap-1">
              <Calendar size={16} />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={16} />
              {post.readingTime} min read
            </span>
          </div>

          <div className={`aspect-video rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-12`}>
            <span className="text-primary/10 text-[120px] font-bold select-none">
              {post.title.charAt(0)}
            </span>
          </div>
        </div>
      </motion.section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <div className="lg:hidden mb-8">
                <TableOfContents content={post.content} />
              </div>

              <article
                className="prose prose-lg max-w-none dark:prose-invert
                  prose-headings:font-bold prose-headings:tracking-tight
                  prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
                  prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                  prose-p:text-base prose-p:leading-relaxed prose-p:mb-6
                  prose-li:mb-2
                  prose-pre:bg-muted prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto
                  prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
                  prose-img:rounded-lg prose-img:my-8
                  prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                  prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:not-italic prose-blockquote:font-medium
                  prose-strong:font-semibold
                  prose-ul:mb-6 prose-ol:mb-6"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              <div className="mt-12 pt-8 border-t">
                <div className="flex items-center gap-2 mb-3">
                  <Tag size={16} className="text-muted-foreground" />
                  <span className="text-sm font-semibold">Tags</span>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="rounded-full">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="mt-16 bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 md:p-12 text-center">
                <Rocket className="text-white mx-auto mb-4" size={48} />
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Need Help With Your Project?
                </h3>
                <p className="text-white/80 mb-6 max-w-xl mx-auto">
                  We build custom software solutions. Let's discuss your project.
                </p>
                <Link href="/contact">
                  <Button className="bg-white text-primary hover:bg-white/90 h-12 px-8 font-semibold">
                    Get Free Consultation
                  </Button>
                </Link>
              </div>
            </div>

            <aside className="lg:col-span-4">
              <div className="sticky top-24 space-y-8">
                <div className="hidden lg:block">
                  <TableOfContents content={post.content} />
                </div>

                <Card className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl font-bold mx-auto mb-3">
                    {post.author.name.charAt(0)}
                  </div>
                  <p className="font-semibold">{post.author.name}</p>
                  <p className="text-sm text-muted-foreground">Author</p>
                </Card>

                <ShareButtons title={post.title} slug={post.slug} />

                <RelatedPosts post={post} />
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
