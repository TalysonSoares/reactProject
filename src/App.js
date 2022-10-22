import "bootstrap/dist/css/bootstrap.css";
// import Button from "./components/Button";
import React from "react";

export default function App () {
  const [items, setItems] = React.useState(0);
  const [amount, setAmout] = React.useState(0);
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    fetch('http://192.168.3.112:8000/produtos')
      .then(res => res.json())
      .then(dados => setProducts(dados));
  }, []);

  const add = (price) => {
    setItems(items + 1);
    setAmout(amount + price)
  }

  const CardProduto = (props) => {
    return (
      <div className="mt-2">
        <span className="me-3"> {props.nome}</span>

        <button className="btn btn-success btn-sm" onClick={() => add(props.valor)}>
          Adicionar
        </button>
      </div>
    )
  }

  return (
    <div className="container">
      <h1 className="mt-3">
       Carrinho de compra
       <span className="text-primary ms-3"> {items} </span> 
       <span className="text-success ms-3">R$ {amount} </span> 
      </h1>

      <hr />
        {products.length} produtos encontrados
      <hr />


      {products.map(cadaProduto => <CardProduto {...cadaProduto}/>)}
      
  </div>
  )
}