import{ useState } from 'react';
import { loginUser } from '../services/auth.service';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async () => {
    try {
      const response = await loginUser({email, password});
      login(response.token);
      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };
    return (
      <div>
        <h2>Login</h2>  
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  };
     


export default Login;