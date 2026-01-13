
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './login/Login'
import Home from './home/Home'
import SignUp from './sign-up/SignUp'


function App() {


  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  
  )
}

export default App
