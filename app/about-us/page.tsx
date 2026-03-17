import type { Metadata } from 'next';
import Link from 'next/link';
import { COMPANY } from '../lib/data';
import FAQSection from '../components/FAQSection';
import styles from './about.module.css';

export const metadata: Metadata = {
  title: 'About Airport Car Taxi | UK Airport Transfer Specialists',
  description: 'Learn about Airport Car Taxi — the UK\'s trusted airport taxi and private transfer service. Professional drivers, fixed prices, and over 12 years of experience.',
  alternates: { canonical: 'https://www.airportcartaxi.co.uk/about-us/' },
};

const values = [
  { icon: '🎯', title: 'Reliability', desc: 'We never let our customers down. We track flights, monitor traffic, and ensure your driver is always where they need to be.' },
  { icon: '💷', title: 'Transparency', desc: 'Fixed prices, no hidden fees, no surprise charges. What you see is what you pay — always.' },
  { icon: '⭐', title: 'Quality', desc: 'We maintain exceptionally high standards for our vehicles, drivers, and customer service at every level.' },
  { icon: '🤝', title: 'Trust', desc: 'Over 12 years of building relationships with customers who return to us trip after trip.' },
];

const stats = [
  { value: `${COMPANY.reviewCount.toLocaleString()}+`, label: 'Customers Served' },
  { value: `${COMPANY.googleRating}★`, label: 'Google Rating' },
  { value: `${COMPANY.yearsOperating}+`, label: 'Years in Business' },
  { value: '50+', label: 'Professional Drivers' },
];

const faqs = [
  { q: 'Are your drivers licensed and background checked?', a: 'Yes, all our drivers hold a Private Hire Vehicle (PHV) licence issued by their local authority. They are fully DBS checked, insured, and regularly trained.' },
  { q: 'What areas do you cover?', a: 'We operate across the whole of the UK and can arrange cross-border transfers to Europe. Our main service areas are around all major UK airports.' },
  { q: 'How long have you been operating?', a: `Airport Car Taxi has been providing premium airport transfer services for over ${COMPANY.yearsOperating} years, building a reputation for reliability and excellent customer service.` },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <span className="badge badge--yellow">About Us</span>
            <h1>The UK's Trusted Airport Taxi Service</h1>
            <p>For over {COMPANY.yearsOperating} years, Airport Car Taxi has been the reliable choice for airport transfers across the UK. Thousands of satisfied customers trust us to get them to their destination safely, on time, and in comfort.</p>
            <div className="btn-group" style={{ justifyContent: 'center' }}>
              <Link href="/book-now/" className="btn btn--primary btn--lg" id="about-book-now">Book Your Transfer</Link>
              <Link href="/contact-us/" className="btn btn--secondary btn--lg" id="about-contact">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsGrid}>
            {stats.map(s => (
              <div key={s.label} className={styles.statCard}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section">
        <div className="container">
          <div className={styles.storyGrid}>
            <div className={styles.storyContent}>
              <span className="badge badge--blue">Our Story</span>
              <h2>Founded on a Passion for Great Service</h2>
              <p>Airport Car Taxi was founded with one simple goal: to make airport transfers as easy and stress-free as possible. We saw that travellers deserved better than unreliable minicabs and confusing public transport options with heavy luggage.</p>
              <p>Today, we serve thousands of customers per month from all six major UK airports, operating a growing fleet of modern, well-maintained vehicles driven by professional, friendly drivers.</p>
              <p>Our commitment to <strong>fixed prices</strong>, <strong>free flight monitoring</strong>, and <strong>meet & greet service</strong> sets us apart from standard taxi services and makes us the choice of frequent travellers, business executives, and families alike.</p>
            </div>
            <div className={styles.storyVisual}>
              <div className={styles.visualCard}>
                <div className={styles.visualIcon}>🚖</div>
                <div className={styles.visualText}>
                  <strong>Our Mission</strong>
                  <p>To provide the most reliable, comfortable, and fairly priced airport taxi service in the UK.</p>
                </div>
              </div>
              <div className={styles.visualCard}>
                <div className={styles.visualIcon}>🗺️</div>
                <div className={styles.visualText}>
                  <strong>Our Coverage</strong>
                  <p>All major UK airports and cities, plus cross-border transfers throughout Europe.</p>
                </div>
              </div>
              <div className={styles.visualCard}>
                <div className={styles.visualIcon}>⭐</div>
                <div className={styles.visualText}>
                  <strong>Our Promise</strong>
                  <p>Fixed prices, on-time pickups, and professional service — every single journey.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section section--gray">
        <div className="container">
          <div className="section-header">
            <h2>Our Core Values</h2>
            <p>The principles that guide everything we do at Airport Car Taxi.</p>
          </div>
          <div className={styles.valuesGrid}>
            {values.map(v => (
              <div key={v.title} className={styles.valueCard}>
                <span className={styles.valueIcon}>{v.icon}</span>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="About Airport Car Taxi FAQs" />
    </>
  );
}
