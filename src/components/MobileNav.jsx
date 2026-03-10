import React from 'react'
import { NAV_SERVICES } from '../data/sections'
import TeslaButton from './TeslaButton'

export default function MobileNav({ onClose, onOpenModal }) {
  function go(href) {
    onClose()
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }, 180)
  }

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position:'fixed', inset:0, zIndex:9999,
          background:'rgba(0,0,0,.45)',
          backdropFilter:'blur(4px)',
          WebkitBackdropFilter:'blur(4px)',
        }}
      />

      {/* Drawer */}
      <nav style={{
        position:'fixed', top:0, right:0,
        width:'min(290px,88vw)', height:'100vh',
        background:'#fff', zIndex:10000,
        display:'flex', flexDirection:'column',
        paddingTop:60, paddingBottom:24,
        overflowY:'auto',
        boxShadow:'-4px 0 28px rgba(0,0,0,.14)',
        animation:'slideRight .26s ease',
      }}>
        {/* Close */}
        <button
          onClick={onClose}
          style={{
            position:'absolute', top:14, right:16,
            background:'none', border:'none',
            fontSize:22, cursor:'pointer', color:'#888',
          }}
        >✕</button>

        {/* Services */}
        <SectionTitle>Services</SectionTitle>
        {NAV_SERVICES.map(({ label, href }) => (
          <DrawerLink key={label} onClick={() => go(href)}>{label}</DrawerLink>
        ))}

        {/* Company */}
        <SectionTitle>Company</SectionTitle>
        {['About Us','Meet Our Team','Who We Serve','Careers','Newsroom'].map(l => (
          <DrawerLink key={l} onClick={onClose}>{l}</DrawerLink>
        ))}

        {/* CTAs */}
        <div style={{ padding:'20px 20px 0', display:'flex', flexDirection:'column', gap:10 }}>
          <TeslaButton variant="primary" onClick={() => { onClose(); onOpenModal('track') }} fullWidth>
            Track & Trace
          </TeslaButton>
          <TeslaButton variant="red" onClick={() => { onClose(); go('#quote') }} fullWidth>
            Request a Quote
          </TeslaButton>
          <TeslaButton variant="light" onClick={() => { onClose(); onOpenModal('contact') }} fullWidth>
            Contact Us
          </TeslaButton>
        </div>
      </nav>
    </>
  )
}

function SectionTitle({ children }) {
  return (
    <div style={{
      fontSize:11, fontWeight:600, letterSpacing:'1.5px',
      textTransform:'uppercase', color:'#a0a0a0',
      padding:'18px 20px 8px',
    }}>
      {children}
    </div>
  )
}

function DrawerLink({ children, onClick }) {
  const [hov, setHov] = React.useState(false)
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display:'block', width:'100%', textAlign:'left',
        padding:'11px 20px',
        fontSize:15, fontWeight:500, color:'#171a20',
        background: hov ? '#f9f9f9' : 'transparent',
        border:'none', borderBottom:'1px solid #f2f2f2',
        cursor:'pointer', fontFamily:'Inter,sans-serif',
        transition:'background .15s',
      }}
    >
      {children}
    </button>
  )
}
