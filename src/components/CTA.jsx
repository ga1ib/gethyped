import { useEffect, useRef } from 'react'
import useReveal          from '../hooks/useReveal'
import { magneticEffect } from '../animations/animationEngine'

export default function CTA() {
  const sectionRef = useReveal()
  const btnRef     = useRef(null)

  // 🧲 Magnetic button — attract toward cursor on hover
  useEffect(() => {
    if (!btnRef.current) return
    return magneticEffect(btnRef.current)
  }, [])

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="text-center px-[6vw] py-[80px] md:py-[140px] bg-bg"
    >
      <h2 className="text-[48px] md:text-[64px] lg:text-[80px] font-bold
                     mb-6 text-white leading-[1.0]">
        Let&apos;s build something great
      </h2>

      <p className="text-[16px] md:text-[18px] text-muted mb-12 max-w-md mx-auto leading-relaxed">
        Klaar om op te vallen? Neem contact op en ontdek wat Get Hyped voor
        jouw merk kan betekenen.
      </p>

      <div className="flex flex-wrap gap-[24px] justify-center">
        {/* 🧲 Magnetic primary CTA */}
        <a
          ref={btnRef}
          href="mailto:info@gethyped.nl"
          className="inline-block px-10 py-5 border border-white text-white
                     text-[16px] font-semibold tracking-wide
                     hover:bg-accent hover:text-black hover:border-accent
                     transition-all duration-[400ms] hover:-translate-y-[6px]"
        >
          Contact
        </a>

        <a
          href="tel:+31615337496"
          className="inline-block px-10 py-5 text-muted text-[16px] font-medium
                     hover:text-accent transition-colors duration-[400ms]
                     hover:-translate-y-[6px]"
        >
          +31 6 1533 7496
        </a>
      </div>
    </section>
  )
}
