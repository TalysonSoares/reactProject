import "bootstrap/dist/css/bootstrap.css";
import Button from "./components/Button";
import React from "react";

export default function App () {
  const [items, setItems] = React.useState(0);
  const add = () => {
    setItems(items + 1);
  }

  return (
    <div className="container">
      <h1 className="mt-3">
       Carrinho de compra
       <span className="text-primary ms-3"> {items} </span> 
      </h1>

      <hr />

      <div>
        <span className="me-3">Nome do Produto</span>

        <button className="btn btn-success btn-sm" onClick={add}>Adicionar</button>

        {/* <Button onClick={add} cor="success">
          Adcionar ao Carrinho
        </Button> */}
      </div>
    </div>
  )
}