import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ROUTES } from '../lib/data';
import { faqSchema, breadcrumbSchema } from '../lib/schema';
import BookingForm from '../components/BookingForm';
import FAQSection from '../components/FAQSection';
import styles from './route.module.css';

type Params = { slug: string[] };

export async function generateStaticParams() {
  return ROUTES.map((r) => ({ slug: [r.slug] }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const routeSlug = slug.join('-');
  const route = ROUTES.find(r => r.slug === routeSlug);
  if (!route) return {};
  return {
    title: `${route.from} to ${route.to} Taxi | Fixed Price ${route.priceFrom && `from £${route.priceFrom}`} | Airport Car Taxi`,
    description: `Book a fixed-price taxi from ${route.from} to ${route.to}. Distance: ${route.distance}. Travel time: ${route.travelTime}. From £${route.priceFrom}. Instant online quote.`,
    alternates: { canonical: `https://www.airportcartaxi.co.uk/${routeSlug}/` },
  };
}

export default async function RoutePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const routeSlug = slug.join('-');
  const route = ROUTES.find(r => r.slug === routeSlug);
  if (!route) notFound();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([
        breadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Routes', url: '/airports/' },
          { name: `${route.from} to ${route.to}`, url: `/${routeSlug}/` },
        ]),
        faqSchema(route.faqs),
      ]) }} />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <div className={styles.breadcrumb}>
              <Link href="/">Home</Link> → <Link href="/airports/">Airports</Link> → <span>{route.from} → {route.to}</span>
            </div>
            <h1>{route.from} to {route.to} Taxi</h1>
            <p>{route.description}</p>
            <div className={styles.routeStats}>
              <div className={styles.stat}>
                <span className={styles.statIcon}>📏</span>
                <div>
                  <strong>{route.distance}</strong>
                  <span>Distance</span>
                </div>
              </div>
              <div className={styles.stat}>
                <span className={styles.statIcon}>⏱</span>
                <div>
                  <strong>{route.travelTime}</strong>
                  <span>Travel Time</span>
                </div>
              </div>
              <div className={styles.stat}>
                <span className={styles.statIcon}>💷</span>
                <div>
                  <strong>From £{route.priceFrom}</strong>
                  <span>Fixed Price</span>
                </div>
              </div>
            </div>
            <div className="btn-group">
              <Link href="/book-now/" className="btn btn--primary btn--lg" id={`route-book-${routeSlug}`}>Book This Route</Link>
              <a href="tel:+447700900000" className="btn btn--secondary btn--lg">📞 Call Now</a>
            </div>
          </div>
          <div className={styles.heroForm}>
            <BookingForm variant="hero" />
          </div>
        </div>
      </section>

      {/* Route Info */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>About This Route</h2>
          </div>
          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <span className={styles.infoIcon}>🗺️</span>
              <h3>Route Overview</h3>
              <p>Your taxi will drive from <strong>{route.from}</strong> to <strong>{route.to}</strong>, covering approximately {route.distance}. The journey takes {route.travelTime} under normal traffic conditions.</p>
            </div>
            <div className={styles.infoCard}>
              <span className={styles.infoIcon}>💷</span>
              <h3>Fixed Price Guarantee</h3>
              <p>Our price from {route.from} to {route.to} starts from <strong>£{route.priceFrom}</strong> for a standard saloon. This price is fully fixed — no meters, no traffic surcharges.</p>
            </div>
            <div className={styles.infoCard}>
              <span className={styles.infoIcon}>🚖</span>
              <h3>Door to Door Service</h3>
              <p>We pick you up from any address at {route.from} and drop you directly to your destination in {route.to.split(',')[0]}. No stops, no changes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Features */}
      <section className="section section--gray">
        <div className="container">
          <div className="section-header">
            <h2>Why Book with Airport Car Taxi?</h2>
          </div>
          <div className={styles.trustGrid}>
            {[
              { icon: '✈️', title: 'Flight Monitoring', desc: 'We track your flight and pick you up at the right time.' },
              { icon: '💷', title: 'No Hidden Charges', desc: 'Fixed price includes tolls, taxes, and free waiting time.' },
              { icon: '👔', title: 'Professional Drivers', desc: 'DBS checked, licensed, experienced — and always courteous.' },
              { icon: '🕐', title: '24/7 Service', desc: 'Available day and night, 365 days a year.' },
            ].map(f => (
              <div key={f.title} className={styles.trustCard}>
                <span className={styles.trustIcon}>{f.icon}</span>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={route.faqs} title={`${route.from} to ${route.to} — FAQs`} />

      {/* Bottom CTA */}
      <section className={styles.cta}>
        <div className="container">
          <h2>Book Your {route.from} to {route.to} Taxi Now</h2>
          <p>From £{route.priceFrom} • Fixed price • Instant confirmation</p>
          <Link href="/book-now/" className="btn btn--primary btn--lg" id={`route-cta-${routeSlug}`}>
            🚖 Get Your Fixed Quote
          </Link>
        </div>
      </section>
    </>
  );
}
