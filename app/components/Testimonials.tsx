import { TESTIMONIALS, COMPANY } from '../lib/data';
import styles from './Testimonials.module.css';

function StarRating({ rating }: { rating: number }) {
  return (
    <div className={styles.stars} aria-label={`${rating} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <span key={i} className={i < rating ? styles.starFilled : styles.starEmpty}>★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="section section--dark" id="reviews">
      <div className="container">
        <div className="section-header">
          <span className="badge" style={{ background: 'rgba(255,193,7,0.2)', color: '#FFC107' }}>
            ★ {COMPANY.googleRating} Google Rating
          </span>
          <h2 style={{ color: '#fff' }}>What Our Customers Say</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)' }}>
            Trusted by over {COMPANY.reviewCount.toLocaleString()} happy customers across the UK
          </p>
        </div>
        <div className={styles.grid}>
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.quoteIcon}>"</div>
              <StarRating rating={t.rating} />
              <p className={styles.text}>{t.text}</p>
              <div className={styles.authorRow}>
                <div className={styles.avatar}>
                  {t.name.charAt(0)}
                </div>
                <div className={styles.authorInfo}>
                  <strong className={styles.authorName}>{t.name}</strong>
                  <span className={styles.authorService}>{t.service}</span>
                  <span className={styles.authorLocation}>📍 {t.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Rating */}
        <div className={styles.ratingBanner}>
          <div className={styles.ratingScore}>
            <span className={styles.bigRating}>{COMPANY.googleRating}</span>
            <div className={styles.ratingDetails}>
              <StarRating rating={5} />
              <span className={styles.ratingCount}>Based on {COMPANY.reviewCount.toLocaleString()} reviews</span>
            </div>
          </div>
          <div className={styles.ratingDivider} />
          <div className={styles.platformBadges}>
            <div className={styles.platformBadge}>
              <span className={styles.platformIcon}>G</span>
              <div>
                <div className={styles.platformName}>Google Reviews</div>
                <div className={styles.platformRating}>★ {COMPANY.googleRating} / 5.0</div>
              </div>
            </div>
            <div className={styles.platformBadge}>
              <span className={styles.platformIcon} style={{ background: '#00B67A' }}>T</span>
              <div>
                <div className={styles.platformName}>Trustpilot</div>
                <div className={styles.platformRating}>★ 4.8 / 5.0</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
