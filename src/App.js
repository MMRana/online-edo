import { Route, Routes } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min"
import './App.css';
// Pages components;
import Home from './Components/pages/Home';
import About from './Components/pages/About';
import Service from './Components/pages/Service';
import Contact from './Components/pages/Contact';
// components;
import Nabvar from './Components/NabvarSection/Navbar';
import Footer from './Components/Footer/Footer';


function App() {
  return (
     <>
     <Nabvar />
      <Routes>
        <Route exact path="/" element={< Home/>} />
        <Route exact path="/service" element={< Service/>} />
        <Route exact path="/about" element={< About/>} />
        <Route exact path="/contact" element={< Contact/>} />
      </Routes>
      <Footer />
      </>
  );
}

export default App;
