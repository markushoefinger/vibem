'use client';

// VibeM Logo - Connection concept
// Two paths meeting at a node point - represents building, connecting, AI
export function Logo({ size = 36, className = '' }: { size?: number; className?: string }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 36 36" 
      fill="none" 
      className={className}
    >
      {/* Background */}
      <rect width="36" height="36" rx="8" fill="currentColor" className="text-[var(--primary)]" />
      
      {/* V shape made of two converging lines with nodes */}
      <g stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Left line */}
        <path d="M10 10L18 26" />
        {/* Right line */}
        <path d="M26 10L18 26" />
        
        {/* Top nodes - represent starting points/inputs */}
        <circle cx="10" cy="10" r="2" fill="white" stroke="none" />
        <circle cx="26" cy="10" r="2" fill="white" stroke="none" />
        
        {/* Bottom node - represents convergence/output */}
        <circle cx="18" cy="26" r="3" fill="white" stroke="none" />
      </g>
    </svg>
  );
}

// Alternative: More abstract/geometric version
export function LogoAlt({ size = 36, className = '' }: { size?: number; className?: string }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 36 36" 
      fill="none" 
      className={className}
    >
      <rect width="36" height="36" rx="8" fill="currentColor" className="text-[var(--primary)]" />
      
      {/* Abstract V - two shapes coming together */}
      <path 
        d="M9 9L18 27L27 9" 
        stroke="white" 
        strokeWidth="3" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        fill="none"
      />
      {/* Small accent line - suggests building/stacking */}
      <path 
        d="M14 16L18 24L22 16" 
        stroke="white" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        opacity="0.5"
        fill="none"
      />
    </svg>
  );
}

// Version 3: Blocks/Building concept
export function LogoBlocks({ size = 36, className = '' }: { size?: number; className?: string }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 36 36" 
      fill="none" 
      className={className}
    >
      <rect width="36" height="36" rx="8" fill="currentColor" className="text-[var(--primary)]" />
      
      {/* V made of stacked blocks */}
      <g fill="white">
        {/* Left stack */}
        <rect x="8" y="8" width="5" height="5" rx="1" />
        <rect x="11" y="15" width="5" height="5" rx="1" />
        
        {/* Right stack */}
        <rect x="23" y="8" width="5" height="5" rx="1" />
        <rect x="20" y="15" width="5" height="5" rx="1" />
        
        {/* Bottom center - convergence */}
        <rect x="15.5" y="22" width="5" height="5" rx="1" />
      </g>
    </svg>
  );
}
