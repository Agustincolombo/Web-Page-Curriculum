import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { vi } from 'vitest'
import { Home } from './Home'

function renderHome() {
  return render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>,
  )
}

describe('Home', () => {
  it('renders 3 nav dots', () => {
    renderHome()
    const dots = document.querySelectorAll('.nav-dot')
    expect(dots).toHaveLength(3)
  })

  it('first nav dot has active class initially', () => {
    // In jsdom all offsetTop values are 0, so useScrollSpy's forEach would
    // match all sections and end up at index 2. Mock getElementById to return
    // null so the hook keeps activeIndex at its initial value of 0.
    vi.spyOn(document, 'getElementById').mockReturnValue(null)
    renderHome()
    const dots = document.querySelectorAll('.nav-dot')
    expect(dots[0]).toHaveClass('active')
    vi.restoreAllMocks()
  })

  it('renders Presentacion section', () => {
    renderHome()
    expect(screen.getByText('Agustín Colombo')).toBeInTheDocument()
  })

  it('renders Proyectos section', () => {
    renderHome()
    expect(screen.getByText('Mis Proyectos')).toBeInTheDocument()
  })
})
