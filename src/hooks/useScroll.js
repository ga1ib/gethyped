import { useState, useEffect, useCallback } from 'react'

/**
 * useScroll — Tracks scroll position and direction.
 *
 * @returns {{ scrollY: number, scrolled: boolean, direction: 'up'|'down' }}
 *   scrollY   — current window.scrollY value
 *   scrolled  — true when scrollY > threshold (default 20px)
 *   direction — 'down' when scrolling down, 'up' when scrolling up
 */
export function useScroll(threshold = 20) {
  const [state, setState] = useState({
    scrollY:   0,
    scrolled:  false,
    direction: 'down',
  })

  const handleScroll = useCallback(() => {
    const y = window.scrollY

    setState((prev) => ({
      scrollY:   y,
      scrolled:  y > threshold,
      direction: y > prev.scrollY ? 'down' : 'up',
    }))
  }, [threshold])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // initialise on mount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return state
}
