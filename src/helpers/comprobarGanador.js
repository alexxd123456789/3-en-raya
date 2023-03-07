export const comprobarGanador = (tablero) => {
    // comprobamos las filas
    for (let i = 0; i < 3; i++) {
        if((tablero[i][0] == tablero[i][1] && tablero[i][1] == tablero[i][2]) && tablero[i][0] != 0){
            return tablero[i][1];
        }      
    }
    // comprobamos las columnas
    for(let i = 0; i < 3; i++){
        if((tablero[0][i] == tablero[1][i] && tablero[1][i] == tablero[2][i]) && tablero[0][i] != 0){
            return tablero[1][i];
        }
    }
    // comprobamos las diagonales
    if((tablero[0][0] == tablero[1][1] && tablero[1][1] == tablero[2][2]) && tablero[0][0] != 0){
        return tablero[1][1];
    }

    if((tablero[0][2] == tablero[1][1] && tablero[1][1] == tablero[2][0]) && tablero[0][2] != 0){
        return tablero[1][1];
    }


    return 0;
}