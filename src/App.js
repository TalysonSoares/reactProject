import "bootstrap/dist/css/bootstrap.css";
import Button from "./components/Button";
import React from "react";

export default function App () {
  const [items, setItems]
  return (
    <div className="container">
      <h1 className="mt-3">
       Carrinho de compra
       <span className="text-primary ms-3">0</span> 
      </h1>

      <hr />

      <div>
        <span className="me-3">Nome do Produto</span>

        <Button cor="success">
          Adcionar ao Carrinho
        </Button>
      </div>
    </div>
  )
}