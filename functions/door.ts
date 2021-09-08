import PortaModel from '../model/PortaModel';

export function criarPortas(qtde: number, portaCompresente: number): PortaModel[ ] {
  
  // create Array of the Doors with the qtde of doors and the selected door
  // Array.from({length: 10}, (_, i) => i +1)
  return Array.from({ length: qtde }, (_, i) => {
    const numero = i + 1
    const temPresente = numero === portaCompresente

    return new PortaModel(numero, temPresente)
  })

}

export function atualizarPortas(portas: PortaModel[], portaModificada: PortaModel): PortaModel[] {
  return portas.map(portaAtual => {
    const igualAModificada = portaAtual.numero === portaModificada.numero

    if (igualAModificada) {
      return portaModificada
    } else {
      return portaModificada.aberta ? portaAtual : portaAtual.desselecionar()
    }

  })
}