import { useState, useEffect } from 'react'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('pb_cookie_consent')
    if (!consent) {
      // Small delay so it doesn't flash on page load
      const timer = setTimeout(() => setVisible(true), 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('pb_cookie_consent', 'accepted')
    setVisible(false)
  }

  const handleReject = () => {
    localStorage.setItem('pb_cookie_consent', 'rejected')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="cookie-banner">
      <div className="cookie-banner__content">
        <p className="cookie-banner__text">
          Este site utiliza cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa Política de Privacidade.
        </p>
        <div className="cookie-banner__actions">
          <button className="btn btn--primary cookie-banner__accept" onClick={handleAccept}>
            Aceitar
          </button>
          <button className="cookie-banner__reject" onClick={handleReject}>
            Rejeitar
          </button>
        </div>
      </div>
    </div>
  )
}
