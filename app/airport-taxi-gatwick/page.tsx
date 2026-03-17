import type { Metadata } from 'next';
import Link from 'next/link';
import { AIRPORTS } from '../lib/data';
import { faqSchema, breadcrumbSchema, taxiServiceSchema } from '../lib/schema';
import BookingForm from '../components/BookingForm';
import FAQSection from '../components/FAQSection';
import styles from '../airport-taxi-heathrow/airport.module.css';

const airport = AIRPORTS.find(a => a.slug === 'gatwick')!;

export const metadata: Metadata = {
  title: airport.meta.title,
  description: airport.meta.description,
  alternates: { canonical: 'https://www.airportcartaxi.co.uk/airport-taxi-gatwick/' },
};

const faqs = [
  { q: 'Which terminals at Gatwick do you cover?', a: 'We cover both Gatwick South Terminal and North Terminal. Please specify your terminal when booking so your driver knows exactly where to meet you.' },
  { q: 'How long does a taxi from Gatwick to London take?', a: 'The journey from Gatwick to Central London takes approximately 40-60 minutes depending on traffic and your specific destination in London.' },
  { q: 'What is the fixed price from Gatwick to Brighton?', a: 'Our fixed price from Gatwick to Brighton starts from £55 for a standard saloon car. This includes free waiting time and flight tracking.' },
  { q: 'Do you offer meet and greet at Gatwick?', a: 'Yes, your driver will track your flight and wait in the arrivals hall of your terminal with a name board. No extra charge for flight delays.' },
  { q: 'Can I book a Gatwick taxi for very early morning flights?', a: 'Absolutely. We operate 24 hours a day, 7 days a week including early morning and late night pickups at no extra cost.' },
];

const routes = [
  { to: 'London City Centre', distance: '28 miles', time: '40-60 min', price: 60 },
  { to: 'Brighton', distance: '30 miles', time: '35-50 min', price: 55 },
  { to: 'Guildford', distance: '18 miles', time: '25-40 min', price: 45 },
  { to: 'Crawley', distance: '3 miles', time: '10-15 min', price: 18 },
  { to: 'Reigate', distance: '10 miles', time: '18-30 min', price: 30 },
  { to: 'Oxford', distance: '70 miles', time: '75-95 min', price: 120 },
];

export default function GatwickAirportTaxiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([
        breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Airports', url: '/airports/' }, { name: 'Gatwick Airport Taxi', url: '/airport-taxi-gatwick/' }]),
        taxiServiceSchema('Gatwick Airport (LGW)'),
        faqSchema(faqs),
      ]) }} />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <div className={styles.breadcrumb}>
              <Link href="/">Home</Link> → <Link href="/airports/">Airports</Link> → <span>Gatwick</span>
            </div>
            <div className={styles.airportBadge}>
              <span className={styles.airportCode}>LGW</span>
              <span>Gatwick Airport</span>
            </div>
            <h1>Gatwick Airport Taxi</h1>
            <p>Reliable, fixed-price taxi transfers to and from Gatwick Airport. Both North and South Terminals covered. Free flight tracking and meet & greet included.</p>
            <div className="btn-group">
              <Link href="/book-now/" className="btn btn--primary btn--lg" id="gatwick-book-now">Book Gatwick Taxi</Link>
              <a href="tel:+447700900000" className="btn btn--secondary btn--lg">📞 Call Now</a>
            </div>
            <div className={styles.trustRow}>
              {['✓ Both terminals', '✓ 60 min free wait', '✓ Flight tracking', '✓ Fixed price'].map(t => (
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
            <h2>Gatwick Airport Taxi Prices</h2>
            <p>Fixed prices including free flight monitoring and waiting time.</p>
          </div>
          <div className={styles.priceTable}>
            <div className={styles.priceTableHeader}>
              <span>Destination</span><span>Distance</span><span>Travel Time</span><span>From (Saloon)</span><span>Book</span>
            </div>
            {routes.map(r => (
              <div key={r.to} className={styles.priceRow}>
                <span className={styles.destination}>📍 Gatwick → {r.to}</span>
                <span>{r.distance}</span><span>{r.time}</span>
                <strong className={styles.price}>£{r.price}</strong>
                <Link href="/book-now/" className="btn btn--primary btn--sm" id={`gatwick-price-${r.to.replace(/\s/g,'-').toLowerCase()}`}>Book Now</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--gray">
        <div className="container">
          <div className="section-header"><h2>Why Choose Us for Gatwick Transfers?</h2></div>
          <div className={styles.featuresGrid}>
            {[
              { icon: '✈️', title: 'Flight Tracking', desc: 'Real-time flight monitoring means your driver is always ready when you land.' },
              { icon: '🏷️', title: 'Fixed Prices', desc: 'No meters, no surprises. Your quote is your final price.' },
              { icon: '👔', title: 'Meet & Greet', desc: 'Driver waiting in arrivals with your name board, ready to assist with luggage.' },
              { icon: '🚗', title: 'Premium Vehicles', desc: 'Modern saloons, executive cars, MPVs, and minibuses available.' },
              { icon: '🕐', title: '24/7 Available', desc: 'Serving Gatwick round the clock, 365 days a year.' },
              { icon: '📞', title: 'Easy Contact', desc: 'Phone, WhatsApp, or online booking — all confirmed instantly.' },
            ].map(f => (
              <div key={f.title} className={styles.featureCard}>
                <span className={styles.featureIcon}>{f.icon}</span>
                <h3>{f.title}</h3><p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Gatwick Airport Taxi FAQs" />

      <section className={styles.bottomCta}>
        <div className="container">
          <h2>Book Your Gatwick Airport Taxi Now</h2>
          <p>Instant confirmation. Fixed price. Professional driver.</p>
          <Link href="/book-now/" className="btn btn--primary btn--lg" id="gatwick-bottom-cta">🚖 Get Instant Quote</Link>
        </div>
      </section>
    </>
  );
}
