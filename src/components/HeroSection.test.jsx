import { render, screen } from '@testing-library/react'
import HeroSection from './HeroSection'

describe('HeroSection', () => {
  it('renders heading, subcopy and CTA link', () => {
    render(<HeroSection />)

    expect(
      screen.getByRole('heading', { name: 'Get Hyped. Get Noticed. Get Results.' }),
    ).toBeInTheDocument()
    expect(
      screen.getByText('Klaar met gokken op content die niets oplevert?'),
    ).toBeInTheDocument()

    const cta = screen.getByRole('link', { name: 'Leer ons kennen' })
    expect(cta).toBeInTheDocument()
    expect(cta).toHaveAttribute('href', '/about')
  })

  it('renders both stat counters', () => {
    render(<HeroSection />)

    expect(screen.getByText('10M+')).toBeInTheDocument()
    expect(screen.getByText('Organische views')).toBeInTheDocument()
    expect(screen.getByText('30+')).toBeInTheDocument()
    expect(screen.getByText('Merken geholpen')).toBeInTheDocument()
  })
})
