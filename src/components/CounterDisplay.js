function CounterDisplay({ 
  value, 
  onIncrease, 
  onDecrease, 
   // Добавили
  onAge,
  onReset,
  onIncreaseByFive  // Добавили
}) {
  return (
    <div style={{
      border: '2px solid #61dafb',
      padding: '20px',
      borderRadius: '10px',
      margin: '20px',
      background: '#282c34'
    }}>
      <h2>🎯 Счётчик: {value}</h2>
      <p>Это число МЕНЯЕТСЯ благодаря useState!</p>
      
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <button onClick={onIncrease} style={buttonStyle}>
          + Увеличить на 1
        </button>
        
        <button onClick={onDecrease} style={{...buttonStyle, background: '#ff9800'}}>
          - Уменьшить на 1
        </button>
        <button onClick={onAge} style={{...buttonStyle, background: '#ff9800'}}>
          Увеличить возраст
        </button>
        
        <button onClick={onIncreaseByFive} style={{...buttonStyle, background: '#9C27B0'}}>
          + Увеличить на 5
        </button>
        
        <button onClick={onReset} style={{...buttonStyle, background: '#ff6b6b'}}>
          🔄 Сбросить
        </button>
      </div>
    </div>
  );
}

// Добавь стили в конец файла
const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  margin: '5px',
  background: '#61dafb',
  color: '#282c34',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontWeight: 'bold'
};

export default CounterDisplay;