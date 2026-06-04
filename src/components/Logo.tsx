'use client';

import { useId } from 'react';

// SpacerGIF logo — "CRT Terminal" concept.
// A green-phosphor command prompt with a blinking cursor on a scanline screen.
// A nod to the dial-up era — and to spacer.gif, the pixel that held the old web together.
export function Logo({ size = 36, className = '' }: { size?: number; className?: string }) {
  const clipId = useId();
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      className={className}
      role="img"
      aria-label="SpacerGIF"
    >
      <defs>
        <clipPath id={clipId}>
          <rect width="36" height="36" rx="8" />
        </clipPath>
      </defs>

      <g clipPath={`url(#${clipId})`}>
        {/* Screen */}
        <rect width="36" height="36" fill="#16241D" />

        {/* Scanlines */}
        <g stroke="#FFFFFF" strokeWidth="1" opacity="0.05">
          <line x1="0" y1="7" x2="36" y2="7" />
          <line x1="0" y1="11" x2="36" y2="11" />
          <line x1="0" y1="15" x2="36" y2="15" />
          <line x1="0" y1="19" x2="36" y2="19" />
          <line x1="0" y1="23" x2="36" y2="23" />
          <line x1="0" y1="27" x2="36" y2="27" />
        </g>

        {/* Prompt chevron */}
        <path
          d="M10 13 L15.5 18 L10 23"
          fill="none"
          stroke="#46E0A0"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Blinking cursor block (see .sg-cursor in globals.css; honors prefers-reduced-motion) */}
        <rect className="sg-cursor" x="19" y="15.4" width="6" height="7.2" rx="1" fill="#F26B42" />
      </g>

      {/* Bezel */}
      <rect x="1" y="1" width="34" height="34" rx="7" fill="none" stroke="#2C5446" strokeWidth="1.5" />
    </svg>
  );
}
