import type { Metadata } from 'next';
import Link from 'next/link';
import BookingForm from '../components/BookingForm';
import FAQSection from '../components/FAQSection';
import styles from '../city-to-city-taxi/service.module.css';

export const metadata: Metadata = {
  title: 'Wedding Transport UK | Elegant Wedding Car Hire | Airport Car Taxi',
  description: 'Elegant and reliable wedding transport across the UK. Luxury chauffeur cars, executive vehicles, and group minibuses for your special day. Fixed prices, professional drivers.',
  alternates: { canonical: 'https://www.airportcartaxi.co.uk/wedding-transport/' },
};

const weddingFaqs = [
  { q: 'What vehicles do you offer for weddings?', a: 'We offer luxury chauffeur cars (Mercedes S-Class equivalent), executive vehicles, MPV 6-seaters for the wedding party, and minibuses for guest transport.' },
  { q: 'Can you decorate the wedding car?', a: 'Yes, we can arrange ribbons, flowers, and other decorations on request. Please let us know your preferences when booking.' },
  { q: 'Do you offer wedding packages?', a: 'Yes, we offer tailored wedding packages including multiple vehicle hire for bridal party and guests, transfer to ceremony, reception, and hotel.' },
  { q: 'How far in advance should I book wedding transport?', a: 'We recommend booking wedding transport at least 4-6 weeks in advance, especially for peak wedding season (May-September).' },
];

const weddingServices = [
  { icon: '💒', title: 'Bridal Car', desc: 'Elegant luxury vehicle for the bride and entourage. Arrive in timeless style.' },
  { icon: '🎩', title: 'Groom\'s Car', desc: 'Executive vehicle for the groom and best man. Sophisticated and on time.' },
  { icon: '💐', title: 'Wedding Party', desc: 'MPV transfers for bridesmaids and close family to the ceremony.' },
  { icon: '🎭', title: 'Guest Shuttle', desc: 'Minibus transfers for guests between venues, ensuring everyone arrives together.' },
  { icon: '🍾', title: 'Evening Send-Off', desc: 'Luxury transfer to your hotel or honeymoon destination at the end of the night.' },
  { icon: '💑', title: 'Full Day Hire', desc: 'Dedicated vehicle and driver available throughout your entire wedding day.' },
];

export default function WeddingTransportPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <span className="badge badge--yellow">Wedding Transport</span>
            <h1>Elegant Wedding Transport UK</h1>
            <p>Make your special day even more memorable with our professional wedding car hire service. Luxury vehicles, ribbon decorations, and experienced chauffeurs across the UK.</p>
            <div className="btn-group" style={{ justifyContent: 'center' }}>
              <Link href="/book-now/" className="btn btn--primary btn--lg" id="wedding-book-now">Book Wedding Car</Link>
              
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="badge badge--yellow">Our Services</span>
            <h2>Complete Wedding Transport Services</h2>
            <p>From the bridal car to guest shuttles, we handle all your wedding day transport needs.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {weddingServices.map(s => (
              <div key={s.title} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <span style={{ fontSize: '2.5rem' }}>{s.icon}</span>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0F2A44', margin: 0 }}>{s.title}</h3>
                <p style={{ fontSize: '0.88rem', color: '#4A5568', margin: 0, lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--gray">
        <div className="container">
          <div className="section-header"><h2>Get a Wedding Transport Quote</h2></div>
          <BookingForm variant="page" />
        </div>
      </section>

      <FAQSection faqs={weddingFaqs} title="Wedding Transport FAQs" />
    </>
  );
}
