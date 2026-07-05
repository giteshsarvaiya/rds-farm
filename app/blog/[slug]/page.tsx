import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { client, urlFor } from "@/lib/sanity";
import { blogPostBySlugQuery, allBlogSlugsQuery, blogPostsQuery } from "@/lib/queries";

export const revalidate = 3600;

export async function generateStaticParams() {
  const slugs = await client.fetch(allBlogSlugsQuery);
  return (slugs ?? []).map((p: { slug: string }) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await client.fetch(blogPostBySlugQuery, { slug });
  if (!post) return {};
  return {
    title: `${post.title} | RD's Venues Blog`,
    description: post.seoDescription ?? "",
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const [post, rawRelated] = await Promise.all([
    client.fetch(blogPostBySlugQuery, { slug }),
    client.fetch(blogPostsQuery),
  ]);

  if (!post) notFound();

  const coverImageUrl = post.coverImage
    ? urlFor(post.coverImage).width(1600).quality(90).url()
    : "https://images.unsplash.com/photo-1455587734955-081b22074882?w=1600&q=90";

  const related = (rawRelated ?? [])
    .filter((p: any) => p.slug !== slug)
    .slice(0, 3)
    .map((p: any) => ({
      slug: p.slug,
      title: p.title,
      category: p.category ?? "",
      coverImage: p.coverImage
        ? urlFor(p.coverImage).width(600).quality(80).url()
        : "https://images.unsplash.com/photo-1455587734955-081b22074882?w=600&q=80",
    }));

  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] w-full">
        <Image src={coverImageUrl} alt={post.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 flex flex-col items-end justify-end px-6 pb-16 max-w-4xl mx-auto w-full left-0 right-0">
          {post.category && (
            <span className="bg-[#2D5F4F] text-[#F5EFE4] font-inter text-xs uppercase tracking-widest px-3 py-1 mb-4 self-start">
              {post.category}
            </span>
          )}
          <h1
            className="font-playfair italic text-[#F5EFE4] self-start"
            style={{ fontSize: "clamp(1.75rem, 4vw, 3.5rem)", lineHeight: 1.2 }}
          >
            {post.title}
          </h1>
          <div className="flex items-center gap-4 mt-4 self-start">
            {post.publishedAt && (
              <span className="text-[#F5EFE4]/60 font-inter text-sm">{formatDate(post.publishedAt)}</span>
            )}
            {post.readTime && (
              <>
                <span className="text-[#F5EFE4]/30">·</span>
                <span className="text-[#F5EFE4]/60 font-inter text-sm">{post.readTime}</span>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="bg-[#F5EFE4] py-20 px-4">
        <div className="max-w-3xl mx-auto">
          {post.seoDescription && (
            <p
              className="font-playfair italic text-[#2D5F4F] mb-10 pb-10 border-b border-[#D9CDBF]"
              style={{ fontSize: "clamp(1.1rem, 2vw, 1.4rem)", lineHeight: 1.7 }}
            >
              {post.seoDescription}
            </p>
          )}

          <div className="space-y-6">
            {(post.body ?? []).map((block: any, i: number) => {
              if (block._type === "image" && block.asset) {
                return (
                  <div key={i} className="my-8">
                    <div className="relative w-full h-72 md:h-96">
                      <Image
                        src={urlFor(block.asset).width(900).quality(85).url()}
                        alt={block.alt || block.caption || ""}
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                    {block.caption && (
                      <p className="text-center text-[#7A6F62] font-inter text-sm mt-2">{block.caption}</p>
                    )}
                  </div>
                );
              }
              if (block._type === "block") {
                const text = (block.children ?? []).map((c: any) => c.text ?? "").join("");
                if (!text.trim()) return null;
                return (
                  <p key={i} className="text-[#1C1A17] font-inter leading-relaxed" style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)" }}>
                    {text}
                  </p>
                );
              }
              return null;
            })}
          </div>

          {/* CTA */}
          <div className="mt-16 pt-10 border-t border-[#D9CDBF]">
            <p className="font-playfair italic text-[#1C1A17] text-xl mb-4">
              Interested in hosting an event with us?
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#2D5F4F] text-[#F5EFE4] font-inter font-semibold uppercase tracking-widest text-sm px-8 py-3 hover:opacity-90 transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="bg-[#EDE5D8] py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <p className="text-[#B8976A] uppercase tracking-[0.2em] text-xs mb-4 font-inter">Keep Reading</p>
            <h2 className="font-playfair italic text-[#1C1A17] mb-12" style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}>
              More from the Blog
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {related.map((p: typeof related[number]) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="group block">
                  <div className="bg-[#FAF7F2] overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <Image src={p.coverImage} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-5">
                      {p.category && (
                        <p className="text-[#B8976A] font-inter text-xs uppercase tracking-widest mb-2">{p.category}</p>
                      )}
                      <h3 className="font-playfair text-[#1C1A17] text-lg group-hover:text-[#2D5F4F] transition-colors duration-300">
                        {p.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-10">
              <Link href="/blog" className="inline-block border border-[#2D5F4F] text-[#2D5F4F] font-inter font-semibold uppercase tracking-widest text-sm px-8 py-3 hover:bg-[#2D5F4F] hover:text-[#F5EFE4] transition-all duration-300">
                ← All Articles
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
