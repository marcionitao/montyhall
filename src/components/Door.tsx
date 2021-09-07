import styles from "../styles/Door.module.css"
import PortaModel from "../../model/PortaModel"
import Gif from "./Gif";

// using class Porta and your properies
interface PortaProps {
  value: PortaModel
  // using the methods and generate new porta
  onChange: (novaPorta: PortaModel) => void
}
// "props" have been of type "interface"
export default function Door(props: PortaProps) {
  
  // working with porta and not props
  const porta = props.value;
  const selecionada = porta.selecionada && !porta.aberta ? styles.selecionada : '';

  const alternarSelecao = (e) =>  props.onChange(porta.alternarSelecao())
  
  const abrir = (e: any) =>  {
    e.stopPropagation()
    props.onChange(porta.abrir())
  }
   
  const renderizarPorta = () => {
    return (
      <div className={ styles.porta }>
          <div className={ styles.numero }>{ porta.numero }</div>
          <div className={ styles.macaneta } onClick={ abrir }></div>
      </div>
    )
  }
  
  return(
    <div className={ styles.area } onClick={ alternarSelecao }> 
      <div className={ `${ styles.estrutura } ${ selecionada }` }>
        { porta.fechada ? 
          renderizarPorta() : 
          porta.temPresente ? <Gif /> : false
        }
      </div>
      <div className={ styles.chao }></div>
    </div>
  )
}