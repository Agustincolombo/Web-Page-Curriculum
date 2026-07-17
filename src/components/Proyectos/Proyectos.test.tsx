import { render, screen } from '@testing-library/react'
import { Proyectos } from './Proyectos'
import { projects } from '../../data/projects.data'

describe('Proyectos', () => {
  beforeEach(() => {
    render(<Proyectos />)
  })

  it('renders all project cards', () => {
    const cards = document.querySelectorAll('[class*="project-card"]')
    expect(cards).toHaveLength(projects.length)
  })

  it('renders project titles', () => {
    projects.forEach((p) => {
      expect(screen.getByText(p.name)).toBeInTheDocument()
    })
  })

  it('renders demo links for projects that have demoUrl', () => {
    const demoProjects = projects.filter((p) => p.demoUrl)
    const demoLinks = screen.getAllByRole('link').filter((l) =>
      l.getAttribute('aria-label')?.includes('demo')
    )
    expect(demoLinks).toHaveLength(demoProjects.length)
  })

  it('renders repo links for projects that have repoUrl', () => {
    const repoProjects = projects.filter((p) => p.repoUrl)
    const repoLinks = screen.getAllByRole('link').filter((l) =>
      l.getAttribute('aria-label')?.endsWith('repository')
    )
    expect(repoLinks).toHaveLength(repoProjects.length)
  })
})
