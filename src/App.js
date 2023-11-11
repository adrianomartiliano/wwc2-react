import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

//PAGES
import Home from './pages/Home/Home';
import Campeoes from './pages/Campeoes/Campeoes';
import Sobre from './pages/Sobre/Sobre';

//Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Navbar />

        <div className="container">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Cadastro' element={<Cadastro />} />
            <Route path='/Campeoes' element={<Campeoes />} />
            <Route path='/Sobre' element={<Sobre />} />

          </Routes>
        </div>

        <Footer />

      </BrowserRouter>
      
    </div>
  );
}

export default App;
