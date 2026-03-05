import { Star, ArrowRight, CheckCircle } from 'lucide-react'
import Reveal from './Reveal'

const WA_LINK = 'https://api.whatsapp.com/send?phone=5512996800195&text=Oi%20Pedro!%20Quero%20saber%20mais%20sobre%20seus%20servi%C3%A7os%20'

export default function Hero() {
  return (
    <section className="section hero section--dark">
      <div className="container hero__container">
        <Reveal direction="left">
          <span className="hero__badge"><Star size={14} /> EDITOR DE VÍDEOS</span>
          <h1 className="hero__title">Você posta, o algoritmo ignora. <span className="accent">Eu mudo isso.</span></h1>
          <p className="hero__subtitle">Se você cria conteúdo e ainda edita sozinho, está deixando dinheiro na mesa.</p>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--lg">
            Falar com Pedro <ArrowRight size={18} />
          </a>
          <div className="hero__trust">
            <div className="hero__trust-item"><CheckCircle size={16} /> <span>150M+ Views Gerados</span></div>
            <div className="hero__trust-item"><CheckCircle size={16} /> <span>100K/mês Faturado</span></div>
            <div className="hero__trust-item"><CheckCircle size={16} /> <span>12K Seguidores</span></div>
          </div>
        </Reveal>
        <Reveal direction="right" delay={200}>
          <div className="hero__image">
            <img src="/images/pedro-hero.jpg" alt="Pedro Barros - Editor de Vídeos profissional" className="hero__img" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
