import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'

const WA_LINK = 'https://api.whatsapp.com/send?phone=5512996800195&text=Oi%20Pedro!%20Quero%20saber%20mais%20sobre%20seus%20servi%C3%A7os%20'

export default function About() {
  return (
    <section className="section section--dark">
      <div className="container">
        <div className="about__container">
          <Reveal direction="left">
            <div className="about__image-wrapper">
              <img src="/images/pedro-hero.jpg" alt="Pedro Barros" className="about__img" />
            </div>
          </Reveal>
          <Reveal direction="right" delay={200}>
            <div className="about__content">
              <h2>Quem é Pedro Barros</h2>
              <p>Editor de vídeos que já gerou mais de 150 milhões de views para criadores de conteúdo. Fatura R$100K todos os meses com edição profissional.</p>
              <p>Fundador da <span className="about__brand">VanguardVision</span> (@vanguardvisionn).</p>
              <p>Começou do zero e construiu um negócio real - sem herança, sem contato, sem sorte. Só trabalho e resultado.</p>
              <p>Hoje ajuda empresários e criadores a escalar seus canais com edição que retém, engaja e converte.</p>
              <div className="about__cta">
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
                  Falar com Pedro no WhatsApp <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
