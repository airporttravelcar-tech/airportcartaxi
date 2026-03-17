import styles from './FAQSection.module.css';

interface FAQ {
  q: string;
  a: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
  title?: string;
}

export default function FAQSection({ faqs, title = 'Frequently Asked Questions' }: FAQSectionProps) {
  return (
    <section className="section section--gray" id="faq">
      <div className="container container--narrow">
        <div className="section-header">
          <h2>{title}</h2>
        </div>
        <div className={styles.faqList}>
          {faqs.map((faq, idx) => (
            <details key={idx} className={styles.faqItem} id={`faq-${idx + 1}`}>
              <summary className={styles.faqQuestion}>
                <span className={styles.faqNum}>{String(idx + 1).padStart(2, '0')}</span>
                <span>{faq.q}</span>
                <span className={styles.faqToggle}>+</span>
              </summary>
              <div className={styles.faqAnswer}>
                <p>{faq.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
