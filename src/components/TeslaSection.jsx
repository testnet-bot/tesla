import React, { useState } from 'react'
import TeslaButton from './TeslaButton'
import SpecStrip from './SpecStrip'
import { BG_COMPONENTS, BG_COLORS } from './SectionBg'
import { useInView } from '../hooks/useInView'

function ScrollCue() {
  return (
    <div style={{
      position: 'absolute', bottom: 18, left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 3, opacity: .55,
      animation: 'bob 2.4s ease-in-out infinite',
    }}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
        stroke="rgba(255,255,255,0.6)" strokeWidth="2" strokeLinecap="round">
        <polyline points="6 9 12 15 18 9"/>
      </svg>
    </div>
  )
}

export default function TeslaSection({ data, onAction, isMobile }) {
  const { id, theme, bg, eyebrow, heading, sub, specs, btns, footnote, scrollCue, industries, isQuoteSection } = data
  const dark = theme === 'dark'
  const BgArt = BG_COMPONENTS[bg] || (() => null)

  const [topRef, topVisible] = useInView({ threshold: 0.1 })
  const [botRef, botVisible] = useInView({ threshold: 0.1 })

  const headingLines = heading.split('\n')

  function handleBtn(btn) {
    if (btn.action === 'track')   { onAction('track'); return }
    if (btn.action === 'contact') { onAction('contact'); return }
    if (btn.action === 'quote')   { onAction('quote'); return }
    if (btn.action?.startsWith('scroll:')) {
      const target = btn.action.replace('scroll:', '')
      document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (isQuoteSection) {
    return (
      <section
        id={id}
        className="section"
        style={{ background: BG_COLORS[bg] ?? BG_COLORS.quote }}
      >
        <BgArt />

        <div
          ref={topRef}
          style={{
            position: 'relative', zIndex: 2,
            textAlign: 'center',
            paddingTop: 'calc(52px + 36px)',
            paddingLeft: 16, paddingRight: 16,
            opacity: topVisible ? 1 : 0,
            transform: topVisible ? 'translateY(0)' : 'translateY(18px)',
            transition: 'opacity .7s ease, transform .7s ease',
          }}
        >
          <span style={{ display:'block', fontSize:11.5, letterSpacing:'.2px', color:'rgba(255,255,255,.6)', marginBottom:5 }}>
            {eyebrow}
          </span>
          <h2 style={{ fontSize:'clamp(26px,3.8vw,40px)', fontWeight:500, color:'#fff', letterSpacing:'-.3px', lineHeight:1.12 }}>
            {heading}
          </h2>
          <p style={{ fontSize:'clamp(12.5px,1.3vw,15px)', color:'rgba(255,255,255,.78)', marginTop:7, maxWidth:400, marginLeft:'auto', marginRight:'auto', lineHeight:1.55 }}>
            {sub}
          </p>
        </div>

        <div
          ref={botRef}
          style={{
            position: 'absolute', bottom: 44, left: 0, right: 0,
            zIndex: 2, display: 'flex', flexDirection: 'column',
            alignItems: 'center', gap: 14, padding: '0 16px',
            opacity: botVisible ? 1 : 0,
            transform: botVisible ? 'translateY(0)' : 'translateY(18px)',
            transition: 'opacity .7s ease .15s, transform .7s ease .15s',
          }}
        >
          <div style={{
            display: 'flex', gap: 10, flexWrap: 'wrap',
            justifyContent: 'center', width: '100%', maxWidth: 560,
          }}>
            <QuoteInput placeholder="Origin city or port" id="q-from" />
            <QuoteInput placeholder="Destination" id="q-to" />
          </div>
          <div style={{ display:'flex', gap:12, flexWrap:'wrap', justifyContent:'center' }}>
            <TeslaButton
              variant="ghost"
              onClick={() => {
                const from = document.getElementById('q-from')?.value?.trim()
                const to   = document.getElementById('q-to')?.value?.trim()
                onAction('quote', { from, to })
              }}
            >
              Get Your Quote →
            </TeslaButton>
            {btns.map((btn, i) => (
              <TeslaButton key={i} variant={btn.style} onClick={() => handleBtn(btn)}>
                {btn.label}
              </TeslaButton>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      id={id}
      className="section"
      style={{ background: BG_COLORS[bg] ?? '#000' }}
    >
      <BgArt />

      <div
        ref={topRef}
        style={{
          position: 'relative', zIndex: 2,
          textAlign: 'center',
          paddingTop: 'calc(52px + 36px)',
          paddingLeft: 16, paddingRight: 16,
          opacity: topVisible ? 1 : 0,
          transform: topVisible ? 'translateY(0)' : 'translateY(18px)',
          transition: 'opacity .7s ease, transform .7s ease',
        }}
      >
        <span style={{
          display: 'block',
          fontSize: 11.5, fontWeight: 400, letterSpacing: '.15px',
          marginBottom: 5,
          color: dark ? 'rgba(255,255,255,.55)' : 'rgba(23,26,32,.5)',
        }}>
          {eyebrow}
        </span>

        <h2 style={{
          fontSize: 'clamp(26px,3.8vw,40px)',
          fontWeight: 500, letterSpacing: '-.3px', lineHeight: 1.12,
          color: dark ? '#fff' : '#171a20',
        }}>
          {headingLines.map((line, i) => (
            <React.Fragment key={i}>{line}{i < headingLines.length - 1 && <br/>}</React.Fragment>
          ))}
        </h2>

        {sub && (
          <p style={{
            fontSize: 'clamp(12.5px,1.3vw,15px)', fontWeight: 400,
            lineHeight: 1.55, marginTop: 7, maxWidth: 520,
            marginLeft: 'auto', marginRight: 'auto', opacity: .82,
            color: dark ? '#fff' : '#5c5e62',
          }}>
            {sub}
          </p>
        )}
      </div>

      <div
        ref={botRef}
        style={{
          position: 'absolute', bottom: 44, left: 0, right: 0,
          zIndex: 2, display: 'flex', flexDirection: 'column',
          alignItems: 'center', gap: 14, padding: '0 16px',
          opacity: botVisible ? 1 : 0,
          transform: botVisible ? 'translateY(0)' : 'translateY(18px)',
          transition: 'opacity .7s ease .12s, transform .7s ease .12s',
        }}
      >
        {industries && <IndustriesGrid items={industries} dark={dark} isMobile={isMobile}/>}

        {specs && !industries && (
          <SpecStrip specs={specs} dark={!dark} />
        )}

        {footnote && (
          <p style={{ fontSize:11, color:'rgba(255,255,255,.35)', letterSpacing:'.2px' }}>{footnote}</p>
        )}

        {btns && (
          <div style={{ display:'flex', gap:12, flexWrap:'wrap', justifyContent:'center' }}>
            {btns.map((btn, i) => (
              <TeslaButton key={i} variant={btn.style} onClick={() => handleBtn(btn)}>
                {btn.label}
              </TeslaButton>
            ))}
          </div>
        )}
      </div>

      {scrollCue && <ScrollCue />}
    </section>
  )
}

function QuoteInput({ placeholder, id }) {
  return (
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      style={{
        flex: 1, minWidth: 150,
        height: 42, padding: '0 18px',
        background: 'rgba(255,255,255,.16)',
        border: '1px solid rgba(255,255,255,.28)',
        borderRadius: 100,
        color: '#fff', fontSize: 14,
        fontFamily: 'Inter,sans-serif',
        outline: 'none',
        backdropFilter: 'blur(4px)',
        WebkitBackdropFilter: 'blur(4px)',
      }}
      onFocus={e => e.target.style.background = 'rgba(255,255,255,.24)'}
      onBlur={e  => e.target.style.background = 'rgba(255,255,255,.16)'}
    />
  )
}

function IndustriesGrid({ items, isMobile }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: isMobile ? 'repeat(2,1fr)' : 'repeat(3,1fr)',
      gap: 1,
      background: 'rgba(255,255,255,.07)',
      border: '1px solid rgba(255,255,255,.07)',
      borderRadius: 8,
      overflow: 'hidden',
      maxWidth: 840,
      width: '100%',
    }}>
      {items.map((item, i) => (
        <IndustryCard key={i} icon={item.icon} name={item.name} />
      ))}
    </div>
  )
}

function IndustryCard({ icon, name }) {
  const [hov, setHov] = useState(false)
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? '#242731' : '#1d2028',
        padding: 'clamp(18px,2.5vw,28px) 16px',
        textAlign: 'center',
        transition: 'background .2s',
        cursor: 'default',
      }}
    >
      <span style={{ fontSize: 24, display: 'block', marginBottom: 7 }}>{icon}</span>
      <span style={{ fontSize: 12.5, fontWeight: 500, color: 'rgba(255,255,255,.82)', letterSpacing: '.1px' }}>{name}</span>
    </div>
  )
}
