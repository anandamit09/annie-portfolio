import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { useRef } from 'react';
import FadeIn from '../components/FadeIn';
import { ProjectButton } from '../components/Buttons';
import { projects, type Project } from '../data/projects';

const totalCards = projects.length; // 4

function ProjectCard({ project, index, progress }: { project: Project; index: number; progress: MotionValue<number> }) {
  const reduce = useReducedMotion();
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const start = index / totalCards;
  const scale = useTransform(progress, [start, 1], [1, targetScale]);
  const [a, b, c] = project.card;
  // Each card is painted in its own project's palette and typeface, so the
  // index already reads as four different collections.
  const t = project.theme;

  return (
    <div className="sticky top-24 flex h-[85vh] items-start justify-center md:top-32">
      <motion.article
        aria-labelledby={`card-${project.slug}`}
        className="relative flex w-full max-w-6xl origin-top flex-col gap-4 rounded-[40px] border-2 p-4 transition-shadow duration-500 sm:gap-6 sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8"
        style={{
          scale: reduce ? 1 : scale,
          top: `${index * 28}px`,
          background: t.bg,
          borderColor: t.ink,
          color: t.ink,
          fontFamily: t.body,
          boxShadow: `0 30px 80px -40px ${t.accent}`,
        }}
      >
        {/* Top row */}
        <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-3 px-2 sm:px-3">
          <div className="flex items-end gap-3 sm:gap-6">
            <span
              aria-hidden
              className="font-black leading-[0.8]"
              style={{ fontSize: 'clamp(2.4rem, 8vw, 110px)', color: t.accent, opacity: 0.9, fontFamily: t.display }}
            >
              {project.number}
            </span>
            <div className="flex flex-col gap-1 pb-1">
              <span className="text-[0.6rem] font-medium uppercase tracking-[0.25em] sm:text-xs md:text-sm" style={{ color: t.accent }}>
                {project.category}
              </span>
              <h3
                id={`card-${project.slug}`}
                className="leading-none"
                style={{
                  fontSize: 'clamp(1.3rem, 4vw, 3.2rem)',
                  fontFamily: t.display,
                  fontWeight: t.displayWeight,
                  fontStyle: t.displayItalic ? 'italic' : 'normal',
                  letterSpacing: t.displayTracking,
                  textTransform: t.displayCase === 'upper' ? 'uppercase' : 'none',
                  color: t.ink,
                }}
              >
                {project.name}
              </h3>
            </div>
          </div>
          <ProjectButton href={`#/project/${project.slug}`} projectName={project.name} ink={t.ink} accent={t.accent} />
        </div>

        {/* Bottom row */}
        <div className="flex gap-3 sm:gap-4">
          <div className="flex w-[40%] flex-col gap-3 sm:gap-4">
            <img src={a.src} alt={a.alt} loading="lazy" decoding="async" className="w-full rounded-[20px] object-cover sm:rounded-[28px]" style={{ height: 'min(clamp(110px, 16vw, 230px), 22vh)' }} />
            <img src={b.src} alt={b.alt} loading="lazy" decoding="async" className="w-full rounded-[20px] object-cover sm:rounded-[28px]" style={{ height: 'min(clamp(140px, 22vw, 340px), 32vh)' }} />
          </div>
          <div className="relative w-[60%]">
            <img src={c.src} alt={c.alt} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full rounded-[20px] object-cover object-[50%_20%] sm:rounded-[28px]" />
          </div>
        </div>
      </motion.article>
    </div>
  );
}

export default function ProjectsSection() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: container, offset: ['start start', 'end end'] });

  return (
    <section id="projects" className="relative z-10 -mt-10 rounded-t-[40px] bg-ink px-4 pb-24 pt-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:pt-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:pt-32">
      <FadeIn y={40}>
        <h2 className="text-gradient mb-12 text-center font-black uppercase leading-[0.9] tracking-tight sm:mb-16 md:mb-20" style={{ fontSize: 'clamp(2.6rem, 10vw, 150px)' }}>
          Selected
          <br />
          projects<span className="text-gradient-red">.</span>
        </h2>
      </FadeIn>

      <div ref={container} className="relative pb-[6vh]">
        {projects.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} progress={scrollYProgress} />
        ))}
      </div>
    </section>
  );
}
