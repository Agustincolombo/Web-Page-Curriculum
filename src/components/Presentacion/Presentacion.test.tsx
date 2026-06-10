import { render, screen } from '@testing-library/react'
import { Presentacion } from './Presentacion'

describe('Presentacion', () => {
  beforeEach(() => {
    render(<Presentacion />)
  })

  it('renders the name "Agustín Colombo"', () => {
    expect(screen.getByText('Agustín Colombo')).toBeInTheDocument()
  })

  it('renders the profession text', () => {
    expect(screen.getByText('Desarrollador de software')).toBeInTheDocument()
  })

  it('has LinkedIn and GitHub links', () => {
    const links = screen.getAllByRole('link')
    const hrefs = links.map((l) => l.getAttribute('href'))
    expect(hrefs.some((h) => h?.includes('linkedin'))).toBe(true)
    expect(hrefs.some((h) => h?.includes('github'))).toBe(true)
  })

  it('social links open in new tab with noopener', () => {
    const links = screen.getAllByRole('link')
    links.forEach((link) => {
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    })
  })
})
