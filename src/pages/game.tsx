import { useState } from 'react'
import Door from "../components/Door";
import styles from "../styles/Game.module.css"
import { atualizarPortas, criarPortas } from '../../functions/door'
import Link from "next/link"

export default function Game() {

  // add state
  const [portas, setPortas] = useState(criarPortas(3,2))

  const renderizarPortas = () => {
    return portas.map(porta => {
      return <Door key={porta.numero} value={ porta } 
        onChange={ novaPorta => setPortas(atualizarPortas(portas, novaPorta)) }/>
    })
  }

  return (
    <div id={ styles.jogo }>
      <div className={ styles.portas }>
        { renderizarPortas() }
      </div>
      <div className={ styles.botoes }>
        <Link href="/">
          <button>Restart Game!</button>
        </Link>
      </div>
    </div>
  )
}