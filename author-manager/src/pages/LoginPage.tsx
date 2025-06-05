import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/AuthService';


function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function handleLogin() {
    try {
      const response = await login(email, password);
      const token = response.accessToken; 
      localStorage.setItem('accessToken', token);
      navigate('/authors');
    } catch {
      alert('Login fehlgeschlagen');
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <input
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        placeholder="Passwort"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Einloggen</button>
    </div>
  );
}

export default LoginPage;
