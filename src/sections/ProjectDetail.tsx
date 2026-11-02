import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { projects, type Project, type Theme } from '../data/projects';
import { chunks, type Chunk, type ChunkEl } from '../data/chunks';

/**
 * A project page is the portfolio itself: the source PDF cut into chunks and
 * stacked. Nothing is re-laid-out, re-typeset or re-coloured.
 *
 * On top of each chunk sit the elements that were cut out of it — the numbered
 * circles, the logo cards, the pinned photos. Each cutout is positioned
 * exactly over its own pixels in the plate below, so at rest it is invisible
 * and what you see is the PDF. The animation only ever scales a cutout *up*,
 * which is why the page underneath is never exposed.
 */

/** Max width a chunk is drawn at. Beyond this the band's own colours fill out. */
const PAGE = 1120;

function bandBackground(c: Chunk) {
  // A chunk whose two edges differ is bleeding something off one side (a blob,
  // a split black/white panel). Paint each gutter in the colour that reaches it.
  return c.left === c.right ? c.left : `linear-gradient(90deg, ${c.left} 0 50%, ${c.right} 50% 100%)`;
}

/**
 * How far apart pieces of each kind start. The one-shot kinds read as a
 * sequence; the endless ones just need their phases spread so a row of dots
 * does not bob in lockstep.
 */
const STAGGER: Record<ChunkEl['kind'], number> = {
  card: 60,
  chip: 70,
  dot: 140,
  star: 320,
  wave: 400,
};

function Band({ chunk, index, projectName }: { chunk: Chunk; index: number; projectName: string }) {
  const ref = useRef<HTMLDivElement>(null);
  // Not `once`: coming back to a section should bring it to life again.
  const inView = useInView(ref, { margin: '-12% 0px -12% 0px' });

  return (
    <section style={{ background: bandBackground(chunk) }} aria-label={chunk.heading || `Page ${index + 1}`}>
      <div ref={ref} data-play={inView ? '1' : '0'} className="relative mx-auto w-full" style={{ maxWidth: PAGE }}>
        <img
          src={chunk.src}
          alt={chunk.heading || `${projectName}, page ${index + 1}`}
          width={chunk.w}
          height={chunk.h}
          loading={index < 2 ? 'eager' : 'lazy'}
          fetchPriority={index === 0 ? 'high' : 'auto'}
          decoding="async"
          className="block w-full"
        />
        {chunk.els.map((el, i) => (
          <img
            key={el.src}
            className={`el el--${el.kind} ${el.move ? 'el--move' : 'el--fixed'}`}
            src={el.src}
            alt=""
            aria-hidden
            draggable={false}
            loading="lazy"
            decoding="async"
            style={{
              left: `${el.x}%`,
              top: `${el.y}%`,
              width: `${el.w}%`,
              height: `${el.h}%`,
              animationDelay: `${Math.min(i * STAGGER[el.kind], 900)}ms`,
            }}
          />
        ))}
      </div>
      {/* The chunk is a picture; this is its text, for screen readers. */}
      {chunk.text && <p className="sr-only">{chunk.text}</p>}
    </section>
  );
}

function displayStyle(t: Theme, size: string): React.CSSProperties {
  return {
    fontFamily: t.display,
    fontWeight: t.displayWeight,
    fontStyle: t.displayItalic ? 'italic' : 'normal',
    letterSpacing: t.displayTracking,
    textTransform: t.displayCase === 'upper' ? 'uppercase' : 'none',
    fontSize: size,
  };
}

export default function ProjectDetail({ project }: { project: Project }) {
  const t = project.theme;
  const pages = chunks[project.slug] ?? [];
  const idx = projects.findIndex((p) => p.slug === project.slug);
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];

  useEffect(() => {
    document.title = `${project.name} — Annie, Textile Designer`;
    const meta = document.querySelector('meta[name="theme-color"]');
    const previous = meta?.getAttribute('content') ?? '#0C0C0C';
    meta?.setAttribute('content', pages[0]?.left ?? t.themeColor);
    return () => {
      document.title = 'Annie — Textile Designer';
      meta?.setAttribute('content', previous);
    };
  }, [project, t.themeColor, pages]);

  return (
    <main className="min-h-screen" style={{ background: t.bg, color: t.ink, fontFamily: t.body }}>
      {/* The PDF cover carries the title, so the real heading is for
          screen readers and search engines only. */}
      <h1 className="sr-only">
        {project.name} — {project.category}. {project.summary}
      </h1>

      <header
        className="sticky top-0 z-40 backdrop-blur"
        style={{ borderBottom: `1px solid ${t.rule}`, background: `color-mix(in srgb, ${t.bg} 88%, transparent)` }}
      >
        <nav
          className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 text-[0.65rem] font-medium uppercase tracking-[0.2em] sm:px-8 sm:py-4 sm:text-xs"
          aria-label="Project"
        >
          <a href="#projects" className="inline-flex items-center gap-2 transition-opacity hover:opacity-70" style={{ color: t.ink }}>
            <ArrowLeft aria-hidden className="h-4 w-4" style={{ color: t.accent }} /> All projects
          </a>
          <span className="hidden sm:inline" style={{ color: t.muted }}>
            {project.category}
          </span>
          <a href="#top" className="font-semibold tracking-[0.3em]" style={{ color: t.ink }}>
            Annie
          </a>
        </nav>
      </header>

      {/* ---- The portfolio, chunk by chunk ---- */}
      {pages.map((c, i) => (
        <Band key={c.src} chunk={c} index={i} projectName={project.name} />
      ))}

      {/* ---- Footer ---- */}
      <div className="mx-auto max-w-6xl px-5 sm:px-8 md:px-10" style={{ background: t.bg }}>
        <nav className="grid grid-cols-1 gap-3 py-10 sm:grid-cols-2 sm:py-12 md:py-16" aria-label="More projects">
          <a
            href={`#/project/${prev.slug}`}
            className="group flex flex-col gap-2 border p-5 transition-colors sm:p-8"
            style={{ borderColor: t.rule, borderRadius: t.radius }}
          >
            <span className="inline-flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.2em] sm:text-xs" style={{ color: t.muted }}>
              <ArrowLeft aria-hidden className="h-4 w-4 transition-transform group-hover:-translate-x-1" style={{ color: t.accent }} /> Previous
            </span>
            <span style={{ ...displayStyle(prev.theme, 'clamp(1.1rem, 3.4vw, 2rem)'), color: t.ink }}>{prev.name}</span>
          </a>
          <a
            href={`#/project/${next.slug}`}
            className="group flex flex-col gap-2 border p-5 text-right transition-colors sm:items-end sm:p-8"
            style={{ borderColor: t.rule, borderRadius: t.radius }}
          >
            <span className="inline-flex items-center gap-2 self-end text-[0.68rem] uppercase tracking-[0.2em] sm:text-xs" style={{ color: t.muted }}>
              Next <ArrowRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-1" style={{ color: t.accent }} />
            </span>
            <span style={{ ...displayStyle(next.theme, 'clamp(1.1rem, 3.4vw, 2rem)'), color: t.ink }}>{next.name}</span>
          </a>
        </nav>

        <div className="flex flex-col items-center gap-5 pb-16 text-center sm:pb-20">
          <p className="text-[0.68rem] uppercase tracking-[0.28em] sm:text-xs" style={{ color: t.muted }}>
            Source: {project.source}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 text-xs font-medium uppercase tracking-widest transition-opacity hover:opacity-85 sm:px-10 sm:py-3.5 sm:text-sm"
            style={{ background: t.accent, color: t.bg, borderRadius: t.radius }}
          >
            Contact Me
          </a>
        </div>
      </div>
    </main>
  );
}
