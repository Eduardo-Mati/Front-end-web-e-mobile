import { useNavigate } from 'react-router-dom';
import './Login.css'
import { useState } from 'react';
import Cookies from 'js-cookie';


export default function Login() {
  const navigation = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

  
  const sendRequest = async(e : any) => {
    e.preventDefault()
    //'http://localhost:3000/api/user/login'
    const response = await fetch('https://front-end-web-e-mobile-backend.onrender.com/api/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email,password})
        })
        const json = await response.json()
        Cookies.set('token', json.token)

        if(response.ok){
            navigation('/home')
        }else{
            alert('Dados inválidos')
        }
    }

  const RegisterUser = (e : any) => {
    e.preventDefault()
    navigation('/signup')
  }
  
  return (
    <div className="login-page">
        <div className="login-container">
            <div className="left-container">
                <h1 id="titulo-s">Sign In To Developer</h1>
                <div id="icon-container">
                    <a href="https://www.facebook.com/"><button><i className="fa-brands fa-facebook"></i></button></a>
                    <a href="https://github.com/"><button><i className="fa-brands fa-github"></i></button></a>
                    <a href="https://www.google.com/?zx=1762273385617&no_sw_cr=1"><button><i className="fa-brands fa-google"></i></button></a>
                    <a href="https://www.linkedin.com/"><button><i className="fa-brands fa-linkedin"></i></button></a>
                </div>
                <h5 id="textin">or use your email account</h5>
                <form id="form-container" onSubmit={(e : any) => {sendRequest(e)}}>
                    <div className="form-group">
                        <button type="submit"><i className="fa-solid fa-envelope"></i></button><input value={email} onChange={(e) => {setEmail(e.target.value)}} type="email" id="email" placeholder="Digite seu email" required />     
                    </div>
                    <div className="form-group">
                        <button type="submit"><i className="fa-solid fa-lock"></i></button><input value={password} onChange={(e) => {setPassword(e.target.value)}} type="password" id="password" placeholder="Digite sua senha" required />
                    </div>
                    <div className="form-actions">
            
                        <a onClick={(e) => RegisterUser(e)} id="forgot-password">
                            Esqueceu a senha?
                        </a>

                        <button id="b-l" type="submit">Sign In</button>

                    </div>

                </form>
            </div>

            <div className="right-container">
                <h1 id="titulo-r">Hello, Friend!</h1>
                <h5 id="subtitulo-r">Enter your personal details and start journey with us</h5>
                <button id="b-r" type="submit" onClick={() => navigation('/signup')}>Sign Up</button>
            </div>

        </div>
      
    </div>
  );
}