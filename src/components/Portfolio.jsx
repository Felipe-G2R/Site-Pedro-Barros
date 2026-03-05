import { useState, useRef, useEffect } from 'react'
import { Play } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import Reveal from './Reveal'
import VideoModal from './VideoModal'

const WA_LINK = 'https://api.whatsapp.com/send?phone=5512996800195&text=Oi%20Pedro!%20Quero%20saber%20mais%20sobre%20seus%20servi%C3%A7os%20'

const videos = [
  { webm: '/videos/antes-depois.webm', mp4: '/videos/antes-depois.mp4', badge: 'ANTES & DEPOIS', title: 'Edição de CTA - Antes e Depois' },
  { webm: '/videos/luana-carolina-3.webm', mp4: '/videos/luana-carolina-3.mp4', badge: 'PORTFOLIO', title: 'Demonstrativo de Qualidade' },
  { webm: '/videos/resultado-200.webm', mp4: '/videos/resultado-200.mp4', badge: 'RESULTADO', title: 'Resultado Real' },
  { webm: '/videos/institucional.webm', mp4: '/videos/institucional.mp4', badge: 'VANGUARDVISION', title: 'Padrão VanguardVision' },
]

const directions = ['left', 'right', 'left', 'right']

function LazyVideo({ webm, mp4, isVisible }) {
  const videoRef = useRef(null)

  useEffect(() => {
    if (isVisible && videoRef.current) {
      videoRef.current.load()
    }
  }, [isVisible])

  return (
    <video
      ref={videoRef}
      muted
      loop
      playsInline
      preload={isVisible ? 'auto' : 'none'}
      onMouseEnter={e => { if (isVisible) e.target.play().catch(() => {}) }}
      onMouseLeave={e => { e.target.pause(); e.target.currentTime = 0 }}
    >
      {isVisible && (
        <>
          <source src={webm + '#t=0.1'} type="video/webm" />
          <source src={mp4 + '#t=0.1'} type="video/mp4" />
        </>
      )}
    </video>
  )
}

export default function Portfolio() {
  const [ref, inView] = useInView({ threshold: 0.05 })
  const [modalVideo, setModalVideo] = useState(null)

  return (
    <>
      <section className="section section--dark" ref={ref}>
        <div className="container">
          <Reveal direction="left">
            <h2 className="section__title">Veja na prática</h2>
            <p className="section__subtitle">Trabalhos reais que mostram o padrão de qualidade da edição.</p>
          </Reveal>
          <div className="portfolio__grid">
            {videos.map((v, i) => (
              <Reveal key={i} direction={directions[i]} delay={i * 120}>
                <div className="iphone-frame" onClick={() => setModalVideo(v.mp4)}>
                  <div className="iphone-frame__notch">
                    <div className="iphone-frame__notch-pill" />
                  </div>
                  <div className="iphone-frame__screen">
                    <LazyVideo webm={v.webm} mp4={v.mp4} isVisible={inView} />
                    <div className="video-card__overlay">
                      <div className="video-card__play"><Play size={22} /></div>
                    </div>
                    <div className="video-card__badge"><span className="badge">{v.badge}</span></div>
                  </div>
                  <div className="iphone-frame__bar" />
                  <div className="iphone-frame__title">{v.title}</div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal direction="up" delay={500}>
            <p className="portfolio__cta-text" style={{ marginTop: '2.5rem' }}>Quer resultados assim pro seu conteúdo?</p>
            <div className="text-center">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn btn--primary">Falar com Pedro</a>
            </div>
          </Reveal>
        </div>
      </section>
      <VideoModal src={modalVideo} isOpen={!!modalVideo} onClose={() => setModalVideo(null)} />
    </>
  )
}
