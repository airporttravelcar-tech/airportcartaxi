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
          
          <Link href="/book-now/" className="btn btn--primary" onClick={() => setMobileOpen(false)}>Book Now</Link>
        </div>
      </div>

      {/* Sticky Book Button (mobile) */}
      <Link href="/book-now/" className="sticky-book-btn hide-desktop" id="sticky-book-btn" aria-label="Book a taxi now">
        🚖 Book Now
      </Link>

      {/* WhatsApp Button */}
      
    </>
  );
}
