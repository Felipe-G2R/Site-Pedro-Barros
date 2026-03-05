import { useInView } from '../hooks/useInView'
import { useCounter } from '../hooks/useCounter'
import Reveal from './Reveal'

function MetricCard({ target, suffix, label, direction, delay }) {
  const [ref, inView] = useInView()
  const count = useCounter(target, inView)
  return (
    <Reveal direction={direction} delay={delay}>
      <div className="metrics__card" ref={ref}>
        <span className="metrics__number">{count}<span className="metrics__suffix">{suffix}</span></span>
        <span className="metrics__label">{label}</span>
      </div>
    </Reveal>
  )
}

export default function Metrics() {
  return (
    <section className="section section--alt">
      <div className="container text-center">
        <Reveal direction="up">
          <h2 className="section__title">Resultados que falam por si</h2>
        </Reveal>
        <div className="metrics__grid">
          <MetricCard target={150} suffix="M+" label="Views Gerados" direction="left" delay={0} />
          <MetricCard target={100} suffix="K" label="Faturamento Mensal (R$)" direction="up" delay={150} />
          <MetricCard target={221} suffix="" label="Conteúdos Publicados" direction="right" delay={300} />
        </div>
      </div>
    </section>
  )
}
