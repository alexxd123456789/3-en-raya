import { useState } from "react";
import { comprobarGanador } from "../helpers/comprobarGanador";
import { GameContext } from "./GameContext"

export const GameProvider = ({children}) => {
    const initialState = [[0,0,0],
                          [0,0,0],
                          [0,0,0]];
    
    const [partida, setPartida] = useState(initialState);
    const [turno, setTurno] = useState(1);
    const [ganador, setGanador] = useState(0);
    const [nturnos, setNturnos] = useState(0);

    const cambiarTurno = () => {
        setTurno(value => value == 1 ? 2 : 1);
    }

    const ponerFicha = (x,y) => {
        if(partida[x][y] == 0){
            setPartida((valor) => {
                const nValue = valor;
                nValue[x][y] = turno;
                setGanador(comprobarGanador(nValue))
                return nValue;
            });
            cambiarTurno();
            setNturnos(turnos => {
                if(turnos + 1 == 9 && ganador == 0){
                    setGanador(3);
                }
                return turnos + 1;
            });
            console.log(nturnos);
        }
    }

    const restart = () => {
        setPartida(initialState);
        setGanador(0);
        setTurno(1);
        setNturnos(0);
    }
    
    
    
    return (
        <GameContext.Provider value={{partida, turno, ponerFicha, restart, ganador}}>
            {children}
        </GameContext.Provider>
    );
}