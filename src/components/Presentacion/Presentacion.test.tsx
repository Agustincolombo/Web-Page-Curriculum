import { render, screen } from '@testing-library/react'
import { Presentacion } from './Presentacion'

const mockNavigate = () => {}

describe('Presentacion', () => {
  beforeEach(() => {
    render(<Presentacion onNavigate={mockNavigate} />)
  })

  it('renders the name "Agustín Colombo"', () => {
    expect(screen.getByText('Agustín Colombo')).toBeInTheDocument()
  })

  it('renders the profession text', () => {
    expect(screen.getByText('Full-Stack Developer')).toBeInTheDocument()
  })

  it('has LinkedIn and GitHub links', () => {
    const links = screen.getAllByRole('link')
    const hrefs = links.map((l) => l.getAttribute('href'))
    expect(hrefs.some((h) => h?.includes('linkedin'))).toBe(true)
    expect(hrefs.some((h) => h?.includes('github'))).toBe(true)
  })
})
