import type { Metadata } from 'next';
import Link from 'next/link';
import { AIRPORTS } from '../lib/data';
import { faqSchema, breadcrumbSchema, taxiServiceSchema } from '../lib/schema';
import BookingForm from '../components/BookingForm';
import FAQSection from '../components/FAQSection';
import styles from '../airport-taxi-heathrow/airport.module.css';

const airport = AIRPORTS.find(a => a.slug === 'birmingham')!;

export const metadata: Metadata = {
  title: airport.meta.title,
  description: airport.meta.description,
  alternates: { canonical: 'https://www.airportcartaxi.co.uk/airport-taxi-birmingham/' },
};

const faqs = [
  { q: 'Where is Birmingham Airport located?', a: 'Birmingham Airport (BHX) is located in Solihull, approximately 8 miles southeast of Birmingham city centre, with excellent motorway access via the M42.' },
  { q: 'How much is a taxi from Birmingham Airport to the city centre?', a: 'Our fixed price from Birmingham Airport to Birmingham City Centre starts from £28 for a standard saloon car.' },
  { q: 'Do you cover Birmingham Airport to Coventry?', a: 'Yes, Birmingham Airport to Coventry is approximately 18 miles and takes 25-40 minutes. Fixed price from £40.' },
  { q: 'What is the best way to get from Birmingham Airport?', a: 'A pre-booked private taxi gives you the most direct, comfortable journey with your own vehicle and fixed pricing — no waiting for trains or buses.' },
  { q: 'Do you meet passengers at Birmingham Airport arrivals?', a: 'Yes, your driver tracks your flight and meets you in Birmingham Airport arrivals hall with a name board at no extra cost.' },
];

const routes = [
  { to: 'Birmingham City Centre', distance: '8 miles', time: '18-30 min', price: 28 },
  { to: 'Coventry', distance: '18 miles', time: '25-40 min', price: 40 },
  { to: 'Solihull', distance: '4 miles', time: '10-18 min', price: 18 },
  { to: 'Wolverhampton', distance: '22 miles', time: '30-45 min', price: 50 },
  { to: 'Leicester', distance: '35 miles', time: '45-65 min', price: 70 },
  { to: 'Oxford', distance: '65 miles', time: '70-90 min', price: 110 },
];

export default function BirminghamAirportTaxiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([
        breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Airports', url: '/airports/' }, { name: 'Birmingham Airport Taxi', url: '/airport-taxi-birmingham/' }]),
        taxiServiceSchema('Birmingham Airport (BHX)'),
        faqSchema(faqs),
      ]) }} />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <div className={styles.breadcrumb}><Link href="/">Home</Link> → <Link href="/airports/">Airports</Link> → <span>Birmingham</span></div>
            <div className={styles.airportBadge}><span className={styles.airportCode}>BHX</span><span>Birmingham Airport</span></div>
            <h1>Birmingham Airport Taxi</h1>
            <p>Professional, fixed-price taxi transfers to and from Birmingham Airport (BHX). Free flight tracking and meet & greet at all terminals.</p>
            <div className="btn-group">
              <Link href="/book-now/" className="btn btn--primary btn--lg" id="birmingham-book-now">Book Birmingham Taxi</Link>
              
            </div>
            <div className={styles.trustRow}>
              {['✓ Meet & greet', '✓ Free wait time', '✓ Flight tracking', '✓ Fixed price'].map(t => (
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
            <h2>Birmingham Airport Taxi Prices</h2>
          </div>
          <div className={styles.priceTable}>
            <div className={styles.priceTableHeader}><span>Destination</span><span>Distance</span><span>Travel Time</span><span>From (Saloon)</span><span>Book</span></div>
            {routes.map(r => (
              <div key={r.to} className={styles.priceRow}>
                <span className={styles.destination}>📍 Birmingham → {r.to}</span>
                <span>{r.distance}</span><span>{r.time}</span>
                <strong className={styles.price}>£{r.price}</strong>
                <Link href="/book-now/" className="btn btn--primary btn--sm">Book Now</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Birmingham Airport Taxi FAQs" />

      <section className={styles.bottomCta}>
        <div className="container">
          <h2>Book Your Birmingham Airport Taxi Today</h2>
          <p>Instant confirmation. Fixed price. Professional driver.</p>
          <Link href="/book-now/" className="btn btn--primary btn--lg" id="birmingham-bottom-cta">🚖 Get Instant Quote</Link>
        </div>
      </section>
    </>
  );
}
