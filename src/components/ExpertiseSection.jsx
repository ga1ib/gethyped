import socialIcon from '../assets/svg/684c3415233f03ab6c1143fa_gh-logo-pink.svg'

const expertiseCards = [
  {
    number: '01',
    title: 'Slimme strategie. Sterke start.',
    description: 'We duiken diep in jouw merk en doelgroep voor een plan dat direct richting geeft.',
    linkLabel: 'Meer over social strategie',
    link: '/social-strategie',
    bgColor: '#99FFCC',
  },
  {
    number: '02',
    title: 'Content die opvalt en blijft hangen.',
    description: 'Van concept tot creatie: we maken content die past bij je merk en echt scoort.',
    linkLabel: 'Meer over content',
    link: '/content',
    bgColor: '#D9CBFF',
  },
  {
    number: '03',
    title: 'Activatie met impact.',
    description: 'We zetten campagnes live die mensen in beweging brengen en resultaat opleveren.',
    linkLabel: 'Meer over activatie',
    link: '/activatie',
    bgColor: '#FFE38E',
  },
  {
    number: '04',
    title: 'Data die richting geeft.',
    description: 'Doorlopend meten en optimaliseren zodat jouw content elke maand beter presteert.',
    linkLabel: 'Meer over data',
    link: '/data',
    bgColor: '#FFCCE7',
  },
]

function ExpertiseSection() {
  return (
    <section className="expertise" id="expertise">
      {expertiseCards.map((card) => (
        <article
          key={card.number}
          className="expertise-card"
          style={{ backgroundColor: card.bgColor }}
        >
          <img src={socialIcon} alt="" aria-hidden="true" className="card__icon" />
          <p className="card__number">{card.number}</p>
          <h3>{card.title}</h3>
          <p className="card__description">{card.description}</p>
          <a href={card.link} className="card__link">
            {card.linkLabel}
          </a>
        </article>
      ))}
    </section>
  )
}

export default ExpertiseSection
