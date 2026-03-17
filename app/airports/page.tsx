import type { Metadata } from 'next';
import Link from 'next/link';
import { AIRPORTS } from '../lib/data';
import { faqSchema, breadcrumbSchema } from '../lib/schema';
import BookingForm from '../components/BookingForm';
import FAQSection from '../components/FAQSection';
import styles from './airports.module.css';

export const metadata: Metadata = {
  title: 'Airport Transfers | All UK Airports | Fixed Prices',
  description: 'Book professional airport taxi transfers across all major UK airports. Fixed prices, 24/7 service, flight monitoring & meet and greet. Heathrow, Gatwick, Manchester, Luton, Stansted, Birmingham.',
  alternates: { canonical: 'https://www.airportcartaxi.co.uk/airports/' },
};

const airportFaqs = [
  { q: 'Which UK airports do you serve?', a: 'We serve all major UK airports including Heathrow (LHR), Gatwick (LGW), Manchester (MAN), Luton (LTN), Stansted (STN), Birmingham (BHX), Edinburgh (EDI), Glasgow (GLA), Bristol (BRS), and many more.' },
  { q: 'Do you offer meet and greet at all airports?', a: 'Yes, we offer a professional meet and greet service at all UK airports. Your driver will be waiting in the arrivals hall with a name board after tracking your flight.' },
  { q: 'Are all airport taxi prices fixed?', a: 'Yes, all our airport transfer prices are 100% fixed. You will receive a firm quote before booking and the price will never change, regardless of traffic or delays.' },
  { q: 'How early should I book my airport taxi?', a: 'We recommend booking at least 24 hours in advance, though we can often accommodate last-minute bookings. For peak dates, earlier booking guarantees your preferred vehicle type.' },
];

export default function AirportsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([
        breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Airport Transfers', url: '/airports/' }]),
        faqSchema(airportFaqs),
      ]) }} />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className="badge badge--yellow">All UK Airports</span>
          <h1>UK Airport Taxi Transfers</h1>
          <p>Professional, fixed-price airport taxi transfers from every major UK airport. Your driver tracks your flight and adjusts for any delays — at no extra cost.</p>
          <div className="btn-group">
            <Link href="/book-now/" className="btn btn--primary btn--lg" id="airports-book-now">Book Airport Taxi</Link>
            <a href="tel:+447700900000" className="btn btn--secondary btn--lg" id="airports-call">📞 Call Us</a>
          </div>
        </div>
      </section>

      {/* Why Us Strip */}
      <div className={styles.whyStrip}>
        {['✈️ Free Flight Tracking', '💷 Fixed Prices', '📋 Meet & Greet', '🕐 24/7 Service', '🚗 Professional Drivers', '✓ Free Cancellation'].map(item => (
          <div key={item} className={styles.whyItem}>{item}</div>
        ))}
      </div>

      {/* Airport Grid */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Choose Your Airport</h2>
            <p>Click on your departure or arrival airport to see routes, prices, and book your transfer.</p>
          </div>
          <div className={styles.airportGrid}>
            {AIRPORTS.map((airport) => (
              <Link key={airport.slug} href={`/airport-taxi-${airport.slug}/`} className={styles.airportCard} id={`airports-${airport.slug}`}>
                <div className={styles.cardHeader}>
                  <span className={styles.airportCode}>{airport.code}</span>
                  <div className={styles.ratingBadge}>★ 4.9</div>
                </div>
                <h2 className={styles.airportName}>{airport.name}</h2>
                <p className={styles.airportLocation}>📍 {airport.location}</p>
                <p className={styles.airportDesc}>{airport.description}</p>
                <div className={styles.terminals}>
                  <span className={styles.termLabel}>Terminals:</span>
                  {airport.terminals.map(t => <span key={t} className={styles.termBadge}>{t}</span>)}
                </div>
                <div className={styles.popularRoutes}>
                  <span className={styles.routeLabel}>Top routes:</span>
                  <div className={styles.routeList}>
                    {airport.topRoutes.map(r => <span key={r} className={styles.routeItem}>→ {r}</span>)}
                  </div>
                </div>
                <div className={styles.cardFooter}>
                  <span className={styles.priceFrom}>From <strong>£{airport.priceFrom}</strong></span>
                  <span className={styles.bookBtn}>View Routes →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="section section--gray">
        <div className="container">
          <div className="section-header">
            <h2>Book Your Airport Transfer</h2>
            <p>Get an instant fixed quote for your airport transfer.</p>
          </div>
          <BookingForm variant="page" />
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={airportFaqs} title="Airport Transfer FAQs" />
    </>
  );
}
