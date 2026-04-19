// src/hooks/useStaggerReveal.js
import { useEffect, useRef } from 'react'
import gsap, { ScrollTrigger } from '../animations/gsapConfig'

/**
 * useStaggerReveal — Animates direct children with a stagger on scroll.
 *
 * Usage:
 *   const ref = useStaggerReveal()
 *   return (
 *     <div ref={ref}>
 *       <div>Card 1</div>
 *       <div>Card 2</div>
 *       <div>Card 3</div>
 *     </div>
 *   )
 */
export const useStaggerReveal = () => {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return

    const items = ref.current.children
    if (!items.length) return

    const ctx = gsap.context(() => {
      gsap.from(items, {
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
        },
      })
    }, ref)

    return () => {
      ctx.revert()
      ScrollTrigger.refresh()
    }
  }, [])

  return ref
}
