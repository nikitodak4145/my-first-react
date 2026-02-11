function About() {
  return (
    <div>
      <h1 style={{ color: '#61dafb' }}>👨‍💻 Обо мне</h1>
      
      <div style={{
        display: 'flex',
        gap: '30px',
        marginTop: '20px',
        flexWrap: 'wrap'
      }}>
        <div style={{
          flex: 1,
          minWidth: '300px',
          background: '#282c34',
          padding: '20px',
          borderRadius: '10px'
        }}>
          <h3>📚 Обучение</h3>
          <ul>
            <li>14 лет</li>
            <li>Изучаю программирование 2 месяца</li>
            <li>Знаю: HTML, CSS, JavaScript, Python, Django</li>
            <li>Сейчас учу: React</li>
          </ul>
        </div>
        
        <div style={{
          flex: 1,
          minWidth: '300px',
          background: '#282c34',
          padding: '20px',
          borderRadius: '10px'
        }}>
          <h3>🎯 Цели</h3>
          <ul>
            <li>К 16 годам: React + Django на хорошем уровне</li>
            <li>К 18 годам: Middle разработчик</li>
            <li>Первая подработка: через 3-6 месяцев</li>
            <li>Фриланс/удалёнка во время учёбы в колледже</li>
          </ul>
        </div>
      </div>
      
      <div style={{
        marginTop: '30px',
        padding: '20px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: '10px',
        color: 'white'
      }}>
        <h3>🚀 План развития</h3>
        <p>Январь 2026: React основы ✅</p>
        <p>Февраль-Март 2026: React продвинутый + Django API</p>
        <p>Апрель-Май 2026: Первый fullstack проект</p>
        <p>Лето 2026: Фриланс/стажировка</p>
      </div>
    </div>
  );
}

export default About;