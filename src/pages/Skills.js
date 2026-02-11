function Skills() {
  const skills = [
    { name: '🌐 HTML', level: '⭐ Хорошо' },
    { name: '🎨 CSS', level: '⭐ Хорошо' },
    { name: 'JavaScript', level: '⭐⭐ Средне' },
    { name: '🐍 Python', level: '⭐⭐ Средне' },
    { name: 'Django', level: '⭐⭐⭐ Начинающий' },
    { name: '⚛️ React', level: '⭐⭐⭐ Начинающий' },
    { name: 'Git', level: '⭐⭐⭐ Начинающий' }
  ];

  return (
    <div style={{
      padding: '20px',
      background: '#282c34',
      borderRadius: '10px',
      marginTop: '20px'
    }}>
      <h1 style={{ color: '#61dafb' }}>🛠 Мои навыки</h1>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '15px',
        marginTop: '20px'
      }}>
        {skills.map(skill => (
          <div key={skill.name} style={{
            background: '#2c3e50',
            padding: '15px',
            borderRadius: '8px',
            border: '1px solid #61dafb'
          }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#61dafb' }}>
              {skill.name}
            </h3>
            <p style={{ margin: 0, color: 'white' }}>
              {skill.level}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;