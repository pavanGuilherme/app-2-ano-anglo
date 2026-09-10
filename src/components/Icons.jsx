const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function IconHome({ size = 24, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5.5 9.5V20a1 1 0 0 0 1 1H10v-6h4v6h3.5a1 1 0 0 0 1-1V9.5" />
    </svg>
  )
}

export function IconLeaf({ size = 24, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-11 10Z" />
      <path d="M2.5 21c0-3 1.8-5.4 5-6 2.4-.5 4.9-2 5.9-3" />
    </svg>
  )
}

export function IconBook({ size = 24, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
    </svg>
  )
}

export function IconBottle({ size = 24, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="M9 2h6v3.2c0 .5.2 1 .6 1.3L17 8v11a2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 7 19V8l1.4-1.5c.4-.3.6-.8.6-1.3V2Z" />
      <path d="M8.5 13h7" />
      <path d="M9 2h6" />
    </svg>
  )
}

export function IconBulb({ size = 24, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="M12 2a7 7 0 0 0-4 12.7c.5.4.8 1 .8 1.6V17h6.4v-.7c0-.6.3-1.2.8-1.6A7 7 0 0 0 12 2Z" />
      <path d="M9.5 20h5" />
      <path d="M10 22.5h4" />
    </svg>
  )
}

export function IconPulseHeart({ size = 24, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="M20.8 4.9a5.4 5.4 0 0 0-7.6 0L12 6.2l-1.2-1.3a5.4 5.4 0 0 0-7.6 7.7l1 1L12 21l7.8-7.4 1-1a5.4 5.4 0 0 0 0-7.7Z" />
      <path d="M4.5 12h3l1.7-2.6L11 14l1.6-3 1.4 1h3.5" />
    </svg>
  )
}

export function IconWateringCan({ size = 24, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="M3.5 10.5h9.2a2.3 2.3 0 0 1 2.3 2.3v3.7a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2v-6Z" />
      <path d="M15 12.3h3.3l2.7-2.6" />
      <path d="M6.5 10.5V8.3a2 2 0 0 1 2-2h2.3" />
      <path d="M19.5 6.5c.6.6.6 1.6 0 2.2" />
      <path d="M17.7 5c1.1.9 1.3 2.5.4 3.6" />
    </svg>
  )
}

export function IconHeart({ size = 22, className, filled = false }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      fill={filled ? 'currentColor' : 'none'}
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z" />
    </svg>
  )
}

export function IconUser({ size = 24, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="M20 21v-1.5a4.5 4.5 0 0 0-4.5-4.5h-7A4.5 4.5 0 0 0 4 19.5V21" />
      <circle cx="12" cy="7.5" r="4" />
    </svg>
  )
}

export function IconArrowLeft({ size = 24, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  )
}

export function IconDroplet({ size = 24, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="M12 2.7 17.7 9a8 8 0 1 1-11.4 0Z" />
    </svg>
  )
}

export function IconSparkle({ size = 24, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" />
    </svg>
  )
}
