import { useEffect, useState } from 'react'
import Door from "../../../../components/Door"
import styles from "../../../../styles/Game.module.css"
import { atualizarPortas, criarPortas } from '../../../../../functions/door'
import Link from "next/link"
import { useRouter } from 'next/router';

export default function Game() {

  // add state
  const [valido, setValido] = useState(false)
  const [portas, setPortas] = useState([])

  const router = useRouter()

  /* watch the changes in a given variable, and when this variable is changed, 
  the function within useEffect will be executed */
  useEffect(() => {
    
    const portas = +router.query.portas
    const temPresente = +router.query.temPresente
   
    const qtdePortasValida = portas >= 3 && portas <= 100
    const temPresenteValido = temPresente >= 1 && temPresente <= portas
    setValido( qtdePortasValida && temPresenteValido)

  }, [portas])

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
        { valido ? renderizarPortas() : <h1>invalid values!! restart the game</h1> }
      </div>
      <div className={ styles.botoes }>
        <Link href="/">
          <button>Restart Game!</button>
        </Link>
      </div>
    </div>
  )
}