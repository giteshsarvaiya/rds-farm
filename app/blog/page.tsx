import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Blog | RD's Venues",
  description:
    "Tips, guides, and inspiration for weddings, events, and stays at RD's Venues in Ahmedabad.",
};

const posts = [
  {
    slug: "planning-your-dream-wedding-ahmedabad",
    title: "Planning Your Dream Wedding in Ahmedabad",
    excerpt:
      "From choosing the right venue to coordinating with vendors, here's everything you need to know to plan a flawless wedding in Ahmedabad.",
    coverImage: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80",
    publishedAt: "June 15, 2026",
    category: "Weddings",
  },
  {
    slug: "why-farm-venues-are-trending",
    title: "Why Farm Venues Are the New Luxury",
    excerpt:
      "Open skies, lush greenery, and fresh air — discover why couples and corporates alike are choosing farm venues for their most important events.",
    coverImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    publishedAt: "June 5, 2026",
    category: "Venues",
  },
  {
    slug: "corporate-retreat-checklist",
    title: "The Ultimate Corporate Retreat Checklist",
    excerpt:
      "Planning a team offsite? Use this comprehensive checklist to ensure your corporate retreat is productive, enjoyable, and memorable.",
    coverImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    publishedAt: "May 22, 2026",
    category: "Corporate",
  },
  {
    slug: "best-restaurants-ahmedabad-2026",
    title: "Fine Dining in Ahmedabad — What to Expect in 2026",
    excerpt:
      "Ahmedabad's culinary scene is evolving. Here's what food lovers and travellers can expect when dining at the city's finest restaurants.",
    coverImage: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    publishedAt: "May 10, 2026",
    category: "Dining",
  },
  {
    slug: "weekend-getaways-near-ahmedabad",
    title: "Best Weekend Getaways Near Ahmedabad",
    excerpt:
      "Need a quick escape? These are the best weekend retreat options within easy reach of Ahmedabad — from farmstays to resort experiences.",
    coverImage: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80",
    publishedAt: "April 28, 2026",
    category: "Travel",
  },
  {
    slug: "decor-trends-weddings-2026",
    title: "Wedding Decor Trends Dominating 2026",
    excerpt:
      "From earthy tones to sustainable florals, these are the decor trends shaping weddings this year — and how to incorporate them into your big day.",
    coverImage: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80",
    publishedAt: "April 12, 2026",
    category: "Weddings",
  },
];

/** Renders the blog index page with a grid of all post cards. */
export default function BlogPage() {
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <div className="bg-[#FAF7F2] overflow-hidden">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 bg-[#2D5F4F] text-[#F5EFE4] font-inter text-xs uppercase tracking-widest px-3 py-1">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <p className="text-[#B8976A] font-inter text-xs uppercase tracking-widest mb-2">
                      {post.publishedAt}
                    </p>
                    <h3 className="font-playfair text-[#1C1A17] text-xl mb-3 group-hover:text-[#2D5F4F] transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-[#7A6F62] font-inter text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                    <p className="mt-4 text-[#2D5F4F] font-inter text-sm font-semibold group-hover:underline">
                      Read More →
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
