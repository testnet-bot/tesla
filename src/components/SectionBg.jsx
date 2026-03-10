import React from 'react'

/* ── Hero Globe SVG ───────────────────────────────────── */
function HeroGlobe() {
  return (
    <div style={{
      position: 'absolute', inset: 0,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      zIndex: 1, pointerEvents: 'none',
    }}>
      <svg viewBox="0 0 440 440" fill="none" style={{ width: 'min(600px,88vw)', opacity: 0.5 }}>
        <circle cx="220" cy="220" r="210" stroke="rgba(255,255,255,0.10)" strokeWidth="1"/>
        <circle cx="220" cy="220" r="155" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
        <circle cx="220" cy="220" r="100" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>

        <ellipse cx="220" cy="220" rx="210" ry="62" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
        <ellipse cx="220" cy="220" rx="210" ry="128" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>

        <ellipse cx="220" cy="220" rx="62" ry="210" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
        <ellipse cx="220" cy="220" rx="128" ry="210" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>

        <path d="M 60 155 Q 220 80 380 170" stroke="#e31937" strokeWidth="1.6" fill="none" opacity="0.65"/>
        <path d="M 70 270 Q 220 340 380 255" stroke="#e31937" strokeWidth="1.6" fill="none" opacity="0.55"/>
        <path d="M 110 100 Q 260 200 410 310" stroke="rgba(100,150,255,0.55)" strokeWidth="1" fill="none"/>

        {[
          [60,155],[380,170],[70,270],[380,255],[110,100],[410,310],[220,220]
        ].map(([cx,cy], i) => (
          <circle key={i} cx={cx} cy={cy} r={i===6?5:3.5}
            fill={i>=4 ? 'rgba(140,180,255,0.8)' : i===6 ? 'rgba(255,255,255,0.55)' : '#e31937'}
          />
        ))}

        <circle cx="220" cy="220" r="175"
          stroke="rgba(227,25,55,0.12)" strokeWidth="1"
          strokeDasharray="8 6"
          style={{ transformOrigin:'220px 220px', animation:'spin 28s linear infinite' }}
        />
      </svg>

      <div style={{
        position:'absolute', inset:0,
        backgroundImage:`
          linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px)
        `,
        backgroundSize:'70px 70px'
      }}/>
    </div>
  )
}

/* ── Warehouse ───────────────────────────────────────── */
function WarehouseArt() {
  return (
    <div style={{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center',zIndex:1,pointerEvents:'none'}}>
      <svg viewBox="0 0 700 480" fill="none" style={{width:'min(680px,90vw)',opacity:0.12}}>
        <polygon points="50,280 350,70 650,280" stroke="#333" strokeWidth="2" fill="none"/>
        <rect x="50" y="280" width="600" height="160" stroke="#333" strokeWidth="2" fill="none"/>

        {[150,250,350,450,550].map(x=>(
          <line key={x} x1={x} y1="280" x2={x} y2="440" stroke="#333" strokeWidth="1"/>
        ))}

        <line x1="50" y1="340" x2="650" y2="340" stroke="#333" strokeWidth="1"/>
        <line x1="50" y1="400" x2="650" y2="400" stroke="#333" strokeWidth="1"/>
      </svg>
    </div>
  )
}

/* ── Air ─────────────────────────────────────────────── */
function AirArt() {
  const stars = [[10,12],[24,7],[38,20],[58,5],[72,17],[86,11],[14,33],[90,28]]
  return (
    <div style={{position:'absolute',inset:0,zIndex:1,pointerEvents:'none'}}>
      <svg width="100%" height="100%" style={{opacity:.35}}>
        {stars.map(([cx,cy],i)=>(
          <circle key={i} cx={cx+"%"} cy={cy+"%"} r="1" fill="white"/>
        ))}
      </svg>
      <div style={{
        position:'absolute',top:'50%',left:'50%',
        transform:'translate(-50%,-50%)',
        fontSize:'clamp(160px,24vw,240px)',
        opacity:.07,filter:'blur(3px)',
        animation:'float 8s ease-in-out infinite'
      }}>✈</div>
    </div>
  )
}

/* ── Ocean ───────────────────────────────────────────── */
function OceanArt() {
  return (
    <div style={{position:'absolute',inset:0,zIndex:1,pointerEvents:'none'}}>
      <svg width="100%" height="100%" viewBox="0 0 1200 700" style={{opacity:.06}}>
        <path d="M0 500 Q150 480 300 500 Q450 520 600 500 Q750 480 900 500 Q1050 520 1200 500" stroke="white" strokeWidth="1.5" fill="none"/>
      </svg>
      <div style={{
        position:'absolute',top:'50%',left:'50%',
        transform:'translate(-50%,-50%)',
        fontSize:'clamp(140px,22vw,210px)',
        opacity:.07,
        animation:'float 9s ease-in-out infinite'
      }}>🚢</div>
    </div>
  )
}

/* ── Road ────────────────────────────────────────────── */
function RoadArt() {
  return (
    <div style={{position:'absolute',inset:0,zIndex:1,pointerEvents:'none'}}>
      <svg width="100%" height="100%" viewBox="0 0 900 700" style={{opacity:.07}}>
        <polygon points="400,0 500,0 900,700 0,700" fill="#444"/>
      </svg>
      <div style={{
        position:'absolute',top:'50%',left:'50%',
        transform:'translate(-50%,-50%)',
        fontSize:'clamp(140px,22vw,210px)',
        opacity:.07,
        animation:'float 7s ease-in-out infinite'
      }}>🚛</div>
    </div>
  )
}

/* ── Supply Chain ────────────────────────────────────── */
function SupplyArt() {
  const nodes=[[350,230],[120,100],[580,100],[100,360],[600,360]]
  return(
    <div style={{position:'absolute',inset:0,zIndex:1,display:'flex',alignItems:'center',justifyContent:'center'}}>
      <svg viewBox="0 0 700 460" fill="none" style={{width:'min(680px,90vw)',opacity:.13}}>
        {nodes.map(([cx,cy],i)=>(
          <circle key={i} cx={cx} cy={cy} r="6" fill="#e31937"/>
        ))}
      </svg>
    </div>
  )
}

/* ── Industries ──────────────────────────────────────── */
function IndustriesArt(){
  return(
    <div style={{position:'absolute',inset:0,zIndex:1,pointerEvents:'none'}}>
      <svg width="100%" height="100%" style={{opacity:.045}}>
        <defs>
          <pattern id="dots" width="32" height="32" patternUnits="userSpaceOnUse">
            <circle cx="16" cy="16" r="1.4" fill="white"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)"/>
      </svg>
    </div>
  )
}

/* ── Component map ───────────────────────────────────── */
export const BG_COMPONENTS = {
  hero:HeroGlobe,
  warehouse:WarehouseArt,
  air:AirArt,
  ocean:OceanArt,
  road:RoadArt,
  supply:SupplyArt,
  industries:IndustriesArt,
  quote:() => (
    <div style={{
      position:'absolute',inset:0,
      background:'radial-gradient(ellipse at 80% 20%, rgba(255,255,255,.07), transparent 55%)'
    }}/>
  )
}

export const BG_COLORS = {
  hero:'linear-gradient(175deg,#0d0d14 0%,#111827 55%,#080808 100%)',
  warehouse:'#eaeaea',
  air:'linear-gradient(165deg,#040408 0%,#0a0e28 50%,#181830 100%)',
  ocean:'linear-gradient(180deg,#020408 0%,#04122e 55%,#060d1e 100%)',
  road:'linear-gradient(180deg,#060606 0%,#0e0e0e 60%,#040404 100%)',
  supply:'radial-gradient(ellipse at 60% 50%,#1f0004 0%,#0d0000 60%,#070707 100%)',
  industries:'#171a20',
  quote:'linear-gradient(135deg,#a8001c 0%,#e31937 55%,#ff1a3a 100%)',
  footer:'#171a20'
}
