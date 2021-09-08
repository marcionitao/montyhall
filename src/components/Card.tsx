import styles from "../styles/Card.module.css"

interface CartaoProps {
  bgcolor?: string
  children?: any
}

export default function Card(props: CartaoProps) {

  return(
    <div className={ styles.cartao } 
      // if color is not define, color is white
      style={{ backgroundColor: props.bgcolor ?? '#fff' }}
    >
      { props.children }
    </div>
  )
}