'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';

const servicesData = [
  {
    title: 'Frontend Development',
    description: 'Building responsive, modern UIs with HTML, CSS, JavaScript, React.js, Next.js, and Angular. Pixel-perfect design with smooth user experiences.',
    tags: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Next.js', 'Angular'],
    icon: '🖥️',
  },
  {
    title: 'Backend & Database',
    description: 'Scalable server-side development using Node.js, Spring Boot, and Django. Database design and management with MySQL and MongoDB.',
    tags: ['Node.js', 'Spring Boot', 'Django', 'MySQL', 'MongoDB'],
    icon: '⚙️',
  },
  {
    title: 'Full Stack (MERN)',
    description: 'End-to-end MERN stack applications — MongoDB, Express, React, Node.js — with REST APIs, JWT auth, and cloud deployment.',
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'REST API'],
    icon: '🔗',
  },
  {
    title: 'Full Stack (MEAN)',
    description: 'Complete MEAN stack solutions using MongoDB, Express, Angular, and Node.js with scalable architecture and seamless integrations.',
    tags: ['MongoDB', 'Express.js', 'Angular', 'Node.js'],
    icon: '🧩',
  },
  {
    title: 'Python & AI/ML',
    description: 'Python development including automation pipelines, ML-driven REST APIs with Flask, OpenCV image processing, and data workflows.',
    tags: ['Python', 'Flask', 'OpenCV', 'Machine Learning', 'Django'],
    icon: '🤖',
  },
  {
    title: 'Technical Training',
    description: 'Hands-on training in full-stack development, DSA, Java, Python, and C/C++. Delivered programs with 95% completion rate across 300+ learners.',
    tags: ['MERN', 'Java', 'Python', 'DSA', 'C/C++'],
    icon: '🎓',
  },
];

export const Services = () => {
  const { ref } = useSectionInView('Services', 0.3);
  const t = useTranslations('services');
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      ref={ref}
      id="services"
      className="my-10 w-full scroll-mt-28 md:mb-20"
      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={prefersReducedMotion ? { duration: 0 } : { delay: 0.175 }}
      viewport={{ once: true }}
    >
      <SectionHeading heading={t('heading')} content={t('content')} />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {servicesData.map((service, index) => (
          <motion.div
            key={service.title}
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={prefersReducedMotion ? { duration: 0 } : { delay: index * 0.08 }}
            viewport={{ once: true }}
            className="bg-card border-border hover:border-primary/50 rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="mb-3 text-3xl">{service.icon}</div>
            <h3 className="font-heading mb-2 text-lg font-semibold">{service.title}</h3>
            <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{service.description}</p>
            <div className="flex flex-wrap gap-2">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-secondary text-secondary-foreground rounded-full px-2.5 py-0.5 text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
