import { Link } from "wouter";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { type BlogPost, formatDate } from "@/lib/blog-data";

const gradients = [
  "from-blue-600 to-cyan-500",
  "from-purple-600 to-violet-500",
  "from-green-600 to-emerald-500",
  "from-orange-500 to-red-500",
  "from-pink-500 to-rose-500",
  "from-indigo-600 to-blue-500",
  "from-teal-500 to-cyan-500",
  "from-amber-500 to-orange-500",
];

export function BlogCard({ post, index = 0 }: { post: BlogPost; index?: number }) {
  const gradient = gradients[post.id % gradients.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
    >
      <Link href={`/blog/${post.slug}`}>
        <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer h-full flex flex-col">
          <div className={`aspect-video relative bg-gradient-to-br ${gradient} flex items-center justify-center`}>
            <div className="text-white/20 text-6xl font-bold select-none">
              {post.title.charAt(0)}
            </div>
            <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground text-xs font-semibold">
              {post.category}
            </Badge>
          </div>

          <div className="p-6 flex flex-col flex-1">
            <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
              <span className="flex items-center gap-1">
                <Calendar size={14} />
                {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={14} />
                {post.readingTime} min read
              </span>
            </div>

            <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
              {post.title}
            </h3>

            <p className="text-sm text-muted-foreground line-clamp-3 flex-1">
              {post.excerpt}
            </p>

            <div className="flex items-center justify-between mt-4 pt-4 border-t">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">
                  {post.author.name.charAt(0)}
                </div>
                <span className="text-sm font-medium">{post.author.name}</span>
              </div>
              <span className="text-sm font-semibold text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                Read More <ArrowRight size={14} />
              </span>
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}
