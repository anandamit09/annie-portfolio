import { useEffect, useLayoutEffect, useState } from 'react';
import HeroSection from './sections/HeroSection';
import MarqueeSection from './sections/MarqueeSection';
import AboutSection from './sections/AboutSection';
import ExpertiseSection from './sections/ExpertiseSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSection from './sections/ContactSection';
import ProjectDetail from './sections/ProjectDetail';
import { projects } from './data/projects';

/**
 * Tiny hash router:
 *   #about, #projects …  → home page, scrolled to that section
 *   #/project/<slug>     → project detail page
 */
function useHash() {
  const [hash, setHash] = useState(() => window.location.hash);
  useEffect(() => {
    const onChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);
  return hash;
}

/** Where the home page was last scrolled to, so leaving for a project and
 *  coming back lands on the same card instead of the top of the section. */
let homeScroll = 0;

export default function App() {
  const hash = useHash();
  const slug = hash.startsWith('#/project/') ? hash.slice('#/project/'.length) : null;
  const project = slug ? projects.find((p) => p.slug === slug) : undefined;

  // Remember the home scroll position while the home page is on screen.
  useEffect(() => {
    if (project) return;
    const onScroll = () => {
      homeScroll = window.scrollY;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [project?.slug]);

  // Scroll handling when switching between pages / sections.
  useLayoutEffect(() => {
    if (project) {
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
      return;
    }
    // Returning from a project detail: go back to where we were.
    if (homeScroll > 0) {
      const target = homeScroll;
      const restore = () => window.scrollTo({ top: target, behavior: 'instant' as ScrollBehavior });
      restore();
      // Images below the fold settle after a frame or two and can shift the
      // page, so re-apply until the layout stops moving.
      let frames = 0;
      const tick = () => {
        restore();
        if (++frames < 12) raf = requestAnimationFrame(tick);
      };
      let raf = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(raf);
    }
    const id = hash.replace('#', '');
    if (id && !id.startsWith('/')) {
      const el = document.getElementById(id);
      if (el) requestAnimationFrame(() => el.scrollIntoView({ behavior: 'instant' as ScrollBehavior }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [project?.slug]);

  if (project) return <ProjectDetail project={project} />;

  return (
    <main className="overflow-x-clip bg-bone">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ExpertiseSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
