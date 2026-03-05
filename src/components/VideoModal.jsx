import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'

export default function VideoModal({ src, isOpen, onClose }) {
  const videoRef = useRef(null)

  useEffect(() => {
    if (!isOpen && videoRef.current) {
      videoRef.current.pause()
      videoRef.current.removeAttribute('src')
    }
  }, [isOpen])

  useEffect(() => {
    function handleEscape(e) {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  return (
    <div className={`modal-overlay ${isOpen ? 'modal-overlay--active' : ''}`} onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Fechar video">
          <X size={24} />
        </button>
        {isOpen && src && (
          <video ref={videoRef} src={src} controls autoPlay />
        )}
      </div>
    </div>
  )
}
