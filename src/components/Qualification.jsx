import { CheckCircle, ArrowRight } from 'lucide-react'
import Reveal from './Reveal'

const WA_LINK = 'https://api.whatsapp.com/send?phone=5512996800195&text=Oi%20Pedro!%20Quero%20saber%20mais%20sobre%20seus%20servi%C3%A7os%20'

const items = [
  'Já tem audiência mas a edição trava seu crescimento',
  'Produz conteúdo toda semana e não tem tempo pra editar',
  'Precisa de resultado rápido: mais views, mais conversão',
  'Tem produto ou serviço pra vender e o conteúdo é seu canal principal',
  'Sabe que edição profissional faz diferença mas não encontra quem entregue de verdade',
]

export default function Qualification() {
  return (
    <section className="section section--dark">
      <div className="container">
        <Reveal direction="right">
          <h2 className="section__title">Pra quem é isso?</h2>
        </Reveal>
        <div className="qualification__content">
          <Reveal direction="right" delay={100}>
            <p className="qualification__intro">Você é empresário, criador de conteúdo ou infoprodutor e:</p>
          </Reveal>
          <ul className="qualification__list">
            {items.map((item, i) => (
              <Reveal key={i} direction={i % 2 === 0 ? 'left' : 'right'} delay={i * 80}>
                <li className="qualification__item">
                  <CheckCircle size={20} />
                  <span>{item}</span>
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal direction="up" delay={400}>
            <p className="qualification__cta-text">Se bateu pelo menos 2 desses, a gente precisa conversar.</p>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
              Falar com Pedro <ArrowRight size={18} />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
