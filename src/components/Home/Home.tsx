import { useCallback, useEffect, useRef } from 'react'
import { useFullPageScroll } from '../../hooks/useFullPageScroll'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import { Presentacion } from '../Presentacion/Presentacion'
import { Proyectos } from '../Proyectos/Proyectos'
import s from './Home.module.sass'

const sectionIds = ['inicio', 'sobre-mi', 'proyectos']

export function Home() {
  const activeIndex = useScrollSpy(sectionIds)
  useFullPageScroll(sectionIds)

  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    containerRef.current?.focus()
  }, [])

  const scrollToSection = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <div ref={containerRef} className={s['main-container']} tabIndex={-1} style={{ outline: 'none' }}>
      <nav className="navigation-dots">
        {sectionIds.map((id, i) => (
          <button
            key={id}
            className={`nav-dot${activeIndex === i ? ' active' : ''}`}
            onClick={() => scrollToSection(id)}
            aria-label={`Navigate to ${id}`}
          />
        ))}
      </nav>

      <Presentacion />
      <Proyectos />
    </div>
  )
}
