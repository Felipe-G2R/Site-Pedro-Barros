import { useState } from 'react'
import { Play } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import Reveal from './Reveal'
import VideoModal from './VideoModal'

const testimonials = [
  { video: '/videos/depoimento-1.webm', mp4: '/videos/depoimento-1.mp4', name: 'Penoli', role: 'Cliente' },
  { video: '/videos/depoimento-2.webm', mp4: '/videos/depoimento-2.mp4', name: 'Resultado Real', role: 'Cliente' },
  { video: '/videos/depoimento-3.webm', mp4: '/videos/depoimento-3.mp4', name: 'Antony Burse', role: 'Cliente' },
]

const directions = ['left', 'up', 'right']

export default function Testimonials() {
  const [ref, inView] = useInView({ threshold: 0.1 })
  const [modalVideo, setModalVideo] = useState(null)

  return (
    <>
      <section className="section section--alt" ref={ref}>
        <div className="container">
          <Reveal direction="left">
            <h2 className="section__title">O que dizem sobre o trabalho</h2>
            <p className="section__subtitle">Depoimentos reais de quem já contratou.</p>
          </Reveal>
          <div className="testimonials-video__grid">
            {testimonials.map((t, i) => (
              <Reveal key={i} direction={directions[i]} delay={i * 150}>
                <div className="testimonial-video" onClick={() => setModalVideo(t.mp4)}>
                  <div className="testimonial-video__frame">
                    <div className="testimonial-video__notch">
                      <div className="testimonial-video__notch-pill" />
                    </div>
                    <div className="testimonial-video__screen">
                      {inView && (
                        <video muted loop playsInline preload="auto"
                          onMouseEnter={e => e.target.play().catch(() => {})}
                          onMouseLeave={e => { e.target.pause(); e.target.currentTime = 0 }}
                        >
                          <source src={t.video + '#t=0.1'} type="video/webm" />
                          <source src={t.mp4 + '#t=0.1'} type="video/mp4" />
                        </video>
                      )}
                      <div className="testimonial-video__overlay">
                        <div className="testimonial-video__play"><Play size={22} /></div>
                      </div>
                    </div>
                    <div className="testimonial-video__bar" />
                  </div>
                  <div className="testimonial-video__info">
                    <span className="testimonial-video__name">{t.name}</span>
                    <span className="testimonial-video__role">{t.role}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <VideoModal src={modalVideo} isOpen={!!modalVideo} onClose={() => setModalVideo(null)} />
    </>
  )
}
