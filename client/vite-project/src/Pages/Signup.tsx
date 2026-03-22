import{useState} from 'react';
import {api} from '../Services/api';

const Signup = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const handleSignup = async () => {
             await api.post('/signup',{email,password});
             alert('Signup successful! Please login.');
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