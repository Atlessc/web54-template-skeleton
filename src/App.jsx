import './App.css'
import NavBar from './components/nav-bar'
import Hero from './components/hero'
import CTA from './components/cta'
import HomeServices from './components/home-services'
import Footer from './components/footer'

function App() {

  return (
    <div className='container'>
      <div className='Nav'><NavBar /></div>
      <div className='body'>

        <Hero />
        <CTA />
        <HomeServices />
        <Hero />
        <CTA />
        <HomeServices />
        <Footer />

      </div>
    </div>
  )
}

export default App
