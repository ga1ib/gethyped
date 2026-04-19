// src/animations/animationEngine.js
import gsap from './gsapConfig'
import { ScrollTrigger } from './gsapConfig'

/* ─────────────────────────────────────────────
   1. pageReveal  — timeline for an array of els
   ───────────────────────────────────────────── */
export const pageReveal = (elements) => {
  const tl = gsap.timeline()

  tl.from(elements, {
    y: 80,
    opacity: 0,
    duration: 1.2,
    stagger: 0.12,
    ease: 'power4.out',
  })

  return tl
}

/* ─────────────────────────────────────────────
   2. sectionReveal  — scroll-triggered reveal
   ───────────────────────────────────────────── */
export const sectionReveal = (el) => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: 'top 80%',
    },
    y: 60,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
  })
}

/* ─────────────────────────────────────────────
   3. hoverParallax  — mouse-move tilt on el
   ───────────────────────────────────────────── */
export const hoverParallax = (el) => {
  const onMove = (e) => {
    const x = (e.clientX / window.innerWidth  - 0.5) * 20
    const y = (e.clientY / window.innerHeight - 0.5) * 20
    gsap.to(el, { x, y, duration: 0.6, ease: 'power3.out' })
  }

  const onLeave = () => {
    gsap.to(el, { x: 0, y: 0, duration: 0.8, ease: 'power3.out' })
  }

  el.addEventListener('mousemove', onMove)
  el.addEventListener('mouseleave', onLeave)

  // Return cleanup function
  return () => {
    el.removeEventListener('mousemove', onMove)
    el.removeEventListener('mouseleave', onLeave)
  }
}

/* ─────────────────────────────────────────────
   4. heroTimeline  — structured hero entrance
   Uses class selectors so Hero.jsx just calls this
   ───────────────────────────────────────────── */
export const heroTimeline = () => {
  const tl = gsap.timeline()

  tl.from('.hero-title', {
    y: 120,
    opacity: 0,
    duration: 1.2,
    stagger: 0.2,
    ease: 'power4.out',
  })
    .from(
      '.hero-subtitle',
      { opacity: 0, y: 30, duration: 0.8, ease: 'power3.out' },
      '-=0.6',
    )
    .from(
      '.hero-btn',
      { scale: 0.85, opacity: 0, duration: 0.6, ease: 'back.out(1.7)' },
      '-=0.4',
    )

  return tl
}

/* ─────────────────────────────────────────────
   5. magneticEffect  — button attracted to cursor
   ───────────────────────────────────────────── */
export const magneticEffect = (el) => {
  const onMove = (e) => {
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width  / 2
    const y = e.clientY - rect.top  - rect.height / 2

    gsap.to(el, { x: x * 0.3, y: y * 0.3, duration: 0.3, ease: 'power2.out' })
  }

  const onLeave = () => {
    gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.5)' })
  }

  el.addEventListener('mousemove', onMove)
  el.addEventListener('mouseleave', onLeave)

  return () => {
    el.removeEventListener('mousemove', onMove)
    el.removeEventListener('mouseleave', onLeave)
  }
}

export { ScrollTrigger }
