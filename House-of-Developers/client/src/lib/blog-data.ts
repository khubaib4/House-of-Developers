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
  tags: string[];
  readingTime: number;
}

export function calculateReadingTime(content: string): number {
  const text = content.replace(/<[^>]*>/g, "");
  const words = text.split(/\s+/).length;
  return Math.ceil(words / 200);
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").trim();
}

const POSTS: BlogPost[] = [
  {
    id: 1,
    slug: "react-server-components-2026-guide",
    title: "React Server Components: The Complete 2026 Guide",
    excerpt: "Server Components have fundamentally changed how we build React apps. Learn the patterns, pitfalls, and best practices for building faster applications with RSC.",
    content: `<h2 id="what-are-server-components">What Are Server Components?</h2>
<p>React Server Components (RSC) represent a paradigm shift in how we think about React applications. Unlike traditional client components that run in the browser, Server Components execute on the server and send only the rendered HTML to the client.</p>
<p>This means zero JavaScript is shipped for these components, resulting in significantly smaller bundle sizes and faster page loads. For content-heavy pages like blogs, documentation, and marketing sites, this is transformative.</p>

<h2 id="server-vs-client-components">Server vs Client Components</h2>
<p>Understanding the distinction between Server and Client Components is crucial for building efficient applications. Here's the key difference:</p>
<p><strong>Server Components</strong> run only on the server. They can directly access databases, file systems, and server-only APIs. They cannot use hooks like useState or useEffect, and they cannot handle user interactions.</p>
<p><strong>Client Components</strong> run in the browser (and optionally on the server for SSR). They can use all React hooks, handle events, and manage interactive state. Mark them with the "use client" directive.</p>

<h3 id="when-to-use-which">When to Use Which?</h3>
<p>Use Server Components for static content, data fetching, and layouts. Use Client Components for interactive elements like forms, modals, and dynamic UI. The golden rule: keep Client Components as small and as leaf-level as possible.</p>

<h2 id="data-fetching-patterns">Data Fetching Patterns</h2>
<p>One of the biggest advantages of Server Components is simplified data fetching. Instead of useEffect + useState patterns or complex state management, you can simply await your data:</p>
<pre><code>async function ProductList() {
  const products = await db.products.findMany();
  return (
    &lt;div&gt;
      {products.map(p =&gt; &lt;ProductCard key={p.id} product={p} /&gt;)}
    &lt;/div&gt;
  );
}</code></pre>
<p>This pattern eliminates loading states, reduces client-side JavaScript, and simplifies your component logic dramatically.</p>

<h2 id="streaming-and-suspense">Streaming and Suspense</h2>
<p>Server Components work beautifully with React Suspense for streaming. You can wrap slow-loading components in Suspense boundaries to show fallback UI while the data loads on the server:</p>
<pre><code>&lt;Suspense fallback={&lt;ProductSkeleton /&gt;}&gt;
  &lt;ProductList /&gt;
&lt;/Suspense&gt;</code></pre>
<p>The server streams the HTML progressively, so users see content as soon as it's ready rather than waiting for the entire page to load.</p>

<h2 id="common-pitfalls">Common Pitfalls to Avoid</h2>
<p>When working with Server Components, watch out for these common mistakes:</p>
<ul>
<li><strong>Importing client-only libraries in Server Components</strong> — Libraries that use browser APIs will fail on the server</li>
<li><strong>Over-using "use client"</strong> — Don't mark entire pages as client components; extract only the interactive parts</li>
<li><strong>Passing non-serializable props</strong> — Server Components can only pass serializable data to Client Components</li>
<li><strong>Ignoring caching</strong> — Use React's cache() and Next.js revalidation to avoid redundant data fetching</li>
</ul>

<h2 id="performance-benefits">Performance Benefits</h2>
<p>The performance gains from Server Components are substantial. In our testing across multiple client projects, we've seen:</p>
<ul>
<li>40-60% reduction in client-side JavaScript bundle size</li>
<li>30-50% improvement in Largest Contentful Paint (LCP)</li>
<li>Significant improvement in Time to Interactive (TTI)</li>
<li>Better Core Web Vitals scores across the board</li>
</ul>

<h2 id="getting-started">Getting Started</h2>
<p>Ready to adopt Server Components? Start by auditing your existing components. Identify which ones don't need interactivity — those are prime candidates for conversion. The migration is incremental, so you can adopt RSC gradually without rewriting your entire application.</p>
<blockquote><p>The best architecture is one where Server Components handle data and rendering, while Client Components handle interaction. Keep the boundary clear and intentional.</p></blockquote>`,
    date: "2026-02-15",
    category: "React",
    categorySlug: "react",
    author: { name: "Khubaib Ahmed", avatar: "" },
    featuredImage: null,
    tags: ["React", "Server Components", "Performance", "Next.js"],
    readingTime: 8,
  },
  {
    id: 2,
    slug: "building-ai-chatbots-with-openai-langchain",
    title: "Building AI Chatbots with OpenAI & LangChain: A Practical Guide",
    excerpt: "Learn how to build production-ready AI chatbots using OpenAI's GPT models and LangChain. From RAG pipelines to conversation memory — a step-by-step guide.",
    content: `<h2 id="why-build-an-ai-chatbot">Why Build an AI Chatbot?</h2>
<p>AI chatbots have evolved from simple FAQ bots to sophisticated conversational agents that can understand context, access custom knowledge bases, and perform complex tasks. For businesses, they represent a powerful way to scale customer support, automate workflows, and deliver personalized experiences.</p>

<h2 id="choosing-your-stack">Choosing Your Stack</h2>
<p>For production AI chatbots, we recommend the following stack:</p>
<ul>
<li><strong>OpenAI GPT-4o</strong> — The backbone language model for understanding and generating responses</li>
<li><strong>LangChain</strong> — Framework for building LLM applications with chains, agents, and tools</li>
<li><strong>Pinecone or Weaviate</strong> — Vector database for storing and searching embeddings</li>
<li><strong>Node.js or Python</strong> — Backend runtime for your chatbot server</li>
</ul>

<h2 id="rag-pipeline">Building a RAG Pipeline</h2>
<p>Retrieval-Augmented Generation (RAG) is the key to making your chatbot knowledgeable about your specific business. Instead of relying solely on the LLM's training data, RAG retrieves relevant documents from your knowledge base and includes them in the prompt.</p>
<p>The process works like this: user asks a question → embed the question → search vector database for similar documents → include top results in the prompt → generate response with context.</p>

<h3 id="document-processing">Document Processing</h3>
<p>Start by processing your knowledge base. Split documents into chunks of 500-1000 tokens, create embeddings using OpenAI's text-embedding-3-small model, and store them in your vector database. LangChain provides excellent document loaders for PDFs, web pages, and databases.</p>

<h2 id="conversation-memory">Adding Conversation Memory</h2>
<p>A good chatbot remembers context within a conversation. LangChain offers several memory types: BufferMemory for simple conversations, ConversationSummaryMemory for long chats, and WindowMemory for keeping the last N exchanges.</p>

<h2 id="deployment">Deployment Considerations</h2>
<p>When deploying your chatbot, consider rate limiting, cost management (set token limits per conversation), error handling for API failures, and streaming responses for better UX. Use WebSocket or Server-Sent Events for real-time streaming.</p>

<h2 id="best-practices">Best Practices</h2>
<ul>
<li>Always set system prompts that define your chatbot's personality and boundaries</li>
<li>Implement fallback responses for when the AI is uncertain</li>
<li>Log conversations for quality improvement (with user consent)</li>
<li>Use guardrails to prevent off-topic or harmful responses</li>
<li>Test extensively with real user scenarios before launch</li>
</ul>`,
    date: "2026-02-10",
    category: "AI",
    categorySlug: "ai",
    author: { name: "Khubaib Ahmed", avatar: "" },
    featuredImage: null,
    tags: ["AI", "OpenAI", "LangChain", "Chatbots", "RAG"],
    readingTime: 7,
  },
  {
    id: 3,
    slug: "nextjs-vs-remix-2026-comparison",
    title: "Next.js vs Remix in 2026: Which Framework Should You Choose?",
    excerpt: "A detailed comparison of Next.js and Remix for building modern web applications. Performance benchmarks, developer experience, and real-world use cases.",
    content: `<h2 id="the-framework-landscape">The Framework Landscape in 2026</h2>
<p>The React meta-framework space has matured significantly. Next.js and Remix remain the two leading options, each with distinct philosophies and strengths. Choosing between them depends on your project's specific needs.</p>

<h2 id="nextjs-strengths">Next.js Strengths</h2>
<p>Next.js continues to lead in adoption and ecosystem. Its key advantages include:</p>
<ul>
<li>Server Components with the App Router for optimal performance</li>
<li>Massive ecosystem and community support</li>
<li>Vercel's deployment platform with edge functions</li>
<li>Built-in image optimization and font loading</li>
<li>Incremental Static Regeneration for dynamic content at scale</li>
</ul>

<h2 id="remix-strengths">Remix Strengths</h2>
<p>Remix takes a web-standards-first approach that many developers love:</p>
<ul>
<li>Progressive enhancement by default</li>
<li>Excellent form handling with actions and loaders</li>
<li>Better error boundaries and nested routing</li>
<li>Works without JavaScript (forms still submit)</li>
<li>Simpler mental model — closer to traditional web development</li>
</ul>

<h2 id="performance-comparison">Performance Comparison</h2>
<p>In our benchmarks across similar applications, Next.js with Server Components edges ahead on initial page load for content-heavy sites, while Remix excels at form-heavy interactive applications. Both frameworks deliver excellent Core Web Vitals when properly configured.</p>

<h2 id="developer-experience">Developer Experience</h2>
<p>Next.js has more learning surface area due to its many features, but its documentation is excellent. Remix has a smaller API surface and feels more intuitive for developers coming from traditional server-rendered frameworks.</p>

<h2 id="our-recommendation">Our Recommendation</h2>
<p>Choose Next.js for content-heavy sites, e-commerce, and projects where Vercel hosting is an option. Choose Remix for form-heavy applications, projects requiring progressive enhancement, and teams that prefer web-standards-first development.</p>
<blockquote><p>The best framework is the one your team is most productive with. Both are excellent choices in 2026.</p></blockquote>`,
    date: "2026-02-05",
    category: "React",
    categorySlug: "react",
    author: { name: "Khubaib Ahmed", avatar: "" },
    featuredImage: null,
    tags: ["Next.js", "Remix", "React", "Frameworks"],
    readingTime: 6,
  },
  {
    id: 4,
    slug: "seo-for-developers-complete-guide",
    title: "SEO for Developers: The Complete Technical Guide",
    excerpt: "Everything developers need to know about technical SEO. From Core Web Vitals to structured data, crawl budget to rendering — the engineering side of search rankings.",
    content: `<h2 id="why-developers-need-seo">Why Developers Need to Understand SEO</h2>
<p>SEO isn't just a marketing concern — many of the most impactful SEO improvements are technical. As a developer, understanding technical SEO means building websites that both users and search engines love.</p>

<h2 id="core-web-vitals">Core Web Vitals</h2>
<p>Google uses three Core Web Vitals as ranking factors:</p>
<ul>
<li><strong>LCP (Largest Contentful Paint)</strong> — Should be under 2.5 seconds. Optimize images, fonts, and server response times.</li>
<li><strong>INP (Interaction to Next Paint)</strong> — Should be under 200ms. Minimize JavaScript execution and long tasks.</li>
<li><strong>CLS (Cumulative Layout Shift)</strong> — Should be under 0.1. Set explicit dimensions on images and avoid dynamic content injection.</li>
</ul>

<h2 id="structured-data">Structured Data (Schema.org)</h2>
<p>Structured data helps search engines understand your content. Implement JSON-LD schema for articles, products, FAQs, breadcrumbs, and organization info. This enables rich snippets in search results.</p>

<h3 id="essential-schemas">Essential Schemas</h3>
<p>Every website should have Organization schema on the homepage, BreadcrumbList on all pages, and content-specific schema (Article, Product, FAQ, etc.) where applicable.</p>

<h2 id="rendering-strategies">Rendering and SEO</h2>
<p>Search engines can render JavaScript, but SSR and SSG are still preferred for SEO. Server-rendered pages get indexed faster and more reliably. If using client-side rendering, ensure important content is in the initial HTML.</p>

<h2 id="crawl-optimization">Crawl Budget Optimization</h2>
<p>For large sites, manage your crawl budget wisely. Use robots.txt to block non-essential pages, submit XML sitemaps, set canonical URLs to avoid duplicate content, and use internal linking to guide crawlers to important pages.</p>

<h2 id="meta-tags">Essential Meta Tags</h2>
<p>Every page needs a unique title tag (50-60 characters), meta description (150-160 characters), canonical URL, Open Graph tags for social sharing, and proper heading hierarchy (single H1, logical H2/H3 structure).</p>

<h2 id="performance-checklist">Performance Checklist for SEO</h2>
<ul>
<li>Compress and serve next-gen images (WebP, AVIF)</li>
<li>Implement lazy loading for below-fold images</li>
<li>Minify CSS and JavaScript</li>
<li>Use CDN for static assets</li>
<li>Enable HTTP/2 or HTTP/3</li>
<li>Implement proper caching headers</li>
<li>Preload critical resources</li>
</ul>`,
    date: "2026-01-28",
    category: "SEO",
    categorySlug: "seo",
    author: { name: "Khubaib Ahmed", avatar: "" },
    featuredImage: null,
    tags: ["SEO", "Performance", "Core Web Vitals", "Technical SEO"],
    readingTime: 7,
  },
  {
    id: 5,
    slug: "node-js-api-best-practices-2026",
    title: "Node.js API Best Practices You Should Follow in 2026",
    excerpt: "Build robust, scalable, and secure Node.js APIs. Covers architecture patterns, error handling, validation, authentication, rate limiting, and monitoring.",
    content: `<h2 id="api-architecture">API Architecture Patterns</h2>
<p>A well-structured API starts with good architecture. We recommend a layered architecture: Routes → Controllers → Services → Repositories. This separation of concerns makes your code testable, maintainable, and scalable.</p>

<h2 id="input-validation">Input Validation with Zod</h2>
<p>Never trust client input. Use Zod for runtime type validation on every endpoint. Define schemas for request bodies, query parameters, and URL parameters. Validate early and return clear error messages.</p>

<h2 id="error-handling">Centralized Error Handling</h2>
<p>Create custom error classes (NotFoundError, ValidationError, AuthenticationError) and a global error handler middleware. Map errors to appropriate HTTP status codes and never expose stack traces in production.</p>

<h2 id="authentication">Authentication & Authorization</h2>
<p>Use JWT tokens with short expiry (15 minutes) and refresh tokens for session management. Implement role-based access control (RBAC) at the middleware level. Always hash passwords with bcrypt or Argon2.</p>

<h2 id="rate-limiting">Rate Limiting & Security</h2>
<p>Implement rate limiting per IP and per user. Use helmet for security headers, CORS for cross-origin control, and input sanitization to prevent XSS and SQL injection. Always use HTTPS in production.</p>

<h2 id="monitoring">Logging & Monitoring</h2>
<p>Use structured logging (Winston or Pino) with correlation IDs for request tracing. Monitor API health with uptime checks, response time tracking, and error rate alerting. Tools like Datadog, New Relic, or open-source alternatives work well.</p>

<h2 id="database-best-practices">Database Best Practices</h2>
<ul>
<li>Use an ORM (Prisma, Drizzle) for type safety and migration management</li>
<li>Implement connection pooling for production</li>
<li>Use database transactions for multi-step operations</li>
<li>Index frequently queried columns</li>
<li>Implement pagination for list endpoints</li>
</ul>`,
    date: "2026-01-20",
    category: "Node.js",
    categorySlug: "nodejs",
    author: { name: "Khubaib Ahmed", avatar: "" },
    featuredImage: null,
    tags: ["Node.js", "API", "Backend", "Security"],
    readingTime: 6,
  },
  {
    id: 6,
    slug: "shopify-headless-commerce-guide",
    title: "Going Headless with Shopify: A Developer's Guide",
    excerpt: "Build blazing-fast e-commerce experiences using Shopify's Storefront API. Custom frontends with React, performance optimization, and checkout integration.",
    content: `<h2 id="what-is-headless-shopify">What is Headless Shopify?</h2>
<p>Headless Shopify separates the frontend presentation from Shopify's backend. You use Shopify as a commerce engine (products, inventory, checkout, payments) while building a completely custom frontend with React, Next.js, or any framework.</p>

<h2 id="storefront-api">The Storefront API</h2>
<p>Shopify's Storefront API is a GraphQL API that gives you access to products, collections, carts, and checkout. It's designed for public-facing applications and supports both authenticated and unauthenticated access.</p>

<h2 id="performance-gains">Performance Gains</h2>
<p>Headless Shopify stores are significantly faster than traditional Liquid themes. In our projects, we've seen LCP improvements of 50-70% and First Contentful Paint under 1 second. This directly impacts conversion rates — every 100ms of improvement can increase conversions by 1%.</p>

<h2 id="building-the-frontend">Building Your Custom Frontend</h2>
<p>We recommend Next.js with the App Router for headless Shopify. Use Server Components for product pages (static or ISR), Client Components for cart interactions, and Shopify's cart API for session management.</p>

<h2 id="checkout-integration">Checkout Integration</h2>
<p>Shopify handles checkout for you — this is actually a major advantage. Create a cart with the Storefront API, then redirect to Shopify's hosted checkout. For Shopify Plus merchants, you can customize the checkout experience with Checkout Extensions.</p>

<h2 id="when-to-go-headless">When Should You Go Headless?</h2>
<p>Go headless when you need complete design freedom, maximum performance, multi-channel selling, or complex custom functionality. Stick with Liquid themes for simpler stores where time-to-market is the priority.</p>`,
    date: "2026-01-15",
    category: "Shopify",
    categorySlug: "shopify",
    author: { name: "Khubaib Ahmed", avatar: "" },
    featuredImage: null,
    tags: ["Shopify", "Headless", "E-Commerce", "React"],
    readingTime: 5,
  },
  {
    id: 7,
    slug: "typescript-advanced-patterns-2026",
    title: "Advanced TypeScript Patterns Every Developer Should Know",
    excerpt: "Master TypeScript with advanced patterns: discriminated unions, branded types, template literals, conditional types, and type-safe API design.",
    content: `<h2 id="beyond-basics">Beyond the Basics</h2>
<p>TypeScript's type system is incredibly powerful, but most developers only scratch the surface. These advanced patterns will help you write safer, more expressive code.</p>

<h2 id="discriminated-unions">Discriminated Unions</h2>
<p>Discriminated unions are essential for modeling states. Instead of using optional fields and null checks, create explicit type variants with a common discriminant property.</p>

<h2 id="branded-types">Branded Types</h2>
<p>Branded types prevent mixing up values that share the same primitive type. Create distinct types for UserId, OrderId, and Email — the compiler will catch mix-ups at build time.</p>

<h2 id="template-literal-types">Template Literal Types</h2>
<p>Template literal types let you create complex string types. Build type-safe route paths, event names, and CSS property values that the compiler can verify.</p>

<h2 id="conditional-types">Conditional Types</h2>
<p>Conditional types enable type-level programming. Use them to create utility types that transform other types based on conditions — like extracting async return types or filtering union members.</p>

<h2 id="type-safe-apis">Type-Safe API Design</h2>
<p>Combine these patterns to build APIs where the types guide correct usage. When the types are right, wrong usage becomes a compile error, not a runtime bug.</p>`,
    date: "2026-01-10",
    category: "TypeScript",
    categorySlug: "typescript",
    author: { name: "Khubaib Ahmed", avatar: "" },
    featuredImage: null,
    tags: ["TypeScript", "Patterns", "Advanced", "Type Safety"],
    readingTime: 6,
  },
  {
    id: 8,
    slug: "wordpress-performance-optimization-guide",
    title: "WordPress Performance Optimization: From 8s to Under 2s",
    excerpt: "A hands-on guide to making WordPress sites blazing fast. Image optimization, caching, database cleanup, CDN setup, and Core Web Vitals improvements.",
    content: `<h2 id="the-speed-problem">The WordPress Speed Problem</h2>
<p>WordPress powers 43% of the web, but many WordPress sites are painfully slow. Bloated themes, too many plugins, unoptimized images, and poor hosting are the usual culprits. The good news: with the right optimizations, WordPress can be incredibly fast.</p>

<h2 id="image-optimization">Image Optimization</h2>
<p>Images are typically the biggest performance bottleneck. Convert to WebP format, implement lazy loading, serve responsive images with srcset, and use a CDN. Tools like ShortPixel or Imagify can automate this process.</p>

<h2 id="caching-strategy">Caching Strategy</h2>
<p>Implement page caching (WP Rocket or W3 Total Cache), browser caching via .htaccess, object caching with Redis or Memcached, and CDN caching with Cloudflare. A proper caching strategy can reduce server load by 90%.</p>

<h2 id="database-cleanup">Database Cleanup</h2>
<p>WordPress databases accumulate cruft over time. Clean up post revisions, transients, spam comments, and auto-drafts. Optimize database tables and consider using a persistent object cache.</p>

<h2 id="plugin-audit">Plugin Audit</h2>
<p>Every plugin adds overhead. Audit your plugins: deactivate and delete unused ones, replace heavy plugins with lightweight alternatives, and load plugin assets only on pages where they're needed.</p>

<h2 id="hosting-matters">Hosting Matters</h2>
<p>Cheap shared hosting is the #1 reason WordPress sites are slow. Invest in managed WordPress hosting (WP Engine, Kinsta, SiteGround) for dramatically better performance, security, and support.</p>`,
    date: "2026-01-05",
    category: "WordPress",
    categorySlug: "wordpress",
    author: { name: "Khubaib Ahmed", avatar: "" },
    featuredImage: null,
    tags: ["WordPress", "Performance", "Optimization", "Speed"],
    readingTime: 6,
  },
  {
    id: 9,
    slug: "mobile-app-development-react-native-vs-flutter",
    title: "React Native vs Flutter: Choosing the Right Mobile Framework",
    excerpt: "An honest comparison of React Native and Flutter for mobile app development. Performance, developer experience, ecosystem, and when to use each.",
    content: `<h2 id="the-cross-platform-debate">The Cross-Platform Debate</h2>
<p>Building separate iOS and Android apps is expensive. Cross-platform frameworks let you share code across platforms, reducing development time and cost by 40-60%. But which framework should you choose?</p>

<h2 id="react-native-overview">React Native</h2>
<p>React Native uses JavaScript/TypeScript and React patterns. If your team knows React, they can build mobile apps quickly. It bridges to native components, giving good native look and feel.</p>

<h2 id="flutter-overview">Flutter</h2>
<p>Flutter uses Dart and its own rendering engine. It draws every pixel, giving you complete control over the UI. Performance is excellent because there's no JavaScript bridge.</p>

<h2 id="performance-comparison">Performance</h2>
<p>Flutter has a slight edge in raw performance due to its compiled nature and custom rendering. React Native has improved significantly with the new architecture (Fabric + TurboModules). For most apps, both deliver acceptable performance.</p>

<h2 id="developer-experience">Developer Experience</h2>
<p>React Native wins if your team knows JavaScript. Flutter wins for UI consistency across platforms. Both have excellent hot reload and good tooling.</p>

<h2 id="our-recommendation">Our Recommendation</h2>
<p>Choose React Native if you have a React web team and want to share knowledge. Choose Flutter if you're starting fresh and want the best UI consistency. For simple apps, either works great.</p>`,
    date: "2025-12-28",
    category: "Mobile",
    categorySlug: "mobile",
    author: { name: "Khubaib Ahmed", avatar: "" },
    featuredImage: null,
    tags: ["React Native", "Flutter", "Mobile", "Cross-Platform"],
    readingTime: 5,
  },
];

const CATEGORIES = [
  { name: "All Posts", slug: "all" },
  { name: "React", slug: "react" },
  { name: "AI", slug: "ai" },
  { name: "Node.js", slug: "nodejs" },
  { name: "SEO", slug: "seo" },
  { name: "TypeScript", slug: "typescript" },
  { name: "Shopify", slug: "shopify" },
  { name: "WordPress", slug: "wordpress" },
  { name: "Mobile", slug: "mobile" },
];

export function getCategories() {
  return CATEGORIES;
}

export function getPosts(params?: {
  page?: number;
  perPage?: number;
  category?: string;
  search?: string;
}): { posts: BlogPost[]; totalPages: number } {
  let filtered = [...POSTS];

  if (params?.category && params.category !== "all") {
    filtered = filtered.filter((p) => p.categorySlug === params.category);
  }

  if (params?.search) {
    const q = params.search.toLowerCase();
    filtered = filtered.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
    );
  }

  const perPage = params?.perPage || 9;
  const page = params?.page || 1;
  const start = (page - 1) * perPage;
  const paged = filtered.slice(start, start + perPage);
  const totalPages = Math.ceil(filtered.length / perPage);

  return { posts: paged, totalPages };
}

export function getPostBySlug(slug: string): BlogPost | null {
  return POSTS.find((p) => p.slug === slug) || null;
}

export function getRelatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  return POSTS.filter(
    (p) => p.id !== post.id && p.categorySlug === post.categorySlug
  ).slice(0, limit);
}
