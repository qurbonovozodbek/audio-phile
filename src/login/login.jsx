import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if (storedEmail && storedPassword) {
      setEmail(storedEmail);
      setPassword(storedPassword);
    }
  }, []);

  function validate() {
    if (email.length === 0 || password.length === 0) {
      alert('Please enter a valid email and password');
      return false;
    }
    return true;
  }

  const handleLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
      
      setIsLoggedIn(true);
      navigate('/');
    }
  };

  return (
    <div className='login'>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
