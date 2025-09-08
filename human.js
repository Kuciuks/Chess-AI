import config, {getColoredPieces, evaluateBoard} from './config.js'
import paintTiles from "./paintTiles.js"
import moveBestPiece from './getBestMove.js'
import whoTurn from './whoTurn.js'

const configInstance = config.getInstance()

//add event listener to chess board parent file when the script is loaded
const DOM_chess_table = document.querySelector('.chess-table')
DOM_chess_table.addEventListener('click', event => {
    //find the specific tile that was clicked on
    const tile = event.target.closest('.tile');

    //if the click was not on a tile, do nothing
    if (!tile) {
        return
    }
    if (configInstance.toggle % 2 !== 0){
        //if a tile was clicked, call the function that handles the game logic
        handleTileClick(tile, configInstance.chess_board);
    }
    else if (configInstance.toggle % 2 == 0){
        console.log('AI turn actually !!!')
        return
    }
})


function handleTileClick(tile, chess_board){
    console.log(`[SELECTION] - currently selected piece ${tile.innerText} at ${tile.id}`)
    //if selection is empty and tile text is full 
    if(!configInstance.selection && chess_board[tile.id] !== null && chess_board[tile.id].color !== "Black"){

        const piece_moves = chess_board[tile.id].getAvailableMoves(chess_board)
        configInstance.selection = tile.id

        console.log(`[MOVE RETRIEVAL] - these are the current moves for your selection (also highlighted in orange) - ${piece_moves}`)

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

        const chess_board_after_move = moveBestPiece(tile.id, configInstance.selection, chess_board)
        configInstance.toggle += 1
        configInstance.chess_board = chess_board_after_move
        configInstance.selection = null

        paintTiles()
        whoTurn(configInstance.toggle ,chess_board_after_move)
    }

}
