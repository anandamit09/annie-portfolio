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

export default function App() {
  const hash = useHash();
  const slug = hash.startsWith('#/project/') ? hash.slice('#/project/'.length) : null;
  const project = slug ? projects.find((p) => p.slug === slug) : undefined;

  // Scroll handling when switching between pages / sections.
  useLayoutEffect(() => {
    if (project) {
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
      return;
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
    <main className="overflow-x-clip bg-ink">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ExpertiseSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
