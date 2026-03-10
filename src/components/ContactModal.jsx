import React, { useState } from 'react'
import TeslaButton from './TeslaButton'
import { ModalShell } from './TrackModal'

const inp = {
  width: '100%', height: 44, padding: '0 14px',
  border: '1px solid #d8d8d8', borderRadius: 8,
  fontSize: 14, fontFamily: 'Inter,sans-serif',
  color: '#171a20', background: '#fafafa',
  outline: 'none', marginBottom: 14,
  transition: 'border .2s, background .2s',
}

const lbl = {
  display: 'block', fontSize: 11, fontWeight: 600,
  color: '#888', marginBottom: 6,
  letterSpacing: '.3px', textTransform: 'uppercase',
}

export default function ContactModal({ onClose, prefill }) {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '',
    company: '', service: '',
    message: prefill?.message || '',
  })
  const [errors, setErrors] = useState({})

  function upd(k) { return e => setForm(f => ({ ...f, [k]: e.target.value })) }

  function submit() {
    const errs = {}
    if (!form.firstName.trim()) errs.firstName = true
    if (!form.email.trim())     errs.email     = true
    if (Object.keys(errs).length) { setErrors(errs); return }
    setSent(true)
    setTimeout(() => { onClose(); setSent(false) }, 4200)
  }

  if (sent) return (
    <ModalShell title="" onClose={onClose}>
      <div style={{ textAlign:'center', padding:'20px 0 8px' }}>
        <span style={{ fontSize:48, display:'block', marginBottom:14 }}>✅</span>
        <h3 style={{ fontSize:20, fontWeight:500, color:'#171a20', marginBottom:8 }}>Message Sent!</h3>
        <p style={{ fontSize:14, color:'#5c5e62', lineHeight:1.5 }}>
          A member of our team will contact you<br/>within 2 business hours.
        </p>
      </div>
    </ModalShell>
  )

  return (
    <ModalShell title="Contact Us" onClose={onClose}>
      <p style={{ fontSize:14, color:'#5c5e62', marginBottom:20, lineHeight:1.5 }}>
        Fill in your details and our logistics team will get back to you within 2 business hours.
      </p>

      <div style={{ display:'flex', gap:12 }}>
        <div style={{ flex:1 }}>
          <label style={lbl}>First Name</label>
          <input type="text" placeholder="John" value={form.firstName} onChange={upd('firstName')}
            style={{ ...inp, borderColor: errors.firstName ? '#e31937' : '#d8d8d8' }}
            onFocus={e => e.target.style.borderColor='#171a20'}
            onBlur={e  => e.target.style.borderColor=errors.firstName?'#e31937':'#d8d8d8'}
          />
        </div>
        <div style={{ flex:1 }}>
          <label style={lbl}>Last Name</label>
          <input type="text" placeholder="Smith" value={form.lastName} onChange={upd('lastName')}
            style={inp}
            onFocus={e => e.target.style.borderColor='#171a20'}
            onBlur={e  => e.target.style.borderColor='#d8d8d8'}
          />
        </div>
      </div>

      <label style={lbl}>Email Address</label>
      <input type="email" placeholder="john@company.com" value={form.email} onChange={upd('email')}
        style={{ ...inp, borderColor: errors.email ? '#e31937' : '#d8d8d8' }}
        onFocus={e => e.target.style.borderColor='#171a20'}
        onBlur={e  => e.target.style.borderColor=errors.email?'#e31937':'#d8d8d8'}
      />

      <label style={lbl}>Company</label>
      <input type="text" placeholder="Your company" value={form.company} onChange={upd('company')}
        style={inp}
        onFocus={e => e.target.style.borderColor='#171a20'}
        onBlur={e  => e.target.style.borderColor='#d8d8d8'}
      />

      <label style={lbl}>Service Interest</label>
      <select value={form.service} onChange={upd('service')}
        style={{ ...inp, height:44, cursor:'pointer' }}
        onFocus={e => e.target.style.borderColor='#171a20'}
        onBlur={e  => e.target.style.borderColor='#d8d8d8'}
      >
        <option value="">Select a service...</option>
        {['Warehousing','Air Freight','Ocean Freight','Road Freight','Supply Chain','Packaging','General Enquiry'].map(o=>(
          <option key={o} value={o}>{o}</option>
        ))}
      </select>

      <label style={lbl}>Message</label>
      <textarea
        placeholder="Tell us about your logistics needs..."
        value={form.message}
        onChange={upd('message')}
        style={{
          ...inp, height: 96, padding:'12px 14px',
          resize:'vertical', lineHeight:1.5,
        }}
        onFocus={e => e.target.style.borderColor='#171a20'}
        onBlur={e  => e.target.style.borderColor='#d8d8d8'}
      />

      <TeslaButton variant="dark" onClick={submit} fullWidth>Send Message</TeslaButton>
    </ModalShell>
  )
}
