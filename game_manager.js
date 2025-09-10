import config from './config.js'
import handleTileClick from './human.js'
import whoTurn from './whoTurn.js'

const configInstance = config.getInstance()

const DOM_game_details = document.querySelector('.chess-stats')

DOM_game_details.addEventListener('click',event =>{

    const click_event = event.target

    if (click_event.id == 'difficulty'){
        console.log('selected difficulty select',click_event.value)   

        let current_difficulty = configInstance.depth

        let selected_difficulty = event.target.value

        if(current_difficulty != selected_difficulty){
            configInstance.depth = selected_difficulty
        }
        console.log(configInstance.depth,'depth babbbyyyyyyy',selected_difficulty,current_difficulty)
    }

    if (click_event.className == 'player-color-select'){
        console.log('selected player color select')
    }

    if (click_event.className == 'board-score'){
        console.log('selected board score')
    }

})



//add event listener to chess board parent file when the script is loaded
const DOM_chess_table = document.querySelector('.chess-table')
function processChessBoardInteract(event){
    //find the specific tile that was clicked on
    const tile = event.target.closest('.tile');
    console.log(tile)
    event.preventDefault();
    //if the click was not on a tile, do nothing
    if (!tile) {
        return
    }
    if (configInstance.toggle % 2 !== 0){
        //if a tile was clicked, call the function that handles the game logic
        handleTileClick(tile, configInstance.chess_board, configInstance);
    }
    else if (configInstance.toggle % 2 == 0){
        console.log('AI turn actually !!!')
        return
    }
}
DOM_chess_table.addEventListener('click', processChessBoardInteract)
DOM_chess_table.addEventListener('touched', processChessBoardInteract)



