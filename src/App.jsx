import ScrollProgress from './components/ScrollProgress'
import Header from './components/Header'
import Hero from './components/Hero'
import Metrics from './components/Metrics'
import Qualification from './components/Qualification'
import Process from './components/Process'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import About from './components/About'
import FAQ from './components/FAQ'
import CTAFinal from './components/CTAFinal'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import CookieConsent from './components/CookieConsent'
import './styles/variables.css'
import './App.css'

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Metrics />
        <Qualification />
        <Process />
        <Portfolio />
        <Testimonials />
        <About />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
      <WhatsAppFloat />
      <CookieConsent />
    </>
  )
}
