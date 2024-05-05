import Topnav from './Components/Topnav';
import Homescreen from './Components/Homescreen';
import About from './Components/About';
import Projects from './Components/Projects';
import Footer from './Components/Footer';

export function App() {

  return (

      <div>
        <Topnav />
        <Homescreen />
        <About />
        <Projects />
        <Footer />
      </div>
  )
}

export default App;
