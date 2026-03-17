import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { AIRPORTS } from '../lib/data';
import { faqSchema, breadcrumbSchema, taxiServiceSchema } from '../lib/schema';
import BookingForm from '../components/BookingForm';
import FAQSection from '../components/FAQSection';
import styles from './airport.module.css';

// Heathrow specific data
const airport = AIRPORTS.find(a => a.slug === 'heathrow')!;

export const metadata: Metadata = {
  title: airport.meta.title,
  description: airport.meta.description,
  alternates: { canonical: 'https://www.airportcartaxi.co.uk/airport-taxi-heathrow/' },
  keywords: ['Heathrow airport taxi', 'Heathrow taxi', 'Heathrow airport transfer', 'taxi from Heathrow to London', 'Heathrow airport cab', 'LHR taxi'],
};

const heathrowFaqs = [
  { q: 'How do I find my driver at Heathrow Airport?', a: 'Your driver will be waiting in the arrivals hall of your terminal, holding a name board with your name. They will track your flight so they know exactly when to meet you.' },
  { q: 'How long does the taxi from Heathrow to London take?', a: 'The journey from Heathrow Airport to Central London typically takes 30-50 minutes, depending on traffic and your specific destination.' },
  { q: 'Which terminals at Heathrow do you cover?', a: 'We cover all Heathrow terminals: T1, T2, T3, T4, and T5. Simply state your terminal when booking.' },
  { q: 'What is the price for a Heathrow airport taxi to London?', a: 'Our fixed prices start from £45 for a standard saloon car to Central London. Executive cars, MPVs and minibuses are also available.' },
  { q: 'Is there free waiting time at Heathrow included?', a: 'Yes. We include 60 minutes of free waiting time from your actual landing time for international flights, and 45 minutes for domestic flights.' },
  { q: 'Can I book a Heathrow taxi for early morning or late night?', a: 'Absolutely. We operate 24/7, 365 days a year. Our drivers are available for all early morning, late night, and holiday transfers at no extra charge.' },
];

const routes = [
  { to: 'London City Centre', distance: '15 miles', time: '30-50 min', price: 45 },
  { to: 'Oxford', distance: '35 miles', time: '45-70 min', price: 75 },
  { to: 'Cambridge', distance: '65 miles', time: '70-90 min', price: 110 },
  { to: 'Brighton', distance: '60 miles', time: '60-80 min', price: 100 },
  { to: 'Windsor', distance: '12 miles', time: '20-35 min', price: 35 },
  { to: 'Guildford', distance: '25 miles', time: '35-55 min', price: 65 },
];

export default function HeathrowAirportTaxiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([
        breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Airports', url: '/airports/' }, { name: 'Heathrow Airport Taxi', url: '/airport-taxi-heathrow/' }]),
        taxiServiceSchema('Heathrow Airport (LHR)'),
        faqSchema(heathrowFaqs),
      ]) }} />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <div className={styles.breadcrumb}>
              <Link href="/">Home</Link> → <Link href="/airports/">Airports</Link> → <span>Heathrow</span>
            </div>
            <div className={styles.airportBadge}>
              <span className={styles.airportCode}>LHR</span>
              <span>Heathrow Airport</span>
            </div>
            <h1>Heathrow Airport Taxi</h1>
            <p>Fixed-price, professional taxi transfers to and from Heathrow Airport. All terminals covered. Free flight tracking. Meet & greet included.</p>
            <div className="btn-group">
              <Link href="/book-now/" className="btn btn--primary btn--lg" id="heathrow-book-now">Book Heathrow Taxi</Link>
              <a href="tel:+447700900000" className="btn btn--secondary btn--lg">📞 Call Now</a>
            </div>
            <div className={styles.trustRow}>
              {['✓ All terminals', '✓ 60 min free wait', '✓ Flight tracking', '✓ Fixed price'].map(t => (
                <span key={t} className={styles.trustTag}>{t}</span>
              ))}
            </div>
          </div>
          <div className={styles.heroForm}>
            <BookingForm variant="hero" />
          </div>
        </div>
      </section>

      {/* Price Table */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="badge badge--yellow">Fixed Prices</span>
            <h2>Heathrow Airport Taxi Prices</h2>
            <p>All prices are fixed and include free flight tracking, taxes, and tolls.</p>
          </div>
          <div className={styles.priceTable}>
            <div className={styles.priceTableHeader}>
              <span>Destination</span>
              <span>Distance</span>
              <span>Travel Time</span>
              <span>From (Saloon)</span>
              <span>Book</span>
            </div>
            {routes.map((r) => (
              <div key={r.to} className={styles.priceRow}>
                <span className={styles.destination}>📍 Heathrow → {r.to}</span>
                <span>{r.distance}</span>
                <span>{r.time}</span>
                <strong className={styles.price}>£{r.price}</strong>
                <Link href="/book-now/" className="btn btn--primary btn--sm" id={`heathrow-price-${r.to.replace(/\s/g,'-').toLowerCase()}`}>Book Now</Link>
              </div>
            ))}
          </div>
          <p className={styles.priceNote}>* Prices shown for standard saloon. Executive, MPV, Minibus and Luxury options available. All prices are per vehicle, not per person.</p>
        </div>
      </section>

      {/* Why Book With Us */}
      <section className="section section--gray">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Airport Car Taxi for Heathrow?</h2>
          </div>
          <div className={styles.featuresGrid}>
            {[
              { icon: '✈️', title: 'Flight Tracking', desc: 'We monitor your flight in real time. Your driver adjusts automatically for any delays.' },
              { icon: '👔', title: 'Meet & Greet', desc: 'Your driver waits in arrivals with your name board — no need to search for them.' },
              { icon: '💷', title: 'Fixed Prices', desc: 'No meters, no surge pricing. The price you see is the price you pay.' },
              { icon: '🚗', title: 'Premium Fleet', desc: 'Modern, clean vehicles from standard saloons to luxury chauffeur cars.' },
              { icon: '🕐', title: '24/7 Service', desc: 'Available 365 days a year, including Christmas, New Year, and Bank Holidays.' },
              { icon: '📱', title: 'Easy Booking', desc: 'Book online, by phone, or via WhatsApp. Instant confirmation every time.' },
            ].map((f) => (
              <div key={f.title} className={styles.featureCard}>
                <span className={styles.featureIcon}>{f.icon}</span>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={heathrowFaqs} title="Heathrow Airport Taxi FAQs" />

      {/* Bottom CTA */}
      <section className={styles.bottomCta}>
        <div className="container">
          <h2>Book Your Heathrow Airport Taxi Today</h2>
          <p>Instant confirmation. Fixed price. Professional driver. No hidden fees.</p>
          <Link href="/book-now/" className="btn btn--primary btn--lg" id="heathrow-bottom-cta">
            🚖 Book Now — Instant Quote
          </Link>
        </div>
      </section>
    </>
  );
}
