// SVG icon components for Girgiton AI

export function IconMic({ size = 24, color = 'currentColor', className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="8" y="2" width="8" height="13" rx="4" stroke={color} strokeWidth="1.8"/>
      <path d="M5 10.5C5 14.09 8.13 17 12 17C15.87 17 19 14.09 19 10.5" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="12" y1="17" x2="12" y2="21" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="9" y1="21" x2="15" y2="21" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="12" y1="6" x2="12" y2="10" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
    </svg>
  )
}

export function IconStudioMic({ size = 24, color = 'currentColor', className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 2C10.34 2 9 3.34 9 5V12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12V5C15 3.34 13.66 2 12 2Z" stroke={color} strokeWidth="1.8"/>
      <circle cx="12" cy="5" r="1" fill={color}/>
      <circle cx="12" cy="8.5" r="1" fill={color}/>
      <circle cx="12" cy="12" r="1" fill={color}/>
      <path d="M6 10.5C6 13.81 8.69 16.5 12 16.5C15.31 16.5 18 13.81 18 10.5" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="12" y1="16.5" x2="12" y2="21" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="8" y1="21" x2="16" y2="21" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  )
}

export function IconBrain({ size = 24, color = 'currentColor', className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M9.5 2C7.57 2 6 3.57 6 5.5C5.17 5.5 4 6.37 4 8C4 9.06 4.55 9.96 5.38 10.44C5.14 10.91 5 11.44 5 12C5 13.66 6.12 15.07 7.64 15.43C7.87 16.92 9.13 18 10.63 18H11V22H13V18H13.37C14.87 18 16.13 16.92 16.36 15.43C17.88 15.07 19 13.66 19 12C19 11.44 18.86 10.91 18.62 10.44C19.45 9.96 20 9.06 20 8C20 6.37 18.83 5.5 18 5.5C18 3.57 16.43 2 14.5 2C13.57 2 12.73 2.37 12.12 2.96C11.5 2.37 10.69 2 9.5 2Z" stroke={color} strokeWidth="1.8" strokeLinejoin="round"/>
      <path d="M12 6V10M10 8H14" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

export function IconScreen({ size = 24, color = 'currentColor', className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="2" y="3" width="20" height="14" rx="2" stroke={color} strokeWidth="1.8"/>
      <line x1="8" y1="21" x2="16" y2="21" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="12" y1="17" x2="12" y2="21" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M6 8.5H11M6 11H14" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
      <circle cx="16.5" cy="8.5" r="1.5" fill={color} opacity="0.4"/>
    </svg>
  )
}

export function IconChart({ size = 24, color = 'currentColor', className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M3 20H21" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <rect x="4" y="12" width="3" height="8" rx="1" fill={color} opacity="0.3" stroke={color} strokeWidth="1.5"/>
      <rect x="9" y="7" width="3" height="13" rx="1" fill={color} opacity="0.5" stroke={color} strokeWidth="1.5"/>
      <rect x="14" y="4" width="3" height="16" rx="1" fill={color} opacity="0.7" stroke={color} strokeWidth="1.5"/>
      <rect x="19" y="9" width="0" height="0" rx="1"/>
      <path d="M5.5 9L9.5 5.5L14.5 8.5L20 4" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export function IconChartDown({ size = 24, color = 'currentColor', className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M3 20H21" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M3 7L8 12L13 8L21 16" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 16H21V11" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="3" y="3" width="3" height="4" rx="0.5" fill={color} opacity="0.2"/>
    </svg>
  )
}

export function IconChartUp({ size = 24, color = 'currentColor', className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M3 20H21" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M3 14L8 8L13 12L21 5" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 5H21V10" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export function IconClipboard({ size = 24, color = 'currentColor', className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="5" y="4" width="14" height="17" rx="2" stroke={color} strokeWidth="1.8"/>
      <path d="M9 4V3C9 2.45 9.45 2 10 2H14C14.55 2 15 2.45 15 3V4" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="8" y1="9" x2="16" y2="9" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="8" y1="12.5" x2="16" y2="12.5" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="8" y1="16" x2="12" y2="16" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M16 14L17.5 15.5L20 13" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export function IconRunner({ size = 24, color = 'currentColor', className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="13" cy="3.5" r="1.5" fill={color}/>
      <path d="M10 8L13 6L16 8.5L14.5 12L17 16" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 21L11 16.5L13 18L15.5 21" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 11.5L10 10L11 13L8.5 14" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5 8.5L8.5 10" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
    </svg>
  )
}

export function IconSignal({ size = 24, color = 'currentColor', className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4.93 19.07C2.05 16.18 2.05 11.53 4.93 8.64" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M7.76 16.24C6.07 14.55 6.07 11.83 7.76 10.14" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M19.07 19.07C21.95 16.18 21.95 11.53 19.07 8.64" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M16.24 16.24C17.93 14.55 17.93 11.83 16.24 10.14" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="12" cy="13" r="1.5" fill={color}/>
      <line x1="12" y1="14.5" x2="12" y2="21" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  )
}

export function IconTrophy({ size = 24, color = 'currentColor', className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M7 3H17V11C17 14.31 14.76 17 12 17C9.24 17 7 14.31 7 11V3Z" stroke={color} strokeWidth="1.8" strokeLinejoin="round"/>
      <path d="M7 5H4C4 5 3.5 9 7 10" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17 5H20C20 5 20.5 9 17 10" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="12" y1="17" x2="12" y2="20" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="8" y1="21" x2="16" y2="21" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M10 8L11.5 10.5L14 7.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export function IconChef({ size = 24, color = 'currentColor', className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M8 12C8 12 6 11 6 8.5C6 6.57 7.57 5 9.5 5C10.08 5 10.63 5.15 11.1 5.41C11.55 4.57 12.46 4 13.5 4C15.16 4 16.5 5.34 16.5 7C16.5 7.18 16.48 7.35 16.45 7.52C17.37 7.88 18 8.78 18 9.83C18 11.58 16.58 13 14.83 13H8V12Z" stroke={color} strokeWidth="1.8" strokeLinejoin="round"/>
      <rect x="7" y="13" width="10" height="8" rx="1" stroke={color} strokeWidth="1.8"/>
      <line x1="10" y1="13" x2="10" y2="21" stroke={color} strokeWidth="1.5" opacity="0.5"/>
      <line x1="14" y1="13" x2="14" y2="21" stroke={color} strokeWidth="1.5" opacity="0.5"/>
    </svg>
  )
}

export function IconLock({ size = 24, color = 'currentColor', className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="5" y="11" width="14" height="10" rx="2" stroke={color} strokeWidth="1.8"/>
      <path d="M8 11V7C8 4.79 9.79 3 12 3C14.21 3 16 4.79 16 7V11" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="12" cy="16" r="1.5" fill={color}/>
      <line x1="12" y1="17.5" x2="12" y2="19" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

export function IconBolt({ size = 24, color = 'currentColor', className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M13 2L4.5 13H12L11 22L19.5 11H12L13 2Z" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill={color} fillOpacity="0.15"/>
    </svg>
  )
}

export function IconFree({ size = 24, color = 'currentColor', className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="2" y="6" width="20" height="12" rx="3" stroke={color} strokeWidth="1.8"/>
      <path d="M7 9.5H10.5C11.33 9.5 12 10.17 12 11V11C12 11.83 11.33 12.5 10.5 12.5H7V9.5Z" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="7" y1="12.5" x2="7" y2="14.5" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M14 9.5V14.5M14 9.5H17M14 12H16.5" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

export function IconX({ size = 24, color = 'currentColor', className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.8"/>
      <path d="M15 9L9 15M9 9L15 15" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  )
}

export function IconTelegram({ size = 24, color = 'currentColor', className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="1.5" opacity="0.3"/>
      <path d="M5.5 11.5L18.5 6.5L14.5 18.5L11.5 14.5L5.5 11.5Z" stroke={color} strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M11.5 14.5L13.5 12.5" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

export function IconInstagram({ size = 24, color = 'currentColor', className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke={color} strokeWidth="1.8"/>
      <circle cx="12" cy="12" r="4" stroke={color} strokeWidth="1.8"/>
      <circle cx="17.5" cy="6.5" r="1" fill={color}/>
    </svg>
  )
}

export function IconStar({ size = 16, color = '#FFB347', className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill={color} className={className}>
      <path d="M8 1L9.8 5.8H15L10.6 8.8L12.4 13.6L8 10.6L3.6 13.6L5.4 8.8L1 5.8H6.2L8 1Z"/>
    </svg>
  )
}

export function IconCheck({ size = 16, color = 'currentColor', className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className}>
      <path d="M3 8.5L6.5 12L13 5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export function IconPlay({ size = 14, color = 'currentColor', className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 16" fill={color} className={className}>
      <path d="M1 1.5L13 8L1 14.5V1.5Z"/>
    </svg>
  )
}

export function IconPlus({ size = 14, color = 'currentColor', className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" className={className}>
      <path d="M7 2V12M2 7H12" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

export function IconArrowRight({ size = 20, color = 'currentColor', className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
      <path d="M4 10H16M11 5L16 10L11 15" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export function IconPhone({ size = 20, color = 'currentColor', className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M6.6 10.8C7.8 13.2 9.8 15.2 12.2 16.4L14.4 14.2C14.7 13.9 15.1 13.8 15.4 14C16.5 14.4 17.7 14.6 19 14.6C19.6 14.6 20 15 20 15.6V19C20 19.6 19.6 20 19 20C10.7 20 4 13.3 4 5C4 4.4 4.4 4 5 4H8.5C9.1 4 9.5 4.4 9.5 5C9.5 6.3 9.7 7.5 10.1 8.6C10.2 8.9 10.1 9.3 9.9 9.6L7.6 11.8L6.6 10.8Z" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  )
}
