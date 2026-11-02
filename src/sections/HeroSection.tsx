import { useLayoutEffect, useRef } from 'react';
import FadeIn from '../components/FadeIn';
import Magnet from '../components/Magnet';
import { ContactButton } from '../components/Buttons';
import { site } from '../config';

/** Soft fade at the waist so the cut-off edge dissolves into the page. */
const PORTRAIT_FADE = 'linear-gradient(to bottom, #000 78%, transparent 100%)';

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
  return (
    <section id="top" className="relative flex h-screen min-h-[560px] flex-col overflow-x-clip" aria-label="Introduction">
      <FadeIn as="nav" delay={0} y={-20} className="relative z-20" aria-label="Primary">
        <ul className="flex justify-between px-6 pt-6 text-sm font-medium uppercase tracking-wider text-ink md:px-10 md:pt-8 md:text-lg lg:text-[1.4rem]">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative pb-1 transition-opacity duration-200 hover:opacity-70 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-berry after:transition-all after:duration-300 hover:after:w-full"
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
            className="text-gradient-ink whitespace-nowrap px-[2vw] text-center text-[14vw] font-black uppercase leading-none tracking-tight sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]"
          >
            Hi, I'm Annie<span className="text-gradient-berry">.</span>
          </h1>
        </FadeIn>
      </div>

      {/* Portrait. It sits still — only the entrance fade moves it. */}
      <div className="absolute left-1/2 top-1/2 z-10 w-[280px] -translate-x-1/2 -translate-y-1/2 sm:bottom-0 sm:top-auto sm:w-[340px] sm:translate-y-0 md:w-[440px] lg:w-[520px]" style={{ maxHeight: '72vh' }}>
        <FadeIn delay={0.6} y={30}>
          <img
            src={site.heroImage}
            alt={site.heroImageIsPlaceholder ? 'Placeholder for Annie’s portrait' : 'Portrait of Annie (Ananya Raj)'}
            draggable={false}
            fetchPriority="high"
            className="pointer-events-none mx-auto h-auto max-h-[72vh] w-full select-none object-contain object-bottom"
            style={{ WebkitMaskImage: PORTRAIT_FADE, maskImage: PORTRAIT_FADE }}
          />
        </FadeIn>
      </div>

      <div className="relative z-20 mt-auto flex items-end justify-between gap-4 px-6 pb-7 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <p className="max-w-[160px] font-light uppercase leading-snug tracking-wide text-ink/75 sm:max-w-[200px] md:max-w-[200px] lg:max-w-[300px]" style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)', textShadow: '0 1px 12px rgba(247,241,230,0.9)' }}>
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
