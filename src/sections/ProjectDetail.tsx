import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import FadeIn from '../components/FadeIn';
import { ContactButton } from '../components/Buttons';
import { projects, type Block, type Img, type Project } from '../data/projects';

const grid: Record<NonNullable<Block['layout']>, string> = {
  wide: 'grid-cols-1',
  two: 'grid-cols-1 sm:grid-cols-2',
  three: 'grid-cols-2 md:grid-cols-3',
  four: 'grid-cols-2 md:grid-cols-4',
  'tall-three': 'grid-cols-2 md:grid-cols-3',
};

function Figure({ img, onOpen, contain }: { img: Img; onOpen: () => void; contain?: boolean }) {
  return (
    <figure className="group flex flex-col gap-2">
      <button
        type="button"
        onClick={onOpen}
        className="block overflow-hidden rounded-2xl bg-surface md:rounded-3xl"
        aria-label={`View larger: ${img.alt}`}
      >
        <img
          src={img.src}
          alt={img.alt}
          loading="lazy"
          decoding="async"
          className={`w-full transition-transform duration-700 ease-out group-hover:scale-[1.03] ${contain ? 'h-auto' : 'aspect-[4/5] object-cover'}`}
        />
      </button>
      {img.caption && <figcaption className="text-xs uppercase tracking-widest text-mist/60">{img.caption}</figcaption>}
    </figure>
  );
}

function Lightbox({ img, onClose }: { img: Img | null; onClose: () => void }) {
  useEffect(() => {
    if (!img) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [img, onClose]);
  if (!img) return null;
  return (
    <div role="dialog" aria-modal="true" aria-label={img.alt} className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-10" onClick={onClose}>
      <img src={img.src} alt={img.alt} className="max-h-full max-w-full rounded-2xl object-contain" />
      <button type="button" onClick={onClose} className="absolute right-4 top-4 rounded-full border border-mist/40 px-4 py-2 text-xs uppercase tracking-widest text-mist hover:border-blood hover:bg-blood" autoFocus>
        Close
      </button>
    </div>
  );
}

function BlockView({ block, onOpen }: { block: Block; onOpen: (img: Img) => void }) {
  const layout = block.layout ?? 'three';
  // diagrams, sheets and swatches read better uncropped
  const contain = layout === 'wide' || layout === 'two' || layout === 'four';
  return (
    <section className="border-t border-mist/15 py-14 md:py-20">
      <div className="grid gap-8 md:grid-cols-12 md:gap-10">
        <FadeIn className="md:col-span-4">
          {block.kicker && <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-blood">{block.kicker}</p>}
          <h3 className="font-bold uppercase leading-none tracking-tight text-mist" style={{ fontSize: 'clamp(1.6rem, 3.4vw, 3rem)' }}>
            {block.title}
          </h3>
        </FadeIn>
        <FadeIn delay={0.1} className="flex flex-col gap-5 md:col-span-8">
          {block.text?.map((t, i) => (
            <p key={i} className="max-w-3xl font-light leading-relaxed text-mist/85" style={{ fontSize: 'clamp(0.95rem, 1.4vw, 1.15rem)' }}>
              {t}
            </p>
          ))}
          {block.swatches && (
            <ul className="flex flex-wrap gap-2" aria-label="Colour story">
              {block.swatches.map((s) => (
                <li key={s.name} className="inline-flex items-center gap-2 rounded-full border border-mist/25 px-3 py-1.5 text-xs uppercase tracking-widest text-mist/80">
                  {s.hex && <span aria-hidden className="h-3.5 w-3.5 rounded-full border border-mist/30" style={{ background: s.hex }} />}
                  {s.name}
                  {s.hex && <span className="text-mist/50">{s.hex}</span>}
                </li>
              ))}
            </ul>
          )}
          {block.specs?.map((spec, si) => (
            <div key={si} className="max-w-3xl">
              {spec.heading && <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-mist/60">{spec.heading}</p>}
              <dl className="divide-y divide-mist/15 border-y border-mist/15">
                {spec.rows.map((r) => (
                  <div key={r.label} className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-[minmax(0,14rem)_1fr] sm:gap-6">
                    <dt className="text-xs font-medium uppercase tracking-widest text-blood sm:text-sm">{r.label}</dt>
                    <dd className="font-light text-mist">{r.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </FadeIn>
      </div>

      {block.images && (
        <div className={`mt-10 grid items-start gap-3 sm:gap-4 md:mt-14 ${grid[layout]}`}>
          {block.images.map((img, i) => (
            <FadeIn key={img.src + i} delay={(i % 4) * 0.08}>
              <Figure img={img} onOpen={() => onOpen(img)} contain={contain} />
            </FadeIn>
          ))}
        </div>
      )}
    </section>
  );
}

export default function ProjectDetail({ project }: { project: Project }) {
  const [lightbox, setLightbox] = useState<Img | null>(null);
  const idx = projects.findIndex((p) => p.slug === project.slug);
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];

  useEffect(() => {
    document.title = `${project.name} — Annie, Textile Designer`;
    return () => {
      document.title = 'Annie — Textile Designer';
    };
  }, [project]);

  return (
    <main className="min-h-screen bg-ink">
      <header className="sticky top-0 z-40 border-b border-mist/10 bg-ink/85 backdrop-blur">
        <nav className="flex items-center justify-between px-5 py-4 text-xs font-medium uppercase tracking-widest text-mist sm:px-8 sm:text-sm md:px-10" aria-label="Project">
          <a href="#projects" className="inline-flex items-center gap-2 transition-opacity hover:opacity-70">
            <ArrowLeft aria-hidden className="h-4 w-4 text-blood" /> All projects
          </a>
          <a href="#top" className="font-semibold tracking-[0.3em]">
            Annie
          </a>
        </nav>
      </header>

      <div className="px-5 sm:px-8 md:px-10">
        <div className="mx-auto max-w-6xl">
          <section className="pb-12 pt-14 md:pb-16 md:pt-20">
            <FadeIn>
              <p className="mb-4 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-blood sm:text-sm">
                <span>Project {project.number}</span>
                <span aria-hidden className="h-px w-10 bg-blood" />
                <span>{project.category}</span>
              </p>
            </FadeIn>
            <FadeIn delay={0.1} y={40}>
              <h1 className="text-gradient font-black uppercase leading-[0.85] tracking-tight" style={{ fontSize: 'clamp(3.2rem, 13vw, 200px)' }}>
                {project.name}
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-8 max-w-3xl font-light leading-relaxed text-mist" style={{ fontSize: 'clamp(1.05rem, 1.9vw, 1.5rem)' }}>
                {project.summary}
              </p>
            </FadeIn>
          </section>

          <FadeIn delay={0.25}>
            <button type="button" onClick={() => setLightbox(project.hero)} className="block w-full overflow-hidden rounded-[28px] bg-surface md:rounded-[40px]" aria-label={`View larger: ${project.hero.alt}`}>
              <img src={project.hero.src} alt={project.hero.alt} className="max-h-[80vh] w-full object-contain" fetchPriority="high" />
            </button>
          </FadeIn>

          <div className="mt-10">
            {project.blocks.map((b, i) => (
              <BlockView key={i} block={b} onOpen={setLightbox} />
            ))}
          </div>

          <nav className="grid grid-cols-2 gap-3 border-t border-mist/15 py-12 md:py-16" aria-label="More projects">
            <a href={`#/project/${prev.slug}`} className="group flex flex-col gap-2 rounded-3xl border border-mist/20 p-5 transition-colors hover:border-blood sm:p-8">
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-mist/60">
                <ArrowLeft aria-hidden className="h-4 w-4 text-blood transition-transform group-hover:-translate-x-1" /> Previous
              </span>
              <span className="font-bold uppercase text-mist" style={{ fontSize: 'clamp(1.1rem, 2.6vw, 2.2rem)' }}>
                {prev.name}
              </span>
            </a>
            <a href={`#/project/${next.slug}`} className="group flex flex-col items-end gap-2 rounded-3xl border border-mist/20 p-5 text-right transition-colors hover:border-blood sm:p-8">
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-mist/60">
                Next <ArrowRight aria-hidden className="h-4 w-4 text-blood transition-transform group-hover:translate-x-1" />
              </span>
              <span className="font-bold uppercase text-mist" style={{ fontSize: 'clamp(1.1rem, 2.6vw, 2.2rem)' }}>
                {next.name}
              </span>
            </a>
          </nav>

          <div className="flex flex-col items-center gap-6 pb-20 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-mist/60">Source: {project.source}</p>
            <ContactButton />
          </div>
        </div>
      </div>

      <Lightbox img={lightbox} onClose={() => setLightbox(null)} />
    </main>
  );
}
