import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { BLOG_POSTS } from '../../lib/data';
import { articleSchema, breadcrumbSchema, faqSchema } from '../../lib/schema';
import styles from './post.module.css';

type Params = { slug: string };

export async function generateStaticParams() {
  return BLOG_POSTS.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find(p => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | Airport Car Taxi Blog`,
    description: post.excerpt,
    alternates: { canonical: `https://www.airportcartaxi.co.uk/blog/${slug}/` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

// Blog post content (would be from CMS in production)
const postContent: Record<string, { intro: string; sections: { h2: string; body: string }[]; faqs: { q: string; a: string }[] }> = {
  'best-way-to-get-from-heathrow-to-london': {
    intro: 'Heathrow Airport is the UK\'s busiest airport, welcoming over 80 million passengers per year. Getting from Heathrow to London quickly and affordably requires knowing your options. In this guide, we compare all the main transport choices so you can pick the best one for your needs.',
    sections: [
      { h2: 'Option 1: Private Airport Taxi', body: 'A pre-booked private taxi is often the most convenient option, especially for families, business travellers, or those with lots of luggage. With Airport Car Taxi, you get a fixed price — no meters, no surprises — and your driver tracks your flight. You are collected from the arrivals hall and dropped door-to-door at your destination. Prices start from £45 to Central London, making it comparable to a train for groups of 2 or more.' },
      { h2: 'Option 2: London Underground (Piccadilly Line)', body: 'The Tube is the cheapest option for solo travellers on a tight budget. The Piccadilly Line runs from Heathrow Terminals 2, 3, 4, and 5 directly into Central London. The journey takes approximately 50-60 minutes and costs around £6 with an Oyster card. However, it requires navigating escalators and stairs with luggage, and can be very crowded — not ideal after a long-haul flight.' },
      { h2: 'Option 3: Heathrow Express Train', body: 'The Heathrow Express is the fastest rail link, connecting Heathrow to London Paddington in just 15 minutes. Tickets cost £25-£37 one way depending on when you book. It is quick but expensive for a couple or family when compared to a private transfer. Also, it only stops at Paddington — so you would still need another taxi or Tube to reach your final destination.' },
      { h2: 'Option 4: National Express Bus', body: 'The National Express coach is the budget option, with journeys taking 45-80 minutes depending on traffic. Coaches stop at multiple locations in Central London including Victoria Coach Station. Prices start from around £10. Downside: it can be slow in traffic and there is limited luggage storage.' },
      { h2: 'Which Option Should You Choose?', body: 'For solo budget travellers: the Piccadilly Line or National Express. For business travellers or families: a pre-booked private taxi offers the best balance of comfort, convenience, and value. For the absolute fastest journey: Heathrow Express, but add the cost of onward transport to your destination.' },
    ],
    faqs: [
      { q: 'How far is Heathrow from London?', a: 'Heathrow Airport is approximately 15 miles (24 km) from Central London. By taxi, this journey takes 30-50 minutes depending on traffic.' },
      { q: 'What is the cheapest way from Heathrow to London?', a: 'The cheapest way is the London Underground (Piccadilly Line) or National Express coach, both available from around £6-10. However, these options require navigating with your luggage and can be slow.' },
      { q: 'Is a private taxi from Heathrow to London worth it?', a: 'For groups of 2 or more, a private taxi is often better value than multiple train tickets, and far more convenient with door-to-door service and no luggage hassle.' },
    ],
  },
};

const defaultContent = {
  intro: 'Welcome to this comprehensive guide from Airport Car Taxi. We share expert advice on airport transfers, UK travel tips, and everything you need to know about getting to and from UK airports.',
  sections: [
    { h2: 'Why Plan Your Airport Transfer in Advance?', body: 'Planning your airport transfer in advance can save you significant time, stress, and money. By pre-booking with Airport Car Taxi, you lock in a fixed price that will never change, regardless of traffic conditions on the day.' },
    { h2: 'Tips for a Smooth Airport Transfer', body: 'Book your transfer at least 24 hours in advance to guarantee your preferred vehicle. Share your flight number so your driver can monitor any delays. Keep your phone charged to receive driver updates. Pack light if possible, or let us know if you have extra luggage so we can send the right vehicle.' },
    { h2: 'Choosing the Right Vehicle', body: 'For solo travellers or couples, a Standard Saloon is perfect and the most economical choice. Families with children and luggage will appreciate our spacious MPV 6-Seaters. Business travellers often prefer our Executive Cars with complimentary Wi-Fi and refreshments. For larger groups, our Minibuses and Minivans provide comfortable, cost-effective travel.' },
  ],
  faqs: [
    { q: 'How do I book an airport taxi?', a: 'You can book online through our booking form, by phone at +44 7700 900000, or via WhatsApp. Booking takes under 2 minutes and you will receive instant confirmation.' },
    { q: 'Are prices fixed?', a: 'Yes. All our prices are fully fixed from the moment you confirm your booking. No hidden charges, no meter, no traffic surcharges.' },
  ],
};

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find(p => p.slug === slug);
  if (!post) notFound();

  const content = postContent[slug] || defaultContent;
  const relatedPosts = BLOG_POSTS.filter(p => p.slug !== slug && p.category === post.category).slice(0, 3);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([
        breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog/' }, { name: post.title, url: `/blog/${slug}/` }]),
        articleSchema({ title: post.title, description: post.excerpt, date: post.date, url: `/blog/${slug}/` }),
        faqSchema(content.faqs),
      ]) }} />

      {/* Hero */}
      <section className={styles.hero}>
        <div className="container container--narrow">
          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link> → <Link href="/blog/">Blog</Link> → <span>{post.category}</span>
          </div>
          <div className={styles.metaRow}>
            <span className={styles.catBadge}>{post.category}</span>
            <time className={styles.date}>{new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</time>
            <span className={styles.readTime}>⏱ {post.readTime}</span>
          </div>
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.excerpt}>{post.excerpt}</p>
        </div>
      </section>

      {/* Content */}
      <article className="section">
        <div className="container container--narrow">
          <div className={styles.content}>
            <p className={styles.intro}>{content.intro}</p>
            {content.sections.map((s, i) => (
              <div key={i} className={styles.section}>
                <h2>{s.h2}</h2>
                <p>{s.body}</p>
              </div>
            ))}

            {/* FAQ */}
            <div className={styles.faqSection}>
              <h2>Frequently Asked Questions</h2>
              {content.faqs.map((faq, i) => (
                <details key={i} className={styles.faqItem}>
                  <summary className={styles.faqQ}>{faq.q}<span className={styles.faqPlus}>+</span></summary>
                  <div className={styles.faqA}><p>{faq.a}</p></div>
                </details>
              ))}
            </div>

            {/* CTA */}
            <div className={styles.ctaBox}>
              <h3>Ready to Book Your Airport Transfer?</h3>
              <p>Get a fixed price quote in seconds. Professional drivers, 24/7 service.</p>
              <Link href="/book-now/" className="btn btn--primary btn--lg" id={`post-cta-${slug}`}>🚖 Get Instant Quote</Link>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="section section--gray">
          <div className="container">
            <div className="section-header">
              <h2>Related Articles</h2>
            </div>
            <div className={styles.relatedGrid}>
              {relatedPosts.map(p => (
                <Link key={p.slug} href={`/blog/${p.slug}/`} className={styles.relatedCard} id={`related-${p.slug}`}>
                  <div className={styles.relatedImage} />
                  <div className={styles.relatedBody}>
                    <span className={styles.relatedCat}>{p.category}</span>
                    <h3>{p.title}</h3>
                    <p>{p.excerpt.substring(0, 100)}...</p>
                    <span className={styles.relatedRead}>Read More →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
