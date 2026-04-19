import { useEffect } from 'react'

const LINKS = [
  { label: 'Expertises', href: '#expertises' },
  { label: 'Work',       href: '#work'       },
  { label: 'About',      href: '#about'      },
  { label: 'Contact',    href: '#contact'    },
]

export default function MobileMenu({ open, setOpen }) {
  /* Lock body scroll while open */
  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    return () => document.body.classList.remove('menu-open')
  }, [open])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-hidden={!open}
      className={`fixed inset-0 z-[200] bg-[#FAF4EC] flex flex-col items-center justify-center gap-8
                  transition-transform duration-[400ms] ease-[cubic-bezier(0.2,0.9,0.4,1.1)]
                  ${open ? 'translate-x-0' : 'translate-x-full'}`}
    >
      {/* Close button */}
      <button
        onClick={() => setOpen(false)}
        aria-label="Menu sluiten"
        className="absolute top-6 right-[5vw] text-2xl font-bold text-black
                   hover:opacity-50 transition-opacity"
      >
        ✕
      </button>

      {/* Nav links */}
      {LINKS.map(({ label, href }) => (
        <a
          key={label}
          href={href}
          onClick={() => setOpen(false)}
          tabIndex={open ? 0 : -1}
          className="text-[2rem] font-bold text-black hover:opacity-50 transition-opacity"
        >
          {label}
        </a>
      ))}

      {/* CTA outline */}
      <a
        href="#contact"
        onClick={() => setOpen(false)}
        className="btn-pill-outline mt-4 text-lg"
      >
        Get Results
      </a>
    </div>
  )
}
