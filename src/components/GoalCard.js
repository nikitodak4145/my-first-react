function GoalCard(props) {
  // ДОБАВИЛИ priority в деструктуризацию
  const { title, description, deadline, completed, priority, category } = props;
  
  return (
    <div style={{
      border: '2px solid',
      borderColor: completed ? '#4CAF50' : '#FF9800',
      borderRadius: '10px',
      padding: '20px',
      margin: '15px',
      background: completed ? '#E8F5E9' : '#FFF3E0',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ 
          color: completed ? '#2E7D32' : '#FF9800',
          margin: 0 
        }}>
          {completed ? '✅' : '🎯'} {title}
        </h3>
        <span style={{
          background: completed ? '#4CAF50' : '#FF9800',
          color: 'white',
          padding: '5px 10px',
          borderRadius: '15px',
          fontSize: '14px'
        }}>
          {deadline}
        </span>
      </div>
      
      {/* ДОБАВИЛИ ОТОБРАЖЕНИЕ ПРИОРИТЕТА */}
      {priority && (
        <div style={{ margin: '10px 0' }}>
          <span style={{ 
            color: priority === 'high' ? 'red' : 'orange',
            fontWeight: 'bold'
          }}>
            {priority === 'high' ? '🔥 Высокий' : '⚡ Средний'} приоритет
          </span>
        </div>
      )}
      
      <p style={{ 
        margin: '10px 0',
        color: '#555'
      }}>
        {description}
      </p>
      
      <div style={{ 
        display: 'flex', 
        gap: '10px',
        marginTop: '15px'
      }}>
        <button 
          onClick={() => alert(`Цель: ${title}`)}
          style={{
            padding: '8px 16px',
            background: completed ? '#4CAF50' : '#2196F3',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          {completed ? 'Завершено' : 'Выполнить'}
        </button>
        
        <button 
          onClick={() => console.log(`Подробнее о: ${title}`)}
          style={{
            padding: '8px 16px',
            background: 'transparent',
            color: completed ? '#4CAF50' : '#2196F3',
            border: `1px solid ${completed ? '#4CAF50' : '#2196F3'}`,
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Подробнее
        </button>
      </div>
    </div>
  );
}

export default GoalCard;