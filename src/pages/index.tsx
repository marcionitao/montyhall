import PortaModel from "../../model/PortaModel";
import Door from "../components/Door";
import Gif from "../components/Gif";
import { useState } from "react";
import { atualizarPortas, criarPortas } from '../../functions/door';

export default function Home() {

  // add state
  const [portas, setPortas] = useState(criarPortas(3,2))

  const renderizarPortas = () => {
    return portas.map(porta => {
      return <Door key={porta.numero} value={ porta } 
        onChange={ novaPorta => setPortas(atualizarPortas(portas, novaPorta)) }/>
    })
  }

  return (
    <div style={{display:"flex"}}>
      { renderizarPortas() }
    </div>
  )
}
