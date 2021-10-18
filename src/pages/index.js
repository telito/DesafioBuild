
import styles from '../../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/header/header';
import ApiNasa from '../components/apiNasa';
import Hero from '../components/hero'
import Spotify from '../components/spotify'
import Slide from '../components/slide'
import Nasa from '../components/nasa'
import Contact from '../components/contact'
import Footer from '../components/footer';


export default function Home() {
  return (
    <div>
      <Header />
      {/* <ApiNasa /> */}
      <Slide />
      <Hero />
      <Nasa />
      <Spotify /> 
      <Contact />
      <Footer />
    </div>
  )
}
