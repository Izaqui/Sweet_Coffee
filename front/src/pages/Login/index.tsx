import React, { useState } from "react";
import api from "../../service/api";
import "../Login/styles.css";
import Img from "../../assets/cfr.png";
import Img2 from "../../assets/cr.png";
import Icon from "../../assets/icon.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await api.post('/api/users', { email, password });
            localStorage.setItem('token', response.data.token);
            alert('Login successful!');
            navigate("/dashboard"); 
        } catch (error) {
            console.error('Login error:', error);
            alert('Login failed. Please check your credentials.');
        }
    };

    return (
        <div className="login-container">
            <form className="form" onSubmit={handleSubmit}>
                <img src={Img} className="img" alt="Login banner" />
                <div className="card-login">
                    <h1>Login</h1>
                    <img src={Icon} className="icon" alt="Login icon" />
                    <input
                        type="email"
                        placeholder=" Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder=" Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">Enter</button>
                    <h3>
                    Criar cadastro <Link to="/register">aqui!</Link>
                    </h3>
                </div>
                <img src={Img2} className="img2" alt="Footer banner" />
            </form>
        </div>
    );
}

export default Login;
