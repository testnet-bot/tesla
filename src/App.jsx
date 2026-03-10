import React, { useState, useEffect, useCallback } from 'react'
import Navbar from './components/Navbar'
import TeslaSection from './components/TeslaSection'
import FooterSection from './components/FooterSection'
import TrackModal from './components/TrackModal'
import ContactModal from './components/ContactModal'
import MobileNav from './components/MobileNav'
import { SECTIONS } from './data/sections'
import { useNavInView } from './hooks/useInView'

// ── CSS animation keyframes injected once ──
const KEYFRAMES = `
  @keyframes bob {
    0%,100% { transform: translateX(-50%) translateY(0); }
    50%      { transform: translateX(-50%) translateY(6px); }
  }
  @keyframes float {
    0%,100% { transform: translate(-50%,-50%) translateY(0); }
    50%      { transform: translate(-50%,-50%) translateY(-14px); }
  }
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
  @keyframes modalIn {
    from { opacity:0; transform:translateY(16px) scale(0.97); }
    to   { opacity:1; transform:translateY(0) scale(1); }
  }
  @keyframes slideRight {
    from { transform:translateX(100%); }
    to   { transform:translateX(0); }
  }
  /* Hide scrollbar */
  html { scrollbar-width: none; }
  html::-webkit-scrollbar { display: none; }
`

export default function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 960)

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 960)
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  const [heroRef, heroVisible] = useNavInView()

  const [modal, setModal] = useState(null)
  const [quotePrefill, setQuotePrefill] = useState(null)

  const openModal = useCallback((type, data) => {
    if (type === 'quote') {
      setQuotePrefill(data)
      setModal('contact')
    } else {
      setModal(type)
    }
  }, [])

  const closeModal = useCallback(() => {
    setModal(null)
    setQuotePrefill(null)
  }, [])

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') closeModal() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [closeModal])

  useEffect(() => {
    document.body.style.overflow = modal ? 'hidden' : ''
  }, [modal])

  return (
    <>
      <style>{KEYFRAMES}</style>

      <Navbar
        heroVisible={heroVisible}
        onOpenModal={openModal}
        isMobile={isMobile}
      />

      <main>
        {SECTIONS.map((section, i) => (
          <div
            key={section.id}
            ref={i === 0 ? heroRef : undefined}
          >
            <TeslaSection
              data={section}
              onAction={openModal}
              isMobile={isMobile}
            />
          </div>
        ))}

        <FooterSection onAction={openModal} isMobile={isMobile} />
      </main>

      {modal === 'track' && <TrackModal onClose={closeModal} />}

      {modal === 'contact' && (
        <ContactModal
          onClose={closeModal}
          prefill={quotePrefill ? {
          message: `Quote request: From "${quotePrefill.from || '—'}" to "${quotePrefill.to || '—'}". Please provide pricing and transit time options.`
          } : null}
        />
      )}

      {modal === 'mobileNav' && (
        <MobileNav
          onClose={closeModal}
          onOpenModal={openModal}
        />
      )}
    </>
  )
}
