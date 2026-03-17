import { TRUST_FEATURES } from '../lib/data';
import styles from './TrustBadges.module.css';

export default function TrustBadges() {
  return (
    <section className={styles.section} id="why-us">
      <div className="container">
        <div className={styles.grid}>
          {TRUST_FEATURES.map((f, i) => (
            <div key={i} className={styles.item}>
              <span className={styles.icon}>{f.icon}</span>
              <div>
                <strong className={styles.title}>{f.title}</strong>
                <p className={styles.desc}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
