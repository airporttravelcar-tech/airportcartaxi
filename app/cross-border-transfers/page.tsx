import type { Metadata } from 'next';
import Link from 'next/link';
import BookingForm from '../components/BookingForm';
import FAQSection from '../components/FAQSection';
import styles from '../city-to-city-taxi/service.module.css';

export const metadata: Metadata = {
  title: 'Cross Border Taxi Transfers | UK to Europe | Airport Car Taxi',
  description: 'UK to Europe cross-border taxi transfers. Fixed prices, experienced international drivers, and door-to-door service from any UK location to France, Belgium, Netherlands, and beyond.',
  alternates: { canonical: 'https://www.airportcartaxi.co.uk/cross-border-transfers/' },
};

const crossBorderFaqs = [
  { q: 'Which European countries do you cover?', a: 'We cover France, Belgium, Netherlands, Germany, Spain, and many other European countries. Routes through the Channel Tunnel or ferry are both available.' },
  { q: 'How do you travel from UK to Europe?', a: 'We use the Eurotunnel (Channel Tunnel) or ferry crossings depending on your destination and preference. All crossing costs are included in your fixed quote.' },
  { q: 'Do I need a visa or any special documents?', a: 'You will need a valid passport for all cross-border journeys. For EU countries, check the current UK government guidance on travel requirements post-Brexit.' },
  { q: 'Is a cross-border taxi more convenient than a flight?', a: 'For destinations in northern France, Belgium, and Netherlands, a door-to-door taxi transfer can be faster and more convenient than flying when you factor in airport time.' },
];

const crossBorderRoutes = [
  { from: 'London', to: 'Paris, France', distance: '285 miles', time: '5-6 hours', price: 650 },
  { from: 'London', to: 'Brussels, Belgium', distance: '200 miles', time: '4-5 hours', price: 550 },
  { from: 'London', to: 'Amsterdam, Netherlands', distance: '360 miles', time: '6-7 hours', price: 750 },
  { from: 'London', to: 'Calais, France', distance: '90 miles', time: '2.5-3.5 hours', price: 280 },
  { from: 'Manchester', to: 'Paris, France', distance: '450 miles', time: '7-9 hours', price: 900 },
  { from: 'Birmingham', to: 'Brussels, Belgium', distance: '330 miles', time: '6-7 hours', price: 720 },
];

export default function CrossBorderTransfersPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <span className="badge badge--yellow">Cross Border</span>
            <h1>UK to Europe Taxi Transfers</h1>
            <p>Door-to-door cross-border taxi transfers from any UK city to France, Belgium, Netherlands, and beyond. Fixed prices, experienced international drivers.</p>
            <div className="btn-group" style={{ justifyContent: 'center' }}>
              <Link href="/book-now/" className="btn btn--primary btn--lg" id="crossborder-book-now">Get a Cross-Border Quote</Link>
              <a href="tel:+447700900000" className="btn btn--secondary btn--lg">📞 Call Now</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="badge badge--yellow">Popular Routes</span>
            <h2>UK to Europe Transfer Prices</h2>
            <p>Fixed prices including all Channel Tunnel or ferry crossing costs.</p>
          </div>
          <div className={styles.routeTable}>
            <div className={styles.routeHeader}><span>Route</span><span>Distance</span><span>Approx Time</span><span>From</span><span>Book</span></div>
            {crossBorderRoutes.map(r => (
              <div key={`${r.from}-${r.to}`} className={styles.routeRow}>
                <span className={styles.route}>{r.from} → {r.to}</span>
                <span>{r.distance}</span><span>{r.time}</span>
                <strong>£{r.price}</strong>
                <Link href="/book-now/" className="btn btn--primary btn--sm">Book</Link>
              </div>
            ))}
          </div>
          <p style={{ marginTop: '1rem', fontSize: '0.82rem', color: '#7B8794', fontStyle: 'italic' }}>* Prices include Channel Tunnel or ferry costs. All prices fixed — no hidden charges.</p>
        </div>
      </section>

      <section className="section section--gray">
        <div className="container">
          <div className="section-header"><h2>Book Your Cross-Border Transfer</h2></div>
          <BookingForm variant="page" />
        </div>
      </section>

      <FAQSection faqs={crossBorderFaqs} title="Cross Border Transfer FAQs" />
    </>
  );
}
