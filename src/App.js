import './App.css';
import './Componantes/style/animation.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Componantes/Routes/Home/Home';
import Menu from './Componantes/Pages/Menu/Menu';
import Footer from './Componantes/Pages/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
