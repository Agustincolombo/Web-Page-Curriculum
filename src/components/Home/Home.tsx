import { useCallback, useEffect, useRef } from 'react'
import { useFullPageScroll } from '../../hooks/useFullPageScroll'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import { Presentacion } from '../Presentacion/Presentacion'
import { Proyectos } from '../Proyectos/Proyectos'
import s from './Home.module.sass'

const sectionIds = ['inicio', 'proyectos']

export function Home() {
  const activeIndex = useScrollSpy(sectionIds)
  useFullPageScroll(sectionIds)

  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    containerRef.current?.focus()
  }, [])

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    const from = window.scrollY
    const to = from + el.getBoundingClientRect().top
    const duration = 400
    const ease = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t)
    const start = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      window.scrollTo(0, from + (to - from) * ease(progress))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
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

      <Presentacion onNavigate={scrollToSection} />
      <Proyectos />
    </div>
  )
}
