import config from './config.js'
import handleTileClick from './human.js'
import uploadImages from './uploadImages.js'
import whoTurn from './whoTurn.js'
import { normal_chess_board, inverted_chess_board } from "./board_presets.js";

const configInstance = config.getInstance()


//getting chess-stats DOM element
const DOM_game_details = document.querySelector('.chess-stats')

//adding event listeners to chess-stats DOM element
DOM_game_details.addEventListener('click',manageChessStats)



//getting chess-board DOM element
const DOM_chess_table = document.querySelector('.chess-table')

//adding event listeners to chess-board DOM element
DOM_chess_table.addEventListener('click', processChessBoardInteract)
DOM_chess_table.addEventListener('touched', processChessBoardInteract)


document.addEventListener('DOMContentLoaded',initGame)





//initialising call
function initGame(event){
    console.log('dom loaded')
    configInstance.active_board = makeDeepCopy(normal_chess_board) // initial state for when the game starts
    console.log(configInstance.enemy_color)
    whoTurn(configInstance.toggle, configInstance.active_board, configInstance.enemy_color)
}




function manageChessStats(event){
    const click_event = event.target

    if (click_event.id == 'difficulty'){

        let current_difficulty = configInstance.depth
        let selected_difficulty = event.target.value

        if(current_difficulty != selected_difficulty){
            configInstance.depth = selected_difficulty
        }
    }
    if (click_event.className == 'player-color'){
        if(click_event.value == 2){
            configInstance.active_board = makeDeepCopy(normal_chess_board)
            configInstance.enemy_color = 'Black'
            uploadImages(configInstance.active_board)
            whoTurn(configInstance.toggle+1, configInstance.active_board, configInstance.enemy_color)
        }
        else if (click_event.value == 1){
            configInstance.active_board = makeDeepCopy(inverted_chess_board)
            configInstance.enemy_color = 'White'
            uploadImages(configInstance.active_board)
            whoTurn(configInstance.toggle+1, configInstance.active_board, configInstance.enemy_color)
        }
    }
    if (click_event.className == 'board-score'){

        console.log('selected board score')
    }
}



export function makeDeepCopy(chess_board){
    let deep_copy = chess_board.map(piece =>{
        if(!piece){
            return null
        }
        else if(piece.name === 'Border'){
            const Border = new piece.constructor(
                piece.name
            )
            return Border
        }

        const newPiece = new piece.constructor(
            piece.name,
            piece.value,
            piece.color,
            piece.tile_index,
            piece.DOM_name,
            piece.special_move = piece.name == "Pawn" ? true: undefined
        )
        return newPiece

    })
    return deep_copy
}



//add event listener to chess board parent file when the script is loaded
function processChessBoardInteract(event){
    const tile = event.target.closest('.tile');
    event.preventDefault();

    const turn_state = whoTurn(configInstance.toggle, configInstance.active_board ,configInstance.enemy_color)

    //if the click was not on a tile, do nothing
    if (!tile) {
        return
    }

    //if true then its human turn
    if(turn_state){
        handleTileClick(tile,configInstance.active_board, configInstance)
    }
}

export default {makeDeepCopy}