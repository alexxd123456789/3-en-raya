import React, { useContext } from 'react'
import { GameContext } from '../context/GameContext'
import { Ficha } from './Ficha';
import { Victoria } from './Victoria';

export const Game = () => {

    const {partida, ganador, ponerFicha} = useContext(GameContext);
    

    
    
  return (
    <div id="game">
    {
        partida.map((fila, filaInd) => (
                <React.Fragment key={`${filaInd}`}>
                    {
                        fila.map((celda, colIndex) => (
                            <div key={`${filaInd}-${colIndex}`} 
                                 className={`celda row-${filaInd} col-${colIndex}`} 
                                 onClick={() => {ponerFicha(filaInd, colIndex)}}>
                                <Ficha valor={celda}/>
                            </div>
                        ))
                    }
                </React.Fragment>
            )
        )
    }
    </div>
  )
}
