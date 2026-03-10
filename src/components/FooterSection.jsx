import React from 'react'
import Logo from './Logo'
import { FOOTER_COLS } from '../data/sections'
import { useInView } from '../hooks/useInView'
import { BG_COLORS as BgColors } from './SectionBg'

export default function FooterSection({ onAction, isMobile }) {
  const [ref, inView] = useInView({ threshold: 0.06 })

  function handleAction(action) {
    if (action === 'track')   onAction('track')
    if (action === 'contact') onAction('contact')
    if (action === 'quote') {
      document.querySelector('#quote')?.scrollIntoView({ behavior:'smooth' })
    }
  }

  return (
    <section
      id="footer"
      className="section"
      style={{ background: BgColors.footer }}
    >
      {/* Content */}
      <div
        ref={ref}
        style={{
          position:'relative', zIndex:2,
          width:'100%', maxWidth:940,
          padding: isMobile ? '72px 20px 20px' : '72px 24px 20px',
          display:'flex', flexDirection:'column',
          alignItems:'center', gap:32, flex:1,
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(16px)',
          transition:'opacity .7s ease, transform .7s ease',
        }}
      >
        {/* Logo */}
        <div style={{ textAlign:'center' }}>
          <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:8, marginBottom:6 }}>
            <Logo size={30}/>
            <span style={{ fontSize:17, fontWeight:600, letterSpacing:'.4px', color:'#fff' }}>
              XNEURA<span style={{ color:'#e31937' }}>SHARES</span>
            </span>
          </div>
          <p style={{ fontSize:12.5, color:'rgba(255,255,255,.32)', letterSpacing:'.2px' }}>
            Global Logistics — Engineered for the Future
          </p>
        </div>

        {/* Columns */}
        <div style={{
          display:'flex',
          gap: isMobile ? 24 : 44,
          flexWrap:'wrap',
          justifyContent:'center',
          width:'100%',
        }}>
          {FOOTER_COLS.map((col, ci) => (
            <div key={ci} style={{ minWidth:120 }}>
              <h5 style={{
                fontSize:10.5, fontWeight:600,
                letterSpacing:'1.6px', textTransform:'uppercase',
                color:'rgba(255,255,255,.38)',
                marginBottom:14,
              }}>
                {col.title}
              </h5>
              <ul style={{ listStyle:'none' }}>
                {col.links.map((link, li) => (
                  <li key={li} style={{ marginBottom:9 }}>
                    {col.hrefs ? (
                      <a
                        href={col.hrefs[li]}
                        style={{ color:'rgba(255,255,255,.6)', fontSize:13, textDecoration:'none' }}
                        onMouseEnter={e => e.target.style.color='#fff'}
                        onMouseLeave={e => e.target.style.color='rgba(255,255,255,.6)'}
                      >
                        {link}
                      </a>
                    ) : col.actions ? (
                      <button
                        onClick={() => handleAction(col.actions[li])}
                        style={{
                          background:'none', border:'none', padding:0,
                          color:'rgba(255,255,255,.6)', fontSize:13,
                          cursor:'pointer', fontFamily:'Inter,sans-serif',
                          textAlign:'left',
                        }}
                        onMouseEnter={e => e.target.style.color='#fff'}
                        onMouseLeave={e => e.target.style.color='rgba(255,255,255,.6)'}
                      >
                        {link}
                      </button>
                    ) : (
                      <span style={{ color:'rgba(255,255,255,.6)', fontSize:13, cursor:'default' }}>{link}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        position:'absolute', bottom:0, left:0, right:0,
        zIndex:2, display:'flex',
        justifyContent:'space-between', alignItems:'center',
        flexWrap:'wrap', gap:8,
        padding: isMobile ? '14px 20px' : '14px 24px',
        borderTop:'1px solid rgba(255,255,255,.07)',
        fontSize:12, color:'rgba(255,255,255,.28)',
      }}>
        <span>© 2025 XNeuraShares Logistics Inc. All rights reserved.</span>
        <div style={{ display:'flex', gap:16 }}>
          {['Privacy','Terms','Cookie Policy'].map(l => (
            <a key={l} href="#" style={{ color:'rgba(255,255,255,.28)', textDecoration:'none' }}
              onMouseEnter={e => e.target.style.color='rgba(255,255,255,.7)'}
              onMouseLeave={e => e.target.style.color='rgba(255,255,255,.28)'}
            >{l}</a>
          ))}
        </div>
      </div>
    </section>
  )
}
