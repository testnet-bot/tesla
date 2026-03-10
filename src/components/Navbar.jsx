import React, { useState } from 'react'
import Logo from './Logo'
import { NAV_SERVICES } from '../data/sections'

const s = {
  nav: (white) => ({
    position: 'fixed',
    top: 0, left: 0, right: 0,
    height: 52,
    zIndex: 9000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 20px',
    transition: 'background .32s ease, box-shadow .32s ease',
    background: white ? 'rgba(255,255,255,0.97)' : 'transparent',
    boxShadow: white ? '0 1px 0 rgba(0,0,0,0.08)' : 'none',
  }),

  logo: {
    display: 'flex', alignItems: 'center', gap: 8,
    textDecoration: 'none', flexShrink: 0, zIndex: 2,
  },
  logoText: {
    fontSize: 15, fontWeight: 600, letterSpacing: '.4px',
    color: '#171a20', whiteSpace: 'nowrap',
    fontFamily: 'Inter,sans-serif',
  },

  center: {
    position: 'absolute', left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex', alignItems: 'center', gap: 2,
  },

  link: (hovered) => ({
    display: 'block', padding: '6px 13px',
    fontSize: 13.5, fontWeight: 500,
    color: '#171a20', textDecoration: 'none',
    borderRadius: 5, whiteSpace: 'nowrap',
    background: hovered ? 'rgba(0,0,0,0.05)' : 'transparent',
    transition: 'background .16s',
    cursor: 'pointer',
  }),

  linkRed: {
    display: 'block', padding: '6px 13px',
    fontSize: 13.5, fontWeight: 500,
    color: '#fff', borderRadius: 5,
    background: '#e31937', whiteSpace: 'nowrap',
    cursor: 'pointer', textDecoration: 'none',
  },

  right: { display: 'flex', alignItems: 'center', gap: 2, zIndex: 2 },

  ham: {
    display: 'flex', flexDirection: 'column',
    alignItems: 'center', gap: 5,
    background: 'none', border: 'none',
    cursor: 'pointer', padding: 6, zIndex: 2,
  },
  hamBar: {
    display: 'block', width: 21, height: 1.5,
    background: '#171a20', borderRadius: 2,
  },
}

function NavLink({ children, href, onClick, red }) {
  const [hovered, setHovered] = useState(false)
  if (red) return (
    <a href={href} style={s.linkRed} onClick={onClick}>{children}</a>
  )
  return (
    <a
      href={href}
      style={s.link(hovered)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      {children}
    </a>
  )
}

export default function Navbar({ heroVisible, onOpenModal, isMobile }) {
  return (
    <nav style={s.nav(!heroVisible)}>
      {/* Logo */}
      <a href="#hero" style={s.logo}>
        <Logo size={32} />
        <span style={s.logoText}>
          XNEURA<span style={{ color: '#e31937' }}>SHARES</span>
        </span>
      </a>

      {/* Center — services flat (hidden on mobile) */}
      {!isMobile && (
        <div style={s.center}>
          {NAV_SERVICES.map(({ label, href }) => (
            <NavLink key={label} href={href}>{label}</NavLink>
          ))}
        </div>
      )}

      {/* Right utils */}
      {!isMobile ? (
        <div style={s.right}>
          <NavLink onClick={() => onOpenModal('track')}>Track & Trace</NavLink>
          <NavLink href="#quote">Get a Quote</NavLink>
          <NavLink onClick={() => onOpenModal('contact')} red>Contact</NavLink>
        </div>
      ) : (
        <button style={s.ham} onClick={() => onOpenModal('mobileNav')} aria-label="Open menu">
          <span style={s.hamBar} />
          <span style={s.hamBar} />
          <span style={s.hamBar} />
        </button>
      )}
    </nav>
  )
}
