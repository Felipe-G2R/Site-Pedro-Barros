import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'

const WA_LINK = 'https://api.whatsapp.com/send?phone=5512996800195&text=Oi%20Pedro!%20Quero%20saber%20mais%20sobre%20seus%20servi%C3%A7os%20'

export default function CTAFinal() {
  return (
    <section className="section section--dark cta-final">
      <div className="container text-center">
        <Reveal direction="up">
          <h2 className="section__title">Vai continuar editando sozinho ou vai escalar de verdade?</h2>
        </Reveal>
        <Reveal direction="up" delay={150}>
          <p className="cta-final__subtitle">150 milhões de views não mentem. O próximo resultado pode ser o seu.</p>
        </Reveal>
        <Reveal direction="up" delay={300}>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--lg">
            Falar com Pedro agora <ArrowRight size={18} />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
