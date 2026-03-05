import { useState, useEffect } from 'react'

export function useScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let rafId
    function update() {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = scrollHeight > 0 ? (window.scrollY / scrollHeight) * 100 : 0
      setProgress(scrolled)
      rafId = requestAnimationFrame(update)
    }
    rafId = requestAnimationFrame(update)
    return () => cancelAnimationFrame(rafId)
  }, [])

  return progress
}
