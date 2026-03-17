import type { Metadata } from 'next';
import Link from 'next/link';
import BookingForm from '../components/BookingForm';
import FAQSection from '../components/FAQSection';
import styles from '../city-to-city-taxi/service.module.css';

export const metadata: Metadata = {
  title: 'Long Distance Taxi UK | Fixed Price Long Haul Transfers',
  description: 'Book reliable long distance taxi transfers anywhere in the UK. Fixed prices, professional drivers, comfortable vehicles, and 24/7 service for any journey.',
  alternates: { canonical: 'https://www.airportcartaxi.co.uk/long-distance-taxi/' },
};

const longDistanceFaqs = [
  { q: 'How far will you travel for a long distance taxi?', a: 'We cover the entire UK and can arrange cross-border journeys to Europe. There is no maximum distance — the further you need to go, the more we save you compared to flying or rail.' },
  { q: 'Do drivers take breaks on very long journeys?', a: 'Yes, for journeys over 4 hours, our drivers take legally required rest stops. We factor these into the journey time provided in your quote.' },
  { q: 'Can I request specific stops en route?', a: 'Yes, you can request brief stops for fuel, food, or personal errands during your long distance journey. This is included as part of our service.' },
  { q: 'Is a long distance taxi cheaper than the train?', a: 'For groups of 2 or more, a private long distance taxi is often cheaper than multiple train tickets, and significantly more convenient with door-to-door service.' },
];

const longDistanceRoutes = [
  { from: 'London', to: 'Edinburgh', distance: '400 miles', time: '7-8 hours', price: 550 },
  { from: 'London', to: 'Glasgow', distance: '400 miles', time: '7-8 hours', price: 570 },
  { from: 'London', to: 'Newcastle', distance: '280 miles', time: '4.5-5.5 hours', price: 380 },
  { from: 'London', to: 'Aberdeen', distance: '520 miles', time: '9-10 hours', price: 720 },
  { from: 'Birmingham', to: 'Edinburgh', distance: '295 miles', time: '5-6 hours', price: 420 },
  { from: 'Manchester', to: 'London', distance: '200 miles', time: '3.5-4.5 hours', price: 280 },
];

export default function LongDistanceTaxiPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <span className="badge badge--yellow">Long Distance</span>
            <h1>Long Distance Taxi UK</h1>
            <p>Comfortable, fixed-price long distance taxi transfers anywhere in the UK. Professional drivers, modern vehicles, and no journey is too far.</p>
            <div className="btn-group" style={{ justifyContent: 'center' }}>
              <Link href="/book-now/" className="btn btn--primary btn--lg" id="longdistance-book-now">Get a Long Distance Quote</Link>
              
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="badge badge--yellow">Popular Long Distance Routes</span>
            <h2>UK Long Distance Taxi Prices</h2>
            <p>Fixed prices for the UK's most popular long distance taxi routes.</p>
          </div>
          <div className={styles.routeTable}>
            <div className={styles.routeHeader}><span>Route</span><span>Distance</span><span>Approx Time</span><span>From</span><span>Book</span></div>
            {longDistanceRoutes.map(r => (
              <div key={`${r.from}-${r.to}`} className={styles.routeRow}>
                <span className={styles.route}>{r.from} → {r.to}</span>
                <span>{r.distance}</span><span>{r.time}</span>
                <strong>£{r.price}</strong>
                <Link href="/book-now/" className="btn btn--primary btn--sm">Book</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--gray">
        <div className="container">
          <div className="section-header"><h2>Book Your Long Distance Journey</h2></div>
          <BookingForm variant="page" />
        </div>
      </section>

      <FAQSection faqs={longDistanceFaqs} title="Long Distance Taxi FAQs" />
    </>
  );
}
