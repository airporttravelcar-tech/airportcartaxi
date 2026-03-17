import type { Metadata } from 'next';
import Link from 'next/link';
import { AIRPORTS } from '../lib/data';
import { faqSchema, breadcrumbSchema, taxiServiceSchema } from '../lib/schema';
import BookingForm from '../components/BookingForm';
import FAQSection from '../components/FAQSection';
import styles from '../airport-taxi-heathrow/airport.module.css';

const airport = AIRPORTS.find(a => a.slug === 'luton')!;

export const metadata: Metadata = {
  title: airport.meta.title,
  description: airport.meta.description,
  alternates: { canonical: 'https://www.airportcartaxi.co.uk/airport-taxi-luton/' },
};

const faqs = [
  { q: 'How far is Luton Airport from London?', a: 'Luton Airport is approximately 35 miles north of Central London. The journey by taxi takes around 45-70 minutes depending on traffic.' },
  { q: 'What is the price from Luton Airport to London?', a: 'Our fixed price from Luton Airport to Central London starts from £60 for a standard saloon car, including free waiting time and flight tracking.' },
  { q: 'Do you cover routes from Luton Airport to Milton Keynes?', a: 'Yes, Luton to Milton Keynes is approximately 25 miles and takes 30-45 minutes. Our fixed price starts from £55.' },
  { q: 'Is there parking at Luton Airport taxi rank?', a: 'Our drivers park and meet you at the designated meeting point in the terminal after tracking your flight arrival.' },
  { q: 'What airlines fly from Luton Airport?', a: 'Luton is a base for Wizz Air, EasyJet, and Ryanair among others. We serve all airlines operating from Luton at the same fixed prices.' },
];

const routes = [
  { to: 'London City Centre', distance: '35 miles', time: '45-70 min', price: 60 },
  { to: 'Luton Town', distance: '2 miles', time: '8-15 min', price: 15 },
  { to: 'Milton Keynes', distance: '25 miles', time: '30-45 min', price: 55 },
  { to: 'Bedford', distance: '22 miles', time: '28-40 min', price: 50 },
  { to: 'Northampton', distance: '30 miles', time: '40-55 min', price: 60 },
  { to: 'Oxford', distance: '50 miles', time: '55-75 min', price: 90 },
];

export default function LutonAirportTaxiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([
        breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Airports', url: '/airports/' }, { name: 'Luton Airport Taxi', url: '/airport-taxi-luton/' }]),
        taxiServiceSchema('Luton Airport (LTN)'),
        faqSchema(faqs),
      ]) }} />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <div className={styles.breadcrumb}><Link href="/">Home</Link> → <Link href="/airports/">Airports</Link> → <span>Luton</span></div>
            <div className={styles.airportBadge}><span className={styles.airportCode}>LTN</span><span>Luton Airport</span></div>
            <h1>Luton Airport Taxi</h1>
            <p>Reliable, fixed-price taxi transfers to and from London Luton Airport. Free flight tracking, meet & greet, and 24/7 service included.</p>
            <div className="btn-group">
              <Link href="/book-now/" className="btn btn--primary btn--lg" id="luton-book-now">Book Luton Taxi</Link>
              
            </div>
            <div className={styles.trustRow}>
              {['✓ All areas covered', '✓ Free wait time', '✓ Flight tracking', '✓ Fixed price'].map(t => (
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
            <h2>Luton Airport Taxi Prices</h2>
          </div>
          <div className={styles.priceTable}>
            <div className={styles.priceTableHeader}><span>Destination</span><span>Distance</span><span>Travel Time</span><span>From (Saloon)</span><span>Book</span></div>
            {routes.map(r => (
              <div key={r.to} className={styles.priceRow}>
                <span className={styles.destination}>📍 Luton → {r.to}</span>
                <span>{r.distance}</span><span>{r.time}</span>
                <strong className={styles.price}>£{r.price}</strong>
                <Link href="/book-now/" className="btn btn--primary btn--sm">Book Now</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Luton Airport Taxi FAQs" />

      <section className={styles.bottomCta}>
        <div className="container">
          <h2>Book Your Luton Airport Taxi Today</h2>
          <p>Instant confirmation. Fixed price. Professional driver.</p>
          <Link href="/book-now/" className="btn btn--primary btn--lg" id="luton-bottom-cta">🚖 Get Instant Quote</Link>
        </div>
      </section>
    </>
  );
}
