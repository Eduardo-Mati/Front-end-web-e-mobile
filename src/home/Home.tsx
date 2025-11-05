import './Home.css'

import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigation = useNavigate()
  return (
    <nav id="home-bar">
        <div id="brand">BRAND</div>
        <div id="nav-buttons">
            <button>HOME</button>
            <button>USERS</button>
            <button>FAQ</button>
            <button onClick={() => navigation('/login')}>SAIR</button>
        </div> 
        <div id="user-info">
            <button>
                <img src="https://cdn-icons-png.flaticon.com/512/147/147140.png"/>
            </button>
            <text> User Name </text>
        </div>
    </nav>
  )
}

export default Home