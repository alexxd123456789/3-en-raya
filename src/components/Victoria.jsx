import React, { useContext } from 'react'
import { GameContext } from '../context/GameContext';

export const Victoria = ({jugador}) => {
    if(jugador == 0){
        return <></>;
    }
    
    const {restart} = useContext(GameContext);

    if(jugador == 3){
      return (
        <div id='empate'>
          <div>
            <p>Vaya, habeis empatado...</p>
            <button onClick={restart}>Reiniciar</button>
          </div>
        </div>
      )
    }

    
  return (
    <div id="victoria">
        <div>
            <p>Ha ganado el jugador {jugador == 1 ? 'X' : 'O'}</p>
            <button onClick={restart}>Reiniciar</button>
        </div>
    </div>
  )
}
