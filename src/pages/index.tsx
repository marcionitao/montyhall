import Card from '../components/Card';
import styles from '../styles/Form.module.css'
import Link from "next/link"
import NumberInput from '../components/NumberInput';
import { useState } from 'react';

export default function Form() {

  const [qtdePortas, setQtdePortas] = useState(3)
  const [comPresente, setComPresente] = useState(1)

  return (
    <div className={ styles.formulario }>
      <div>
        <Card bgcolor="#c0392c">
          <h1>Monty Hall</h1>
        </Card>
        <Card>
          <NumberInput text= "number of doors?" 
            value={ qtdePortas } onChange={ novaQtde => setQtdePortas(novaQtde) }
          />
        </Card>
      </div>
      <div>
        <Card>
          <NumberInput text= "door with Gif?" 
            value={ comPresente } onChange={ novaPortaComPresente => setComPresente(novaPortaComPresente) }
          />
        </Card>
        
        <Card bgcolor="#28a085">
          <Link href={ `/game/${ qtdePortas }/${ comPresente }` }>
            <h2 className={ styles.link }>Start</h2>
          </Link>
        </Card>
      </div>
    </div>
  )
}
