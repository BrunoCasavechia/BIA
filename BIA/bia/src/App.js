// Components
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

// Styles / CSS
import './App.css';

// Paginas
import SobreNos from './Pages/SobreNos/SobreNos';
import Contato from './Pages/Contato/Contato';
import Faq from './Pages/Faq/Faq';

// import Faq from './Pages/faq/faq';

// Config React Router
// Inserir no console -> npm i json-server react-router-dom

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    // Define as Rotas do React
    <BrowserRouter>
      <div className="App">
        {/* Header da página */}
        <Header />

        <Routes>
          <Route path="/SobreNos" element={<SobreNos />} />
          <Route path="/Contato" element={<Contato />} />
          <Route path="/FAQ" element={<Faq />} />
        </Routes>
      </div>

      <Footer/>
    </BrowserRouter>
  );
}

export default App;
