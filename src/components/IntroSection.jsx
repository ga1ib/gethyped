import { useState } from 'react'
import { motion } from 'framer-motion'
import anniekImg from '../assets/avif/6894757aa6dd3f84f6e463a2_Anniek Bril.webp'

/* ── Split "Leer ons kennen →" button ── */
function LearnMoreBtn() {
  return (
    <a
      href="#expertises"
      className="inline-flex items-center border border-black rounded-md overflow-hidden
                 text-sm font-medium cursor-pointer hover:shadow-md transition-shadow duration-200"
    >
      {/* Label — black text */}
      <span className="px-5 py-2.5 leading-none text-black font-semibold">
        Leer ons kennen
      </span>
      {/* Arrow — black block */}
      <span className="bg-[#080808] text-white text-2xl font-bold px-3 py-2.5
                       flex items-center justify-center leading-none">
        <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
      </span>
    </a>
  )
}

/* ── Scroll-down button — top-to-bottom slide on hover ── */
function ScrollDownBtn() {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.button
      onClick={() => document.getElementById('expertises')?.scrollIntoView({ behavior: 'smooth' })}
      aria-label="Scroll omlaag"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 border border-black rounded-xl cursor-pointer
                 flex items-center justify-center text-lg overflow-hidden bg-white
                 hover:shadow-md transition-shadow duration-200"
    >
      <motion.span
        animate={hovered
          ? { y: [0, 18, -18, 0], transition: { duration: 0.6, repeat: Infinity, ease: 'easeInOut' } }
          : { y: 0 }
        }
      >
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1v12m0 0 4-4m-4 4L1 9"/>
        </svg>
      </motion.span>
    </motion.button>
  )
}

export default function IntroSection() {
  return (
    <section id="about" className="w-full p-[10px] bg-[#FAF4EC]">
      <div className="w-full max-w-full">

        {/* ── Full-width bold heading — reduced text size for small screens ── */}
        <h2
          className="font-bold leading-[1.2] sm:leading-[1.1] tracking-[-0.02em] text-black
                     text-[clamp(2.75rem,4vw,1.8rem)] sm:text-[clamp(1.5rem,5vw,2.2rem)] 
                     md:text-[clamp(2rem,6vw,3rem)] lg:text-[clamp(2.5rem,7vw,4rem)]
                     xl:text-[clamp(3rem,7vw,4.5rem)]
                     pl-0 sm:pl-4 md:pl-10 lg:pl-40 pt-12 sm:pt-16 md:pt-20 pb-6 sm:pb-8 md:pb-10 mt-8 sm:mt-12 md:mt-16"
        >
          Wij maken content die opvalt. Die <br className="hidden sm:block" />  
          blijft hangen. Die jouw doelgroep <br className="hidden sm:block" />
          raakt en jouw merk in beweging <br className="hidden sm:block" />  
          brengt. Snel, krachtig en energiek.
        </h2>

        {/* ── Bottom row: photo · text+btn · scroll indicator ── */}
        <div className="flex flex-row items-start gap-4 sm:gap-6 md:gap-8 lg:gap-12 mt-8 sm:mt-10 md:mt-14">

          {/* Portrait photo - moved more to the left */}
          <div className="flex-shrink-0 pl-3rem ml-[10px] sm:ml-[30px] md:ml-[60px] lg:mt-20 lg:ml-[32px]">
            <img
              src={anniekImg}
              alt="Anniek Bril — Get Hyped"
              className="w-[120px] sm:w-[160px] md:w-[220px] lg:w-[260px] xl:w-[290px] 
                         rounded-[1rem] sm:rounded-[1.25rem] object-cover aspect-[3/4]"
            />
          </div>

          {/* Paragraph + CTA - right side with 15px padding on small screens, 30px on larger */}
          <div className="flex-1 min-w-0 pl-[15px] sm:pl-[30px] md:pl-[30px]">
            <p
              className="text-[#2c2c2c] lg:mt-32 lg:max-w-[42rem] lg:pl-32 font-semibold tracking-[-0.02em] px-6 sm:tracking-[-0.03em]
                         text-[clamp(1rem,3vw,0.9rem)] sm:text-[clamp(0.85rem,3.5vw,1.1rem)]
                         md:text-[clamp(1.25rem,4vw,1.4rem)] lg:text-[clamp(1.5rem,4vw,1.5rem)]
                         xl:text-[clamp(1.75rem,4vw,1.6rem)]
                         leading-[1.35] sm:leading-[1.4] max-w-[36rem]"
            >
              We stoppen niet bij mooie plaatjes en vette beelden. We maken het
              meetbaar. Zo weet je precies wat werkt en wat niet. Nooit meer
              content zonder strategie. Nooit meer content zonder resultaat.
            </p>

            <div className="mt-4 lg:ml-24 sm:mt-5 px-6 md:mt-6 lg:mt-8">
              <LearnMoreBtn />
            </div>
          </div>

          {/* Scroll indicator — visible on all screens, right most bottom */}
          <div className="flex items-center self-end pb-1 ml-auto">
            <ScrollDownBtn />
          </div>

        </div>
      </div>
    </section>
  )
}