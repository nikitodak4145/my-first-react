import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px'
      }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      
      <footer style={{
        background: '#282c34',
        color: 'white',
        padding: '20px',
        textAlign: 'center',
        marginTop: '40px',
        borderTop: '3px solid #61dafb'
      }}>
        <p>© 2026 Никита | React + Django Developer</p>
        <p>Цель: Middle разработчик к 18 годам 🚀</p>
      </footer>
    </div>
  );
}

export default App;