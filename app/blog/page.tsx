import type { Metadata } from 'next';
import Link from 'next/link';
import { BLOG_POSTS } from '../lib/data';
import { articleSchema, breadcrumbSchema } from '../lib/schema';
import styles from './blog.module.css';

export const metadata: Metadata = {
  title: 'Airport Transfer Blog | Travel Tips & UK Airport Guides',
  description: 'Expert tips, guides, and advice for UK airport transfers. Heathrow, Gatwick, Manchester taxi guides, travel tips, and airport comparison articles.',
  alternates: { canonical: 'https://www.airportcartaxi.co.uk/blog/' },
};

const categories = ['All', 'Airport Travel Tips', 'UK Travel Guides', 'Airport Transfer Guides'];

export default function BlogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog/' }])
      ) }} />

      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <span className="badge badge--yellow">Travel Blog</span>
            <h1>Airport Transfer Guides & Travel Tips</h1>
            <p>Expert advice on UK airport transfers, travel guides, and tips to make your journey stress-free.</p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <div className={styles.categoryBar}>
        <div className="container">
          <div className={styles.categories}>
            {categories.map(cat => (
              <button key={cat} className={`${styles.catBtn} ${cat === 'All' ? styles.active : ''}`} id={`blog-cat-${cat.replace(/\s/g,'-').toLowerCase()}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      <section className="section">
        <div className="container">
          <div className={styles.blogGrid}>
            {BLOG_POSTS.map((post, idx) => (
              <article key={post.slug} className={`${styles.card} ${idx === 0 ? styles.featured : ''}`}>
                <div className={styles.cardImage}>
                  <span className={styles.categoryTag}>{post.category}</span>
                  <span className={styles.readTimeTag}>{post.readTime}</span>
                  <div className={styles.imagePlaceholderInner}>✈️</div>
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.meta}>
                    <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</time>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className={styles.cardTitle}>
                    <Link href={`/blog/${post.slug}/`} id={`blog-post-${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className={styles.cardExcerpt}>{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}/`} className={styles.readMore}>Read Full Article →</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className={styles.newsletterSection}>
        <div className="container container--narrow">
          <div className={styles.newsletter}>
            <h2>Get Airport Travel Tips in Your Inbox</h2>
            <p>Subscribe for expert advice, money-saving tips, and the latest airport transfer guides.</p>
            <form className={styles.newsletterForm} id="newsletter-form">
              <input type="email" placeholder="Your email address" className="form-input" id="newsletter-email" />
              <button type="submit" className="btn btn--primary" id="newsletter-submit">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
