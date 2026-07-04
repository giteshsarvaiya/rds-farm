import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const posts = [
  {
    slug: "planning-your-dream-wedding-ahmedabad",
    title: "Planning Your Dream Wedding in Ahmedabad",
    excerpt:
      "From choosing the right venue to coordinating with vendors, here's everything you need to know to plan a flawless wedding in Ahmedabad.",
    coverImage: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1600&q=90",
    publishedAt: "June 15, 2026",
    category: "Weddings",
    readTime: "6 min read",
    body: [
      "Planning a wedding in Ahmedabad is both exciting and overwhelming. The city offers a rich blend of traditional Gujarati hospitality and modern event infrastructure — making it one of India's most sought-after wedding destinations.",
      "The first and most important decision is choosing your venue. Ahmedabad offers everything from heritage havelis to sprawling farm resorts. If you're planning a large gathering of 500+ guests, a farm venue like RDS Farm gives you the open space, flexibility, and natural beauty that a hotel ballroom simply cannot match.",
      "Once the venue is locked, work backwards from your wedding date to build your vendor timeline. Decorators, caterers, photographers, and entertainment should all be booked at least 6 months in advance — especially if you're planning for the winter season (November to February) which is peak wedding time.",
      "Don't forget the smaller details that make a big difference: lighting, sound quality, guest parking, and accommodation for outstation guests. A good venue coordinator will help you navigate all of this — ask for one when you make your inquiry.",
      "Finally, always do a site visit before you commit. Photos and videos only tell part of the story. Walk the grounds, check the facilities, and make sure the space feels right for your vision.",
    ],
  },
  {
    slug: "why-farm-venues-are-trending",
    title: "Why Farm Venues Are the New Luxury",
    excerpt:
      "Open skies, lush greenery, and fresh air — discover why couples and corporates alike are choosing farm venues for their most important events.",
    coverImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=90",
    publishedAt: "June 5, 2026",
    category: "Venues",
    readTime: "5 min read",
    body: [
      "There's a quiet shift happening in the events industry. For years, five-star hotel ballrooms were the gold standard for weddings, corporate offsites, and milestone celebrations. But increasingly, discerning hosts are choosing something different — farm venues.",
      "The appeal is easy to understand. A farm venue offers what no hotel can: open sky, fresh air, natural greenery, and a sense of space that makes every event feel expansive and unhurried. There's an intimacy to celebrating under the stars that a climate-controlled ballroom simply cannot replicate.",
      "For weddings, the symbolism is powerful. The natural setting adds an organic warmth to ceremonies and receptions. Guests feel at ease. Children have room to play. And photographs — against a backdrop of golden hour light and lush grounds — are simply stunning.",
      "For corporate events, farm venues break the monotony of the conference room. Teams think more creatively, collaborate more openly, and leave feeling genuinely refreshed rather than just 'offsite'.",
      "At RDS Farm and RDS Farm 2, we've designed the venue to give you the best of both worlds — the natural beauty of a farm setting with the infrastructure and service quality of a premium event space. No compromises.",
    ],
  },
  {
    slug: "corporate-retreat-checklist",
    title: "The Ultimate Corporate Retreat Checklist",
    excerpt:
      "Planning a team offsite? Use this comprehensive checklist to ensure your corporate retreat is productive, enjoyable, and memorable.",
    coverImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=90",
    publishedAt: "May 22, 2026",
    category: "Corporate",
    readTime: "7 min read",
    body: [
      "A well-planned corporate retreat can do more for team morale and alignment than months of weekly meetings. But a poorly planned one can feel like a waste of time and money. The difference is almost always in the preparation.",
      "Start with a clear objective. Are you looking to celebrate a milestone, align on strategy, build team cohesion, or simply give your team a break? Your objective shapes every other decision — venue size, activities, schedule, and tone.",
      "Venue selection comes next. For teams up to 50, a hotel with conference facilities works well. For larger groups or when you want a more relaxed atmosphere, a farm resort like RDS Farm gives you the space and setting to step completely outside of work mode.",
      "Build a balanced schedule. A common mistake is packing every hour with structured activities. Leave breathing room — unscheduled time for conversations, walks, and spontaneous connection is often where the most valuable moments happen.",
      "Think about meals carefully. Food is a shared experience that sets the tone for the whole retreat. A sit-down dinner on the first evening, with good food and a relaxed atmosphere, does more to open people up than any icebreaker exercise.",
      "Finally, follow up. The retreat's value multiplies when key decisions and commitments are captured and actioned afterwards. Assign someone to document outcomes and send a summary within 48 hours of returning.",
    ],
  },
  {
    slug: "best-restaurants-ahmedabad-2026",
    title: "Fine Dining in Ahmedabad — What to Expect in 2026",
    excerpt:
      "Ahmedabad's culinary scene is evolving. Here's what food lovers and travellers can expect when dining at the city's finest restaurants.",
    coverImage: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=90",
    publishedAt: "May 10, 2026",
    category: "Dining",
    readTime: "5 min read",
    body: [
      "Ahmedabad has always had great food — but for a long time, 'great food' in the city meant street food and traditional Gujarati thalis. That's still true, and those remain unmissable. But in 2026, the city's fine dining scene has genuinely come into its own.",
      "The shift has been driven by a new generation of chefs who trained abroad and returned with global technique but a distinctly local palate. The result is a cuisine that feels both sophisticated and deeply rooted — contemporary presentations of flavours that Ahmedabad has always loved.",
      "At RD's Hotel, our restaurant reflects this philosophy. The menu brings together the finest regional ingredients and classical cooking methods — each dish considered, each flavour intentional. It's not fusion for the sake of novelty. It's simply good cooking.",
      "For visitors to Ahmedabad, the restaurant scene rewards curiosity. Go beyond the obvious. Seek out the smaller, chef-driven spaces. And don't skip breakfast — the city's morning food culture, from fafda-jalebi to fresh khakhra, is one of the great underrated culinary experiences in India.",
    ],
  },
  {
    slug: "weekend-getaways-near-ahmedabad",
    title: "Best Weekend Getaways Near Ahmedabad",
    excerpt:
      "Need a quick escape? These are the best weekend retreat options within easy reach of Ahmedabad — from farmstays to resort experiences.",
    coverImage: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1600&q=90",
    publishedAt: "April 28, 2026",
    category: "Travel",
    readTime: "6 min read",
    body: [
      "Living in Ahmedabad means you're surprisingly well-placed for weekend escapes. Within a two to three hour drive, you can be in the hills, by the sea, or in a completely different landscape — making it one of the best cities in India for spontaneous getaways.",
      "For those who want to stay closer to the city, a farm resort experience is the perfect answer. Places like RDS Farm offer the feeling of escaping the city without the long drive — lush surroundings, fresh air, and a pace of life that feels genuinely different from the urban routine.",
      "If you're willing to drive a little further, the options expand considerably. The white desert of Kutch (around 8 hours) is a once-in-a-lifetime experience best done during the Rann Utsav season. Saputara in the Sahyadri hills is a gentler option — cool, green, and just right for a two-day escape.",
      "Our advice: don't over-plan the weekend. Pick one destination, book in advance, and leave most of the schedule open. The best weekend getaways are the ones where you slow down enough to actually rest.",
    ],
  },
  {
    slug: "decor-trends-weddings-2026",
    title: "Wedding Decor Trends Dominating 2026",
    excerpt:
      "From earthy tones to sustainable florals, these are the decor trends shaping weddings this year — and how to incorporate them into your big day.",
    coverImage: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1600&q=90",
    publishedAt: "April 12, 2026",
    category: "Weddings",
    readTime: "5 min read",
    body: [
      "Wedding decor in 2026 has moved firmly away from maximalism. The trend that defined the previous decade — more flowers, more lights, more everything — has given way to something quieter and more intentional.",
      "Earthy, warm tones are everywhere. Terracotta, burnt orange, deep rust, and sage green have replaced the blush pinks and golds that dominated for years. These colours photograph beautifully in natural light and feel genuinely warm rather than artificially festive.",
      "Sustainable florals are another major shift. Couples are increasingly asking for locally sourced flowers, potted plants that can be replanted after the event, and dried floral arrangements that have a longer life. It's both an environmental choice and an aesthetic one — dried florals have a textural richness that fresh flowers can't match.",
      "Lighting has become the single most impactful element of wedding decor. Warm Edison bulbs, candlelight, and carefully placed spotlights can transform even a simple space into something magical. At farm venues especially, string lights overhead create an atmosphere that no amount of floral decoration can replicate.",
      "Finally, personalisation has become non-negotiable. Generic decor packages are out. Couples want their wedding to feel like them — specific, considered, and meaningful. Work with a decorator who listens more than they talk.",
    ],
  },
];

/** Generates static paths for all blog post slugs at build time. */
export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

/** Generates SEO metadata for each individual blog post page. */
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | RD's Venues Blog`,
    description: post.excerpt,
  };
}

/** Renders an individual blog post with body content, CTA, and related posts. */
export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] w-full">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 flex flex-col items-end justify-end px-6 pb-16 max-w-4xl mx-auto w-full left-0 right-0">
          <span className="bg-[#2D5F4F] text-[#F5EFE4] font-inter text-xs uppercase tracking-widest px-3 py-1 mb-4 self-start">
            {post.category}
          </span>
          <h1
            className="font-playfair italic text-[#F5EFE4] self-start"
            style={{ fontSize: "clamp(1.75rem, 4vw, 3.5rem)", lineHeight: 1.2 }}
          >
            {post.title}
          </h1>
          <div className="flex items-center gap-4 mt-4 self-start">
            <span className="text-[#F5EFE4]/60 font-inter text-sm">{post.publishedAt}</span>
            <span className="text-[#F5EFE4]/30">·</span>
            <span className="text-[#F5EFE4]/60 font-inter text-sm">{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="bg-[#F5EFE4] py-20 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Excerpt */}
          <p
            className="font-playfair italic text-[#2D5F4F] mb-10 pb-10 border-b border-[#D9CDBF]"
            style={{ fontSize: "clamp(1.1rem, 2vw, 1.4rem)", lineHeight: 1.7 }}
          >
            {post.excerpt}
          </p>

          {/* Body paragraphs */}
          <div className="space-y-6">
            {post.body.map((paragraph, i) => (
              <p
                key={i}
                className="text-[#1C1A17] font-inter leading-relaxed"
                style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)" }}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 pt-10 border-t border-[#D9CDBF]">
            <p className="font-playfair italic text-[#1C1A17] text-xl mb-4">
              Interested in hosting an event with us?
            </p>
            <a
              href="https://wa.me/919876543210?text=I read your blog and would like to inquire about your venues"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#2D5F4F] text-[#F5EFE4] font-inter font-semibold uppercase tracking-widest text-sm px-8 py-3 hover:opacity-90 transition-all duration-300"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="bg-[#EDE5D8] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#B8976A] uppercase tracking-[0.2em] text-xs mb-4 font-inter">
            Keep Reading
          </p>
          <h2
            className="font-playfair italic text-[#1C1A17] mb-12"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
          >
            More from the Blog
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {related.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group block">
                <div className="bg-[#FAF7F2] overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={p.coverImage}
                      alt={p.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-[#B8976A] font-inter text-xs uppercase tracking-widest mb-2">
                      {p.category}
                    </p>
                    <h3 className="font-playfair text-[#1C1A17] text-lg group-hover:text-[#2D5F4F] transition-colors duration-300">
                      {p.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/blog"
              className="inline-block border border-[#2D5F4F] text-[#2D5F4F] font-inter font-semibold uppercase tracking-widest text-sm px-8 py-3 hover:bg-[#2D5F4F] hover:text-[#F5EFE4] transition-all duration-300"
            >
              ← All Articles
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
