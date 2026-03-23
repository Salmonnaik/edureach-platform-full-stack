import{ useState } from 'react';
import { registerUser } from '../services/auth.service';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSignup = async () => {
    try {
      const response = await registerUser({ name, email, password });
      login(response.token);
      navigate('/dashboard');
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

    return (
        <div>
            <h1>Signup</h1>
            <input placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleSignup}>Signup</button>
        </div>
    );
}   
export default Signup;