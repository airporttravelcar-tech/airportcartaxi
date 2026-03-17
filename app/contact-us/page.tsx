import type { Metadata } from 'next';
import Link from 'next/link';
import { COMPANY } from '../lib/data';
import styles from './contact.module.css';

export const metadata: Metadata = {
  title: 'Contact Us | Airport Car Taxi | 24/7 UK Airport Transfers',
  description: 'Contact Airport Car Taxi for bookings, quotes, and enquiries. Phone, WhatsApp, and email support available 24/7. Professional UK airport taxi service.',
  alternates: { canonical: 'https://www.airportcartaxi.co.uk/contact-us/' },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <span className="badge badge--yellow">Get In Touch</span>
            <h1>Contact Airport Car Taxi</h1>
            <p>We're available 24/7 for bookings, queries, and support. Call, WhatsApp, or email us — we're always here to help.</p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="section">
        <div className="container">
          <div className={styles.contactGrid}>
            <a href={`tel:${COMPANY.phone}`} className={styles.contactCard} id="contact-phone">
              <div className={styles.contactIcon} style={{ background: 'rgba(15,42,68,0.1)' }}>📞</div>
              <h3>Phone</h3>
              <p>Call us any time. Available 24/7 for bookings and support.</p>
              <strong className={styles.contactValue}>{COMPANY.phone}</strong>
              <span className={styles.contactCta}>Call Now →</span>
            </a>
            <a href={`https://wa.me/${COMPANY.whatsapp}?text=Hi, I'd like to enquire about a taxi booking.`} target="_blank" rel="noopener noreferrer" className={styles.contactCard} id="contact-whatsapp">
              <div className={styles.contactIcon} style={{ background: 'rgba(37,211,102,0.1)' }}>💬</div>
              <h3>WhatsApp</h3>
              <p>Message us on WhatsApp for a quick booking or any questions.</p>
              <strong className={styles.contactValue}>WhatsApp Us</strong>
              <span className={styles.contactCta}>Chat Now →</span>
            </a>
            <a href={`mailto:${COMPANY.email}`} className={styles.contactCard} id="contact-email">
              <div className={styles.contactIcon} style={{ background: 'rgba(63,169,245,0.1)' }}>✉️</div>
              <h3>Email</h3>
              <p>Send us an email for quotes, enquiries or general information.</p>
              <strong className={styles.contactValue}>{COMPANY.email}</strong>
              <span className={styles.contactCta}>Email Us →</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section section--gray">
        <div className="container container--narrow">
          <div className="section-header">
            <h2>Send Us a Message</h2>
            <p>Fill in the form below and we will get back to you within 1 hour.</p>
          </div>
          <form className={styles.contactForm} action="#" method="POST" id="contact-form">
            <div className={styles.formRow}>
              <div className="form-group">
                <label htmlFor="firstName" className="form-label">First Name</label>
                <input id="firstName" name="firstName" type="text" className="form-input" placeholder="John" required />
              </div>
              <div className="form-group">
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input id="lastName" name="lastName" type="text" className="form-input" placeholder="Smith" required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="contactEmail" className="form-label">Email Address</label>
              <input id="contactEmail" name="email" type="email" className="form-input" placeholder="john@example.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="contactPhone" className="form-label">Phone Number</label>
              <input id="contactPhone" name="phone" type="tel" className="form-input" placeholder="+44 7700 000000" />
            </div>
            <div className="form-group">
              <label htmlFor="subject" className="form-label">Subject</label>
              <select id="subject" name="subject" className="form-input form-select">
                <option>Booking Enquiry</option>
                <option>Quote Request</option>
                <option>Existing Booking</option>
                <option>Corporate Account</option>
                <option>Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea id="message" name="message" className="form-input" rows={5} placeholder="Tell us about your journey..." required style={{ resize: 'vertical' }} />
            </div>
            <button type="submit" className="btn btn--primary btn--lg" style={{ width: '100%', justifyContent: 'center' }} id="contact-submit">
              ✉️ Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>We Serve All Major UK Airports</h2>
            <p>Links to all major airport transfer pages for quick navigation.</p>
          </div>
          <div className={styles.airportLinks}>
            {[
              { href: '/airport-taxi-heathrow/', label: 'Heathrow Airport Taxi' },
              { href: '/airport-taxi-gatwick/', label: 'Gatwick Airport Taxi' },
              { href: '/airport-taxi-manchester/', label: 'Manchester Airport Taxi' },
              { href: '/airport-taxi-luton/', label: 'Luton Airport Taxi' },
              { href: '/airport-taxi-stansted/', label: 'Stansted Airport Taxi' },
              { href: '/airport-taxi-birmingham/', label: 'Birmingham Airport Taxi' },
            ].map(l => (
              <Link key={l.href} href={l.href} className={styles.airportLink} id={`contact-${l.href.replace(/\//g,'')}`}>
                ✈️ {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
