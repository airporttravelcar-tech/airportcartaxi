import Link from 'next/link';
import { VEHICLES } from '../lib/data';
import styles from './VehicleCards.module.css';

const categoryColors: Record<string, string> = {
  Economy: '#10B981',
  Business: '#3FA9F5',
  Family: '#8B5CF6',
  Group: '#F59E0B',
  Premium: '#EF4444',
};

export default function VehicleCards() {
  return (
    <section className="section" id="vehicles">
      <div className="container">
        <div className="section-header">
          <span className="badge badge--blue">Our Fleet</span>
          <h2>Choose Your Vehicle</h2>
          <p>Select the perfect vehicle for your journey. All cars are modern, clean and professionally maintained.</p>
        </div>
        <div className={styles.grid}>
          {VEHICLES.map((vehicle) => (
            <div key={vehicle.id} className={styles.card} id={`vehicle-${vehicle.id}`}>
              <div className={styles.cardTop}>
                <div className={styles.vehicleIcon}>{vehicle.icon}</div>
                <span
                  className={styles.categoryBadge}
                  style={{ background: `${categoryColors[vehicle.category]}20`, color: categoryColors[vehicle.category] }}
                >
                  {vehicle.category}
                </span>
              </div>
              <h3 className={styles.vehicleName}>{vehicle.name}</h3>
              <div className={styles.capacityRow}>
                <div className={styles.capacityItem}>
                  <span>👥</span>
                  <span>Up to {vehicle.passengers} passengers</span>
                </div>
                <div className={styles.capacityItem}>
                  <span>🧳</span>
                  <span>Up to {vehicle.luggage} bags</span>
                </div>
              </div>
              <p className={styles.vehicleDesc}>{vehicle.description}</p>
              <ul className={styles.features}>
                {vehicle.features.map((f) => (
                  <li key={f} className={styles.featureItem}>
                    <span className={styles.featureCheck}>✓</span> {f}
                  </li>
                ))}
              </ul>
              <Link href="/book-now/" className={`btn btn--primary ${styles.bookBtn}`} id={`book-${vehicle.id}`}>
                Book This Vehicle
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
