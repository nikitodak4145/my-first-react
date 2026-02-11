import { useState } from 'react';

function UserInfo() {
  const [name, setName] = useState('Никита');
  const [age, setAge] = useState(14);
  const [city, setCity] = useState('Гродно');
  const [changesCount, setChangesCount] = useState(0);
  const [about, setAbout] = useState('Я учу React и Django. Цель - стать Middle разработчиком к 18 годам.');
  const [isEditing, setIsEditing] = useState(false);
  
  const changeName = () => {
    const newName = prompt('Введите новое имя:', name);
    if (newName) {
      setName(newName);
      setChangesCount(changesCount + 1);
    }
  };
  
  const changeAge = () => {
    const newAge = prompt('Введите новый возраст:', age);
    if (newAge) {
      const ageNum = parseInt(newAge);
       
      if (ageNum < 0) {
        alert("Недопустимый возраст!");
      } else {
        setAge(ageNum);
      }
      setChangesCount(changesCount + 1);
    }
  };
  
  const changeCity = () => {
    const newCity = prompt('Введите новый город:', city);
    if (newCity) {
      setCity(newCity);
      setChangesCount(changesCount + 1);
    }
  };
  
  const reset = () => {
    setName('Никита');
    setAge(14);
    setCity('Гродно');
    setAbout('Я учу React и Django. Цель - стать Middle разработчиком к 18 годам.');
    setChangesCount(0);
  };

  const showStats = () => {
    const stats = `
📊 Статистика пользователя:

👤 Имя: ${name}
🎂 Возраст: ${age} лет
🏙️ Город: ${city}
✏️ Всего изменений: ${changesCount}
📅 Дата создания: ${new Date().toLocaleDateString()}
    `;
    alert(stats);
  };
  
  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginTop: '5px',
    borderRadius: '5px',
    border: '1px solid #61dafb',
    background: '#1a1d23',
    color: 'white',
    fontSize: '16px'
  };
  
  const changeAbout = () => {
    const newAbout = prompt('Расскажите о себе:', about);
    if (newAbout) {
      setAbout(newAbout);
      setChangesCount(changesCount + 1);
    }
  };

  if (isEditing) {
    return (
      <div style={{
        border: '2px solid #61dafb',
        padding: '20px',
        borderRadius: '10px',
        margin: '20px',
        background: '#282c34',
        color: 'white'
      }}>
        <h2 style={{ color: '#61dafb' }}>✏️ Редактирование профиля</h2>
        
        <div style={{ marginBottom: '15px' }}>
          <label>Имя:</label>
          <input 
            value={name} 
            onChange={(e) => setName(e.target.value)}
            style={inputStyle}
          />
        </div>
        
        <div style={{ marginBottom: '15px' }}>
          <label>Возраст:</label>
          <input 
            type="number" 
            value={age} 
            onChange={(e) => setAge(parseInt(e.target.value) || 0)}
            style={inputStyle}
          />
        </div>
        
        <div style={{ marginBottom: '15px' }}>
          <label>Город:</label>
          <input 
            value={city} 
            onChange={(e) => setCity(e.target.value)}
            style={inputStyle}
          />
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <label>О себе:</label>
          <textarea 
            value={about} 
            onChange={(e) => setAbout(e.target.value)}
            style={{...inputStyle, minHeight: '100px'}}
            rows="4"
          />
        </div>
        
        <div style={{ display: 'flex', gap: '10px' }}>
          <button onClick={() => {
            setIsEditing(false);
            setChangesCount(changesCount + 1);
          }} style={{...buttonStyle, background: '#4caf50'}}>
            ✅ Сохранить
          </button>
          
          <button onClick={() => setIsEditing(false)} style={{...buttonStyle, background: '#f44336'}}>
            ❌ Отмена
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      border: '2px solid #61dafb',
      padding: '20px',
      borderRadius: '10px',
      margin: '20px',
      background: '#282c34',
      color: 'white'
    }}>
      <h2 style={{ color: '#61dafb' }}>👤 Информация о пользователе</h2>
      
      <div style={{ margin: '15px 0' }}>
        <p><strong>Имя:</strong> {name}</p>
        <p><strong>Возраст:</strong> {age} лет</p>
        <p><strong>Город:</strong> {city}</p>
        <p><strong>Изменений:</strong> {changesCount}</p>
        <p><strong>О себе:</strong> {about.length > 50 ? about.substring(0, 50) + '...' : about}</p>
      </div>
      
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <button onClick={changeName} style={buttonStyle}>
          ✏️ Изменить имя
        </button>
        
        <button onClick={changeAge} style={{...buttonStyle, background: '#ff9800'}}>
          🎂 Изменить возраст
        </button>
        
        <button onClick={changeCity} style={{...buttonStyle, background: '#4caf50'}}>
          🏙️ Изменить город
        </button>
        
        <button onClick={reset} style={{...buttonStyle, background: '#f44336'}}>
          🔄 Сбросить
        </button>
        
        <button onClick={showStats} style={{...buttonStyle, background: '#9c27b0'}}>
          📊 Статистика
        </button>
        
        <button onClick={changeAbout} style={buttonStyle}>
          ✍️ Изменить "О себе"
        </button>
        
        <button onClick={() => setIsEditing(true)} style={{...buttonStyle, background: '#ff9800'}}>
          ✏️ Редактировать всё
        </button>
      </div>
      
      <div style={{ 
        marginTop: '20px', 
        padding: '10px', 
        background: 'rgba(255,255,255,0.1)',
        borderRadius: '5px',
        fontSize: '14px'
      }}>
        <p>Всего изменений: {changesCount}</p>
      </div>
    </div>
  );
}

const buttonStyle = {
  padding: '8px 16px',
  background: '#61dafb',
  color: '#282c34',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontWeight: 'bold'
};

export default UserInfo;