import { useState } from "react";
import { motion } from "framer-motion";
import { SEO } from "@/components/SEO";
import { Search, FileText, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BlogCard } from "@/components/blog/BlogCard";
import { useQuery } from "@tanstack/react-query";
import { fetchPosts, fetchCategories, type WPCategory } from "@/lib/wordpress-api";

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<WPCategory | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTimeout, setSearchTimeout] = useState<ReturnType<typeof setTimeout> | null>(null);

  const { data: categories = [] } = useQuery({
    queryKey: ["wp-categories"],
    queryFn: fetchCategories,
    staleTime: 5 * 60 * 1000,
  });

  const { data, isLoading } = useQuery({
    queryKey: ["wp-posts", currentPage, selectedCategory?.id, debouncedSearch],
    queryFn: () =>
      fetchPosts({
        page: currentPage,
        perPage: 9,
        category: selectedCategory?.id,
        search: debouncedSearch || undefined,
      }),
    staleTime: 2 * 60 * 1000,
  });

  const posts = data?.posts || [];
  const totalPages = data?.totalPages || 1;

  function handleCategoryChange(cat: WPCategory | null) {
    setSelectedCategory(cat);
    setCurrentPage(1);
  }

  function handleSearch(value: string) {
    setSearchQuery(value);
    if (searchTimeout) clearTimeout(searchTimeout);
    const timeout = setTimeout(() => {
      setDebouncedSearch(value);
      setCurrentPage(1);
    }, 400);
    setSearchTimeout(timeout);
  }

  return (
    <div className="min-h-screen">
      <SEO
        title="Tech Blog | Web Development Guides & Tutorials"
        description="Tech tutorials and development guides. Learn React, Node.js, WordPress, AI integration, and SEO. Written by experienced developers for developers."
        canonical="/blog"
      />
      <section className="py-20 md:py-24 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <Badge variant="secondary" className="mb-4 px-3 py-1.5 rounded-full">
            Blog
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Tech Guides & Tutorials
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Web development tutorials, coding guides, and tech insights. Learn how to build better software.
          </p>
        </div>
      </section>

      <section className="py-6 bg-muted border-b sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <Input
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-1">
              <button
                onClick={() => handleCategoryChange(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  !selectedCategory
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border hover:bg-accent"
                }`}
              >
                All Posts
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                    selectedCategory?.id === cat.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-card border hover:bg-accent"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          {isLoading ? (
            <div className="py-20 flex flex-col items-center justify-center">
              <Loader2 size={48} className="animate-spin text-primary mb-4" />
              <p className="text-muted-foreground">Loading articles...</p>
            </div>
          ) : posts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post, i) => (
                  <BlogCard key={post.id} post={post} index={i} />
                ))}
              </div>

              {totalPages > 1 && (
                <div className="mt-12 flex justify-center items-center gap-4">
                  <Button
                    variant="outline"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((p) => p - 1)}
                  >
                    Previous
                  </Button>
                  <span className="text-sm text-muted-foreground">
                    Page {currentPage} of {totalPages}
                  </span>
                  <Button
                    variant="outline"
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage((p) => p + 1)}
                  >
                    Next
                  </Button>
                </div>
              )}
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-20 text-center"
            >
              <FileText size={64} className="mx-auto text-muted-foreground/30 mb-4" />
              <h3 className="text-xl font-bold mb-2">No articles found</h3>
              <p className="text-muted-foreground mb-6">Try adjusting your search or filters</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("");
                  setDebouncedSearch("");
                  setSelectedCategory(null);
                  setCurrentPage(1);
                }}
              >
                Clear Filters
              </Button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
