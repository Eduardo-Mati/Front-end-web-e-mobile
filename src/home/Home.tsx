import './Home.css'
import './Produtos'
import { useNavigate } from 'react-router-dom'
import Produtos from './Produtos'

const Home = () => {
    const navigation = useNavigate()
  return (
    <div className='homepage'>    
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

        <div className='productZone'>
            <div id="product-container">
                <Produtos
                    image="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                    name="Produto 1"
                    description="Descrição do Produto 1"
                    price={100}
                />
            </div>
        </div>
    </div>
    )
}

export default Home