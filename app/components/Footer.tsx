import Link from 'next/link';
import { COMPANY } from '../lib/data';
import styles from './Footer.module.css';

const airportLinks = [
  { href: '/airport-taxi-heathrow/', label: 'Heathrow Airport Taxi' },
  { href: '/airport-taxi-gatwick/', label: 'Gatwick Airport Taxi' },
  { href: '/airport-taxi-manchester/', label: 'Manchester Airport Taxi' },
  { href: '/airport-taxi-luton/', label: 'Luton Airport Taxi' },
  { href: '/airport-taxi-stansted/', label: 'Stansted Airport Taxi' },
  { href: '/airport-taxi-birmingham/', label: 'Birmingham Airport Taxi' },
];

const serviceLinks = [
  { href: '/city-to-city-taxi/', label: 'City to City Taxi' },
  { href: '/long-distance-taxi/', label: 'Long Distance Taxi' },
  { href: '/wedding-transport/', label: 'Wedding Transport' },
  { href: '/event-transport/', label: 'Event Transport' },
  { href: '/cross-border-transfers/', label: 'Cross Border Transfers' },
];

const routeLinks = [
  { href: '/heathrow-to-london-taxi/', label: 'Heathrow to London' },
  { href: '/heathrow-to-oxford-taxi/', label: 'Heathrow to Oxford' },
  { href: '/heathrow-to-cambridge-taxi/', label: 'Heathrow to Cambridge' },
  { href: '/gatwick-to-london-taxi/', label: 'Gatwick to London' },
  { href: '/gatwick-to-brighton-taxi/', label: 'Gatwick to Brighton' },
  { href: '/manchester-airport-to-liverpool-taxi/', label: 'Manchester to Liverpool' },
];

const companyLinks = [
  { href: '/about-us/', label: 'About Us' },
  { href: '/blog/', label: 'Blog' },
  { href: '/contact-us/', label: 'Contact Us' },
  { href: '/book-now/', label: 'Book Now' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      {/* CTA Banner */}
      <div className={styles.ctaBanner}>
        <div className={styles.ctaInner}>
          <div>
            <h2 className={styles.ctaTitle}>Ready to Book Your Airport Taxi?</h2>
            <p className={styles.ctaSubtext}>Fixed prices. Professional drivers. 24/7 service.</p>
          </div>
          <div className={styles.ctaButtons}>
            <Link href="/book-now/" className="btn btn--primary btn--lg" id="footer-book-now">
              🚖 Book Now
            </Link>
            <a href="tel:+447700900000" className={`btn btn--secondary btn--lg`} id="footer-call">
              📞 Call Us
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className={styles.footerMain}>
        <div className={styles.container}>
          <div className={styles.footerGrid}>
            {/* Brand Column */}
            <div className={styles.brandCol}>
              <Link href="/" className={styles.footerLogo}>
                <span>🚖</span>
                <div>
                  <span className={styles.logoMain}>Airport Car Taxi</span>
                  <span className={styles.logoSub}>Reliable UK Airport Transfers</span>
                </div>
              </Link>
              <p className={styles.brandDesc}>
                Professional airport taxi and private transfer service across the UK. Fixed prices, 24/7 availability, and flight monitoring included.
              </p>
              <div className={styles.trustBadgeRow}>
                <div className={styles.trustBadgeItem}>
                  <span className={styles.rating}>★ {COMPANY.googleRating}</span>
                  <span className={styles.ratingLabel}>{COMPANY.reviewCount} Reviews</span>
                </div>
                <div className={styles.divider} />
                <div className={styles.trustBadgeItem}>
                  <span className={styles.rating}>🏆 {COMPANY.yearsOperating}+</span>
                  <span className={styles.ratingLabel}>Years Experience</span>
                </div>
              </div>
              <div className={styles.socials}>
                <a href={`https://wa.me/${COMPANY.whatsapp}`} className={styles.socialBtn} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  💬 WhatsApp
                </a>
                <a href={`mailto:${COMPANY.email}`} className={styles.socialBtn} aria-label="Email us">
                  ✉️ Email
                </a>
              </div>
            </div>

            {/* Airports */}
            <div className={styles.linkCol}>
              <h3 className={styles.colTitle}>Airport Transfers</h3>
              <ul className={styles.linkList}>
                {airportLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={styles.footerLink}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className={styles.linkCol}>
              <h3 className={styles.colTitle}>Our Services</h3>
              <ul className={styles.linkList}>
                {serviceLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={styles.footerLink}>{link.label}</Link>
                  </li>
                ))}
              </ul>
              <h3 className={styles.colTitle} style={{ marginTop: '1.5rem' }}>Popular Routes</h3>
              <ul className={styles.linkList}>
                {routeLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={styles.footerLink}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Company */}
            <div className={styles.linkCol}>
              <h3 className={styles.colTitle}>Company</h3>
              <ul className={styles.linkList}>
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={styles.footerLink}>{link.label}</Link>
                  </li>
                ))}
              </ul>
              <h3 className={styles.colTitle} style={{ marginTop: '1.5rem' }}>Contact</h3>
              <div className={styles.contactList}>
                <a href={`tel:${COMPANY.phone}`} className={styles.contactItem}>
                  📞 <span>{COMPANY.phone}</span>
                </a>
                <a href={`mailto:${COMPANY.email}`} className={styles.contactItem}>
                  ✉️ <span>{COMPANY.email}</span>
                </a>
                <a href={`https://wa.me/${COMPANY.whatsapp}`} className={styles.contactItem} target="_blank" rel="noopener noreferrer">
                  💬 <span>WhatsApp Booking</span>
                </a>
                <div className={styles.contactItem}>
                  📍 <span>Serving all UK airports</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.footerBottom}>
        <div className={styles.bottomInner}>
          <p className={styles.copyright}>
            © {currentYear} Airport Car Taxi. All rights reserved.
          </p>
          <div className={styles.bottomLinks}>
            <a href="#" className={styles.bottomLink}>Privacy Policy</a>
            <a href="#" className={styles.bottomLink}>Terms & Conditions</a>
            <a href="#" className={styles.bottomLink}>Cookie Policy</a>
          </div>
          <div className={styles.paymentBadges}>
            <span className={styles.payBadge}>💳 Visa</span>
            <span className={styles.payBadge}>💳 Mastercard</span>
            <span className={styles.payBadge}>💷 Cash</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
