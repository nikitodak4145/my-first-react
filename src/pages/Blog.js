import PostsList from '../components/PostsList';

function Blog() {
  return (
    <div>
      <h1 style={{ color: '#61dafb' }}>📝 Мой блог</h1>
      <p>Посты из моего Django блога</p>
      
      <div style={{
        margin: '20px 0',
        padding: '15px',
        background: '#282c34',
        borderRadius: '10px',
        borderLeft: '4px solid #61dafb'
      }}>
        <h3>💡 Технологии блога:</h3>
        <p><strong>Backend:</strong> Django + Django REST Framework</p>
        <p><strong>Frontend:</strong> React</p>
        <p><strong>API:</strong> RESTful JSON API</p>
      </div>
      
      <PostsList />
    </div>
  );
}

export default Blog;