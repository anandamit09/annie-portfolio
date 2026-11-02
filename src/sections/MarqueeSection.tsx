import { useEffect, useRef } from 'react';
import { marqueeRowOne, marqueeRowTwo, type Img } from '../data/projects';

function Row({ images, rowRef }: { images: Img[]; rowRef: React.RefObject<HTMLDivElement> }) {
  // duplicated for a seamless strip
  const doubled = [...images, ...images];
  return (
    <div ref={rowRef} className="flex w-max gap-3" style={{ willChange: 'transform' }}>
      {doubled.map((img, idx) => (
        <div key={idx} className="h-[170px] w-[264px] shrink-0 overflow-hidden rounded-2xl bg-cream sm:h-[220px] sm:w-[342px] md:h-[270px] md:w-[420px]">
          <img
            src={img.src}
            alt={idx < images.length ? img.alt : ''}
            aria-hidden={idx >= images.length || undefined}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}

/** Two rows of portfolio imagery that drift in opposite directions as you scroll. */
export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const rowOne = useRef<HTMLDivElement>(null);
  const rowTwo = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let frame = 0;
    const update = () => {
      const section = sectionRef.current;
      if (!section || !rowOne.current || !rowTwo.current) return;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const offset = reduce ? 0 : (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      const half = rowOne.current.scrollWidth / 2;
      // Row 1 starts shifted left and moves right; row 2 moves left.
      rowOne.current.style.transform = `translate3d(${-half * 0.5 + offset}px,0,0)`;
      rowTwo.current.style.transform = `translate3d(${-offset}px,0,0)`;
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} aria-label="Portfolio imagery" className="overflow-x-clip bg-bone pb-10 pt-24 sm:pt-32 md:pt-40">
      <div className="flex flex-col gap-3">
        <Row images={marqueeRowOne} rowRef={rowOne} />
        <Row images={marqueeRowTwo} rowRef={rowTwo} />
      </div>
    </section>
  );
}
