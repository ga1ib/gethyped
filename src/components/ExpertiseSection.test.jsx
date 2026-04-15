import { render, screen } from '@testing-library/react'
import ExpertiseSection from './ExpertiseSection'

describe('ExpertiseSection', () => {
  it('renders four expertise cards with headings and links', () => {
    render(<ExpertiseSection />)

    const cards = screen.getAllByRole('article')
    expect(cards).toHaveLength(4)

    expect(screen.getByRole('heading', { name: 'Slimme strategie. Sterke start.' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Content die opvalt en blijft hangen.' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Activatie met impact.' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Data die richting geeft.' })).toBeInTheDocument()

    expect(
      screen.getByRole('link', { name: 'Meer over social strategie' }),
    ).toHaveAttribute('href', '/social-strategie')
    expect(screen.getByRole('link', { name: 'Meer over content' })).toHaveAttribute(
      'href',
      '/content',
    )
    expect(screen.getByRole('link', { name: 'Meer over activatie' })).toHaveAttribute(
      'href',
      '/activatie',
    )
    expect(screen.getByRole('link', { name: 'Meer over data' })).toHaveAttribute(
      'href',
      '/data',
    )
  })
})
