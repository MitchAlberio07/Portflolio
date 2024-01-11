import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Works from './Components/Works';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Home/>
        <About/>
        <Works/>
        <Contact/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
