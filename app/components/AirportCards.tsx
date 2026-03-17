import Link from 'next/link';
import { AIRPORTS } from '../lib/data';
import styles from './AirportCards.module.css';

const iconMap: Record<string, string> = {
  heathrow: '✈️',
  gatwick: '✈️',
  manchester: '✈️',
  luton: '🛫',
  stansted: '🛫',
  birmingham: '🛩️',
};

export default function AirportCards() {
  return (
    <section className="section section--gray" id="airport-transfers">
      <div className="container">
        <div className="section-header">
          <span className="badge badge--yellow">UK Airports</span>
          <h2>Airport Taxi Services</h2>
          <p>Fixed-price transfers from all major UK airports. Professional drivers, flight tracking, and 24/7 availability.</p>
        </div>
        <div className={styles.grid}>
          {AIRPORTS.map((airport) => (
            <Link
              key={airport.slug}
              href={`/airport-taxi-${airport.slug}/`}
              className={styles.card}
              id={`airport-card-${airport.slug}`}
            >
              <div className={styles.cardHeader}>
                <span className={styles.icon}>{iconMap[airport.slug] || '✈️'}</span>
                <div className={styles.badge}>{airport.code}</div>
              </div>
              <h3 className={styles.cardTitle}>{airport.name}</h3>
              <p className={styles.cardLocation}>📍 {airport.location}</p>
              <p className={styles.cardDesc}>{airport.description}</p>
              <div className={styles.topRoutes}>
                <span className={styles.routesLabel}>Popular routes:</span>
                <div className={styles.routeTags}>
                  {airport.topRoutes.slice(0, 3).map((route) => (
                    <span key={route} className={styles.routeTag}>{route}</span>
                  ))}
                </div>
              </div>
              <div className={styles.cardFooter}>
                <p className={styles.priceFrom}>From <strong>£{airport.priceFrom}</strong></p>
                <span className={styles.cta}>Book Now →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
