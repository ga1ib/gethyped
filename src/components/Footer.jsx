/* ── Social icon components ── */
function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.89a8.17 8.17 0 004.78 1.52V7.03a4.85 4.85 0 01-1.01-.34z" />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}
function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

/* ── Nav + socials data ── */
const NAV_LINKS = [
  { label: "Expertises", href: "#expertises" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

/* ── GH rotating stamp badge ── */
function GHStamp() {
  const STAMP_TEXT = "• GET HYPED • GET RESULTS • GET NOTICED • ";
  return (
    <div className="relative w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[110px] md:h-[110px] lg:w-[120px] lg:h-[120px] select-none">
      <svg
        viewBox="0 0 108 108"
        className="absolute inset-0 w-full h-full animate-[spin_18s_linear_infinite]"
      >
        <circle cx="54" cy="54" r="52" fill="#FCB8FA" />
        <defs>
          <path id="gh-ring" d="M54,54 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0" />
        </defs>
        <text
          style={{
            fontSize: "clamp(7px, 2vw, 9px)",
            fontWeight: "800",
            fill: "#111",
            letterSpacing: "0.4px",
          }}
        >
          <textPath href="#gh-ring">{STAMP_TEXT}</textPath>
        </text>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-black text-[clamp(1rem,4vw,1.6rem)] text-black tracking-tight leading-none">
          GH
        </span>
      </div>
    </div>
  );
}

const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/gethyped-nl", Icon: LinkedInIcon },
  { label: "TikTok", href: "https://www.tiktok.com/@gethyped.nl", Icon: TikTokIcon },
  { label: "Instagram", href: "https://www.instagram.com/gethyped.nl", Icon: InstagramIcon },
  { label: "YouTube", href: "https://www.youtube.com/@gethyped", Icon: YouTubeIcon },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-100">
      {/* Big heading */}
      <div className="text-center px-4 sm:px-5 pt-8 sm:block sm:pt-12 md:pt-16">
        <h2 className="text-[clamp(2rem,8vw,4rem)] hidden sm:block sm:text-[clamp(2.5rem,9vw,5rem)] md:text-[clamp(3rem,9vw,6rem)] font-black tracking-[-0.03em] text-black">
          Let&apos;s Get Hyped!
        </h2>

        {/* Two CTA buttons */}
        <div className="flex flex-wrap gap-4 sm:gap-6 hidden sm:block justify-center mt-6 sm:mt-8 md:mt-10 pb-10 sm:pb-12 md:pb-16">
          <a
            href="mailto:info@gethyped.nl"
            className="inline-flex items-center border border-black rounded-lg overflow-hidden font-semibold text-sm sm:text-md cursor-pointer hover:shadow-lg transition-shadow duration-200"
          >
            <span className="px-4 sm:px-6 py-2.5 sm:py-3.5 bg-white text-lg text-black leading-none whitespace-nowrap">
              Mail ons direct
            </span>
            <span className="bg-black px-3 sm:px-4 py-2.5 sm:py-3.5 flex items-center justify-center">
              <svg
                className="w-[14px] h-[14px] sm:w-[18px] sm:h-[18px] text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" stroke="white" strokeWidth="2" fill="none" />
                <path d="M2 7l10 7 10-7" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" />
              </svg>
            </span>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center rounded-lg overflow-hidden font-semibold text-lg sm:text-lg bg-[#FF5C00] cursor-pointer hover:shadow-lg transition-shadow duration-200"
          >
            <span className="px-3 sm:px-6 py-2.5 sm:py-3.5 text-white leading-none whitespace-nowrap">
              Get Results
            </span>
            <span className="bg-white rounded-lg px-3 sm:px-4 py-2.5 sm:py-3.5 flex items-center justify-center text-lg sm:text-base leading-none">
              🔥
            </span>
          </a>
        </div>
      </div>

      {/* ── Responsive Trapezoid Footer ── */}
      <div className="relative mt-6 sm:mt-8 px-4 sm:px-5 md:px-10 pb-6 sm:pb-8">
        {/* OUTER → controls border radius */}
        <div className="rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden">
          {/* INNER → clipped shape (only on sm+) */}
          <div
            className="
              bg-gray-300
              sm:[clip-path:polygon(0%_100%,30%_0%,100%_0%,100%_100%)]
              md:[clip-path:polygon(0%_100%,0%_30%,100%_0%,100%_100%)]
              lg:[clip-path:polygon(0%_100%,0%,30%,100%_0%,100%_100%)]
            "
          >
            <div className="px-4 sm:pr-6 sm:pl-0 md:pr-10 md:pl-0 py-8">
              {/* ============================= */}
              {/* MOBILE LAYOUT (centered stack) */}
              {/* ============================= */}
              <div className="flex flex-col items-center text-center gap-6 sm:hidden">
                {/* Logo */}
                <a href="#" className="inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 195 85"
                    width="230"
                    height="auto"
                    aria-label="Get Hyped"
                  >
                    <path d="M207.793 18.4091V68.8219C207.793 77.2049 200.998 84 192.615 84H7.46524C3.34207 84 0 80.6579 0 76.5348V37.5951C0 33.8732 2.69331 30.6933 6.36831 30.0829L186.384 0.251801C197.596-1.60491 207.793 7.04266 207.793 18.4049Z" fill="#EDE8DF" />
                    <path d="M188.876 80.0646H55.9061V25.8317L186.618 5.34814C195.454 3.96521 203.444 10.7945 203.444 19.7408V65.4969C203.444 73.5427 196.922 80.0646 188.876 80.0646Z" fill="black" />
                    <path d="M71.2635 26.8177V47.2585L67.5415 47.5957V27.3683L59.9312 28.4866V76.7781L67.5415 76.7055V56.478L71.2635 56.2305V76.6714L79.3818 76.5945V25.6226L71.2635 26.8177Z" fill="white" />
                    <path d="M94.7092 23.3646L92.5452 42.7512L92.4427 44.4116L92.2378 44.4329L92.1354 42.7939L90.0055 24.0561L81.2256 25.3494L87.9482 58.2622V76.5134L96.8391 76.4323V57.75L104.142 21.9731L94.7092 23.3646Z" fill="white" />
                    <path d="M159.835 25.0207V13.7695L135.377 17.3719V76.0695L159.835 75.839V64.5921L147.179 65.0274V51.2238L159.101 50.4384V39.2854L147.179 40.3695V26.5701L159.835 25.0207Z" fill="white" />
                    <path d="M120.844 48.8506L116.226 49.2006V29.3018L120.844 28.7256V48.8506ZM105.943 21.7085V76.347L116.149 76.2488V58.5396L120.882 58.2878C127.071 57.9591 131.92 52.8457 131.92 46.6482V31.3805C131.92 24.2695 125.603 18.8146 118.565 19.8518L105.943 21.7128V21.7085Z" fill="white" />
                    <path d="M182.598 64.7713L176.494 64.9677V21.7768L182.598 21.0128V64.7713ZM162.993 13.3042V75.8091L185.769 75.5957C192.163 75.536 197.315 70.3372 197.315 63.9433V21.7469C197.315 14.636 190.998 9.18108 183.959 10.2183L162.989 13.3085V13.3042Z" fill="white" />
                    <path d="M14.2348 51.7488V41.2829L8.49394 42.0128V71.5152L14.2348 71.3488V62.6969L10.7092 62.8976V54.5146L19.5616 53.7634V80.0604H14.2391V77.3159L13.3128 78.225C12.1134 79.4031 10.5 80.0604 8.8226 80.0604H7.90491C5.48905 80.0604 3.53418 78.1012 3.53418 75.6896V39.0207C3.53418 36.1524 5.62563 33.7067 8.45978 33.2628L14.5165 32.3152C17.1671 31.9012 19.5659 33.95 19.5659 36.6305V51.2494L14.2433 51.7445L14.2348 51.7488Z" fill="black" />
                    <path d="M21.5464 80.0646H34.7482V70.4738L27.1336 70.6957V59.8585L34.2873 59.4018V49.8835L27.1336 50.5494V39.7079L34.7482 38.739V29.1481L21.5464 31.214V80.0646Z" fill="black" />
                    <path d="M36.7714 28.828V38.4829L42.03 37.8128V80.0646H48.3812V37.0061L54.0239 36.289V26.1262L36.7714 28.828Z" fill="black" />
                  </svg>
                </a>

                {/* Single CTA */}
                <a
                  href="#contact"
                  className="inline-flex items-center rounded-lg overflow-hidden font-semibold bg-[#FF5C00] cursor-pointer hover:shadow-lg transition-shadow duration-200"
                >
                  <span className="px-4 py-3 text-white text-sm leading-none whitespace-nowrap">
                    Get Hyped! Neem contact op
                  </span>
                  <span className="bg-white rounded-lg px-3 py-3 flex items-center justify-center text-base leading-none">
                    🔥
                  </span>
                </a>

                {/* Nav (single row) */}
                <nav className="flex flex-wrap justify-center gap-2">
                  {NAV_LINKS.map(({ label, href }) => (
                    <a
                      key={label}
                      href={href}
                      className="relative px-3 py-2 bg-white rounded-lg font-bold text-sm overflow-hidden group transition hover:scale-[1.02]"
                    >
                      <span className="absolute inset-0 bg-orange-500 translate-y-full group-hover:translate-y-0 transition duration-200 rounded-lg" />
                      <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition duration-300 delay-100 rounded-lg" />
                      <span className="relative z-10 text-gray-700 group-hover:text-white">
                        {label}
                      </span>
                    </a>
                  ))}
                </nav>

                {/* Socials */}
                <div className="flex items-center justify-center gap-3">
                  {SOCIALS.map(({ label, href, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-black hover:text-white transition"
                    >
                      <Icon />
                    </a>
                  ))}
                </div>

                {/* Contact info */}
                <div className="flex flex-col gap-2 text-sm text-black">
                  <a href="mailto:info@gethyped.nl" className="hover:underline">
                    info@gethyped.nl
                  </a>
                  <a href="tel:+31615337496" className="hover:underline">
                    +31 6 1533 7496
                  </a>
                  <p className="leading-relaxed">
                    Beltrumsestraat 6,
                    <br />
                    7141 AL Groenlo
                  </p>
                </div>

                <a
                  href="/privacyvoorwaarden"
                  className="text-sm text-black/60 hover:underline"
                >
                  Privacyvoorwaarden
                </a>

                {/* Bottom credits */}
                <div className="flex flex-col gap-1 pt-4 border-t border-black/10 w-full text-xs text-black/60 items-center">
                  <span>© 2025 Get Hyped</span>
                  <span>© Design by Dylan</span>
                </div>
              </div>

              {/* ============================= */}
              {/* TABLET / DESKTOP LAYOUT (sm+) */}
              {/* ============================= */}
              <div className="hidden sm:block sm:pl-6 md:pl-10">
                <div className="grid gap-6 sm:gap-8 grid-cols-3 lg:grid-cols-3">
                  {/* LEFT (LOGO) */}
                  <div className="col-span-2 lg:col-span-1 -mt-1 md:mt-4 lg:mt-5 flex flex-col gap-6">
                    <a href="#" className="inline-block mt-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 195 84"
                        width="clamp(100px, 22vw, 180px)"
                        height="auto"
                        aria-label="Get Hyped"
                      >
                        <path d="M207.793 18.4091V68.8219C207.793 77.2049 200.998 84 192.615 84H7.46524C3.34207 84 0 80.6579 0 76.5348V37.5951C0 33.8732 2.69331 30.6933 6.36831 30.0829L186.384 0.251801C197.596-1.60491 207.793 7.04266 207.793 18.4049Z" fill="#EDE8DF" />
                        <path d="M188.876 80.0646H55.9061V25.8317L186.618 5.34814C195.454 3.96521 203.444 10.7945 203.444 19.7408V65.4969C203.444 73.5427 196.922 80.0646 188.876 80.0646Z" fill="black" />
                        <path d="M71.2635 26.8177V47.2585L67.5415 47.5957V27.3683L59.9312 28.4866V76.7781L67.5415 76.7055V56.478L71.2635 56.2305V76.6714L79.3818 76.5945V25.6226L71.2635 26.8177Z" fill="white" />
                        <path d="M94.7092 23.3646L92.5452 42.7512L92.4427 44.4116L92.2378 44.4329L92.1354 42.7939L90.0055 24.0561L81.2256 25.3494L87.9482 58.2622V76.5134L96.8391 76.4323V57.75L104.142 21.9731L94.7092 23.3646Z" fill="white" />
                        <path d="M159.835 25.0207V13.7695L135.377 17.3719V76.0695L159.835 75.839V64.5921L147.179 65.0274V51.2238L159.101 50.4384V39.2854L147.179 40.3695V26.5701L159.835 25.0207Z" fill="white" />
                        <path d="M120.844 48.8506L116.226 49.2006V29.3018L120.844 28.7256V48.8506ZM105.943 21.7085V76.347L116.149 76.2488V58.5396L120.882 58.2878C127.071 57.9591 131.92 52.8457 131.92 46.6482V31.3805C131.92 24.2695 125.603 18.8146 118.565 19.8518L105.943 21.7128V21.7085Z" fill="white" />
                        <path d="M182.598 64.7713L176.494 64.9677V21.7768L182.598 21.0128V64.7713ZM162.993 13.3042V75.8091L185.769 75.5957C192.163 75.536 197.315 70.3372 197.315 63.9433V21.7469C197.315 14.636 190.998 9.18108 183.959 10.2183L162.989 13.3085V13.3042Z" fill="white" />
                        <path d="M14.2348 51.7488V41.2829L8.49394 42.0128V71.5152L14.2348 71.3488V62.6969L10.7092 62.8976V54.5146L19.5616 53.7634V80.0604H14.2391V77.3159L13.3128 78.225C12.1134 79.4031 10.5 80.0604 8.8226 80.0604H7.90491C5.48905 80.0604 3.53418 78.1012 3.53418 75.6896V39.0207C3.53418 36.1524 5.62563 33.7067 8.45978 33.2628L14.5165 32.3152C17.1671 31.9012 19.5659 33.95 19.5659 36.6305V51.2494L14.2433 51.7445L14.2348 51.7488Z" fill="black" />
                        <path d="M21.5464 80.0646H34.7482V70.4738L27.1336 70.6957V59.8585L34.2873 59.4018V49.8835L27.1336 50.5494V39.7079L34.7482 38.739V29.1481L21.5464 31.214V80.0646Z" fill="black" />
                        <path d="M36.7714 28.828V38.4829L42.03 37.8128V80.0646H48.3812V37.0061L54.0239 36.289V26.1262L36.7714 28.828Z" fill="black" />
                      </svg>
                    </a>

                    {/* NAV + SOCIALS (md only — hidden on lg) */}
                    <div className="flex flex-col gap-4 lg:hidden">
                      <nav className="flex flex-wrap md:ml-5 ml-3 md:gap-2 gap-1">
                        {NAV_LINKS.map(({ label, href }) => (
                          <a
                            key={label}
                            href={href}
                            className="relative px-1 py-1 md:px-1 md:py-1.5 bg-white rounded-lg font-bold text-xs overflow-hidden group transition hover:scale-[1.02]"
                          >
                            <span className="absolute inset-0 bg-orange-500 translate-y-full group-hover:translate-y-0 transition duration-200 rounded-lg" />
                            <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition duration-300 delay-100 rounded-lg" />
                            <span className="relative z-10 text-gray-700 group-hover:text-white">
                              {label}
                            </span>
                          </a>
                        ))}
                      </nav>

                      <div className="flex items-center md:ml-5 ml-3 gap-3 flex-wrap">
                        <span className="font-bold text-black text-sm">Follow us</span>
                        {SOCIALS.map(({ label, href, Icon }) => (
                          <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noreferrer"
                            className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition"
                          >
                            <Icon />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* MIDDLE (LG only) */}
                  <div className="hidden lg:flex flex-col gap-6 justify-center">
                    <nav className="flex flex-wrap gap-3">
                      {NAV_LINKS.map(({ label, href }) => (
                        <a
                          key={label}
                          href={href}
                          className="relative px-3 py-2 bg-white rounded-lg font-bold text-sm overflow-hidden group transition hover:scale-[1.02]"
                        >
                          <span className="absolute inset-0 bg-orange-500 translate-y-full group-hover:translate-y-0 transition duration-200 rounded-lg" />
                          <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition duration-300 delay-100 rounded-lg" />
                          <span className="relative z-10 text-gray-700 group-hover:text-white">
                            {label}
                          </span>
                        </a>
                      ))}
                    </nav>

                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="font-bold text-black text-sm">Follow us</span>
                      {SOCIALS.map(({ label, href, Icon }) => (
                        <a
                          key={label}
                          href={href}
                          target="_blank"
                          rel="noreferrer"
                          className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition"
                        >
                          <Icon />
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* RIGHT (CONTACT) */}
                  <div className="col-span-1 flex flex-col gap-5 items-end text-right">
                    <div>
                      <h4 className="font-bold text-black mb-1">Contact</h4>
                      <a href="mailto:info@gethyped.nl" className="block text-[#FF5C00] text-sm hover:underline">
                        info@gethyped.nl
                      </a>
                      <a href="tel:+31615337496" className="block text-[#FF5C00] text-sm hover:underline">
                        +31 6 1533 7496
                      </a>
                    </div>

                    <div>
                      <h4 className="font-bold text-black text-sm mb-1">Adres</h4>
                      <p className="text-black/70 text-sm leading-relaxed">
                        Beltrumsestraat 6,
                        <br />
                        7141 AL Groenlo
                      </p>
                    </div>

                    <a href="/privacyvoorwaarden" className="text-sm text-black/50 hover:underline">
                      Privacyvoorwaarden
                    </a>
                  </div>
                </div>

                {/* BOTTOM BAR */}
                <div className="flex justify-between mt-8 pt-4 border-t border-black/10 text-xs text-black/50">
                  <span className="px-5">© 2025 Get Hyped</span>
                  <span>© Design by Dylan</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* GH stamp — hidden on mobile, shown sm+ */}
        <div className="hidden sm:block absolute -mt-6 md:-mt-24 mr-14 top-6 right-6 md:right-16 z-30">
          <GHStamp />
        </div>
      </div>
    </footer>
  );
}
