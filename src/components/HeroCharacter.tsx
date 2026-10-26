import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef, useState, type RefObject } from 'react';

type Props = {
  /** The hero section — the cursor is tracked across this whole area. */
  areaRef: RefObject<HTMLElement>;
  src: string;
  alt: string;
  /** Magnet reach in px around the character (from the original Magnet: 150). */
  padding?: number;
  /** Magnet divisor — higher = subtler follow (from the original Magnet: 3). */
  strength?: number;
  /** Max tilt in degrees. */
  maxTilt?: number;
};

/** Soft fade at the waist so the cut-off edge dissolves into the background. */
const FADE = 'linear-gradient(to bottom, #000 78%, transparent 100%)';

const SPRING = { stiffness: 140, damping: 18, mass: 0.7 };

/**
 * Cursor-reactive hero character.
 *
 * Keeps the original Magnet behaviour (follows the cursor's offset from the
 * character's centre, divided by `strength`, while the cursor is within
 * `padding` px) and layers on top of it:
 *   - spring physics instead of CSS transitions, so motion eases naturally
 *   - a 3D tilt toward the cursor (rotateX / rotateY with perspective)
 *   - depth parallax: the glow behind moves the opposite way and the floor
 *     shadow stretches, so the flat illustration reads as having depth
 *   - a smooth return to neutral when the cursor leaves the hero
 * Touch devices get a gentle idle float plus a light passive touch tilt that
 * never blocks scrolling. Reduced-motion users see a still image.
 */
export default function HeroCharacter({ areaRef, src, alt, padding = 150, strength = 3, maxTilt = 12 }: Props) {
  const reduce = useReducedMotion();
  const charRef = useRef<HTMLDivElement>(null);
  const [touch, setTouch] = useState(false);

  // raw targets
  const tx = useMotionValue(0);
  const ty = useMotionValue(0);
  const nx = useMotionValue(0); // -1 … 1, cursor x relative to character
  const ny = useMotionValue(0);

  // sprung values
  const x = useSpring(tx, SPRING);
  const y = useSpring(ty, SPRING);
  const sx = useSpring(nx, { stiffness: 120, damping: 16, mass: 0.6 });
  const sy = useSpring(ny, { stiffness: 120, damping: 16, mass: 0.6 });

  const rotateY = useTransform(sx, [-1, 1], [-maxTilt, maxTilt]);
  const rotateX = useTransform(sy, [-1, 1], [maxTilt * 0.6, -maxTilt * 0.6]);
  const glowX = useTransform(sx, [-1, 1], [40, -40]);
  const glowY = useTransform(sy, [-1, 1], [30, -30]);
  const shadowX = useTransform(sx, [-1, 1], [-30, 30]);
  const shadowScale = useTransform(sx, [-1, 0, 1], [1.12, 1, 1.12]);
  const sheenX = useTransform(sx, [-1, 1], ['10%', '90%']);
  const sheen = useTransform(sheenX, (v) => `radial-gradient(circle at ${v} 30%, rgba(255,255,255,0.28), rgba(255,255,255,0) 45%)`);

  useEffect(() => {
    const mq = window.matchMedia('(hover: none), (pointer: coarse)');
    const update = () => setTouch(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (reduce) return;
    const area = areaRef.current;
    if (!area) return;

    const reset = () => {
      tx.set(0);
      ty.set(0);
      nx.set(0);
      ny.set(0);
    };

    const track = (clientX: number, clientY: number, magnet: boolean) => {
      const el = charRef.current;
      if (!el) return;
      const { left, top, width, height } = el.getBoundingClientRect();
      const cx = left + width / 2;
      const cy = top + height / 2;
      const dx = clientX - cx;
      const dy = clientY - cy;

      // Tilt reacts anywhere in the hero, scaled by distance across the hero.
      const area = areaRef.current!.getBoundingClientRect();
      nx.set(Math.max(-1, Math.min(1, dx / (area.width / 2))));
      ny.set(Math.max(-1, Math.min(1, dy / (area.height / 2))));

      // Magnet follow (original logic) only when the cursor is close.
      const near = Math.abs(dx) < width / 2 + padding && Math.abs(dy) < height / 2 + padding;
      if (magnet && near) {
        tx.set(dx / strength);
        ty.set(dy / strength);
      } else {
        tx.set(0);
        ty.set(0);
      }
    };

    const onPointerMove = (e: PointerEvent) => {
      if (e.pointerType === 'mouse' || e.pointerType === 'pen') track(e.clientX, e.clientY, true);
    };
    const onPointerLeave = (e: PointerEvent) => {
      if (e.pointerType === 'mouse' || e.pointerType === 'pen') reset();
    };
    // Touch: tilt only (no follow), passive so scrolling is never blocked.
    const onTouchMove = (e: TouchEvent) => {
      const t = e.touches[0];
      if (t) track(t.clientX, t.clientY, false);
    };

    area.addEventListener('pointermove', onPointerMove, { passive: true });
    area.addEventListener('pointerleave', onPointerLeave);
    area.addEventListener('touchstart', onTouchMove, { passive: true });
    area.addEventListener('touchmove', onTouchMove, { passive: true });
    area.addEventListener('touchend', reset, { passive: true });
    area.addEventListener('touchcancel', reset, { passive: true });
    window.addEventListener('blur', reset);
    return () => {
      area.removeEventListener('pointermove', onPointerMove);
      area.removeEventListener('pointerleave', onPointerLeave);
      area.removeEventListener('touchstart', onTouchMove);
      area.removeEventListener('touchmove', onTouchMove);
      area.removeEventListener('touchend', reset);
      area.removeEventListener('touchcancel', reset);
      window.removeEventListener('blur', reset);
    };
  }, [areaRef, padding, strength, reduce, tx, ty, nx, ny]);

  if (reduce) {
    return (
      <div ref={charRef} className="relative">
        <img src={src} alt={alt} draggable={false} className="pointer-events-none mx-auto h-auto max-h-[72vh] w-full select-none object-contain object-bottom" style={{ WebkitMaskImage: FADE, maskImage: FADE }} />
      </div>
    );
  }

  return (
    <div ref={charRef} className="relative" style={{ perspective: 1100 }} data-hero-character>
      {/* depth layer 1: glow drifts opposite to the cursor */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[38%] -z-10 h-[90%] w-[110%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{ x: glowX, y: glowY, background: 'radial-gradient(circle, rgba(159,5,5,0.42) 0%, rgba(159,5,5,0) 62%)' }}
      />

      {/* idle float on touch devices */}
      <motion.div
        animate={touch ? { y: [0, -10, 0], rotateZ: [0, 0.8, 0, -0.8, 0] } : { y: 0, rotateZ: 0 }}
        transition={touch ? { duration: 6, repeat: Infinity, ease: 'easeInOut' } : { duration: 0.6 }}
      >
        {/* follow + tilt */}
        <motion.div
          style={{ x, y, rotateX, rotateY, transformStyle: 'preserve-3d', willChange: 'transform' }}
          className="relative"
          data-hero-tilt
        >
          <img
            src={src}
            alt={alt}
            draggable={false}
            fetchPriority="high"
            className="pointer-events-none mx-auto h-auto max-h-[72vh] w-full select-none object-contain object-bottom drop-shadow-[0_30px_40px_rgba(0,0,0,0.55)]"
            style={{ transform: 'translateZ(40px)', WebkitMaskImage: FADE, maskImage: FADE }}
          />
          {/* moving light sheen sells the tilt on a flat illustration */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 mix-blend-soft-light"
            style={{
              background: sheen,
              WebkitMaskImage: `url("${src}")`,
              maskImage: `url("${src}")`,
              WebkitMaskSize: 'contain',
              maskSize: 'contain',
              WebkitMaskRepeat: 'no-repeat',
              maskRepeat: 'no-repeat',
              WebkitMaskPosition: 'center bottom',
              maskPosition: 'center bottom',
            }}
          />
        </motion.div>
      </motion.div>

      {/* depth layer 2: floor shadow slides with the lean */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-2 left-1/2 -z-10 h-6 w-2/3 -translate-x-1/2 rounded-[50%] bg-black/70 blur-xl"
        style={{ x: shadowX, scaleX: shadowScale }}
      />
    </div>
  );
}
