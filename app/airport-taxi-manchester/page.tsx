import type { Metadata } from 'next';
import Link from 'next/link';
import { AIRPORTS } from '../lib/data';
import { faqSchema, breadcrumbSchema, taxiServiceSchema } from '../lib/schema';
import BookingForm from '../components/BookingForm';
import FAQSection from '../components/FAQSection';
import styles from '../airport-taxi-heathrow/airport.module.css';

const airport = AIRPORTS.find(a => a.slug === 'manchester')!;

export const metadata: Metadata = {
  title: airport.meta.title,
  description: airport.meta.description,
  alternates: { canonical: 'https://www.airportcartaxi.co.uk/airport-taxi-manchester/' },
};

const faqs = [
  { q: 'Which Manchester Airport terminals do you cover?', a: 'We cover all Manchester Airport terminals: T1, T2, and T3. Your driver will be in the arrivals hall with your name board.' },
  { q: 'How long does a Manchester Airport taxi to the city centre take?', a: 'The journey from Manchester Airport to Manchester City Centre takes approximately 20-35 minutes depending on traffic.' },
  { q: 'Do you cover routes from Manchester Airport to Liverpool?', a: 'Yes, we cover Manchester Airport to Liverpool, which is approximately 35 miles and takes 40-60 minutes. Fixed price from £70.' },
  { q: 'What is the price for a Manchester Airport taxi?', a: 'Prices start from £30 for Manchester city centre routes. Longer routes to Leeds, Sheffield, and beyond are also available at fixed prices.' },
  { q: 'Can I book a taxi for early morning Manchester Airport departures?', a: 'Yes, we operate 24/7. Whether your departure is at 4am or midnight, we will get you there on time at no extra charge.' },
];

const routes = [
  { to: 'Manchester City Centre', distance: '9 miles', time: '20-35 min', price: 30 },
  { to: 'Liverpool', distance: '35 miles', time: '40-60 min', price: 70 },
  { to: 'Leeds', distance: '46 miles', time: '55-75 min', price: 90 },
  { to: 'Sheffield', distance: '37 miles', time: '45-65 min', price: 75 },
  { to: 'Bolton', distance: '12 miles', time: '25-40 min', price: 38 },
  { to: 'Chester', distance: '28 miles', time: '35-55 min', price: 65 },
];

export default function ManchesterAirportTaxiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([
        breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Airports', url: '/airports/' }, { name: 'Manchester Airport Taxi', url: '/airport-taxi-manchester/' }]),
        taxiServiceSchema('Manchester Airport (MAN)'),
        faqSchema(faqs),
      ]) }} />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <div className={styles.breadcrumb}><Link href="/">Home</Link> → <Link href="/airports/">Airports</Link> → <span>Manchester</span></div>
            <div className={styles.airportBadge}><span className={styles.airportCode}>MAN</span><span>Manchester Airport</span></div>
            <h1>Manchester Airport Taxi</h1>
            <p>Professional taxi transfers to and from Manchester Airport with fixed prices. All three terminals covered. Free flight tracking included.</p>
            <div className="btn-group">
              <Link href="/book-now/" className="btn btn--primary btn--lg" id="manchester-book-now">Book Manchester Taxi</Link>
              
            </div>
            <div className={styles.trustRow}>
              {['✓ T1, T2, T3 covered', '✓ Free wait time', '✓ Flight tracking', '✓ Fixed price'].map(t => (
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
            <h2>Manchester Airport Taxi Prices</h2>
            <p>All prices are fixed and include free waiting time and flight monitoring.</p>
          </div>
          <div className={styles.priceTable}>
            <div className={styles.priceTableHeader}><span>Destination</span><span>Distance</span><span>Travel Time</span><span>From (Saloon)</span><span>Book</span></div>
            {routes.map(r => (
              <div key={r.to} className={styles.priceRow}>
                <span className={styles.destination}>📍 Manchester → {r.to}</span>
                <span>{r.distance}</span><span>{r.time}</span>
                <strong className={styles.price}>£{r.price}</strong>
                <Link href="/book-now/" className="btn btn--primary btn--sm" id={`manchester-price-${r.to.replace(/\s/g,'-').toLowerCase()}`}>Book Now</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Manchester Airport Taxi FAQs" />

      <section className={styles.bottomCta}>
        <div className="container">
          <h2>Book Your Manchester Airport Taxi Now</h2>
          <p>Instant confirmation. Fixed price. Professional driver.</p>
          <Link href="/book-now/" className="btn btn--primary btn--lg" id="manchester-bottom-cta">🚖 Get Instant Quote</Link>
        </div>
      </section>
    </>
  );
}
