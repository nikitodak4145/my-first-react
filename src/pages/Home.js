import CounterDisplay from '../components/CounterDisplay';
import UserInfo from '../components/UserInfo';

function Home() {
  return (
    <div>
      <h1 style={{ color: '#61dafb' }}>🏠 Главная страница</h1>
      <p>Добро пожаловать в моё React приложение!</p>
      
      <div style={{ 
        background: '#282c34', 
        padding: '20px', 
        borderRadius: '10px',
        margin: '20px 0'
      }}>
        <h2>🎯 Мои React проекты</h2>
        <ul>
          <li>Счётчик с useState</li>
          <li>Профиль пользователя</li>
          <li>Загрузка данных (useEffect)</li>
          <li>Навигация (React Router)</li>
        </ul>
      </div>
      
      <CounterDisplay />
      <UserInfo />
    </div>
  );
}

export default Home;