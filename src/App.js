//minuto 7:00/ criando componente
function Button (props) {
  return(
    <button>{props.children}</button>
  )
}



// começo da aula, criando função app   //minuto 4:00
export default function App () {
  return (
    <div>
      <h1>Ola mundo</h1>
      <Button>
        <storng>Cadastro</storng>
      </Button>
      <h2>Subtitulo</h2>
    </div>
  )
}