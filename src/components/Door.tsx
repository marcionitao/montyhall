import styles from "../styles/Door.module.css"
import PortaModel from "../../model/PortaModel"

// using class Porta
interface PortaProps {
  porta: PortaModel
}

export default function Door(props: PortaProps) {
  
  // working with porta and not props
  const { porta } = props;
  const selecionada = porta.selecionada ? styles.selecionada : '';

  return(
    <div className={ styles.area }>
      <div className={ `${ styles.estrutura } ${ selecionada }` }>
        <div className={ styles.porta }>
          <div className={ styles.numero }>{ porta.numero }</div>
          <div className={ styles.macaneta }></div>
        </div>
      </div>
      <div className={ styles.chao }></div>
    </div>
  )
}