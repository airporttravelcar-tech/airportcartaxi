import type { Metadata } from 'next';
import Link from 'next/link';
import BookingForm from '../components/BookingForm';
import FAQSection from '../components/FAQSection';
import styles from './book.module.css';

export const metadata: Metadata = {
  title: 'Book Airport Taxi Online | Instant Quote | Airport Car Taxi',
  description: 'Book your airport taxi online with Airport Car Taxi. Get an instant fixed quote for any UK airport transfer. 24/7 service, professional drivers, and free flight tracking.',
  alternates: { canonical: 'https://www.airportcartaxi.co.uk/book-now/' },
};

const bookFaqs = [
  { q: 'How quickly will I receive booking confirmation?', a: 'You will receive an instant email confirmation within seconds of completing your booking. A driver will also be assigned and their details sent to you.' },
  { q: 'Can I cancel or change my booking?', a: 'Yes, you can cancel free of charge up to 24 hours before your journey. Changes can be made by contacting us by phone or WhatsApp.' },
  { q: 'What payment methods do you accept?', a: 'We accept all major credit and debit cards (Visa, Mastercard, Amex), PayPal, bank transfer, and cash payments to the driver.' },
  { q: 'Can I book for someone else?', a: 'Yes, you can book a taxi for another person. Simply enter their name in the passenger name field and ensure their pickup location is correct.' },
];

export default function BookNowPage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <span className="badge badge--yellow">Instant Booking</span>
            <h1>Book Your Airport Taxi</h1>
            <p>Get a fixed price quote in seconds. No hidden fees. Instant confirmation by email and SMS.</p>
            <div className={styles.trustRow}>
              {['✓ Fixed prices', '✓ Instant confirmation', '✓ Free cancellation', '✓ 24/7 support'].map(t => (
                <div key={t} className={styles.trustChip}>{t}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className={styles.formSection}>
        <div className="container">
          <div className={styles.twoCol}>
            <div className={styles.formWrapper}>
              <BookingForm variant="page" />
            </div>
            <div className={styles.sideInfo}>
              <div className={styles.infoBox}>
                <h3>📞 Need Help Booking?</h3>
                <p>Call us any time and we will arrange everything for you.</p>
                <a href="tel:+447700900000" className="btn btn--dark btn--lg" style={{ width: '100%', justifyContent: 'center' }}>
                  📞 +44 7700 900000
                </a>
              </div>
              <div className={styles.infoBox}>
                <h3>💬 WhatsApp Booking</h3>
                <p>Prefer WhatsApp? Message us directly and we will handle your booking.</p>
                <a href="https://wa.me/447700900000?text=Hi, I'd like to book a taxi" target="_blank" rel="noopener noreferrer"
                  className="btn btn--primary btn--lg" style={{ width: '100%', justifyContent: 'center', background: '#25D366', boxShadow: '0 4px 15px rgba(37,211,102,0.3)' }}>
                  💬 WhatsApp Us
                </a>
              </div>
              <div className={styles.featureList}>
                <h3>What's Included</h3>
                {[
                  '✈️ Free flight monitoring',
                  '👔 Meet & greet service',
                  '⏱ Free waiting time',
                  '🧳 Help with luggage',
                  '💷 Fixed price — no meter',
                  '📧 Instant email confirmation',
                ].map(f => <div key={f} className={styles.featureItem}>{f}</div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={bookFaqs} title="Booking FAQs" />
    </>
  );
}
