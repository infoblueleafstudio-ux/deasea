import Preloader from './components/Preloader';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Preloader />
      <div className="min-h-screen bg-neutral-50">
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Process />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
