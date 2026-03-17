'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const navLinks = [
  { href: '/', label: 'Home' },
  {
    href: '/airports/',
    label: 'Airport Transfers',
    children: [
      { href: '/airport-taxi-heathrow/', label: '✈ Heathrow Airport' },
      { href: '/airport-taxi-gatwick/', label: '✈ Gatwick Airport' },
      { href: '/airport-taxi-manchester/', label: '✈ Manchester Airport' },
      { href: '/airport-taxi-luton/', label: '✈ Luton Airport' },
      { href: '/airport-taxi-stansted/', label: '✈ Stansted Airport' },
      { href: '/airport-taxi-birmingham/', label: '✈ Birmingham Airport' },
    ],
  },
  { href: '/city-to-city-taxi/', label: 'City Transfers' },
  { href: '/wedding-transport/', label: 'Wedding' },
  { href: '/event-transport/', label: 'Events' },
  { href: '/cross-border-transfers/', label: 'Cross Border' },
  { href: '/blog/', label: 'Blog' },
  { href: '/contact-us/', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`} role="navigation" aria-label="Main navigation">
        <div className={styles.container}>
          {/* Logo */}
          <Link href="/" className={styles.logo} aria-label="Airport Car Taxi - Home">
            <span className={styles.logoIcon}>🚖</span>
            <div className={styles.logoText}>
              <span className={styles.logoMain}>Airport Car Taxi</span>
              <span className={styles.logoSub}>Reliable UK Airport Transfers</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className={styles.navList} role="list">
            {navLinks.map((link) => (
              <li
                key={link.href}
                className={`${styles.navItem} ${link.children ? styles.hasDropdown : ''}`}
                onMouseEnter={() => link.children && setOpenDropdown(link.href)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link href={link.href} className={styles.navLink}>
                  {link.label}
                  {link.children && <span className={styles.chevron}>▾</span>}
                </Link>
                {link.children && openDropdown === link.href && (
                  <ul className={styles.dropdown} role="list">
                    {link.children.map((child) => (
                      <li key={child.href}>
                        <Link href={child.href} className={styles.dropdownLink}>
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className={styles.navCtas}>
            <a href="tel:+447700900000" className={styles.phoneLink} aria-label="Call us">
              <span>📞</span> +44 7700 900000
            </a>
            <Link href="/book-now/" className="btn btn--primary btn--sm" id="nav-book-now">
              Book Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className={styles.menuToggle}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <span className={`${styles.menuBar} ${mobileOpen ? styles.open : ''}`} />
            <span className={`${styles.menuBar} ${mobileOpen ? styles.open : ''}`} />
            <span className={`${styles.menuBar} ${mobileOpen ? styles.open : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className={styles.mobileOverlay} onClick={() => setMobileOpen(false)} />
      )}
      <div className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileMenuOpen : ''}`}>
        <div className={styles.mobileHeader}>
          <Link href="/" className={styles.logo} onClick={() => setMobileOpen(false)}>
            <span className={styles.logoIcon}>🚖</span>
            <span className={styles.logoMain}>Airport Car Taxi</span>
          </Link>
          <button className={styles.closeBtn} onClick={() => setMobileOpen(false)} aria-label="Close menu">✕</button>
        </div>
        <nav className={styles.mobileNav}>
          {navLinks.map((link) => (
            <div key={link.href} className={styles.mobileNavItem}>
              <Link href={link.href} className={styles.mobileNavLink} onClick={() => setMobileOpen(false)}>
                {link.label}
              </Link>
              {link.children && (
                <div className={styles.mobileDropdown}>
                  {link.children.map((child) => (
                    <Link key={child.href} href={child.href} className={styles.mobileDropdownLink} onClick={() => setMobileOpen(false)}>
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        <div className={styles.mobileCtas}>
          <a href="tel:+447700900000" className={`btn btn--secondary`}>📞 Call Now</a>
          <Link href="/book-now/" className="btn btn--primary" onClick={() => setMobileOpen(false)}>Book Now</Link>
        </div>
      </div>

      {/* Sticky Book Button (mobile) */}
      <Link href="/book-now/" className="sticky-book-btn hide-desktop" id="sticky-book-btn" aria-label="Book a taxi now">
        🚖 Book Now
      </Link>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/447700900000?text=Hi, I'd like to book an airport transfer."
        className="whatsapp-btn"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        id="whatsapp-btn"
      >
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </>
  );
}
