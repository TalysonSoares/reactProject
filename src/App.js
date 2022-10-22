import "bootstrap/dist/css/bootstrap.css";
import Button from "./components/Button";
import React from "react";

export default function App () {
  const [items, setItems] = React.useState(0);
  const [amount, setAmout] = React.useState(0);

  const add = (price) => {
    setItems(items + 1);
    setAmout(amount + price)
  }

  return (
    <div className="container">
      <h1 className="mt-3">
       Carrinho de compra
       <span className="text-primary ms-3"> {items} </span> 
       <span className="text-success ms-3">R$ {amount} </span> 
      </h1>

      <hr />

      <div>
        <span className="me-3">Teclado</span>

        <button className="btn btn-success btn-sm" onClick={() => add(90)}>
          Adicionar
        </button>
      </div>
      
      <div>
        <span className="me-3">Mouse</span>

        <button className="btn btn-success btn-sm" onClick={() => add(32)}>
          Adicionar
        </button>

        {/* <Button onClick={add} cor="success">
          Adcionar ao Carrinho
        </Button> */}
      </div>
    </div>
  )
}