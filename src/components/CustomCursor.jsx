import { useEffect, useRef } from 'react'
import gsap from '../animations/gsapConfig'

/**
 * CustomCursor — GSAP-driven dot + follower ring.
 * Only mounts on pointer:fine devices (mouse); hidden on touch/mobile.
 */
export default function CustomCursor() {
  const dotRef    = useRef(null)
  const ringRef   = useRef(null)

  useEffect(() => {
    // Skip on touch-only devices
    if (!window.matchMedia('(pointer: fine)').matches) return

    const dot  = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    /* ── Track mouse — dot snaps instantly, ring follows with lag ── */
    const onMove = (e) => {
      gsap.set(dot, { x: e.clientX, y: e.clientY })
      gsap.to(ring, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.35,
        ease: 'power2.out',
      })
    }

    /* ── Expand ring on interactive elements ── */
    const onEnter = () => {
      gsap.to(ring, { scale: 2.5, opacity: 0.2, duration: 0.3 })
      gsap.to(dot,  { scale: 0,   duration: 0.2 })
    }
    const onLeave = () => {
      gsap.to(ring, { scale: 1, opacity: 1, duration: 0.3 })
      gsap.to(dot,  { scale: 1,             duration: 0.2 })
    }

    window.addEventListener('mousemove', onMove)

    const targets = document.querySelectorAll('a, button, [data-cursor]')
    targets.forEach((el) => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      window.removeEventListener('mousemove', onMove)
      targets.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [])

  return (
    <>
      {/* Accent dot — snaps to cursor */}
      <div ref={dotRef}  className="cursor-dot"  aria-hidden="true" />
      {/* Follower ring — lags slightly */}
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  )
}
