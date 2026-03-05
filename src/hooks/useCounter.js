import { useState, useEffect } from 'react'

export function useCounter(target, isActive, duration = 2000) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isActive) return

    const start = performance.now()
    let rafId

    function update(now) {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))

      if (progress < 1) {
        rafId = requestAnimationFrame(update)
      }
    }

    rafId = requestAnimationFrame(update)
    return () => cancelAnimationFrame(rafId)
  }, [isActive, target, duration])

  return count
}
