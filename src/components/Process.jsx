import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'

const WA_LINK = 'https://api.whatsapp.com/send?phone=5512996800195&text=Oi%20Pedro!%20Quero%20saber%20mais%20sobre%20seus%20servi%C3%A7os%20'

const steps = [
  { num: '01', title: 'Você envia o bruto', desc: 'Manda seu vídeo gravado, sem edição. Pode ser pelo WhatsApp mesmo.' },
  { num: '02', title: 'Eu edito com estratégia', desc: 'Cortes, efeitos, legendas, ritmo - tudo pensado pra reter e converter.' },
  { num: '03', title: 'Você posta e escala', desc: 'Recebe o vídeo pronto em 24-48h. Só postar e colher os resultados.' },
]

const directions = ['left', 'up', 'right']

export default function Process() {
  return (
    <section className="section section--alt">
      <div className="container text-center">
        <Reveal direction="up">
          <h2 className="section__title">Simples assim.</h2>
        </Reveal>
        <div className="process__steps">
          {steps.map((s, i) => (
            <Reveal key={i} direction={directions[i]} delay={i * 150}>
              <div className="step">
                <div className="step__number">{s.num}</div>
                <div className="step__content">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal direction="up" delay={450}>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn btn--primary" style={{ marginTop: '2.5rem' }}>
            Quero escalar meu conteúdo <ArrowRight size={18} />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
