import { COMPANY } from './data';

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'TaxiStand'],
    name: COMPANY.name,
    description: 'Professional airport taxi and private transfer service across the UK. Fixed prices, 24/7 availability, and flight monitoring.',
    url: 'https://www.airportcartaxi.co.uk',
    
    email: COMPANY.email,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'GB',
      addressLocality: 'London',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 51.5074,
      longitude: -0.1278,
    },
    areaServed: {
      '@type': 'Country',
      name: 'United Kingdom',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: COMPANY.googleRating,
      reviewCount: COMPANY.reviewCount,
      bestRating: 5,
    },
    priceRange: '££',
    paymentAccepted: ['Credit Card', 'Debit Card', 'Cash', 'Online Payment'],
    currenciesAccepted: 'GBP',
  };
}

export function taxiServiceSchema(serviceArea?: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Airport Transfer',
    name: `Airport Taxi Service${serviceArea ? ` - ${serviceArea}` : ''}`,
    provider: {
      '@type': 'LocalBusiness',
      name: COMPANY.name,
      
    },
    areaServed: serviceArea || 'United Kingdom',
    description: 'Professional, fixed-price airport taxi and private transfer services across the UK.',
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://www.airportcartaxi.co.uk${item.url}`,
    })),
  };
}

export function articleSchema(post: {
  title: string;
  description: string;
  date: string;
  image?: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    image: post.image ? `https://www.airportcartaxi.co.uk${post.image}` : undefined,
    url: `https://www.airportcartaxi.co.uk${post.url}`,
    author: {
      '@type': 'Organization',
      name: COMPANY.name,
    },
    publisher: {
      '@type': 'Organization',
      name: COMPANY.name,
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.airportcartaxi.co.uk/images/logo.png',
      },
    },
  };
}
