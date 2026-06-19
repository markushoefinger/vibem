// SpacerGIF logo — "Terminal" concept.
// A bounding box with a single pixel inside it: the literal spacer.gif (width=1 height=1).
// Uses currentColor so the parent can tint it (ink in the nav, faint taupe in the footer).
export function Logo({ size = 30, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 30 30"
      fill="none"
      className={className}
      role="img"
      aria-label="SpacerGIF"
    >
      {/* bounding box */}
      <rect x="1" y="1" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" />
      {/* the 1×1 pixel */}
      <rect x="11.5" y="11.5" width="7" height="7" fill="currentColor" />
    </svg>
  );
}
