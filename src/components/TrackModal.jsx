import React, { useState } from 'react'
import TeslaButton from './TeslaButton'
import { TRACK_SCENARIOS } from '../data/sections'

const inp = {
  width: '100%', height: 46, padding: '0 16px',
  border: '1px solid #d0d0d0', borderRadius: 8,
  fontSize: 14, fontFamily: 'Inter,sans-serif',
  color: '#171a20', background: '#fafafa',
  outline: 'none', marginBottom: 16,
  transition: 'border .2s, background .2s',
}

const sel = { ...inp }

export default function TrackModal({ onClose }) {
  const [ref, setRef] = useState('')
  const [type, setType] = useState('')
  const [result, setResult] = useState(null)
  const [error, setError] = useState(false)

  function track() {
    if (!ref.trim()) { setError(true); setTimeout(() => setError(false), 1800); return }
    const hash = ref.split('').reduce((a, c) => a + c.charCodeAt(0), 0)
    setResult({ ...TRACK_SCENARIOS[hash % TRACK_SCENARIOS.length], ref: ref.toUpperCase() })
  }

  return (
    <ModalShell title="Track & Trace" onClose={onClose}>
      {!result ? (
        <>
          <p style={pStyle}>Enter your shipment reference, AWB, or Bill of Lading number.</p>
          <label style={lbl}>Shipment Reference</label>
          <input
            type="text"
            placeholder="e.g. XNS-2025-884920"
            value={ref}
            onChange={e => setRef(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && track()}
            style={{ ...inp, borderColor: error ? '#e31937' : '#d0d0d0' }}
            onFocus={e => { e.target.style.borderColor='#171a20'; e.target.style.background='#fff' }}
            onBlur={e  => { e.target.style.borderColor=error?'#e31937':'#d0d0d0'; e.target.style.background='#fafafa' }}
          />
          <label style={lbl}>Shipment Type</label>
          <select
            value={type}
            onChange={e => setType(e.target.value)}
            style={sel}
            onFocus={e => { e.target.style.borderColor='#171a20'; e.target.style.background='#fff' }}
            onBlur={e  => { e.target.style.borderColor='#d0d0d0'; e.target.style.background='#fafafa' }}
          >
            <option value="">Select type...</option>
            <option value="air">Air Freight</option>
            <option value="ocean">Ocean Freight</option>
            <option value="road">Road Freight</option>
            <option value="warehouse">Warehouse</option>
          </select>
          <TeslaButton variant="dark" onClick={track} fullWidth>Track Shipment</TeslaButton>
        </>
      ) : (
        <TrackResult result={result} onReset={() => setResult(null)} />
      )}
    </ModalShell>
  )
}

function TrackResult({ result, onReset }) {
  return (
    <div>
      <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:16 }}>
        <div style={{
          width:10, height:10, borderRadius:'50%',
          background: result.color,
          boxShadow: `0 0 0 3px ${result.color}33`,
          flexShrink: 0,
        }}/>
        <span style={{ fontSize:13.5, fontWeight:600, color:'#171a20' }}>{result.status}</span>
      </div>

      <div style={{ display:'flex', flexDirection:'column', gap:0 }}>
        {result.steps.map((step, i) => (
          <div key={i} style={{ display:'flex', alignItems:'flex-start', gap:12, padding:'8px 0', position:'relative' }}>
            {i < result.steps.length - 1 && (
              <div style={{
                position:'absolute', left:4, top:20,
                width:1, height:'calc(100% - 6px)',
                background: step.done ? '#171a20' : '#e0e0e0',
              }}/>
            )}
            <div style={{
              width:9, height:9, borderRadius:'50%', marginTop:3, flexShrink:0,
              background: step.active ? result.color : step.done ? '#171a20' : '#fff',
              border: `2px solid ${step.active ? result.color : step.done ? '#171a20' : '#d0d0d0'}`,
            }}/>
            <div>
              <div style={{ fontSize:13, fontWeight:500, color:'#171a20' }}>{step.label}</div>
              <div style={{ fontSize:11, color:'#888', marginTop:1 }}>{step.time}</div>
            </div>
          </div>
        ))}
      </div>

      <p style={{ fontSize:11.5, color:'#aaa', marginTop:14 }}>
        Reference: <strong style={{color:'#555'}}>{result.ref}</strong>
      </p>
      <button
        onClick={onReset}
        style={{ marginTop:14, fontSize:13, color:'#e31937', background:'none', border:'none', cursor:'pointer', padding:0 }}
      >
        ← Track another shipment
      </button>
    </div>
  )
}

export function ModalShell({ title, onClose, children }) {
  return (
    <div
      style={{
        position:'fixed', inset:0, zIndex:10000,
        background:'rgba(10,10,10,.72)',
        backdropFilter:'blur(10px)', WebkitBackdropFilter:'blur(10px)',
        display:'flex', alignItems:'center', justifyContent:'center',
        padding:20,
      }}
      onClick={e => e.target === e.currentTarget && onClose()}
    >
      <div style={{
        background:'#fff', borderRadius:14,
        padding:'32px 30px', maxWidth:460, width:'100%',
        position:'relative',
        animation:'modalIn .24s ease',
        maxHeight:'90vh', overflowY:'auto',
      }}>
        <button
          onClick={onClose}
          style={{
            position:'absolute', top:14, right:16,
            background:'none', border:'none',
            fontSize:22, cursor:'pointer',
            color:'#888', lineHeight:1,
          }}
        >✕</button>
        <h2 style={{ fontSize:22, fontWeight:500, color:'#171a20', marginBottom:6 }}>{title}</h2>
        {children}
      </div>
    </div>
  )
}

const pStyle = { fontSize:14, color:'#5c5e62', marginBottom:20, lineHeight:1.5 }
const lbl    = { display:'block', fontSize:11, fontWeight:600, color:'#888', marginBottom:6, letterSpacing:'.3px', textTransform:'uppercase' }
