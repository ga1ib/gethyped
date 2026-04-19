import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import schakenVideo    from '../assets/videos/MD Loop Schaken.mp4';
import btsVideo        from '../assets/videos/Loop BTS comp.mp4';
import overdeTopVideo  from '../assets/videos/overdetop-loop.mp4';
import dataVideo       from '../assets/videos/Data comp.mp4';

const NAVBAR_H = 91;   // px — logo 63px + py-4 (16px × 2) padding
const TOTAL    = 4;    // number of cards

const EXPERTISES = [
  {
    id: '01',
    bg: 'bg-white',
    numColor: 'text-black/[0.15]',
    title: 'Social strategy',
    sub: 'Slimme strategie. Sterke start.',
    desc: 'We duiken diep in jouw merk, doelgroep en doelen. En vertalen data naar een duidelijk plan met formats die écht impact maken. Zo weet je precies waarom het werkt.',
    cta: 'Meer over social strategie',
    ctaLink: '/expertises/social-strategie',
    video: schakenVideo,
    borderColor: 'border-orange-400',
    videoSize: 'large',
    videoAngle: 5,
  },
  {
    id: '02',
    bg: 'bg-pink-400',
    numColor: 'text-black/[0.15]',
    title: 'Content creation',
    sub: 'Content die opvalt en raakt.',
    desc: 'We maken content die opvalt. Blijft hangen. En jouw doelgroep raakt. Creatief, snel en energiek. Altijd met het doel voor ogen.',
    cta: 'Meer over content creatie',
    ctaLink: '/expertises/content-creatie',
    video: btsVideo,
    borderColor: 'border-white',
    videoSize: 'large',
    videoAngle: 5,
  },
  {
    id: '03',
    bg: 'bg-green-600',
    numColor: 'text-black/[0.15]',
    title: 'Activation',
    sub: 'Zichtbaar waar en wanneer het telt.',
    desc: 'De juiste content verdient het om gezien te worden. We verspreiden de content waar jouw doelgroep is. Zo raakt jouw merk de juiste mensen, precies waar en wanneer het telt.',
    cta: 'Meer over activatie',
    ctaLink: '/expertises/activatie',
    video: overdeTopVideo,
    borderColor: 'border-white',
    videoSize: 'large',
    videoAngle: 5,
  },
  {
    id: '04',
    bg: 'bg-blue-500',
    numColor: 'text-black/[0.15]',
    title: 'Data',
    sub: 'Inzichten die impact maken.',
    desc: 'We duiken in de cijfers om te snappen wat écht werkt. En sturen jouw content scherp bij.',
    cta: 'Meer over data',
    ctaLink: '/expertises/data',
    video: dataVideo,
    borderColor: 'border-yellow-400',
    videoSize: 'large',
    videoAngle: 5,
  },
];

const MARGIN = 20;

/* ──────────────────────────────────────────────────────────────
   CtaBtn
   • cta      – button label text (from card data)
   • ctaLink  – href
   • isOrange – true only for card 01 (Social strategy)
                label bg = orange-400; all others = white
   Arrow section is always black bg with a white arrow.
────────────────────────────────────────────────────────────── */
function CtaBtn({ cta, ctaLink, isOrange }) {
  return (
    <a
      href={ctaLink}
      className="inline-flex items-center border border-black rounded-md overflow-hidden
                 text-sm font-medium cursor-pointer hover:shadow-md transition-shadow duration-200"
      onClick={e => e.stopPropagation()}
    >
      {/* Label — orange-400 for Social Strategy, white for the rest */}
      <span
        className={`px-5 py-2.5 leading-none font-semibold
                    ${isOrange ? 'bg-orange-400 text-white' : 'bg-white text-black'}`}
      >
        {cta}
      </span>
      {/* Arrow — always black background, white arrow */}
      <span className="bg-black px-3 py-2.5 flex items-center justify-center leading-none">
        <svg
          className="w-4 h-4 text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </span>
    </a>
  );
}

function CardItem({ card, index, scrollYProgress }) {
  const isLastCard = index === TOTAL - 1;
  const stickyTop = NAVBAR_H;
  
  // Calculate scroll range for each card
  const startProgress = index / TOTAL;
  const endProgress = (index + 1) / TOTAL;
  
  const cardProgress = useTransform(
    scrollYProgress,
    [startProgress, endProgress],
    [0, 1]
  );
  
  // Opacity: ALWAYS STAYS AT 1 (no fading)
  const opacity = 1;
  
  // Scale: slight scale when card is underneath
  const scale = useTransform(
    cardProgress,
    [0, 0.25, 0.75, 1],
    [0.95, 1, 1, 0.95]
  );
  
  // Y position: slide in from bottom, then stay
  const y = useTransform(
    cardProgress,
    [0, 0.2, 1],
    ['20%', '0%', '0%']
  );
  
  // Previous card tilts when it's 25% under the next card
  // LAST CARD: No rotation (always 0)
  const rotateZ = isLastCard 
    ? 0 
    : useTransform(cardProgress, [0, 0.25, 0.75, 1], [0, 0, -3, -5]);
  
  // Rotate X for 3D depth
  // LAST CARD: No rotation (always 0)
  const rotateX = isLastCard 
    ? 0 
    : useTransform(cardProgress, [0, 0.3, 1], [5, 0, -3]);
  
  // Dynamic z-index based on scroll progress
  const zIndex = useTransform(
    cardProgress,
    [0, 0.5, 1],
    [TOTAL - index, TOTAL - index + 1, TOTAL - index + 2]
  );
  
  // Video card size based on screen size - three distinct sizes
  // sm: medium size (200px)
  // md: large size (300px)
  // lg: bigger than large (420px)
  const getVideoSize = () => {
    if (card.videoSize === 'large') {
      return { 
        // Three distinct sizes based on screen width:
        // - Below 768px (sm): ~200px (medium)
        // - 768px - 1024px (md): ~250-300px (large)
        // - Above 1024px (lg): ~350-420px (bigger than large)
        width: 'clamp(200px, 25vw, 420px)', 
        aspectRatio: '3/4' 
      };
    }
    return { width: 'clamp(160px, 18vw, 250px)', aspectRatio: '3/4' };
  };
  
  // Video rotation angle
  const videoRotate = card.videoAngle || 0;
  
  // Video parallax
  const videoX = useTransform(cardProgress, [0, 1], [0, 40]);
  const videoY = useTransform(cardProgress, [0, 1], [0, -25]);

  return (
    <div
      className="sticky w-full"
      style={{
        top: stickyTop,
        padding: `${MARGIN}px`,
      }}
    >
      <motion.div
        layout={false}
        className={`${card.bg} rounded-[2.5rem] w-full relative overflow-visible shadow-xl`}
        style={{
          y,
          scale,
          opacity,
          rotateX,
          rotateZ,
          zIndex,
          transformOrigin: 'center center',
          height: `calc(100vh - ${stickyTop + MARGIN * 2}px)`,
        }}
      >
        {/* Watermark number */}
        <span
          className={`
            absolute top-2 right-6 font-black leading-none
            select-none pointer-events-none ${card.numColor}
          `}
          style={{ fontSize: 'clamp(6rem, 12vw, 10rem)' }}
        >
          {card.id}
        </span>

        {/* Left content column */}
        <div
          className="relative z-10 flex flex-col justify-between p-8 md:p-8 h-full"
          style={{ maxWidth: '65%' }}
        >
          <div>
            <span className="inline-block bg-white text-black text-md font-semibold px-4 py-1.5 rounded-lg shadow-sm">
              Expertise
            </span>
            <motion.h2
              className="mt-5 font-black text-black leading-none"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)' }}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {card.title}
            </motion.h2>
          </div>

          <div>
            <motion.h3 
              className="font-bold text-black text-3xl md:text-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {card.sub}
            </motion.h3>
            <motion.p 
              className="mt-2 text-black/65 text-lg md:text-lg leading-relaxed max-w-[420px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {card.desc}
            </motion.p>
            
            {/* CTA button — text from card data, orange label for card 01 */}
            <motion.div
              className="mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <CtaBtn
                cta={card.cta}
                ctaLink={card.ctaLink}
                isOrange={card.id === '01'}
              />
            </motion.div>
          </div>
        </div>

        {/* Video card - positioned at the bottom right corner */}
        <motion.div 
          className="absolute bottom-8 right-8 md:bottom-14 md:right-14 z-20"
          style={{ x: videoX, y: videoY }}
        >
          <motion.div
            className={`border-[5px] ${card.borderColor} rounded-2xl shadow-2xl overflow-hidden bg-black`}
            style={{
              width: getVideoSize().width,
              aspectRatio: getVideoSize().aspectRatio,
              rotate: videoRotate,
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <video 
              src={card.video} 
              muted 
              loop 
              autoPlay 
              playsInline 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Full-card link overlay */}
        <a href={card.ctaLink} className="absolute inset-0 rounded-[2.5rem]" style={{ zIndex: 5 }}
          aria-label={`Ga naar ${card.title} pagina`} />
      </motion.div>
    </div>
  );
}

export default function Services() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      ref={containerRef}
      className="relative bg-[#FAF4EC]"
      style={{ height: `${TOTAL * 100}vh` }}
    >
      {EXPERTISES.map((card, index) => (
        <CardItem
          key={card.id}
          card={card}
          index={index}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </section>
  );
}