import { useState } from 'react';
import './App.css';

function App() {
  const shoot = () => {
    alert(email+""+password);
  }
  const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');

  return (
    <div id="LoginPageBox">
      <h1>Login</h1>

      <div id="Email">
        <h2>Email</h2>
        <form>
          <input type="email" placeholder="Enter email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
        </form>
      </div>
      <div id="Passwort">
        <h2>Passwort</h2>
        <input type="password" placeholder="Enter Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
      </div>

      <button onClick={shoot}>Login</button>
    </div>
  );
}

export default App;
