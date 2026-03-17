import type { Metadata } from 'next';
import Link from 'next/link';
import BookingForm from './components/BookingForm';
import AirportCards from './components/AirportCards';
import VehicleCards from './components/VehicleCards';
import Testimonials from './components/Testimonials';
import TrustBadges from './components/TrustBadges';
import { COMPANY, ROUTES, BLOG_POSTS } from './lib/data';
import { faqSchema } from './lib/schema';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Airport Car Taxi | UK Airport Transfers | Fixed Prices 24/7',
  description: 'Book reliable airport taxi & private transfers across the UK. Fixed prices, professional drivers, flight monitoring. Instant quotes for Heathrow, Gatwick, Manchester, Luton, Stansted & Birmingham.',
  alternates: {
    canonical: 'https://www.airportcartaxi.co.uk/',
  },
};

const homepageFaqs = [
  { q: 'How do I book an airport taxi with Airport Car Taxi?', a: 'You can book instantly using our online booking form, or via email. Fill in your pickup location, destination, date, time and vehicle preference to get an instant fixed quote.' },
  { q: 'Are prices fixed, or do they go up in traffic?', a: 'All our prices are fully fixed. Once you receive your quote and confirm your booking, the price will never change — regardless of traffic, delays, or time of day.' },
  { q: 'Do you track flights for airport pickups?', a: 'Yes, we monitor all incoming flights in real time. If your flight is delayed, your driver will automatically adjust the pickup time at no extra charge.' },
  { q: 'What airports do you cover?', a: 'We cover all major UK airports including Heathrow, Gatwick, Manchester, Luton, Stansted, Birmingham, Edinburgh, Glasgow, Bristol, and more.' },
  { q: 'What vehicles do you have available?', a: 'We offer Standard Saloons (up to 4 passengers), Executive Cars, MPV 6-Seaters, Minibuses (up to 8 passengers), and Luxury Chauffeur vehicles.' },
  { q: 'Is there free waiting time at the airport?', a: 'Yes, we include 60 minutes of free waiting time for international flights and 45 minutes for domestic flights from the actual landing time.' },
];

const services = [
  {
    icon: '✈️',
    title: 'Airport Transfers',
    desc: 'Reliable transfers to and from all major UK airports with fixed prices.',
    href: '/airports/',
  },
  {
    icon: '🏙️',
    title: 'City to City',
    desc: 'Comfortable long-distance transfers between UK cities at competitive prices.',
    href: '/city-to-city-taxi/',
  },
  {
    icon: '💍',
    title: 'Wedding Transport',
    desc: 'Elegant and reliable wedding car hire for your special day.',
    href: '/wedding-transport/',
  },
  {
    icon: '🎭',
    title: 'Event Transport',
    desc: 'Group transfers to concerts, sporting events, and corporate functions.',
    href: '/event-transport/',
  },
  {
    icon: '🛣️',
    title: 'Long Distance',
    desc: 'Comfortable long-haul UK journeys with experienced professional drivers.',
    href: '/long-distance-taxi/',
  },
  {
    icon: '🌍',
    title: 'Cross Border',
    desc: 'International transfers across Europe with multi-lingual drivers.',
    href: '/cross-border-transfers/',
  },
];

const stats = [
  { value: `${COMPANY.reviewCount.toLocaleString()}+`, label: 'Happy Customers' },
  { value: `${COMPANY.googleRating}★`, label: 'Google Rating' },
  { value: '24/7', label: 'Service Hours' },
  { value: `${COMPANY.yearsOperating}+`, label: 'Years Experience' },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(homepageFaqs)) }}
      />

      {/* ===== HERO SECTION ===== */}
      <section className={styles.hero} id="hero">
        <div className={styles.heroOverlay} />
        <div className={styles.heroBg}>
          {/* Animated background blobs */}
          <div className={styles.blob1} />
          <div className={styles.blob2} />
          <div className={styles.floatingPlane}>✈️</div>
        </div>
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <span>★ {COMPANY.googleRating} Rated</span>
              <span className={styles.badgeDot}>•</span>
              <span>UK's Trusted Airport Taxi</span>
            </div>
            <h1 className={styles.heroTitle}>
              UK Airport Taxi &<br />
              <span className={styles.heroHighlight}>Private Transfers</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Book reliable airport taxis across the UK with fixed prices. Professional drivers, flight monitoring & 24/7 service.
            </p>
            <div className={styles.heroCtas}>
              <Link href="/book-now/" className="btn btn--primary btn--lg" id="hero-book-now">
                🚖 Book My Taxi
              </Link>
              
            </div>
            {/* Trust Signals */}
            <div className={styles.heroTrust}>
              <div className={styles.trustPill}>✓ Fixed Prices</div>
              <div className={styles.trustPill}>✓ Free Flight Tracking</div>
              <div className={styles.trustPill}>✓ No Hidden Fees</div>
              <div className={styles.trustPill}>✓ Free Waiting Time</div>
            </div>
          </div>

          {/* Booking Form */}
          <div className={styles.heroForm}>
            <BookingForm variant="hero" />
          </div>
        </div>

        {/* Stats Bar */}
        <div className={styles.statsBar}>
          {stats.map((s, i) => (
            <div key={i} className={styles.statItem}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== TRUST BADGES ===== */}
      <TrustBadges />

      {/* ===== AIRPORT CARDS ===== */}
      <AirportCards />

      {/* ===== SERVICES SECTION ===== */}
      <section className="section" id="services">
        <div className="container">
          <div className="section-header">
            <span className="badge badge--yellow">All Services</span>
            <h2>Our Transport Services</h2>
            <p>From airport transfers to cross-border journeys, we offer a full range of professional taxi services.</p>
          </div>
          <div className={styles.servicesGrid}>
            {services.map((s) => (
              <Link key={s.href} href={s.href} className={styles.serviceCard} id={`service-${s.href.replace(/\//g, '')}`}>
                <span className={styles.serviceIcon}>{s.icon}</span>
                <h3 className={styles.serviceTitle}>{s.title}</h3>
                <p className={styles.serviceDesc}>{s.desc}</p>
                <span className={styles.serviceArrow}>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== POPULAR ROUTES ===== */}
      <section className="section section--gray" id="popular-routes">
        <div className="container">
          <div className="section-header">
            <span className="badge badge--blue">Popular Routes</span>
            <h2>Popular Airport Transfer Routes</h2>
            <p>Fixed-price taxi transfers on the UK's most popular routes. No surprises, just great service.</p>
          </div>
          <div className={styles.routesGrid}>
            {ROUTES.map((route) => (
              <Link key={route.slug} href={`/${route.slug}/`} className={styles.routeCard} id={`route-${route.slug}`}>
                <div className={styles.routeHeader}>
                  <div className={styles.routeFrom}>
                    <span className={styles.routeDot} />
                    {route.from}
                  </div>
                  <div className={styles.routeArrow}>→</div>
                  <div className={styles.routeTo}>{route.to}</div>
                </div>
                <div className={styles.routeMeta}>
                  <span>📏 {route.distance}</span>
                  <span>⏱ {route.travelTime}</span>
                  <span className={styles.routePrice}>From £{route.priceFrom}</span>
                </div>
                <p className={styles.routeDesc}>{route.description}</p>
                <span className={styles.routeBook}>Book This Route →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="section section--dark" id="how-it-works">
        <div className="container">
          <div className="section-header">
            <span className="badge" style={{ background: 'rgba(255,193,7,0.2)', color: '#FFC107' }}>Simple Process</span>
            <h2 style={{ color: '#fff' }}>How to Book Your Airport Taxi</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)' }}>Booking takes under 2 minutes. Here's how it works:</p>
          </div>
          <div className={styles.stepsGrid}>
            {[
              { step: '01', icon: '📝', title: 'Enter Your Journey', desc: 'Fill in your pickup location, destination, date, time and passenger count.' },
              { step: '02', icon: '💷', title: 'Get a Fixed Quote', desc: 'Receive an instant fixed price — no hidden charges and no meter.' },
              { step: '03', icon: '✅', title: 'Confirm Your Booking', desc: 'Confirm online or via email and receive instant email confirmation.' },
              { step: '04', icon: '🚖', title: 'Enjoy Your Ride', desc: 'Your driver arrives on time, tracks your flight if needed, and gets you there safely.' },
            ].map((s) => (
              <div key={s.step} className={styles.stepCard}>
                <div className={styles.stepNum}>{s.step}</div>
                <span className={styles.stepIcon}>{s.icon}</span>
                <h3 className={styles.stepTitle}>{s.title}</h3>
                <p className={styles.stepDesc}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link href="/book-now/" className="btn btn--primary btn--lg" id="how-book-now">
              🚖 Book Your Taxi Now
            </Link>
          </div>
        </div>
      </section>

      {/* ===== VEHICLES ===== */}
      <VehicleCards />

      {/* ===== TESTIMONIALS ===== */}
      <Testimonials />

      {/* ===== BLOG ===== */}
      <section className="section section--gray" id="blog-preview">
        <div className="container">
          <div className="section-header">
            <span className="badge badge--yellow">Travel Tips</span>
            <h2>Airport Transfer Guides & Tips</h2>
            <p>Expert guides and tips to help you plan your perfect airport transfer.</p>
          </div>
          <div className={styles.blogGrid}>
            {BLOG_POSTS.slice(0, 3).map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}/`} className={styles.blogCard} id={`blog-${post.slug}`}>
                <div className={styles.blogImagePlaceholder}>
                  <span className={styles.blogCategoryBadge}>{post.category}</span>
                  <span className={styles.blogReadTime}>{post.readTime}</span>
                </div>
                <div className={styles.blogContent}>
                  <div className={styles.blogMeta}>
                    <span>{new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className={styles.blogTitle}>{post.title}</h3>
                  <p className={styles.blogExcerpt}>{post.excerpt}</p>
                  <span className={styles.blogReadMore}>Read More →</span>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link href="/blog/" className="btn btn--dark" id="view-all-posts">View All Articles</Link>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="section" id="faq">
        <div className="container container--narrow">
          <div className="section-header">
            <span className="badge badge--yellow">FAQs</span>
            <h2>Frequently Asked Questions</h2>
            <p>Everything you need to know about booking an airport taxi with Airport Car Taxi.</p>
          </div>
          <div className={styles.faqList}>
            {homepageFaqs.map((faq, idx) => (
              <details key={idx} className={styles.faqItem} id={`faq-homepage-${idx + 1}`}>
                <summary className={styles.faqQ}>
                  <span className={styles.faqIcon}>?</span>
                  <span>{faq.q}</span>
                  <span className={styles.faqPlus}>+</span>
                </summary>
                <div className={styles.faqA}>
                  <p>{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
