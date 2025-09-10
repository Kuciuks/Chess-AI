import config,{invertBoard, getColoredPieces} from './config.js'
import handleTileClick from './human.js'
import initiateAI from './Initiate.js'
import uploadImages from './uploadImages.js'
import whoTurn from './whoTurn.js'

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
    whoTurn(configInstance.toggle, configInstance.chess_board)
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
    if (click_event.className == 'player-color-select'){
        console.log(click_event.value)
        invertBoard(configInstance)
        uploadImages()
    }
    if (click_event.className == 'board-score'){

        console.log('selected board score')
    }
}



//add event listener to chess board parent file when the script is loaded
function processChessBoardInteract(event){
    const tile = event.target.closest('.tile');
    event.preventDefault();

    const turn_state = whoTurn(configInstance.toggle, configInstance.chess_board)

    //if the click was not on a tile, do nothing
    if (!tile) {
        return
    }

    //if true then its human turn
    if(turn_state){
        handleTileClick(tile,configInstance.chess_board, configInstance)
    }
}

