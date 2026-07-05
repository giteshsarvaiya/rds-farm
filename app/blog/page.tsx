import Image from "next/image";
import Link from "next/link";
import { client, urlFor } from "@/lib/sanity";
import { blogPostsQuery } from "@/lib/queries";

export const revalidate = 3600;

export const metadata = {
  title: "Blog | RD's Venues",
  description:
    "Tips, guides, and inspiration for weddings, events, and stays at RD's Venues in Ahmedabad.",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPage() {
  const rawPosts = await client.fetch(blogPostsQuery);
  const posts = (rawPosts ?? []).map((p: any) => ({
    _id: p._id,
    slug: p.slug,
    title: p.title,
    excerpt: p.seoDescription ?? "",
    coverImage: p.coverImage
      ? urlFor(p.coverImage).width(800).quality(80).url()
      : "https://images.unsplash.com/photo-1455587734955-081b22074882?w=800&q=80",
    publishedAt: p.publishedAt ? formatDate(p.publishedAt) : "",
    category: p.category ?? "",
    readTime: p.readTime ?? "",
  }));

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] w-full">
        <Image
          src="https://images.unsplash.com/photo-1455587734955-081b22074882?w=1920&q=80"
          alt="Blog"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <p className="text-[#B8976A] uppercase tracking-[0.2em] text-sm mb-4 font-inter">
            Stories & Insights
          </p>
          <h1
            className="font-playfair italic text-[#F5EFE4]"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Our Blog
          </h1>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="bg-[#F5EFE4] py-24 px-4">
        <div className="max-w-6xl mx-auto">
          {posts.length === 0 ? (
            <p className="text-[#7A6F62] font-inter text-center py-16">
              No posts published yet. Check back soon.
            </p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post: typeof posts[number]) => (
                <Link key={post._id} href={`/blog/${post.slug}`} className="group block">
                  <div className="bg-[#FAF7F2] overflow-hidden">
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {post.category && (
                        <span className="absolute top-4 left-4 bg-[#2D5F4F] text-[#F5EFE4] font-inter text-xs uppercase tracking-widest px-3 py-1">
                          {post.category}
                        </span>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-2">
                        {post.publishedAt && (
                          <p className="text-[#B8976A] font-inter text-xs uppercase tracking-widest">
                            {post.publishedAt}
                          </p>
                        )}
                        {post.readTime && (
                          <>
                            <span className="text-[#D9CDBF]">·</span>
                            <p className="text-[#7A6F62] font-inter text-xs">{post.readTime}</p>
                          </>
                        )}
                      </div>
                      <h3 className="font-playfair text-[#1C1A17] text-xl mb-3 group-hover:text-[#2D5F4F] transition-colors duration-300">
                        {post.title}
                      </h3>
                      {post.excerpt && (
                        <p className="text-[#7A6F62] font-inter text-sm leading-relaxed">
                          {post.excerpt}
                        </p>
                      )}
                      <p className="mt-4 text-[#2D5F4F] font-inter text-sm font-semibold group-hover:underline">
                        Read More →
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
