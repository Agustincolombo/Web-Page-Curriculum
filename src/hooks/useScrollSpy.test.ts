import { renderHook, act } from '@testing-library/react'
import { vi } from 'vitest'
import { useScrollSpy } from './useScrollSpy'

describe('useScrollSpy', () => {
  it('returns 0 by default', () => {
    const { result } = renderHook(() => useScrollSpy(['a', 'b', 'c']))
    expect(result.current).toBe(0)
  })

  it('registers scroll and resize listeners on mount', () => {
    const addSpy = vi.spyOn(window, 'addEventListener')
    renderHook(() => useScrollSpy(['a', 'b']))
    const calls = addSpy.mock.calls.map((c) => c[0])
    expect(calls).toContain('scroll')
    expect(calls).toContain('resize')
    addSpy.mockRestore()
  })

  it('cleans up scroll and resize listeners on unmount', () => {
    const removeSpy = vi.spyOn(window, 'removeEventListener')
    const { unmount } = renderHook(() => useScrollSpy(['a', 'b']))
    unmount()
    const calls = removeSpy.mock.calls.map((c) => c[0])
    expect(calls).toContain('scroll')
    expect(calls).toContain('resize')
    removeSpy.mockRestore()
  })

  it('updates active index when scrollY passes a section offsetTop', () => {
    // Create two mock sections in the DOM
    const sectionA = document.createElement('div')
    sectionA.id = 'section-a'
    Object.defineProperty(sectionA, 'offsetTop', { value: 0, configurable: true })
    document.body.appendChild(sectionA)

    const sectionB = document.createElement('div')
    sectionB.id = 'section-b'
    Object.defineProperty(sectionB, 'offsetTop', { value: 500, configurable: true })
    document.body.appendChild(sectionB)

    Object.defineProperty(window, 'innerHeight', { value: 100, configurable: true })

    const { result } = renderHook(() => useScrollSpy(['section-a', 'section-b']))
    expect(result.current).toBe(0)

    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 450, configurable: true })
      window.dispatchEvent(new Event('scroll'))
    })

    expect(result.current).toBe(1)

    // Cleanup DOM
    document.body.removeChild(sectionA)
    document.body.removeChild(sectionB)
  })
})
