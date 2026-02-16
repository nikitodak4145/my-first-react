import { useState, useEffect } from 'react';

function PostsList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        console.log('🔄 Загружаю посты с Django API...');
        const response = await fetch('http://localhost:8000/api/posts/');
        
        if (!response.ok) {
          throw new Error(`Ошибка HTTP: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('✅ Посты загружены:', data);
        setPosts(data);
        setLoading(false);
      } catch (err) {
        console.error('❌ Ошибка загрузки:', err);
        setError(err.message);
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div style={{
        padding: '40px',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: '15px',
        margin: '20px',
        color: 'white'
      }}>
        <h3>🔄 Загружаю посты из Django блога...</h3>
        <div style={{
          width: '100%',
          height: '8px',
          background: 'rgba(255,255,255,0.3)',
          borderRadius: '4px',
          margin: '20px 0',
          overflow: 'hidden'
        }}>
          <div style={{
            width: '70%',
            height: '100%',
            background: 'white',
            animation: 'loading 1.5s infinite'
          }}></div>
        </div>
        <p>Подключение к http://localhost:8000/api/posts/</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{
        background: '#ffebee',
        borderRadius: '15px',
        padding: '30px',
        margin: '20px',
        border: '2px solid #f44336'
      }}>
        <h3 style={{ color: '#c62828' }}>❌ Ошибка загрузки</h3>
        <p style={{ color: '#b71c1c' }}>{error}</p>
        <div style={{
          background: 'white',
          padding: '20px',
          borderRadius: '10px',
          marginTop: '20px'
        }}>
          <h4>🔧 Проверь:</h4>
          <ul>
            <li>✅ Django сервер запущен? (python manage.py runserver)</li>
            <li>✅ API работает? (http://localhost:8000/api/posts/)</li>
            <li>✅ CORS установлен? (django-cors-headers)</li>
          </ul>
          <button 
            onClick={() => window.location.reload()}
            style={{
              padding: '10px 20px',
              background: '#f44336',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              marginTop: '10px'
            }}
          >
            🔄 Повторить попытку
          </button>
        </div>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div style={{
        background: '#e3f2fd',
        borderRadius: '15px',
        padding: '40px',
        margin: '20px',
        textAlign: 'center'
      }}>
        <h3>📭 Пока нет постов</h3>
        <p>Добавь первую статью через Django админку!</p>
        <a 
          href="http://localhost:8000/admin"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            padding: '10px 20px',
            background: '#2196f3',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px',
            marginTop: '15px'
          }}
        >
          🔑 Перейти в админку
        </a>
      </div>
    );
  }

  return (
    <div style={{
      background: '#f8f9fa',
      borderRadius: '15px',
      padding: '25px',
      margin: '20px',
      border: '2px solid #dee2e6'
    }}>
      <h2 style={{ 
        color: '#2d3436',
        borderBottom: '3px solid #6c5ce7',
        paddingBottom: '15px'
      }}>
        📝 Посты из Django блога
      </h2>
      
      <p style={{ color: '#636e72', marginBottom: '20px' }}>
        Загружено {posts.length} постов с сервера
      </p>
      
      <div style={{
        display: 'grid',
        gap: '20px',
        marginTop: '20px'
      }}>
        {posts.map(post => (
          <div 
            key={post.id}
            style={{
              background: 'white',
              borderRadius: '10px',
              padding: '20px',
              boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
              borderLeft: '5px solid #6c5ce7'
            }}
          >
            <h3 style={{ color: '#6c5ce7', margin: '0 0 10px 0' }}>
              {post.title}
            </h3>
            <p style={{ color: '#636e72', marginBottom: '15px' }}>
              {post.content.length > 200 
                ? `${post.content.substring(0, 200)}...` 
                : post.content}
            </p>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <span style={{ color: '#b2bec3' }}>
                📅 {new Date(post.created_at).toLocaleDateString('ru-RU')}
              </span>
              <button 
                onClick={() => alert(`📄 Полный текст:\n\n${post.title}\n\n${post.content}`)}
                style={{
                  padding: '8px 16px',
                  background: '#6c5ce7',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
              >
                Читать полностью →
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div style={{
        marginTop: '25px',
        padding: '15px',
        background: '#e8f5e9',
        borderRadius: '8px',
        fontSize: '14px',
        border: '1px solid #4caf50'
      }}>
        <p style={{ margin: 0, color: '#2e7d32' }}>
          <strong>✅ Реальные данные с Django API!</strong> Загружено {posts.length} постов
        </p>
      </div>
    </div>
  );
}

export default PostsList;