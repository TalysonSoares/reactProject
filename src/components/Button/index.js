export default function Button (props) {
    let style = "btn btn-"  + props.cor; //minuto 16 criando variavel
  
    return(
      <button className={style}>{props.children}</button>
    )
  }
  