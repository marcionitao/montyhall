import { useEffect, useState } from 'react'
import Door from "../../../components/Door"
import styles from "../../../styles/Game.module.css"
import { atualizarPortas, criarPortas } from '../../../../functions/door'
import Link from "next/link"
import { useRouter } from 'next/router';

export default function Game() {

  // add state
  const [portas, setPortas] = useState([])

  const router = useRouter()

  /* watch the changes in a given variable, and when this variable is changed, 
  the function within useEffect will be executed */
  useEffect(() => {
    // working with 2 parameters dynamics('[portas]' and '[temPresente]')
    const portas = +router.query.portas
    const temPresente = +router.query.temPresente
    setPortas(criarPortas(portas, temPresente))
  }, [router?.query])

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