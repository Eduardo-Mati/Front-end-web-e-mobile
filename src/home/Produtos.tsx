// Defina a "forma" dos dados que o componente vai receber
interface ProdutosProps {
  image: string;
  name: string;
  description: string;
  price: number;
}

// Receba "props" e desestruture as variáveis (note as chaves { } em volta dos argumentos)
function Produtos({ image, name, description, price }: ProdutosProps) {
  return (
    <div className='produto'>
      <img src={image} alt={name} /> {/* Adicionei alt por boa prática */}
      <p>{name}</p>
      <h3>{description}</h3>
      <p>R$ {price}</p>
    </div>
  );
}

export default Produtos;