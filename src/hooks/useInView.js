import { useEffect, useRef, useState } from 'react'

export function useInView(options = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
        obs.unobserve(el)   // fire once, like Tesla
      }
    }, { threshold: options.threshold ?? 0.08, ...options })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return [ref, inView]
}

export function useNavInView() {
  const ref = useRef(null)
  const [heroVisible, setHeroVisible] = useState(true)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      setHeroVisible(entry.isIntersecting)
    }, { threshold: 0.35 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return [ref, heroVisible]
}
