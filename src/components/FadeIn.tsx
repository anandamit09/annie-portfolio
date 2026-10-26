import { motion, useReducedMotion } from 'framer-motion';
import type { ElementType, ReactNode } from 'react';
import { useMemo } from 'react';

type FadeInProps = {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
};

const cache = new Map<ElementType, ReturnType<typeof motion.create>>();
function getMotion(tag: ElementType) {
  if (!cache.has(tag)) cache.set(tag, motion.create(tag as never));
  return cache.get(tag)!;
}

/** Fades & slides content in once it enters the viewport. */
export default function FadeIn({
  children,
  as = 'div',
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className,
  style,
  id,
}: FadeInProps) {
  const reduce = useReducedMotion();
  const Comp = useMemo(() => getMotion(as), [as]) as typeof motion.div;

  return (
    <Comp
      id={id}
      className={className}
      style={style}
      initial={reduce ? { opacity: 0 } : { opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{ duration: reduce ? 0.3 : duration, delay: reduce ? 0 : delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </Comp>
  );
}
