export default function GirgitonLogo({ size = 40, showText = true, className = '' }) {
  const id = `logo-grad-${size}`
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* SVG Icon Mark */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Girgiton AI logo"
      >
        <defs>
          <linearGradient id={`${id}-a`} x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00E5A0"/>
            <stop offset="100%" stopColor="#00B4D8"/>
          </linearGradient>
          <linearGradient id={`${id}-b`} x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00E5A0" stopOpacity="0.15"/>
            <stop offset="100%" stopColor="#00B4D8" stopOpacity="0.05"/>
          </linearGradient>
          <filter id={`${id}-glow`} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        {/* Background rounded square */}
        <rect x="1" y="1" width="46" height="46" rx="13" fill={`url(#${id}-b)`} stroke={`url(#${id}-a)`} strokeWidth="1.5"/>

        {/* Microphone body */}
        <rect x="19" y="8" width="10" height="17" rx="5" fill={`url(#${id}-a)`} opacity="0.9"/>

        {/* Microphone arc */}
        <path
          d="M13 22C13 28.63 17.92 34 24 34C30.08 34 35 28.63 35 22"
          stroke={`url(#${id}-a)`}
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          filter={`url(#${id}-glow)`}
        />

        {/* Mic stand line */}
        <line x1="24" y1="34" x2="24" y2="40" stroke={`url(#${id}-a)`} strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="18" y1="40" x2="30" y2="40" stroke={`url(#${id}-a)`} strokeWidth="2.5" strokeLinecap="round"/>

        {/* Sound wave left */}
        <path
          d="M10 19C10 19 8.5 21 8.5 24C8.5 27 10 29 10 29"
          stroke={`url(#${id}-a)`}
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          opacity="0.6"
        />
        <path
          d="M6.5 16C6.5 16 4 19.5 4 24C4 28.5 6.5 32 6.5 32"
          stroke={`url(#${id}-a)`}
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          opacity="0.3"
        />

        {/* Sound wave right */}
        <path
          d="M38 19C38 19 39.5 21 39.5 24C39.5 27 38 29 38 29"
          stroke={`url(#${id}-a)`}
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          opacity="0.6"
        />
        <path
          d="M41.5 16C41.5 16 44 19.5 44 24C44 28.5 41.5 32 41.5 32"
          stroke={`url(#${id}-a)`}
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          opacity="0.3"
        />

        {/* Dot on mic center */}
        <circle cx="24" cy="16.5" r="2" fill="#0A0F1E" opacity="0.5"/>
      </svg>

      {/* Text */}
      {showText && (
        <span
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontWeight: 800,
            fontSize: size * 0.42,
            letterSpacing: '-0.5px',
            lineHeight: 1,
            color: '#ffffff',
          }}
        >
          Girgiton{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #00E5A0, #00B4D8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            AI
          </span>
        </span>
      )}
    </div>
  )
}

export function GirgitonLogoMark({ size = 32, className = '' }) {
  return <GirgitonLogo size={size} showText={false} className={className} />
}
