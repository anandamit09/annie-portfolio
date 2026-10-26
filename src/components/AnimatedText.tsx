import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { useRef } from 'react';

type Props = { text: string; className?: string; style?: React.CSSProperties };

/**
 * Character-by-character scroll reveal. Each character fades from 0.2 → 1
 * as the paragraph scrolls through the viewport. An invisible placeholder
 * keeps layout stable while the animated character sits absolutely on top.
 * Screen readers receive the full sentence via aria-label.
 */
export default function AnimatedText({ text, className, style }: Props) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.8', 'end 0.2'] });

  if (reduce) {
    return (
      <p ref={ref} className={className} style={style}>
        {text}
      </p>
    );
  }

  const words = text.split(' ');
  const total = text.length;
  let index = 0;

  return (
    <p ref={ref} className={className} style={style} aria-label={text}>
      {words.map((word, w) => {
        const chars = word.split('').map((ch) => {
          const start = index / total;
          const end = (index + 1) / total;
          index += 1;
          return { ch, start, end };
        });
        index += 1; // the space
        return (
          <span key={w} aria-hidden="true" className="inline-block whitespace-nowrap">
            {chars.map(({ ch, start, end }, c) => (
              <Char key={c} progress={scrollYProgress} range={[start, end]}>
                {ch}
              </Char>
            ))}
            {w < words.length - 1 && <span>&nbsp;</span>}
          </span>
        );
      })}
    </p>
  );
}

function Char({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <span className="relative">
      <span className="invisible">{children}</span>
      <motion.span className="absolute left-0 top-0" style={{ opacity }}>
        {children}
      </motion.span>
    </span>
  );
}
