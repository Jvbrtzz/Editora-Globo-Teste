import Home from "./views/Home";
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Navbar from "./layout/Navbar";
import Sobre from "./views/Sobre";
import Formulario from "./views/Formulario";
import Footer from "./layout/Footer.js";

function App() {
  return (
    <Router>
      
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />}> </Route>
      <Route path="/sobre" element={<Sobre />}> </Route>
      <Route path="/form" element={<Formulario />}> </Route>
      
      </Routes>
      <Footer/>
    </Router>
    
  );
}

export default App;
