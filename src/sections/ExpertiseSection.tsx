import FadeIn from '../components/FadeIn';

const items = [
  {
    title: 'Print Design',
    text: 'Developing textile prints from research, moodboards, and hand-drawn motifs to repeat compositions, colourways, and fashion applications.',
  },
  {
    title: 'Weave Design',
    text: 'Exploring weave structures, yarn combinations, colour interactions, and woven surfaces through loom experiments, swatches, and technical specifications.',
  },
  {
    title: 'Surface Techniques',
    text: 'Translating visual research and craft references into textile surfaces through printing, dyeing, embroidery, and other techniques represented in my projects.',
  },
  {
    title: 'Textile Concept Development',
    text: 'Building design narratives through trend research, visual inspiration, colour palettes, motif development, and coherent textile collections.',
  },
  {
    title: 'Fashion & Textile Presentation',
    text: 'Communicating textile ideas through garment applications, collection development, technical sheets, visual storytelling, and portfolio presentation.',
  },
];

/* The three project accents, cycled down the list so the section carries the
   same colours as the work below it. */
const accents = ['#A11E59', '#1B344D', '#BC2E1F'];

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="relative z-0 rounded-t-[40px] bg-cream px-5 py-20 text-ink sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32">
      <FadeIn y={40}>
        <h2 className="mb-16 text-center font-black uppercase leading-none tracking-tight text-ink sm:mb-20 md:mb-28" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
          Expertise
        </h2>
      </FadeIn>

      <ol className="mx-auto max-w-5xl">
        {items.map((item, i) => (
          <FadeIn as="li" key={item.title} delay={i * 0.1} className="group" style={{ ['--accent' as string]: accents[i % accents.length] }}>
            <div
              className="flex flex-col gap-3 py-8 sm:flex-row sm:items-center sm:gap-10 sm:py-10 md:gap-14 md:py-12"
              style={{ borderTop: i === 0 ? '1px solid rgba(28,26,23,0.15)' : undefined, borderBottom: '1px solid rgba(28,26,23,0.15)' }}
            >
              <span
                aria-hidden
                className="shrink-0 font-black leading-none transition-transform duration-500 group-hover:-translate-y-1 sm:w-[1.6em]"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)', color: 'var(--accent)' }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold uppercase tracking-wide transition-colors duration-300 group-hover:[color:var(--accent)]" style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}>
                  <span className="sr-only">{String(i + 1).padStart(2, '0')} — </span>
                  {item.title}
                </h3>
                <p className="max-w-2xl font-light leading-relaxed opacity-70" style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}>
                  {item.text}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </ol>
    </section>
  );
}
