import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowRight } from "lucide-react";
import { calculateReadingTime, findRelatedPostsFromList, getFeaturedImage } from "@/lib/blog-utils";
import type { RelatedCandidatePost } from "@/lib/blog-utils";
import { supabase } from "@/lib/supabase";
import blogPostsData from "@/data/blog-posts.json";

interface RelatedPostsProps {
  currentPostSlug: string;
}

export default async function RelatedPosts({ currentPostSlug }: RelatedPostsProps) {
  // Build candidate list from Supabase (source of truth) + JSON (fallback)
  let dbPosts: RelatedCandidatePost[] = [];
  try {
    const { data, error } = await supabase
      .from("posts")
      .select("id,slug,title,excerpt,content,date,post_status,featured_image")
      .eq("post_status", "publish")
      .order("date", { ascending: false });

    if (!error && data) {
      dbPosts = (data as any[]).map((p) => ({
        id: p.id,
        slug: p.slug,
        title: p.title,
        excerpt: p.excerpt,
        content: p.content,
        date: p.date,
        postStatus: p.post_status,
        featured_image: p.featured_image,
      }));
    }
  } catch {
    // ignore and fall back to JSON-only
  }

  const jsonPosts: RelatedCandidatePost[] = blogPostsData
    .filter((p) => p.slug && p.postStatus === "publish")
    .map((p) => ({
      id: p.id,
      slug: p.slug,
      title: p.title,
      excerpt: p.excerpt,
      content: p.content,
      date: p.date,
      postStatus: p.postStatus,
    }));

  // Merge by slug (DB wins)
  const bySlug = new Map<string, RelatedCandidatePost>();
  for (const p of jsonPosts) bySlug.set(p.slug, p);
  for (const p of dbPosts) bySlug.set(p.slug, p);

  const relatedPosts = findRelatedPostsFromList(Array.from(bySlug.values()), currentPostSlug, 4);

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <section className="mt-16 pt-12 border-t border-gray-200">
      <h2 className="text-3xl font-bold text-primary font-serif mb-8">
        Related Posts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {relatedPosts.map((post) => {
          const featuredImage = getFeaturedImage(post);
          const readingTime = calculateReadingTime(post.content);
          const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          });

          return (
            <article
              key={post.id}
              className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
            >
              {featuredImage && (
                <div className="relative h-48 w-full">
                  <Image
                    src={featuredImage}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                    quality={85}
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar size={14} aria-hidden="true" />
                    <time dateTime={post.date}>{formattedDate}</time>
                  </div>
                  <span>•</span>
                  <span>{readingTime} min read</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-primary transition-colors">
                  <Link href={`/story/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                  {post.excerpt || post.content.substring(0, 120).replace(/<[^>]*>/g, "") + "..."}
                </p>
                <Link
                  href={`/story/blog/${post.slug}`}
                  className="inline-flex items-center space-x-2 text-primary hover:text-secondary font-semibold text-sm transition-colors"
                  aria-label={`Read ${post.title}`}
                >
                  <span>Read More</span>
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

