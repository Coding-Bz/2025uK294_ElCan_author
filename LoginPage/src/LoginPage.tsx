import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from './services/AuthService';
import { setToken } from './services/AuthorService';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function handleLogin() {
    try {
      const token = await login(email, password);
      setToken(token);
      navigate('/authors');
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      alert('Login fehlgeschlagen');
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Einloggen</button>
    </div>
  );
}

export default LoginPage;