import type { Metadata } from 'next';
import Link from 'next/link';
import BookingForm from '../components/BookingForm';
import FAQSection from '../components/FAQSection';
import styles from '../city-to-city-taxi/service.module.css';

export const metadata: Metadata = {
  title: 'Event Transport UK | Corporate & Group Taxi | Airport Car Taxi',
  description: 'Professional event transport across the UK for concerts, sporting events, corporate functions, and conferences. Group minibuses and executive coaches available.',
  alternates: { canonical: 'https://www.airportcartaxi.co.uk/event-transport/' },
};

const eventFaqs = [
  { q: 'What types of events do you cover?', a: 'We cover all types of events including concerts, sporting events (football, golf, racing), corporate functions, conferences, festivals, parties, and private celebrations.' },
  { q: 'Can you handle large group transport to events?', a: 'Yes, we have 8-seater minibuses and can arrange multiple vehicles for larger groups. Contact us for a tailored quote for 10+ passengers.' },
  { q: 'Do you offer return journeys from events?', a: 'Yes, return journeys are available. We track event end times and coordinate with our drivers to ensure everyone gets home safely.' },
  { q: 'Can you arrange transport from multiple pickup points?', a: 'Yes, for corporate events or group bookings we can arrange multiple pickup locations. Please contact us to discuss your requirements.' },
];

const eventTypes = [
  { icon: '🎪', title: 'Concerts & Festivals', desc: 'Safe, reliable transport to and from music venues and festivals across the UK.' },
  { icon: '⚽', title: 'Sporting Events', desc: 'Get to the stadium in comfort. We cover football, horse racing, golf, tennis, and more.' },
  { icon: '🏢', title: 'Corporate Events', desc: 'Professional transport for corporate functions, team-building events, and client entertainment.' },
  { icon: '🎓', title: 'Graduations & Proms', desc: 'Make graduation or prom a day to remember with our premium vehicle options.' },
  { icon: '🎉', title: 'Private Parties', desc: 'Birthday celebrations, Christmas parties, hen and stag dos — we\'ve got you covered.' },
  { icon: '🤝', title: 'Conferences', desc: 'Shuttle services for delegates between hotels, conference centres, and airports.' },
];

export default function EventTransportPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <span className="badge badge--yellow">Event Transport</span>
            <h1>Event Transport & Group Taxi UK</h1>
            <p>Professional transport to concerts, sporting events, corporate functions, and every occasion in between. Group vehicles available for any size party.</p>
            <div className="btn-group" style={{ justifyContent: 'center' }}>
              <Link href="/book-now/" className="btn btn--primary btn--lg" id="event-book-now">Book Event Transport</Link>
              <a href="tel:+447700900000" className="btn btn--secondary btn--lg">📞 Call Now</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Events We Cover</h2>
            <p>Whatever the occasion, we have the right vehicle and the right driver.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {eventTypes.map(e => (
              <div key={e.title} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <span style={{ fontSize: '2.5rem' }}>{e.icon}</span>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0F2A44', margin: 0 }}>{e.title}</h3>
                <p style={{ fontSize: '0.88rem', color: '#4A5568', margin: 0, lineHeight: 1.6 }}>{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--gray">
        <div className="container">
          <div className="section-header"><h2>Book Your Event Transport</h2></div>
          <BookingForm variant="page" />
        </div>
      </section>

      <FAQSection faqs={eventFaqs} title="Event Transport FAQs" />
    </>
  );
}
