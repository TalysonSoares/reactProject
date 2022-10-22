import "bootstrap/dist/css/bootstrap.css";
import Button from "./components/Button";

export default function App () {
  return (
    <div className="container">
      <h1 className="mt-3">Carrinho de compras</h1>

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