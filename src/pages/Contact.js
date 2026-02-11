import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Сообщение отправлено!\n\nИмя: ${formData.name}\nEmail: ${formData.email}\nСообщение: ${formData.message}`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div>
      <h1 style={{ color: '#61dafb' }}>📞 Контакты</h1>
      
      <div style={{
        display: 'flex',
        gap: '40px',
        marginTop: '20px',
        flexWrap: 'wrap'
      }}>
        <div style={{ flex: 1, minWidth: '300px' }}>
          <h3>📧 Форма обратной связи</h3>
          
          <form onSubmit={handleSubmit} style={{
            background: '#282c34',
            padding: '20px',
            borderRadius: '10px'
          }}>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Имя:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '5px',
                  border: '1px solid #61dafb',
                  background: '#1a1d23',
                  color: 'white'
                }}
              />
            </div>
            
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '5px',
                  border: '1px solid #61dafb',
                  background: '#1a1d23',
                  color: 'white'
                }}
              />
            </div>
            
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Сообщение:</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '5px',
                  border: '1px solid #61dafb',
                  background: '#1a1d23',
                  color: 'white'
                }}
              />
            </div>
            
            <button type="submit" style={{
              padding: '10px 20px',
              background: '#61dafb',
              color: '#282c34',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}>
              📤 Отправить
            </button>
          </form>
        </div>
        
        <div style={{ flex: 1, minWidth: '300px' }}>
          <h3>📍 Как со мной связаться</h3>
          
          <div style={{
            background: '#282c34',
            padding: '20px',
            borderRadius: '10px',
            marginBottom: '20px'
          }}>
            <h4>💼 Для предложений о работе:</h4>
            <ul>
              <li>Фриланс проекты</li>
              <li>Стажировки</li>
              <li>Совместные проекты</li>
            </ul>
          </div>
          
          <div style={{
            background: '#282c34',
            padding: '20px',
            borderRadius: '10px'
          }}>
            <h4>👨‍💻 Технические контакты:</h4>
            <p><strong>GitHub:</strong> nikitodak4145</p>
            <p><strong>Стек технологий:</strong> React, Django, JavaScript, Python</p>
            <p><strong>Цель:</strong> Стать Middle разработчиком к 18 годам</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;