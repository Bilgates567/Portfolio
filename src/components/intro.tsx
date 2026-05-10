'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/button';
import { Icons } from '@/components/icons';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { Link } from '@/i18n/routing';

export const Intro = () => {
  const { ref } = useSectionInView('Home');
  const prefersReducedMotion = useReducedMotion();
  const t = useTranslations('intro');

  return (
    <section
      ref={ref}
      id="home"
      className="my-10 flex scroll-mt-96 flex-col items-center gap-5 text-center sm:mt-28"
    >
      <motion.div
        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0 }}
        animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
        transition={prefersReducedMotion ? { duration: 0 } : { type: 'tween', duration: 0.2 }}
        className="mb-8"
      >
        <img
          src="/images/profile.png"
          alt="Arockia Bilgates Profile"
          className="size-36 rounded-full object-cover object-top shadow-xl shadow-yellow-400/40 ring-2 ring-yellow-400 grayscale transition-all duration-300 hover:scale-105 hover:grayscale-0"
        />
      </motion.div>

      <motion.div
        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0 }}
        animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
        transition={prefersReducedMotion ? { duration: 0 } : { type: 'tween', duration: 0.2 }}
        className="flex flex-col items-center gap-3"
      >
        <Link
          href="#contact"
          className="bg-background/60 hover:bg-background/80 focus-visible:ring-primary flex items-center gap-2 rounded-full border px-3 py-1 backdrop-blur transition-colors focus-visible:outline-none focus-visible:ring-2"
        >
          <span className="relative flex size-2">
            <span className="absolute flex size-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative flex size-2 rounded-full bg-green-400"></span>
          </span>
          <span className="font-mono text-sm">{t('available')}</span>
        </Link>
        <div className="flex flex-wrap justify-center gap-2">
          {['Full-time', 'Freelance', 'Contract'].map((tag) => (
            <span
              key={tag}
              className="border-muted-foreground/30 text-muted-foreground rounded-full border px-3 py-1 text-xs"
            >
              {tag}
            </span>
          ))}
          <span className="text-muted-foreground text-xs py-1">· Remote or onsite</span>
        </div>
      </motion.div>

      <motion.p
        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={prefersReducedMotion ? { duration: 0 } : { delay: 0.05, duration: 0.2, type: 'tween' }}
        className="text-muted-foreground mt-2 text-xs"
      >
        {t('location')}
      </motion.p>

      <motion.h1
        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-heading max-w-3xl text-4xl font-extrabold md:text-5xl"
      >
        {t('greeting')}{' '}
        <span className="bg-gradient-to-r from-rose-700 to-pink-600 bg-clip-text text-transparent">
          {t('name')}
        </span>{' '}
        - {t('title')}
      </motion.h1>

      <motion.p
        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={prefersReducedMotion ? { duration: 0 } : { delay: 0.1 }}
        className="text-muted-foreground max-w-xl"
      >
        {t('description')}
      </motion.p>

      <motion.div
        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={prefersReducedMotion ? { duration: 0 } : { delay: 0.1 }}
        className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center"
      >
        <div className="flex flex-1 flex-col gap-2 sm:flex-row sm:gap-2">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link href="#contact">
              {t('getInTouch')}{' '}
              <Icons.arrowRight aria-hidden="true" className="ml-2 size-4" />
            </Link>
          </Button>
          <Button variant="secondary" size="lg" asChild className="w-full sm:w-auto">
            <Link href="#projects">
              {t('viewProjects')}{' '}
              <Icons.arrowRight aria-hidden="true" className="ml-2 size-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" className="hidden w-full sm:flex sm:w-auto" asChild>
            <a href="/cv/Arockia_Bilgates_Resume.pdf" target="_blank" rel="noopener noreferrer">
              {t('downloadCV')}{' '}
              <Icons.download aria-hidden="true" className="ml-2 size-4" />
            </a>
          </Button>
        </div>
        <div className="flex flex-row flex-wrap justify-center gap-2 sm:justify-start">
          <Button variant="outline" size="icon" asChild>
            <Link href="https://www.linkedin.com/in/bilgates777/" aria-label="Linkedin" target="_blank" rel="noopener noreferrer">
              <Icons.linkedin className="size-5" />
            </Link>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <Link href="https://github.com/Bilgates567" aria-label="Github" target="_blank" rel="noopener noreferrer">
              <Icons.github className="size-5" />
            </Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
};
