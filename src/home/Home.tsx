import { useEffect, useState, type FormEvent } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import Produtos from './Produtos';

// Interface para tipar o Produto conforme vem do MongoDB (_id, etc)
interface ProductData {
  _id: string;
  name: string;
  image: string;
  description: string;
  price: number;
  // Campos extras do seu Backend
  inStock: boolean;
  quantity: number;
  validity: string;
  manufacturingDate: string;
}

const Home = () => {
    const navigation = useNavigate();
    

    const [products, setProducts] = useState<ProductData[]>([]);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        image: '',
        description: '',
        price: 0,
        inStock: true,
        quantity: 0,
        validity: '',
        manufacturingDate: ''
    });

    // 1. Buscar produtos do Backend ao carregar a página
    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            // Ajuste a porta (ex: 3000, 5000) conforme seu server.js está rodando
            const response = await fetch('http://localhost:3000/api/product'); // ou /api/products
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error("Erro ao buscar produtos:", error);
        }
    };

    // 2. Função para enviar o novo produto (POST)
    const handleCreateProduct = async (e: FormEvent) => {
        e.preventDefault(); // Evita recarregar a página

        try {
            const response = await fetch('http://localhost:3000/api/product/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert("Produto cadastrado com sucesso!");
            } else {
                alert("Erro ao cadastrar produto. Verifique os campos.");
            }
        } catch (error) {
            console.error("Erro na requisição:", error);
        }
    };

    return (
        <div className='homepage'>    
            <nav id="home-bar">
                <div id="brand">BRAND</div>
                <div id="nav-buttons">
                    <button>HOME</button>
                    <button>USER</button>
                    <button>FAQ</button>
                    <button onClick={() => setShowForm(!showForm)}>
                        {showForm ? 'CANCELAR ADIÇÃO' : 'ADICIONAR PRODUTO'}
                    </button>
                    <button onClick={() => navigation('/login')}>SAIR</button>
                </div> 
                <div id="user-info">
                    <button>
                        <img src="https://cdn-icons-png.flaticon.com/512/147/147140.png" alt="User" />
                    </button>
                    <text> User Name </text>
                </div>
            </nav>

            {/* Área do Formulário de Cadastro (Aparece só se showForm for true) */}
            {showForm && (
                <div style={{ background: '#f0f0f0', padding: '20px', margin: '20px', borderRadius: '8px' }}>
                    <h3>Novo Produto</h3>
                    <form onSubmit={handleCreateProduct} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '400px' }}>
                        <input 
                            type="text" placeholder="Nome" required 
                            value={formData.name} 
                            onChange={e => setFormData({...formData, name: e.target.value})} 
                        />
                        <input 
                            type="text" placeholder="URL da Imagem" required 
                            value={formData.image} 
                            onChange={e => setFormData({...formData, image: e.target.value})} 
                        />
                        <input 
                            type="text" placeholder="Descrição" 
                            value={formData.description} 
                            onChange={e => setFormData({...formData, description: e.target.value})} 
                        />
                        <input 
                            type="number" placeholder="Preço" required 
                            value={formData.price} 
                            onChange={e => setFormData({...formData, price: parseFloat(e.target.value)})} 
                        />
                        <input 
                            type="number" placeholder="Quantidade" required 
                            value={formData.quantity} 
                            onChange={e => setFormData({...formData, quantity: parseInt(e.target.value)})} 
                        />
                        <label>Validade:</label>
                        <input 
                            type="date" required 
                            value={formData.validity} 
                            onChange={e => setFormData({...formData, validity: e.target.value})} 
                        />
                        <label>Data Fabricação:</label>
                        <input 
                            type="date" required 
                            value={formData.manufacturingDate} 
                            onChange={e => setFormData({...formData, manufacturingDate: e.target.value})} 
                        />
                        <button type="submit">Salvar Produto</button>
                    </form>
                </div>
            )}

            <div className='productZone'>
                <div id="product-container">
                    {/* 3. Renderização dinâmica usando .map */}
                    {products.length > 0 ? (
                        products.map((prod) => (
                            <Produtos
                                key={prod._id} // MongoDB usa _id
                                image={prod.image}
                                name={prod.name}
                                description={prod.description || "Sem descrição"}
                                price={prod.price}
                            />
                        ))
                    ) : (
                        <p>Nenhum produto encontrado.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Home;