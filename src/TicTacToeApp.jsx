import React, { useContext } from 'react'
import { Game } from './components/Game';
import { Victoria } from './components/Victoria';
import { GameContext } from './context/GameContext'

export const TicTacToeApp = () => {
    const {turno, ganador} = useContext(GameContext);
    
    
    
  return (
    <>
        <Victoria jugador={ganador}/>
        <h1>3 en raya</h1>
        <h3>Turno del jugador {turno == 1 ? 'X' : 'O'}</h3>
        <Game/>
    </>
  )
}
