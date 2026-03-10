import React, { useState } from 'react'

const STYLES = {
  primary: {
    background: 'rgba(23,26,32,0.80)',
    color: '#fff',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
  },
  secondary: {
    background: 'rgba(244,244,244,0.65)',
    color: '#171a20',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
  },
  dark: {
    background: 'rgba(23,26,32,0.85)',
    color: '#fff',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
  },
  light: {
    background: 'rgba(23,26,32,0.08)',
    color: '#171a20',
  },
  red: {
    background: '#e31937',
    color: '#fff',
  },
  ghost: {
    background: 'rgba(255,255,255,0.16)',
    color: '#fff',
    border: '1px solid rgba(255,255,255,0.28)',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
  },
  'ghost-dark': {
    background: 'rgba(0,0,0,0.06)',
    color: '#171a20',
    border: '1px solid rgba(0,0,0,0.12)',
  },
}

export default function TeslaButton({ children, variant = 'primary', onClick, href, fullWidth, small }) {
  const [hov, setHov] = useState(false)

  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: fullWidth ? '100%' : (small ? 140 : 192),
    width: fullWidth ? '100%' : undefined,
    height: small ? 38 : 42,
    padding: '0 26px',
    borderRadius: 100,
    fontSize: small ? 13 : 14,
    fontWeight: 500,
    fontFamily: 'Inter,sans-serif',
    textDecoration: 'none',
    cursor: 'pointer',
    border: 'none',
    letterSpacing: '.08px',
    whiteSpace: 'nowrap',
    transition: 'filter .18s, transform .14s',
    filter: hov ? 'brightness(0.91)' : 'brightness(1)',
    transform: hov ? 'scale(1.012)' : 'scale(1)',
    ...STYLES[variant],
  }

  if (href) {
    return (
      <a
        href={href}
        style={base}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      style={base}
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {children}
    </button>
  )
}
