import "./App.css"
import Navbar from './components/Navbar';
import Service from './components/services/Service';
import About from './components/about/About';
import Footer from "./components/footer/Footer";




function App() {
 

  return (
   <div>
    <Navbar />
    <About />
    <Service />
 
    <Footer />
   
   </div>
  )
}

export default App;
