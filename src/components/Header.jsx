import { useState, useEffect } from 'react'

const WA_LINK = 'https://api.whatsapp.com/send?phone=5512996800195&text=Oi%20Pedro!%20Quero%20saber%20mais%20sobre%20seus%20servi%C3%A7os%20'

export default function Header() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let ticking = false
    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(() => {
          setVisible(window.scrollY > window.innerHeight * 0.8)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header ${visible ? 'header--visible' : ''}`}>
      <div className="container header__inner">
        <span className="header__logo">Pedro Barros</span>
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
          Falar com Pedro
        </a>
      </div>
    </header>
  )
}
