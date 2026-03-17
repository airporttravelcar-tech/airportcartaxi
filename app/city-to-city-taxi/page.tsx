import type { Metadata } from 'next';
import Link from 'next/link';
import BookingForm from '../components/BookingForm';
import FAQSection from '../components/FAQSection';
import VehicleCards from '../components/VehicleCards';
import styles from './service.module.css';

export const metadata: Metadata = {
  title: 'City to City Taxi UK | Fixed Price Intercity Transfers',
  description: 'Book reliable city to city taxi transfers across the UK at fixed prices. Door-to-door service, professional drivers, and 24/7 availability.',
  alternates: { canonical: 'https://www.airportcartaxi.co.uk/city-to-city-taxi/' },
};

const faqs = [
  { q: 'Can I book a city to city taxi across the UK?', a: 'Yes, we cover all major UK cities. Whether you need London to Manchester, Birmingham to Bristol, or any other intercity route, we provide a fixed-price, door-to-door service.' },
  { q: 'Are city to city taxi prices fixed?', a: 'Yes, all our intercity taxi prices are fully fixed. Get your quote online and the price will never change, regardless of traffic or time of day.' },
  { q: 'How far in advance should I book?', a: 'We recommend booking at least 24 hours in advance for city to city transfers, though we can often accommodate shorter notice bookings.' },
  { q: 'Do you offer return journeys for city to city transfers?', a: 'Yes, you can book return journeys at a discounted rate. Simply select "add return journey" in the booking form.' },
];

const popularRoutes = [
  { from: 'London', to: 'Manchester', distance: '200 miles', time: '3.5-4.5 hours', price: 280 },
  { from: 'London', to: 'Birmingham', distance: '120 miles', time: '2-2.5 hours', price: 180 },
  { from: 'London', to: 'Bristol', distance: '120 miles', time: '2-2.5 hours', price: 175 },
  { from: 'Manchester', to: 'London', distance: '200 miles', time: '3.5-4.5 hours', price: 280 },
  { from: 'Birmingham', to: 'Leeds', distance: '115 miles', time: '2-2.5 hours', price: 180 },
  { from: 'London', to: 'Edinburgh', distance: '400 miles', time: '7-8 hours', price: 550 },
];

export default function CityToCityPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <span className="badge badge--yellow">Intercity Travel</span>
            <h1>City to City Taxi Service UK</h1>
            <p>Comfortable, fixed-price taxi transfers between any UK cities. Door-to-door service, professional drivers, and no hidden fees.</p>
            <div className="btn-group" style={{ justifyContent: 'center' }}>
              <Link href="/book-now/" className="btn btn--primary btn--lg" id="city-book-now">Get a Quote</Link>
              
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="badge badge--yellow">Popular Routes</span>
            <h2>Popular City to City Routes</h2>
            <p>Fixed prices on the UK's most popular intercity routes. All prices are per vehicle, not per person.</p>
          </div>
          <div className={styles.routeTable}>
            <div className={styles.routeHeader}><span>Route</span><span>Distance</span><span>Travel Time</span><span>From</span><span>Book</span></div>
            {popularRoutes.map(r => (
              <div key={`${r.from}-${r.to}`} className={styles.routeRow}>
                <span className={styles.route}>{r.from} → {r.to}</span>
                <span>{r.distance}</span><span>{r.time}</span>
                <strong>£{r.price}</strong>
                <Link href="/book-now/" className="btn btn--primary btn--sm" id={`city-route-${r.from.toLowerCase()}-${r.to.toLowerCase()}`}>Book</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--gray">
        <div className="container">
          <div className="section-header"><h2>Book Your City Transfer</h2></div>
          <BookingForm variant="page" />
        </div>
      </section>

      <VehicleCards />
      <FAQSection faqs={faqs} title="City Transfer FAQs" />
    </>
  );
}
