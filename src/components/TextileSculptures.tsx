/**
 * Editorial "3D" textile sculptures rendered as SVG with sculpted gradients.
 * Monochrome with deep-red accents. These are lightweight stand-ins — swap
 * any of them for rendered 3D images by replacing the component with an <img>.
 */

type P = { className?: string };

export function YarnBall({ className }: P) {
  const strands = Array.from({ length: 14 }, (_, i) => i);
  return (
    <svg viewBox="0 0 240 240" className={className} role="img" aria-label="Sculptural ball of yarn with a trailing red thread">
      <defs>
        <radialGradient id="yb-body" cx="38%" cy="32%" r="75%">
          <stop offset="0%" stopColor="#f4f6f8" />
          <stop offset="45%" stopColor="#9aa3aa" />
          <stop offset="85%" stopColor="#2b2d30" />
          <stop offset="100%" stopColor="#111" />
        </radialGradient>
        <radialGradient id="yb-shade" cx="70%" cy="75%" r="60%">
          <stop offset="0%" stopColor="#000" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#000" stopOpacity="0" />
        </radialGradient>
        <clipPath id="yb-clip">
          <circle cx="118" cy="112" r="84" />
        </clipPath>
        <filter id="yb-soft" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>
      <ellipse cx="122" cy="212" rx="70" ry="10" fill="#000" opacity="0.6" filter="url(#yb-soft)" />
      <circle cx="118" cy="112" r="84" fill="url(#yb-body)" />
      <g clipPath="url(#yb-clip)" fill="none" strokeLinecap="round">
        {strands.map((i) => (
          <ellipse
            key={i}
            cx="118"
            cy="112"
            rx={84 - (i % 5) * 3}
            ry={18 + i * 4.6}
            transform={`rotate(${-38 + i * 7} 118 112)`}
            stroke={i === 6 ? '#A11E59' : i % 2 ? 'rgba(255,255,255,0.32)' : 'rgba(0,0,0,0.35)'}
            strokeWidth={i === 6 ? 3.2 : 1.6}
          />
        ))}
        {strands.map((i) => (
          <ellipse
            key={`b${i}`}
            cx="118"
            cy="112"
            rx={22 + i * 4.4}
            ry={84}
            transform={`rotate(${32 + i * 5} 118 112)`}
            stroke={i % 2 ? 'rgba(255,255,255,0.22)' : 'rgba(0,0,0,0.3)'}
            strokeWidth="1.3"
          />
        ))}
      </g>
      <circle cx="118" cy="112" r="84" fill="url(#yb-shade)" />
      <path d="M196 140 C 222 160, 214 196, 186 204 S 140 222, 120 236" stroke="#A11E59" strokeWidth="3.2" fill="none" strokeLinecap="round" />
      <ellipse cx="86" cy="70" rx="22" ry="12" fill="#fff" opacity="0.35" transform="rotate(-30 86 70)" filter="url(#yb-soft)" />
    </svg>
  );
}

export function ThreadSpool({ className }: P) {
  const wraps = Array.from({ length: 18 }, (_, i) => i);
  return (
    <svg viewBox="0 0 240 260" className={className} role="img" aria-label="Sculptural thread spool with a needle and red thread">
      <defs>
        <linearGradient id="sp-wood" x1="0" x2="1">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="35%" stopColor="#d7dde2" />
          <stop offset="60%" stopColor="#8a9198" />
          <stop offset="100%" stopColor="#141414" />
        </linearGradient>
        <linearGradient id="sp-thread" x1="0" x2="1">
          <stop offset="0%" stopColor="#2a0101" />
          <stop offset="38%" stopColor="#c21010" />
          <stop offset="62%" stopColor="#A11E59" />
          <stop offset="100%" stopColor="#1a0000" />
        </linearGradient>
        <linearGradient id="sp-needle" x1="0" x2="1">
          <stop offset="0%" stopColor="#5d646a" />
          <stop offset="50%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#3b3f43" />
        </linearGradient>
        <filter id="sp-soft" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>
      <ellipse cx="120" cy="238" rx="78" ry="11" fill="#000" opacity="0.6" filter="url(#sp-soft)" />
      {/* bottom flange */}
      <ellipse cx="116" cy="214" rx="70" ry="18" fill="#0f0f0f" />
      <rect x="46" y="200" width="140" height="14" fill="url(#sp-wood)" />
      <ellipse cx="116" cy="200" rx="70" ry="18" fill="#b9c1c7" />
      {/* thread body */}
      <rect x="62" y="62" width="108" height="138" fill="url(#sp-thread)" />
      {wraps.map((i) => (
        <path key={i} d={`M62 ${70 + i * 7.4} Q116 ${78 + i * 7.4} 170 ${70 + i * 7.4}`} stroke="rgba(0,0,0,0.35)" strokeWidth="1.2" fill="none" />
      ))}
      {wraps.map((i) => (
        <path key={`h${i}`} d={`M80 ${73 + i * 7.4} Q100 ${76 + i * 7.4} 118 ${76 + i * 7.4}`} stroke="rgba(255,255,255,0.18)" strokeWidth="1" fill="none" />
      ))}
      {/* top flange */}
      <rect x="46" y="48" width="140" height="14" fill="url(#sp-wood)" />
      <ellipse cx="116" cy="62" rx="70" ry="18" fill="#2a2a2a" opacity="0.6" />
      <ellipse cx="116" cy="48" rx="70" ry="18" fill="#e6ebef" />
      <ellipse cx="116" cy="48" rx="14" ry="5" fill="#111" />
      {/* needle */}
      <g transform="rotate(32 170 110)">
        <rect x="166" y="-6" width="7" height="196" rx="3.5" fill="url(#sp-needle)" />
        <path d="M166 190 L169.5 214 L173 190 Z" fill="#cfd5da" />
        <rect x="168" y="6" width="3" height="16" rx="1.5" fill="#0c0c0c" />
      </g>
      <path d="M170 132 C 210 118, 226 72, 196 40 S 150 20, 172 4" stroke="#A11E59" strokeWidth="2.6" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function TextileFlower({ className }: P) {
  const outer = Array.from({ length: 10 }, (_, i) => i * 36);
  const inner = Array.from({ length: 8 }, (_, i) => i * 45 + 22);
  return (
    <svg viewBox="0 0 240 240" className={className} role="img" aria-label="Sculptural fabric flower with a deep red stitched centre">
      <defs>
        <radialGradient id="fl-petal" cx="50%" cy="15%" r="95%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="50%" stopColor="#b8c1c8" />
          <stop offset="100%" stopColor="#2a2c2e" />
        </radialGradient>
        <radialGradient id="fl-petal2" cx="50%" cy="10%" r="90%">
          <stop offset="0%" stopColor="#f2f5f7" />
          <stop offset="70%" stopColor="#7f878d" />
          <stop offset="100%" stopColor="#1b1c1d" />
        </radialGradient>
        <radialGradient id="fl-core" cx="40%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#e01818" />
          <stop offset="60%" stopColor="#A11E59" />
          <stop offset="100%" stopColor="#300000" />
        </radialGradient>
        <filter id="fl-soft" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="5" />
        </filter>
      </defs>
      <ellipse cx="124" cy="226" rx="72" ry="9" fill="#000" opacity="0.55" filter="url(#fl-soft)" />
      <g transform="translate(120 116)">
        {outer.map((a) => (
          <path
            key={a}
            transform={`rotate(${a})`}
            d="M0 0 C -30 -20, -34 -78, 0 -96 C 34 -78, 30 -20, 0 0 Z"
            fill="url(#fl-petal)"
            stroke="rgba(0,0,0,0.35)"
            strokeWidth="1"
          />
        ))}
        {inner.map((a) => (
          <path
            key={a}
            transform={`rotate(${a}) scale(0.62)`}
            d="M0 0 C -30 -20, -34 -78, 0 -96 C 34 -78, 30 -20, 0 0 Z"
            fill="url(#fl-petal2)"
            stroke="rgba(0,0,0,0.4)"
            strokeWidth="1.2"
          />
        ))}
        {outer.map((a) => (
          <path key={`s${a}`} transform={`rotate(${a})`} d="M0 -26 L0 -82" stroke="rgba(0,0,0,0.25)" strokeDasharray="3 4" strokeWidth="1" />
        ))}
        <circle r="24" fill="url(#fl-core)" />
        {Array.from({ length: 12 }, (_, i) => (
          <circle key={i} r="1.8" cx={Math.cos((i * Math.PI) / 6) * 15} cy={Math.sin((i * Math.PI) / 6) * 15} fill="#ffd9d9" opacity="0.7" />
        ))}
        <ellipse cx="-8" cy="-9" rx="7" ry="4" fill="#fff" opacity="0.35" />
      </g>
    </svg>
  );
}

export function FoldedFabric({ className }: P) {
  return (
    <svg viewBox="0 0 260 220" className={className} role="img" aria-label="Sculptural folded woven fabric with a red selvedge">
      <defs>
        <pattern id="ff-weave" width="8" height="8" patternUnits="userSpaceOnUse">
          <rect width="8" height="8" fill="#c9d1d7" />
          <rect width="4" height="4" fill="#e9eef1" />
          <rect x="4" y="4" width="4" height="4" fill="#e9eef1" />
          <path d="M0 4 H8 M4 0 V8" stroke="rgba(0,0,0,0.12)" strokeWidth="0.6" />
        </pattern>
        <linearGradient id="ff-shade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#000" stopOpacity="0.65" />
          <stop offset="18%" stopColor="#000" stopOpacity="0.05" />
          <stop offset="34%" stopColor="#000" stopOpacity="0.55" />
          <stop offset="50%" stopColor="#fff" stopOpacity="0.15" />
          <stop offset="66%" stopColor="#000" stopOpacity="0.6" />
          <stop offset="82%" stopColor="#000" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id="ff-red" x1="0" x2="1">
          <stop offset="0%" stopColor="#3a0202" />
          <stop offset="18%" stopColor="#A11E59" />
          <stop offset="34%" stopColor="#4a0202" />
          <stop offset="50%" stopColor="#c51212" />
          <stop offset="66%" stopColor="#4a0202" />
          <stop offset="82%" stopColor="#A11E59" />
          <stop offset="100%" stopColor="#2a0101" />
        </linearGradient>
        <filter id="ff-soft" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>
      <ellipse cx="130" cy="204" rx="104" ry="10" fill="#000" opacity="0.6" filter="url(#ff-soft)" />
      <g transform="skewY(-6) translate(0 18)">
        <path
          d="M20 40 Q 52 20 84 40 T 148 40 T 212 40 T 240 32 L 240 160 Q 212 180 180 160 T 116 160 T 52 160 T 20 168 Z"
          fill="url(#ff-weave)"
        />
        <path
          d="M20 40 Q 52 20 84 40 T 148 40 T 212 40 T 240 32 L 240 160 Q 212 180 180 160 T 116 160 T 52 160 T 20 168 Z"
          fill="url(#ff-shade)"
        />
        <path d="M20 150 Q 52 132 84 150 T 148 150 T 212 150 T 240 142 L 240 160 Q 212 180 180 160 T 116 160 T 52 160 T 20 168 Z" fill="url(#ff-red)" />
        <path d="M20 40 Q 52 20 84 40 T 148 40 T 212 40 T 240 32" stroke="rgba(255,255,255,0.6)" strokeWidth="1.4" fill="none" />
        {Array.from({ length: 9 }, (_, i) => (
          <path key={i} d={`M${26 + i * 26} 168 l -2 14`} stroke="#A11E59" strokeWidth="1.6" strokeLinecap="round" />
        ))}
      </g>
    </svg>
  );
}
