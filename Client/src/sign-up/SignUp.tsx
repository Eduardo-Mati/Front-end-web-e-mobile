import { useNavigate } from 'react-router-dom';
import './SignUp.css'
import { useState } from 'react';

const SignUp = () => {
    const navigation = useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpf, setCpf] = useState('')
    const [showPassword, setShowPassword] = useState(false);
     
    const sendRequest = async(e : any) => {
    e.preventDefault()
    //'http://localhost:3000/api/user/register'
    const response = await fetch('https://front-end-web-e-mobile-backend.onrender.com/api/user/register', {
        method: 'POST',
        headers: {
           'Content-Type': 'application/json'
        },
        body: JSON.stringify({name,email,password,cpf})
        })
        if(response.ok){
            alert('Cadastro realizado com sucesso!')
            navigation('/login')
        }else{
           alert('Não foi possível fazer o cadastro')
        }
    }

    return (

        <div id="signup-page">
            <div id="mensage">
                <h1>Sign Up</h1>
            
                <form id="form-container" onSubmit={(e : any) => {sendRequest(e)}}>
                    <div className="form-group">
                        <button type="button"><i className="fa-solid fa-user"></i></button><input value={name} onChange={(e) => setName(e.target.value)} type="text" id="name" placeholder="Digite seu nome" required />     
                    </div>
                    <div className="form-group">
                        <button type="button"><i className="fa-solid fa-envelope"></i></button><input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" placeholder="Digite seu email" required />     
                    </div>
                    <div className="form-group">
                        <button type="button"><i className="fa-solid fa-lock"></i></button><input value={password} onChange={(e) => setPassword(e.target.value)} type={showPassword ? "text" : "password"} id="password" placeholder="Digite sua senha" required />
                        <button id="show-password" type="button" onClick={() => setShowPassword(!showPassword)}><i className={showPassword ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"}></i></button>
                    </div>
                    <div className="form-group">
                        <button type="button"><i className="fa-solid fa-id-card"></i></button><input value={cpf} onChange={(e) => setCpf(e.target.value)} type="text" id="cpf" placeholder="Digite seu CPF" required />
                    </div>
                        
                    <button id="b-l" type="submit">Sign Up</button>

                </form>
            </div>
        </div>
    )
}

export default SignUp