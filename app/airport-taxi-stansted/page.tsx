import type { Metadata } from 'next';
import Link from 'next/link';
import { AIRPORTS } from '../lib/data';
import { faqSchema, breadcrumbSchema, taxiServiceSchema } from '../lib/schema';
import BookingForm from '../components/BookingForm';
import FAQSection from '../components/FAQSection';
import styles from '../airport-taxi-heathrow/airport.module.css';

const airport = AIRPORTS.find(a => a.slug === 'stansted')!;

export const metadata: Metadata = {
  title: airport.meta.title,
  description: airport.meta.description,
  alternates: { canonical: 'https://www.airportcartaxi.co.uk/airport-taxi-stansted/' },
};

const faqs = [
  { q: 'How far is Stansted Airport from London?', a: 'Stansted Airport is approximately 35 miles northeast of Central London. The taxi journey typically takes 50-75 minutes.' },
  { q: 'What is the taxi fare from Stansted to London?', a: 'Our fixed price from Stansted Airport to Central London starts from £75 for a standard saloon. This includes free waiting time and flight tracking.' },
  { q: 'Is Stansted Airport served by Ryanair?', a: 'Yes, Stansted is a major Ryanair hub and also serves Wizz Air, easyJet, and other budget carriers. We cover all airline arrivals.' },
  { q: 'Can I book a taxi from Stansted to Cambridge?', a: 'Yes. Stansted to Cambridge is just 30 miles and takes around 35-50 minutes. Our fixed price starts from £55.' },
  { q: 'Is there a taxi rank at Stansted Airport?', a: 'We are a private hire service — your pre-booked driver meets you in arrivals. This is safer and more reliable than taxi ranks.' },
];

const routes = [
  { to: 'London City Centre', distance: '35 miles', time: '50-75 min', price: 75 },
  { to: 'Cambridge', distance: '30 miles', time: '35-50 min', price: 55 },
  { to: 'Chelmsford', distance: '22 miles', time: '30-45 min', price: 50 },
  { to: 'Colchester', distance: '40 miles', time: '45-65 min', price: 70 },
  { to: 'Ipswich', distance: '55 miles', time: '60-80 min', price: 95 },
  { to: 'Peterborough', distance: '50 miles', time: '55-75 min', price: 90 },
];

export default function StanstedAirportTaxiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([
        breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Airports', url: '/airports/' }, { name: 'Stansted Airport Taxi', url: '/airport-taxi-stansted/' }]),
        taxiServiceSchema('London Stansted Airport (STN)'),
        faqSchema(faqs),
      ]) }} />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <div className={styles.breadcrumb}><Link href="/">Home</Link> → <Link href="/airports/">Airports</Link> → <span>Stansted</span></div>
            <div className={styles.airportBadge}><span className={styles.airportCode}>STN</span><span>Stansted Airport</span></div>
            <h1>Stansted Airport Taxi</h1>
            <p>Fixed-price taxi transfers to and from London Stansted Airport. Free flight tracking, 24/7 service, and professional drivers included.</p>
            <div className="btn-group">
              <Link href="/book-now/" className="btn btn--primary btn--lg" id="stansted-book-now">Book Stansted Taxi</Link>
              
            </div>
            <div className={styles.trustRow}>
              {['✓ 60 min free wait', '✓ Flight tracking', '✓ Meet & greet', '✓ Fixed price'].map(t => (
                <span key={t} className={styles.trustTag}>{t}</span>
              ))}
            </div>
          </div>
          <div className={styles.heroForm}><BookingForm variant="hero" /></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="badge badge--yellow">Fixed Prices</span>
            <h2>Stansted Airport Taxi Prices</h2>
          </div>
          <div className={styles.priceTable}>
            <div className={styles.priceTableHeader}><span>Destination</span><span>Distance</span><span>Travel Time</span><span>From (Saloon)</span><span>Book</span></div>
            {routes.map(r => (
              <div key={r.to} className={styles.priceRow}>
                <span className={styles.destination}>📍 Stansted → {r.to}</span>
                <span>{r.distance}</span><span>{r.time}</span>
                <strong className={styles.price}>£{r.price}</strong>
                <Link href="/book-now/" className="btn btn--primary btn--sm">Book Now</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Stansted Airport Taxi FAQs" />

      <section className={styles.bottomCta}>
        <div className="container">
          <h2>Book Your Stansted Airport Taxi Now</h2>
          <p>Instant confirmation. Fixed price. Professional driver.</p>
          <Link href="/book-now/" className="btn btn--primary btn--lg" id="stansted-bottom-cta">🚖 Get Instant Quote</Link>
        </div>
      </section>
    </>
  );
}
