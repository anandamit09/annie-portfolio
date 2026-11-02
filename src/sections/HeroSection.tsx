import { useLayoutEffect, useRef } from 'react';
import FadeIn from '../components/FadeIn';
import Magnet from '../components/Magnet';
import HeroCharacter from '../components/HeroCharacter';
import { ContactButton } from '../components/Buttons';
import { site } from '../config';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

/**
 * Keeps the oversized heading as large as the breakpoint classes ask for,
 * but never wider than the viewport (Kanit Black is wide, so
 * "HI, I'M ANNIE." would otherwise clip at 15–17.5vw).
 */
function useFitHeading() {
  const ref = useRef<HTMLHeadingElement>(null);
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    // The size lives on the element, not in state: a re-measure that lands on
    // the same number must still re-apply it, or the heading stays unscaled.
    const measure = () => {
      el.style.fontSize = '';
      const style = getComputedStyle(el);
      const base = parseFloat(style.fontSize);
      const range = document.createRange();
      range.selectNodeContents(el);
      const textWidth = range.getBoundingClientRect().width;
      const available = el.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight);
      if (textWidth > available) el.style.fontSize = `${Math.floor((base * available) / textWidth)}px`;
    };
    measure();
    // Kanit Black is much wider than the fallback, so measure again once the
    // real font (and any later face) has landed.
    document.fonts?.ready.then(measure);
    document.fonts?.addEventListener('loadingdone', measure);
    window.addEventListener('resize', measure);
    return () => {
      document.fonts?.removeEventListener('loadingdone', measure);
      window.removeEventListener('resize', measure);
    };
  }, []);
  return ref;
}

export default function HeroSection() {
  const headingRef = useFitHeading();
  const sectionRef = useRef<HTMLElement>(null);
  return (
    <section ref={sectionRef} id="top" className="grain relative flex h-screen min-h-[560px] flex-col overflow-x-clip" aria-label="Introduction">
      {/* soft red glow behind the character */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[55%] h-[70vh] w-[70vh] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(159,5,5,0.35) 0%, rgba(159,5,5,0) 65%)' }}
      />

      <FadeIn as="nav" delay={0} y={-20} className="relative z-20" aria-label="Primary">
        <ul className="flex justify-between px-6 pt-6 text-sm font-medium uppercase tracking-wider text-mist md:px-10 md:pt-8 md:text-lg lg:text-[1.4rem]">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative pb-1 transition-opacity duration-200 hover:opacity-70 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-blood after:transition-all after:duration-300 hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </FadeIn>

      <div className="relative z-0 mt-6 w-full overflow-hidden sm:mt-4 md:-mt-5">
        <FadeIn delay={0.15} y={40}>
          <h1
            ref={headingRef}
            className="text-gradient whitespace-nowrap px-[2vw] text-center text-[14vw] font-black uppercase leading-none tracking-tight sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]"
          >
            Hi, I'm Annie<span className="text-gradient-red">.</span>
          </h1>
        </FadeIn>
      </div>

      {/* Cursor-reactive character */}
      <div className="absolute left-1/2 top-1/2 z-10 w-[280px] -translate-x-1/2 -translate-y-1/2 sm:bottom-0 sm:top-auto sm:w-[340px] sm:translate-y-0 md:w-[440px] lg:w-[520px]" style={{ maxHeight: '72vh' }}>
        <FadeIn delay={0.6} y={30}>
          <HeroCharacter
            areaRef={sectionRef}
            src={site.heroImage}
            alt={site.heroImageIsPlaceholder ? 'Placeholder for Annie’s illustrated portrait' : 'Illustrated portrait of Annie (Ananya Raj)'}
            padding={150}
            strength={3}
          />
        </FadeIn>
      </div>

      <div className="relative z-20 mt-auto flex items-end justify-between gap-4 px-6 pb-7 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <p className="max-w-[160px] font-light uppercase leading-snug tracking-wide text-mist sm:max-w-[200px] md:max-w-[200px] lg:max-w-[300px]" style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)', textShadow: '0 1px 12px rgba(0,0,0,0.9)' }}>
            Textile designer exploring print, weave, surface &amp; storytelling.
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <Magnet padding={60} strength={4}>
            <ContactButton />
          </Magnet>
        </FadeIn>
      </div>
    </section>
  );
}
