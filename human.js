import paintTiles from "./paintTiles.js"
import getBestMove from './getBestMove.js'
import whoTurn from './whoTurn.js'
import { King } from "./piece_class.js"




async function handleTileClick(tile, chess_board,configInstance){

    const active_board = configInstance.active_board
    
    console.log(`[SELECTION] - currently selected piece ${tile.innerText} at ${tile.id}`)
    //if selection is empty and tile text is full 
    if(!configInstance.selection && chess_board[tile.id] !== null && chess_board[tile.id].color !== configInstance.enemy_color){


        const piece_moves = active_board[tile.id].getAvailableMoves(chess_board)
        configInstance.selection = tile.id

        console.log(`[MOVE RETRIEVAL] - these are the current moves for your selection (highlighted in orange) - ${piece_moves}`, chess_board[tile.id],tile.id)

        piece_moves.flat().forEach(move => {
            document.getElementById(move).style.backgroundColor = 'orange'
        })
    }
    
    //If selected is the same tile, unselect
    else if (configInstance.selection === tile.id){
        configInstance.selection = null
        console.log(`[DESELECT] - you have deselected the piece ${tile.innerText} at ${tile.id}`)
        paintTiles()
    }

    if(tile.style.backgroundColor === 'orange'){

        await getBestMove.moveBestPiece(tile.id, configInstance.selection, chess_board)
        configInstance.toggle += 1
        configInstance.selection = null

        paintTiles()
        whoTurn(configInstance.toggle ,chess_board,configInstance.enemy_color)
    }

}

export default handleTileClick
