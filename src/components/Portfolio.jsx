import { useRef } from 'react'
import bullitVideo     from '../assets/videos/Bullit _ Loop.mp4'
import roastaVideo     from '../assets/videos/roasta-loop.mp4'
import petrolheadVideo from '../assets/videos/petrolhead-loop.mp4'

const WORKS = [
  {
    title:  'Van nul naar vol, binnen 3 weken',
    client: 'Bullit',
    bg:     'bg-[#FF4C24]',
    ring:   'ring-4 ring-[#FF7A57]',
    videoSize: 'large',
    video:  bullitVideo,
  },
  {
    title:  'Zacht in smaak, sterk in beeld',
    client: 'Roasta',
    bg:     'bg-[#1A6FE8]',
    ring:   'ring-4 ring-[#5A9AF5]',
    videoSize: 'large',
    video:  roastaVideo,
  },
  {
    title:  'Content die écht smaakt (en raakt)',
    client: 'Loco',
    bg:     'bg-[#3BAA6E]',
    ring:   'ring-4 ring-[#00D4AA]',
    videoSize: 'large',
    video:  petrolheadVideo,
  },
]

/* ─────────────────────────────────────────────────────────
   WorkCard — extracted so useRef is called at component
   level (not inside a .map()), which React requires.

   Sizing (mobile-first):
     width  — 180px  → lg: 270px
     height — 260px  → lg: 385px

   Staircase step uses CSS calc+clamp so it scales
   smoothly from 60px (mobile) to 130px (desktop):
     marginBottom = index × clamp(60px, 8.5vw, 130px)

   Video fills top 65 % of the card (up from 58 %)
   and only plays on hover.
───────────────────────────────────────────────────────── */
function WorkCard({ work, index }) {
  const videoRef = useRef(null)

  const onEnter = () => videoRef.current?.play()
  const onLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  return (
    <div
      className={`flex-shrink-0 ${work.bg} ${work.ring}
                  rounded-[1.4rem] overflow-hidden shadow-xl relative
                  cursor-pointer transition-transform  duration-400 hover:-translate-y-4
                  w-[150px] lg:w-[440px] md:w-[260px]
                  h-[220px] lg:h-[600px] md:h-[360px]`}
      style={{
        /* fluid staircase: 60 px step mobile → 130 px step desktop */
        marginBottom: `calc(${index} * clamp(60px, 8.5vw, 130px))`,
        zIndex: index + 1,
      }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      {/* Video — top 65 %, no autoPlay; starts on hover */}
      <video
        ref={videoRef}
        src={work.video}
        muted
        loop
        playsInline
        className="w-full object-cover"
        style={{ height: '65%' }}
      />

      {/* Diagonal arrow — top-right corner */}
      <div className="absolute top-3 right-3
                      w-7 h-7 lg:w-8 lg:h-8
                      bg-white rounded-full flex items-center justify-center shadow">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
          <path d="M7 17L17 7M17 7H7M17 7V17"
                stroke="black" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Title + client badge — bottom section */}
      <div className="px-4 pt-3 pb-4">
        <h3 className="text-white font-bold text-[1.5rem] lg:text-[2.5rem] leading-snug">
          {work.title}
        </h3>
        <span className="inline-block mt-2 bg-white/25 text-white
                          text-[0.8rem] lg:text-[1.25rem] font-semibold px-3 py-1 rounded-lg">
          {work.client}
        </span>
      </div>
    </div>
  )
}

export default function Portfolio() {
  return (
    <section id="work" className="px-5 py-16 lg:py-28 bg-[#FAF4EC] overflow-hidden">
      <div className="w-full mx-auto">
        
        {/* Upper part - Content and Button - Left aligned with no bottom padding */}
        <div className="flex flex-col items-start text-left">
          <h2 className="text-[clamp(3rem,5.5vw,5rem)] font-black lg:pl-40 md:pl-10 pl-5 lg:text-[clamp(3rem,6vw,7rem)] text-black leading-[1.05] tracking-tight">
            Content <br className="hidden sm:block" /> dat scoort.
          </h2>
          <p className="mt-5 lg:pl-40  md:pl-10 pl-5 lg:text-[1.75rem] md:text-[1.25rem] text-[1.15rem] text-black font-bold leading-[1.4] max-w-[680px]">
            Wij vertellen jouw verhaal. Op een manier die écht past bij jouw
            doelgroep. Met creatieve content die werkt en het verschil maakt.
          </p>

          {/* Button — split style matching Services.jsx CtaBtn */}
          <a
            href="#"
            className="mt-8 lg:ml-40 md:ml-10 ml-5 inline-flex items-center border border-black
                       rounded-md overflow-hidden text-md font-medium
                       cursor-pointer hover:shadow-md transition-shadow duration-200"
          >
            <span className="px-5 py-2.5  leading-none font-semibold bg-white text-black">
              Bekijk al ons werk
            </span>
            <span className="bg-black px-3 py-2.5 flex items-center justify-center leading-none">
              <svg className="w-4 h-4  text-white" aria-hidden="true"
                   xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round"
                      strokeLinejoin="round" strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </span>
          </a>
        </div>

        {/* Lower part - 3 video cards with no top margin/padding */}
        <div className="flex justify-center">
          <div className="flex flex-row px-10 items-end gap-4 sm:gap-6 lg:gap-12">
            {WORKS.map((work, i) => (
              <WorkCard key={work.client} work={work} index={i} />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}