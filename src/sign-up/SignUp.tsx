import { useNavigate } from 'react-router-dom';
import './SignUp.css'

const SignUp = () => {
    const navigation = useNavigate()
    const sendRequest = (e : any) => {
        e.preventDefault()
        navigation('/login')
    }

    return (
        
       <form id="form-container" onSubmit={(e : any) => {sendRequest(e)}}>
                    <div className="form-group">
                        <button type="submit"><i className="fa-solid fa-envelope"></i></button><input type="email" id="email" placeholder="Digite seu email" required />     
                    </div>
                    <div className="form-group">
                        <button type="submit"><i className="fa-solid fa-lock"></i></button><input type="password" id="password" placeholder="Digite sua senha" required />
                    </div>
                
                    <button id="b-l" type="submit">Sign In</button>

                </form>
    )
}

export default SignUp