import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function GHLogo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 208 84" width="170" height="69" aria-label="Get Hyped">
      {/* Outer badge shape — slightly off-white so G/ET letters always contrast */}
      <path d="M207.793 18.4091V68.8219C207.793 77.2049 200.998 84 192.615 84H7.46524C3.34207 84 0 80.6579 0 76.5348V37.5951C0 33.8732 2.69331 30.6933 6.36831 30.0829L186.384 0.251801C197.596-1.60491 207.793 7.04266 207.793 18.4049Z" fill="#EDE8DF"/>
      {/* Black right area */}
      <path d="M188.876 80.0646H55.9061V25.8317L186.618 5.34814C195.454 3.96521 203.444 10.7945 203.444 19.7408V65.4969C203.444 73.5427 196.922 80.0646 188.876 80.0646Z" fill="black"/>
      {/* White letters: H Y P E D */}
      <path d="M71.2635 26.8177V47.2585L67.5415 47.5957V27.3683L59.9312 28.4866V76.7781L67.5415 76.7055V56.478L71.2635 56.2305V76.6714L79.3818 76.5945V25.6226L71.2635 26.8177Z" fill="white"/>
      <path d="M94.7092 23.3646L92.5452 42.7512L92.4427 44.4116L92.2378 44.4329L92.1354 42.7939L90.0055 24.0561L81.2256 25.3494L87.9482 58.2622V76.5134L96.8391 76.4323V57.75L104.142 21.9731L94.7092 23.3646Z" fill="white"/>
      <path d="M159.835 25.0207V13.7695L135.377 17.3719V76.0695L159.835 75.839V64.5921L147.179 65.0274V51.2238L159.101 50.4384V39.2854L147.179 40.3695V26.5701L159.835 25.0207Z" fill="white"/>
      <path d="M120.844 48.8506L116.226 49.2006V29.3018L120.844 28.7256V48.8506ZM105.943 21.7085V76.347L116.149 76.2488V58.5396L120.882 58.2878C127.071 57.9591 131.92 52.8457 131.92 46.6482V31.3805C131.92 24.2695 125.603 18.8146 118.565 19.8518L105.943 21.7128V21.7085Z" fill="white"/>
      <path d="M182.598 64.7713L176.494 64.9677V21.7768L182.598 21.0128V64.7713ZM162.993 13.3042V75.8091L185.769 75.5957C192.163 75.536 197.315 70.3372 197.315 63.9433V21.7469C197.315 14.636 190.998 9.18108 183.959 10.2183L162.989 13.3085V13.3042Z" fill="white"/>
      {/* Black letters: G E T — all three, clearly visible on #EDE8DF background */}
      {/* G */}
      <path d="M14.2348 51.7488V41.2829L8.49394 42.0128V71.5152L14.2348 71.3488V62.6969L10.7092 62.8976V54.5146L19.5616 53.7634V80.0604H14.2391V77.3159L13.3128 78.225C12.1134 79.4031 10.5 80.0604 8.8226 80.0604H7.90491C5.48905 80.0604 3.53418 78.1012 3.53418 75.6896V39.0207C3.53418 36.1524 5.62563 33.7067 8.45978 33.2628L14.5165 32.3152C17.1671 31.9012 19.5659 33.95 19.5659 36.6305V51.2494L14.2433 51.7445L14.2348 51.7488Z" fill="black"/>
      {/* E */}
      <path d="M21.5464 80.0646H34.7482V70.4738L27.1336 70.6957V59.8585L34.2873 59.4018V49.8835L27.1336 50.5494V39.7079L34.7482 38.739V29.1481L21.5464 31.214V80.0646Z" fill="black"/>
      {/* T */}
      <path d="M36.7714 28.828V38.4829L42.03 37.8128V80.0646H48.3812V37.0061L54.0239 36.289V26.1262L36.7714 28.828Z" fill="black"/>
    </svg>
  );
}

const NAV_LINKS = [
  { label: 'Expertises', href: '#expertises' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

// Bubble/jump effect for text on hover
const textHoverVariants = {
  initial: {
    y: 0,
    scale: 1
  },
  bubble: {
    y: [0, -15, -8, -12, -5, 0],
    scale: [1, 1.1, 1.05, 1.08, 1.02, 1],
    transition: {
      duration: 0.3,
      ease: "easeOut",
      times: [0, 0.1, 0.4, 0.6, 0.8, 1]
    }
  }
};

// Drawer animation from top
const drawerVariants = {
  hidden: {
    y: "-100%",
  },
  visible: {
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25,
      mass: 0.8
    }
  }
};

export default function MenuDrawer({ open, setOpen }) {
  const [isOpen, setIsOpen] = useState(open);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    setIsOpen(open);
    // Prevent scrolling when menu is open
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [open]);

  // Handle window resize to close drawer on large screens
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 1024) { // lg screens
        setOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setOpen]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleLinkClick = (href) => {
    setOpen(false);
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };

  // Only show drawer on md and sm screens (below 1024px)
  if (windowWidth >= 1024) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop with blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/50 z-40"
            transition={{ duration: 0.3 }}
          />
          
          {/* Drawer - Full height with 10px padding on all sides */}
          <motion.div
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-[10px] z-50 rounded-2xl overflow-hidden"
          >
            <div className="bg-[#FCB8FA] w-full h-full rounded-2xl shadow-2xl flex flex-col">
              {/* Header with logo and close button */}
              <div className="flex justify-between items-center p-6 md:p-8 flex-shrink-0">
                <a href="#" onClick={() => handleLinkClick('#')} className="cursor-pointer">
                  <GHLogo />
                </a>
                <button
                  onClick={handleClose}
                  aria-label="Menu sluiten"
                  className="w-12 h-12 bg-white rounded-lg cursor-pointer
                             flex flex-col items-center justify-center hover:bg-black/20 
                             transition-all duration-200"
                >
                  {/* Close X icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              {/* Navigation Links Container - Vertical Layout with flex-grow to fill space */}
              <div className="flex-1 flex flex-col items-center justify-center px-6 py-8">
                <div className="flex flex-col items-center space-y-4">
                  {NAV_LINKS.map(({ label, href }, index) => (
                    <button
                      key={label}
                      onClick={() => handleLinkClick(href)}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      className="relative w-fit text-center text-xl md:text-3xl font-semibold
                                 bg-white rounded-xl px-[12px] py-3 md:py-3.5
                                 overflow-hidden group cursor-pointer
                                 transition-all duration-500 hover:scale-[1.02]"
                    >
                      {/* Orange layer - slides up smoothly */}
                      <span className="absolute inset-0 bg-orange-500 translate-y-full group-hover:translate-y-0 transition-transform duration-200 ease-out rounded-xl" />
                      
                      {/* Black layer - slides up with smooth delay */}
                      <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 delay-100 ease-out rounded-xl" />
                      
                      {/* Text with bubble/jump effect on hover */}
                      <motion.span
                        variants={textHoverVariants}
                        initial="initial"
                        animate={hoveredIndex === index ? "bubble" : "initial"}
                        className="relative z-10 text-black group-hover:text-white 
                                   transition-colors duration-300 px-[12px] inline-block cursor-pointer"
                      >
                        {label}
                      </motion.span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Get Results Button - Fixed at bottom */}
              <div className="pb-8 flex justify-center flex-shrink-0">
                <a
                  href="#contact"
                  onClick={() => handleLinkClick('#contact')}
                  className="relative w-fit text-center text-xl md:text-2xl font-semibold bg-black text-white
                           rounded-xl px-[8px] py-2 md:py-3
                           overflow-hidden group cursor-pointer
                           hover:bg-black/90 transition-all duration-200 
                           shadow-lg hover:shadow-xl flex items-center gap-3"
                >
                  <span>Get Results</span>
                  <span className="bg-white rounded-lg px-2 py-2 text-lg leading-none text-black">
                    🔥
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}