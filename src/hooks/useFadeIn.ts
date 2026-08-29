import { useEffect, useRef } from 'react'

/**
 * Hook untuk Intersection Observer — memberikan class 'visible' saat elemen masuk viewport.
 * Digunakan untuk efek fade-in ringan.
 */
export function useFadeIn() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}
