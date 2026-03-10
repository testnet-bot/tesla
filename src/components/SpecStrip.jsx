import React from 'react'
import { useInView } from '../hooks/useInView'

function StatItem({ val, key: specKey, label, dark }) {
  const color = dark ? '#171a20' : '#fff'
  const subColor = dark ? 'rgba(23,26,32,0.55)' : 'rgba(255,255,255,0.55)'
  return (
    <div style={{ textAlign: 'center' }}>
      <span style={{
        display: 'block',
        fontSize: 'clamp(22px,2.4vw,28px)',
        fontWeight: 500,
        lineHeight: 1,
        color,
        letterSpacing: '-.2px',
      }}>
        {val}
      </span>
      <span style={{
        display: 'block',
        fontSize: 'clamp(10px,1vw,12px)',
        fontWeight: 400,
        color: subColor,
        marginTop: 4,
        letterSpacing: '.1px',
      }}>
        {label}
      </span>
    </div>
  )
}

export default function SpecStrip({ specs, dark, footnote }) {
  const [ref, inView] = useInView({ threshold: 0.2 })

  return (
    <div
      ref={ref}
      style={{
        display: 'flex',
        gap: 'clamp(20px,4vw,44px)',
        justifyContent: 'center',
        flexWrap: 'wrap',
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(12px)',
        transition: 'opacity .65s ease .1s, transform .65s ease .1s',
      }}
    >
      {specs.map((sp, i) => (
        <StatItem key={i} val={sp.val} label={sp.key} dark={dark} />
      ))}
    </div>
  )
}
