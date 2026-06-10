import { useState, useEffect } from 'react'

export function useScrollSpy(sectionIds: string[], offset = 0): number {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY + window.innerHeight / 2 + offset
      let newIndex = 0

      sectionIds.forEach((id, i) => {
        const section = document.getElementById(id)
        if (section && scrollPosition >= section.offsetTop) {
          newIndex = i
        }
      })

      setActiveIndex(newIndex)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [sectionIds, offset])

  return activeIndex
}
