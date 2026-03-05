import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Reveal from './Reveal'

const faqs = [
  { q: 'Que tipo de conteúdo você edita?', a: 'Reels, Shorts, vídeos pro YouTube, podcasts, conteúdo pra redes sociais em geral. Se é vídeo, eu edito.' },
  { q: 'Quanto custa?', a: 'Depende do volume e tipo de conteúdo. Me chama no WhatsApp que eu te passo tudo sem compromisso.' },
  { q: 'Tem contrato de fidelidade?', a: 'Não. Você fica enquanto quiser, sai quando quiser.' },
  { q: 'Como sei que vai dar resultado?', a: '150 milhões de views entregados pra clientes. Os números falam.' },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section className="section section--alt">
      <div className="container">
        <Reveal direction="right">
          <h2 className="section__title">Perguntas frequentes</h2>
        </Reveal>
        <div className="faq__container">
          {faqs.map((faq, i) => (
            <Reveal key={i} direction={i % 2 === 0 ? 'left' : 'right'} delay={i * 80}>
              <div className={`accordion-item ${openIndex === i ? 'accordion-item--open' : ''}`}>
                <button className="accordion-item__header" onClick={() => toggle(i)} aria-expanded={openIndex === i}>
                  <span>{faq.q}</span>
                  <ChevronDown size={20} />
                </button>
                <div className="accordion-item__body">
                  <p>{faq.a}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
