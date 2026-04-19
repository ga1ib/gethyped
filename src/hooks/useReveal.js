// src/hooks/useReveal.js
import { useEffect, useRef } from 'react'
import { sectionReveal } from '../animations/animationEngine'

/**
 * useReveal — Attaches a scroll-triggered GSAP reveal to a section element.
 *
 * Usage:
 *   const ref = useReveal()
 *   return <section ref={ref} className="py-[140px] px-[6vw]">...</section>
 */
export default function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    sectionReveal(ref.current)
  }, [])

  return ref
}
