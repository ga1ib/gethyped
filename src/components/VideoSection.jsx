import { useRef, useState } from 'react'
import useReveal from '../hooks/useReveal'
import thumb01  from '../assets/avif/69c40296636e683096701cda_video-thumb-01-p-800.avif'
import btsVideo from '../assets/videos/Loop BTS comp.mp4'

export default function VideoSection() {
  const sectionRef = useReveal()
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef(null)

  const togglePlay = () => {
    const v = videoRef.current
    if (!v) return
    if (playing) { v.pause(); setPlaying(false) }
    else         { v.play();  setPlaying(true)  }
  }

  return (
    <section ref={sectionRef} id="video" className="px-[6vw] py-[80px] md:py-[140px] bg-bg">
      <div className="relative group cursor-pointer" onClick={togglePlay}>

        {/* Thumbnail / video */}
        {!playing && (
          <img
            src={thumb01}
            alt="Video thumbnail – Get Hyped reel"
            className="w-full object-cover aspect-video"
          />
        )}
        <video
          ref={videoRef}
          src={btsVideo}
          muted
          loop
          playsInline
          preload="none"
          className={`w-full object-cover aspect-video ${playing ? 'block' : 'hidden'}`}
        />

        {/* Play overlay — hidden while playing */}
        {!playing && (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center
                       bg-black/40 group-hover:bg-black/55 transition-colors duration-300"
          >
            {/* Play circle */}
            <div
              className="w-20 h-20 rounded-full border-2 border-white flex items-center justify-center
                         group-hover:bg-accent group-hover:border-accent transition-all duration-300"
            >
              <span className="text-white text-3xl group-hover:text-black transition-colors duration-300 pl-1">
                ▶
              </span>
            </div>
            <p className="mt-4 text-white text-sm font-medium tracking-widest uppercase">
              Behind the scenes
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
