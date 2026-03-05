import { useInView } from '../hooks/useInView'

/**
 * Reveal on scroll wrapper component.
 * direction: 'left' | 'right' | 'up' | 'bottom'
 * delay: stagger delay in ms
 */
export default function Reveal({ children, direction = 'up', delay = 0, className = '' }) {
  const [ref, inView] = useInView({ threshold: 0.15 })

  const dirClass = `reveal--${direction}`
  const activeClass = inView ? 'reveal--visible' : ''
  const style = delay > 0 ? { transitionDelay: `${delay}ms` } : undefined

  return (
    <div ref={ref} className={`reveal ${dirClass} ${activeClass} ${className}`} style={style}>
      {children}
    </div>
  )
}
