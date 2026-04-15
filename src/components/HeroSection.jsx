const counters = [
  { label: '10M+', caption: 'Organische views' },
  { label: '30+', caption: 'Merken geholpen' },
]

function HeroSection() {
  return (
    <section className="hero" id="hero">
      <div className="hero__content">
        <h1>Get Hyped. Get Noticed. Get Results.</h1>
        <p className="hero__subcopy">Klaar met gokken op content die niets oplevert?</p>
        <div className="hero__stats">
          {counters.map((counter) => (
            <article key={counter.caption} className="stat">
              <p className="stat__label">{counter.label}</p>
              <p className="stat__caption">{counter.caption}</p>
            </article>
          ))}
        </div>
        <a className="hero__button" href="/about">
          Leer ons kennen
        </a>
      </div>
    </section>
  )
}

export default HeroSection
