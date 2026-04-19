import { useState, useEffect, useRef } from 'react'
import Navbar        from '../components/Navbar'
import MobileMenu    from '../components/MobileMenu'
import Hero          from '../components/Hero'
import IntroSection  from '../components/IntroSection'
import Services      from '../components/Services'
import Portfolio     from '../components/Portfolio'
import ClientMarquee from '../components/ClientMarquee'
import Footer        from '../components/Footer'

/* Simple preloader — fades out after page load */
function Preloader() {
  const ref = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (ref.current) {
        ref.current.style.opacity = '0'
        ref.current.style.visibility = 'hidden'
      }
    }, 700)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      ref={ref}
      className="fixed inset-0 z-[9999] bg-[#FAF4EC] flex items-center justify-center
                 transition-opacity duration-500"
    >
      <div className="w-20 h-1 bg-black rounded animate-loader" />
    </div>
  )
}

export default function Home() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Preloader />

      <Navbar setOpen={setOpen} />
      <MobileMenu open={open} setOpen={setOpen} />

      <main>
        <Hero />
        <IntroSection />
        <Services />
        <Portfolio />
        <ClientMarquee />
      </main>

      <Footer />
    </>
  )
}
