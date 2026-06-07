'use client';

import Bento from '@/components/Bento';
import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SideProjects from '@/components/SideProjects';
import TechStack from '@/components/TechStack';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Section({ children, id }: { children: React.ReactNode; id?: string }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });
  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="py-16"
    >
      {children}
    </motion.section>
  );
}

export default function Main() {
  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto px-6">
        <section className="pt-16 pb-12">
          <Hero />
        </section>

        <Section>
          <Bento />
        </Section>

        <Section id="stack">
          <TechStack />
        </Section>

        <Section id="experience">
          <Experience />
        </Section>

        <Section id="projects">
          <SideProjects />
        </Section>

        <Section id="contact">
          <Contact />
        </Section>

        <Footer />
      </main>
    </>
  );
}
