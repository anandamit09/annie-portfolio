import { useEffect, useRef, useState, type ReactNode } from 'react';

type MagnetProps = {
  children: ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
};

/**
 * Pulls its content toward the cursor while the cursor is within `padding`
 * px of the element. Disabled on touch / no-hover devices and when the
 * visitor prefers reduced motion.
 */
export default function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className,
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
    const update = () => setEnabled(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (!enabled) {
      setActive(false);
      setPos({ x: 0, y: 0 });
      return;
    }
    let frame = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const el = ref.current;
        if (!el) return;
        const { left, top, width, height } = el.getBoundingClientRect();
        const cx = left + width / 2;
        const cy = top + height / 2;
        const dx = Math.abs(cx - e.clientX);
        const dy = Math.abs(cy - e.clientY);
        if (dx < width / 2 + padding && dy < height / 2 + padding) {
          setActive(true);
          setPos({ x: (e.clientX - cx) / strength, y: (e.clientY - cy) / strength });
        } else {
          setActive(false);
          setPos({ x: 0, y: 0 });
        }
      });
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('mousemove', onMove);
    };
  }, [enabled, padding, strength]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        transition: active ? activeTransition : inactiveTransition,
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
}
