import config, {getColoredPieces, evaluateBoard} from './config.js'
import paintTiles from "./paintTiles.js"
import moveBestPiece from './getBestMove.js'
import whoTurn from './whoTurn.js'

const configInstance = config.getInstance()

//add event listener to chess board parent file when the script is loaded
const DOM_chess_table = document.querySelector('.chess-table')
DOM_chess_table.addEventListener('click', event => {
    console.log('human.js CALL 2')
    //find the specific tile that was clicked on
    const tile = event.target.closest('.tile');

    //if the click was not on a tile, do nothing
    if (!tile) {
        console.log('human.js CALL 3')
        return
    }
    if (configInstance.toggle % 2 !== 0){
        console.log('player turn')
        //if a tile was clicked, call the function that handles the game logic
        handleTileClick(tile, configInstance.chess_board);
    }
    else if (configInstance.toggle % 2 == 0){
        console.log('AI turn actually !!!')
        return
    }
})


function handleTileClick(tile, chess_board){
    console.log(tile)
    console.log(chess_board[tile.id])
//if selection is empty and tile text is full 
    if(!configInstance.selection && chess_board[tile.id] !== null && chess_board[tile.id].color !== "Black"){
        console.log('human.js CALL 5')

        const piece_moves = chess_board[tile.id].getAvailableMoves(chess_board)
        configInstance.selection = tile.id

        console.log(piece_moves, 'moves')

        piece_moves.flat().forEach(move => {
            console.log('human.js CALL 6', piece_moves)
            console.log(move)
            document.getElementById(move).style.backgroundColor = 'orange'
        })
    }
    
    //If selected is the same tile, unselect
    else if (configInstance.selection === tile.id){
        console.log('human.js CALL 7')
        configInstance.selection = null
        paintTiles()
    }

    if(tile.style.backgroundColor === 'orange'){
        console.log('human.js CALL 80')

        const chess_board_after_move = moveBestPiece(tile.id, configInstance.selection, chess_board)
        console.log(chess_board_after_move[tile.id],'--------------------------------------')
        configInstance.toggle += 1
        configInstance.chess_board = chess_board_after_move
        configInstance.selection = null

        paintTiles()
        whoTurn(configInstance.toggle ,chess_board_after_move)
    }

}

//currenly the game can be player [human vs human] and [human vs AI]
//controller for the human player

function human(chess_board){
    console.log('human.js CALL 1')

}


export default human