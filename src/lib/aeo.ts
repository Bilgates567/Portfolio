import { siteConfig } from './site-config';

/**
 * AEO (Answer Engine Optimization) Utilities
 *
 * This file contains structured data schemas optimized for AI search engines,
 * voice assistants, and featured snippets. AEO complements SEO by ensuring
 * content provides direct, authoritative answers to user queries.
 */

/**
 * Generate comprehensive FAQ structured data for Answer Engine Optimization
 * This helps AI assistants and voice search provide direct answers
 */
export function generateFAQStructuredData(
  faqItems: Array<{ question: string; answer: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    about: {
      '@type': 'Thing',
      name: 'Arockia Bilgates Portfolio',
      url: siteConfig.url,
    },
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

/**
 * Generate QAPage structured data for chat/QA functionality
 * Optimizes content for AI-powered question answering systems
 */
export function generateQAPageStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'QAPage',
    mainEntity: {
      '@type': 'Question',
      name: 'Who is Arockia Bilgates and what services does he offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Arockia Bilgates is a Frontend Engineer and Full Stack Developer with 4+ years of experience. He specializes in React.js, Next.js, Node.js, and MERN/MEVN stack development. He offers full-stack web development services, creates interactive user interfaces, and works remotely from the United Kingdom. His hourly rate ranges from $25-57/hour, and he is available for both short-term and long-term projects.',
        author: {
          '@type': 'Person',
          name: 'Arockia Bilgates',
        },
      },
    },
    about: {
      '@type': 'Person',
      name: 'Arockia Bilgates',
      jobTitle: 'Frontend Engineer & Full Stack Developer',
      url: siteConfig.url,
    },
  };
}

/**
 * Generate HowTo structured data for common development processes
 * Helps AI assistants provide step-by-step guidance
 */
export function generateHowToStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Hire Arockia Bilgates for Web Development Services',
    description:
      'Step-by-step guide to hiring Arockia Bilgates for full-stack web development projects',
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Review Portfolio',
        text: "Visit the portfolio website to review Arockia's projects, skills, and experience in React.js, Next.js, Node.js, and MERN/MEVN stack development.",
        url: `${siteConfig.url}/projects`,
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Check Availability',
        text: 'Arockia is currently available for work and based in Thanjavur, India. He is open to remote opportunities and flexible working arrangements.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Contact',
        text: 'Reach out via email at arockiabilgates2@gmail.com or through the contact form on the website. You can also connect via LinkedIn, GitHub, or Twitter.',
        url: `${siteConfig.url}/#contact`,
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Discuss Project Requirements',
        text: 'Discuss your project scope, timeline, and budget. Arockia offers competitive rates and can work on both short-term and long-term projects.',
      },
      {
        '@type': 'HowToStep',
        position: 5,
        name: 'Get Started',
        text: 'Once requirements are aligned, Arockia will begin development using modern web technologies to deliver fast, accessible, and SEO-friendly web applications.',
      },
    ],
    totalTime: 'PT1H',
  };
}

/**
 * Generate Person schema with enhanced answer-focused content
 * Optimized for voice search and AI queries
 */
export function generateEnhancedPersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Arockia Bilgates',
    alternateName: 'Arockia Bilgates',
    jobTitle: 'Frontend Engineer & Full Stack Developer',
    description:
      'Arockia Bilgates is a Frontend Engineer and Full Stack Developer with 3.5+ years of professional experience. He specializes in React.js, Next.js, Node.js, TypeScript, and MERN/MEVN stack development. Based in the United Kingdom, he works remotely and offers freelance web development services at $25-57/hour. He creates fast, accessible, and SEO-friendly web applications with modern technologies like Tailwind CSS, shadcn/ui, and Framer Motion.',
    url: siteConfig.url,
    image: `${siteConfig.url}/images/profile.png`,
    email: 'arockiabilgates2@gmail.com',
    sameAs: [
      'https://github.com/arockiabilgates',
      'https://linkedin.com/in/arockia-bilgates',
      'https://twitter.com/arockiabilgates',
      'https://www.instagram.com/arockiabilgates',
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'GB',
      addressRegion: 'Europe',
      addressLocality: 'United Kingdom',
    },
    // Answer-focused properties for AI queries
    knowsAbout: [
      'React.js',
      'Next.js',
      'Node.js',
      'TypeScript',
      'JavaScript',
      'MERN Stack',
      'MEVN Stack',
      'Tailwind CSS',
      'MongoDB',
      'Express.js',
      'Vue.js',
      'Web Development',
      'Frontend Development',
      'Full Stack Development',
      'React-Native Development',
      'Freelance Development',
      'SEO Optimization',
      'UI/UX Design',
      'Responsive Design',
    ],
    // Common questions answered directly
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Hourly Rate',
        value: '$25-57/hour',
      },
      {
        '@type': 'PropertyValue',
        name: 'Experience',
        value: '3.5+ years',
      },
      {
        '@type': 'PropertyValue',
        name: 'Location',
        value: 'United Kingdom (Remote)',
      },
      {
        '@type': 'PropertyValue',
        name: 'Availability',
        value: 'Available for work',
      },
      {
        '@type': 'PropertyValue',
        name: 'Specialization',
        value: 'React.js, Next.js, Node.js, MERN/MEVN Stack',
      },
    ],
  };
}

/**
 * Generate Service schema with answer-focused descriptions
 * Helps AI assistants provide direct service information
 */
export function generateServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Web Development Services',
    provider: {
      '@type': 'Person',
      name: 'Arockia Bilgates',
      email: 'arockiabilgates2@gmail.com',
      url: siteConfig.url,
    },
    areaServed: [
      'GB',
      'IE',
      'DE',
      'FR',
      'ES',
      'IT',
      'NL',
      'BE',
      'AT',
      'CH',
      'SE',
      'NO',
      'DK',
      'PL',
      'PT',
      'EU',
      'Worldwide',
    ],
    offers: {
      '@type': 'Offer',
      price: '25-57',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '25-57',
        priceCurrency: 'USD',
        unitText: 'hour',
      },
      availability: 'https://schema.org/InStock',
      description:
        'Full-stack web development services including React.js, Next.js, Node.js, and MERN/MEVN stack development. Available for remote work with flexible hours.',
    },
    description:
      'Professional web development services including React.js, Next.js, Node.js, React-Native, and full-stack development. Specializes in creating fast, accessible, and SEO-friendly web applications with modern technologies. Available for hire at $25-57/hour with flexible working hours.',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      bestRating: '5',
      worstRating: '1',
      ratingCount: '1',
    },
  };
}

/**
 * Generate comprehensive AEO structured data bundle
 * Combines all schemas for maximum AI search engine visibility
 */
export function generateAEOStructuredData(
  faqItems?: Array<{ question: string; answer: string }>
) {
  // Use a flexible type to accommodate different schema shapes
  const schemas: Array<Record<string, any>> = [
    generateEnhancedPersonSchema(),
    generateServiceSchema(),
    generateQAPageStructuredData(),
    generateHowToStructuredData(),
  ];

  // Add FAQ schema if items provided
  if (faqItems && faqItems.length > 0) {
    schemas.push(generateFAQStructuredData(faqItems));
  }

  return schemas;
}

/**
 * Common voice search and AI query patterns
 * These help optimize content for natural language queries
 */
export const voiceSearchQueries = [
  'Who is Arockia Bilgates?',
  'What does Arockia Bilgates do?',
  'How much does Arockia Bilgates charge?',
  'Where is Arockia Bilgates located?',
  'What technologies does Arockia Bilgates use?',
  'Is Arockia Bilgates available for hire?',
  'How to contact Arockia Bilgates?',
  "What is Arockia Bilgates's hourly rate?",
  'Does Arockia Bilgates work remotely?',
  'What services does Arockia Bilgates offer?',
];
