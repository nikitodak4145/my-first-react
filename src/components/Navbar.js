import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
      background: '#282c34',
      padding: '15px 20px',
      borderBottom: '3px solid #61dafb'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ 
            color: '#61dafb', 
            fontSize: '24px', 
            fontWeight: 'bold' 
          }}>
            🚀
          </span>
          <span style={{ 
            color: 'white', 
            fontSize: '20px', 
            fontWeight: 'bold' 
          }}>
            Никита | React Developer
          </span>
        </div>
        
        <div style={{ display: 'flex', gap: '15px' }}>
          <Link to="/" style={linkStyle}>
            🏠 Главная
          </Link>
          <Link to="/about" style={linkStyle}>
            👨‍💻 Обо мне
          </Link>
          <Link to="/blog" style={linkStyle}>
            📝 Блог
          </Link>
          <Link to="/contact" style={linkStyle}>
            📞 Контакты
          </Link>
        </div>
      </div>
    </nav>
  );
}

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  padding: '8px 15px',
  borderRadius: '5px',
  transition: 'all 0.3s',
  ':hover': {
    background: '#61dafb',
    color: '#282c34'
  }
};

export default Navbar;