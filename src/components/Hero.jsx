import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import salonVideo      from '../assets/videos/Loop Salontopper.mp4'
import petrolheadVideo from '../assets/videos/petrolhead-loop.mp4'

/* ── Card data ── */
const CARDS = [
  {
    type: 'stat', stat: '10M+',
    label: 'Organische views', sub: 'Groei door slimme content',
    bg: '#4285F4', rotation: -10, overlap: false,
  },
  {
    type: 'video', src: salonVideo,
    rotation: -4, overlap: true,
  },
  {
    type: 'stat', stat: '30+',
    label: 'Merken geholpen', sub: 'Van start-up tot multinational',
    bg: '#34A853', rotation: 4, overlap: true,
  },
  {
    type: 'video', src: petrolheadVideo,
    rotation: 10, overlap: true, lgOnly: true,
  },
]

const SPRING = { type: 'spring', stiffness: 280, damping: 22 }

export default function Hero() {
  const [hoveredIdx, setHoveredIdx] = useState(null)
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 640)
    }
    
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  return (
    <header
      id="hero"
      className="pt-[100px] sm:pt-[120px] md:pt-[150px] lg:pt-[170px]
                 px-[10px] sm:px-[20px] md:px-[30px]
                 bg-[#FAF4EC]"
      style={{ overflowX: 'clip' }}
    >
      <div className="w-full">

        {/* ── Headline ── */}
       <h1
  className="lg:p-5  text-[clamp(2.5rem,7vw,5rem)]
             md:text-[clamp(3rem,7vw,5rem)] mt-5
             lg:text-[clamp(4rem,9vw,7rem)]
             leading-[1.02] tracking-[-0.03em] text-[#1d1d1d]"
>
  Get Hyped.<br  className="block lg:hidden md:hidden" /> Get&nbsp; <br  className="hidden lg:block" /> Noticed.<br  className="block lg:hidden md:hidden" />Get&nbsp; Results.
</h1>

        {/* ── Subtitle ── */}
        <p
          className="mt-4 md:mt-6 max-w-[60ch] px-5 py-5 text-[#181818]"
          style={{
            fontSize:      'clamp(1.25rem, 2.5vw, 1.75em)',
            lineHeight:    '1.3em',
            fontWeight:    600,
            letterSpacing: '-0.03em',
          }}
        >
          Klaar met gokken op content<br />
          die niets oplevert?
        </p>

        {/* ── Fanned cards — centred ── */}
        <div className="flex items-end justify-center mt-8 md:mt-10">
          {CARDS.map((card, i) => {
            const isHovered = hoveredIdx === i
            const isLeft    = hoveredIdx !== null && i < hoveredIdx
            const isRight   = hoveredIdx !== null && i > hoveredIdx

            /*
             * Visibility:
             *   On small screens: Show only first two cards (indices 0 and 1)
             *   On medium and up: Show all cards with lgOnly logic
             */
            let visClass = 'flex'
            
            if (isSmallScreen) {
              // Show only first two cards on small screens
              if (i >= 2) {
                visClass = 'hidden'
              } else {
                visClass = 'flex'
              }
            } else {
              // For md and up, use original lgOnly logic
              visClass = card.lgOnly ? 'hidden lg:flex' : 'flex'
            }

            const marginClass = card.overlap
                              ? '-ml-4 sm:-ml-7 md:-ml-7 lg:-ml-10'
                              : ''

            return (
              <motion.div
                key={i}
                className={`${visClass} flex-shrink-0 cursor-pointer ${marginClass}`}
                style={{
                  transformOrigin: 'bottom center',
                  zIndex:          isHovered ? 10 : 1,
                  position:        'relative',
                }}
                onHoverStart={() => setHoveredIdx(i)}
                onHoverEnd={()   => setHoveredIdx(null)}
                animate={{
                  /* neighbours spread — reduced on small screens */
                  x:      isLeft ? -50 : isRight ? 50 : 0,
                  /* hovered card lifts */
                  y:      isHovered ? -20 : 0,
                  /* hovered card straightens from fan angle */
                  rotate: isHovered ? 0 : card.rotation,
                  /* hovered card grows */
                  scale:  isHovered ? 1.07 : 1,
                }}
                transition={SPRING}
              >
                {card.type === 'stat' ? (
                  /* ── Stat card ── */
                  <div
                    className="w-[145px] sm:w-[205px] md:w-[270px] lg:w-[360px] xl:w-[420px]
                               h-[225px] sm:h-[305px] md:h-[390px] lg:h-[460px] xl:h-[510px]
                               rounded-[1.25rem] lg:rounded-[1.5rem]
                               p-3 sm:p-4 md:p-6 lg:p-8
                               flex flex-col justify-between text-black"
                    style={{ background: card.bg }}
                  >
                    <div className="text-[1.8rem] sm:text-[2.4rem] md:text-[3rem] lg:text-[4.2rem]
                                    font-extrabold leading-none">
                      {card.stat}
                    </div>
                    <div>
                      <div className="text-[0.85rem] sm:text-[1rem] md:text-[1.3rem] lg:text-[1.8rem]
                                      font-bold leading-tight">
                        {card.label}
                      </div>
                      <div className="border-t border-black mt-2 pt-2" />
                      <div className="text-[0.65rem] sm:text-[0.75rem] md:text-sm lg:text-base mt-1">
                        {card.sub}
                      </div>
                    </div>
                  </div>
                ) : (
                  /* ── Video card ── */
                  <div
                    className="w-[145px] sm:w-[205px] md:w-[270px] lg:w-[360px] xl:w-[420px]
                               h-[225px] sm:h-[305px] md:h-[390px] lg:h-[460px] xl:h-[510px]
                               rounded-[1.25rem] lg:rounded-[1.5rem]
                               overflow-hidden bg-gray-200"
                  >
                    <video
                      src={card.src}
                      muted loop autoPlay playsInline
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>

      </div>
    </header>
  )
}