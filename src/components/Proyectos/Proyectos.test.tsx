import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { vi } from 'vitest'
import { Proyectos } from './Proyectos'

const mockNavigate = vi.fn()

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual<typeof import('react-router-dom')>('react-router-dom')
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  }
})

function renderProyectos() {
  return render(
    <MemoryRouter>
      <Proyectos />
    </MemoryRouter>,
  )
}

describe('Proyectos', () => {
  beforeEach(() => {
    mockNavigate.mockClear()
  })

  it('renders 4 project cards', () => {
    renderProyectos()
    const cards = document.querySelectorAll('[class*="project-card"]')
    expect(cards).toHaveLength(4)
  })

  it('clicking project 1 does NOT navigate', async () => {
    renderProyectos()
    const cards = document.querySelectorAll('[class*="project-card"]')
    await userEvent.click(cards[0] as HTMLElement)
    expect(mockNavigate).not.toHaveBeenCalled()
  })

  it('clicking project 2 navigates to /proyecto-no-disponible', async () => {
    renderProyectos()
    const cards = document.querySelectorAll('[class*="project-card"]')
    await userEvent.click(cards[1] as HTMLElement)
    expect(mockNavigate).toHaveBeenCalledWith('/proyecto-no-disponible')
  })
})
