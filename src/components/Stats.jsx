import { useEffect, useRef } from 'react'
import gsap, { ScrollTrigger } from '../animations/gsapConfig'
import useReveal from '../hooks/useReveal'

// Data-driven stats
const STATS = [
  { end: 10,  suffix: 'M+', label: 'Organische views'    },
  { end: 30,  suffix: '+',  label: 'Merken geholpen'     },
  { end: 100, suffix: '%',  label: 'Resultaatgericht'    },
  { end: 3,   suffix: 'x',  label: 'Sneller dan gemiddeld' },
]

export default function Stats() {
  const sectionRef = useReveal()    // scroll-reveal the whole section
  const numsRef    = useRef([])

  useEffect(() => {
    const triggers = []

    numsRef.current.forEach((el, i) => {
      if (!el) return
      const { end, suffix } = STATS[i]
      const counter = { val: 0 }

      triggers.push(
        gsap.to(counter, {
          val: end,
          duration: 1.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          },
          onUpdate() {
            el.textContent = Math.floor(counter.val) + suffix
          },
          onComplete() {
            el.textContent = end + suffix
          },
        }),
      )
    })

    return () => {
      triggers.forEach((t) => t.scrollTrigger?.kill())
      ScrollTrigger.refresh()
    }
  }, [])

  return (
    <section
      id="stats"
      ref={sectionRef}
      className="px-[6vw] py-[80px] md:py-[140px] bg-bg"
    >
      <h2 className="text-[48px] md:text-[64px] font-bold mb-[48px] text-white leading-[1.0]">
        Impact in cijfers
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-[24px] md:gap-[48px]">
        {STATS.map(({ suffix, label }, i) => (
          <div key={label} className="text-center">
            {/* Number — driven by GSAP counter via ref */}
            <p
              ref={(el) => (numsRef.current[i] = el)}
              className="text-[64px] md:text-[80px] font-bold text-accent leading-none"
            >
              0{suffix}
            </p>
            <p className="mt-3 text-muted text-[16px] font-medium">{label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
