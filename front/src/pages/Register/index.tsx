import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../service/api";
import Img from "../../assets/1.png"
import Img2 from "../../assets/caf.png"
import "../Register/styles.css"

function Register(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigate();
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try{
            await api.post('api/auth/register', {email, password });
            alert('Registration sucessful!');
            navigation("/");
        } catch (error) {
            console.error('Registration error:', error);
            alert('Registration failed.');
        }
    };

    return (
      <div className="container">
        <form onSubmit={handleSubmit}>
        <img src={Img} className="img" alt="Register banner" />
          <div className="card">
            <h2>Register</h2>
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
              <button type="submit">Register</button>
              <h3>
                Possui conta! Faça o <Link to="/">Login</Link>
              </h3>
          </div>
          <img src={Img2} className="img2" alt="Register banner" />
        </form>
      </div>
  );
};

export default Register;