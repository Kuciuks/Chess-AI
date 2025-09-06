import whoTurn from './whoTurn.js';
import minimax from './minimax.js';
import moveBestPiece from './getBestMove.js';
import config from './config.js';
import human from './human.js';
const configInstance = config.getInstance()

console.log('[Initiate script]')

//initiates the game process
function initiateAI(){
    try{

        //store a copy of the main board before making the move
        let before_move_board = configInstance.chess_board;

        //capture which player's turn it is (WHITE / BLACK)
        let currentPLayer = whoTurn(configInstance.toggle);

        let after_move_board = null
        //if the captured player is BLACK then activate the AI process
        if(!currentPLayer){

            //acivate minimax and capture returned values
            let [best_move, best_score, original_index] = minimax(configInstance.depth, before_move_board, true)

            console.log(best_move, best_score)

            //using returned minimax values take a step
            after_move_board = moveBestPiece(best_move, original_index, before_move_board);
            console.log(after_move_board)
            console.log(before_move_board)

            //add a point - switch turn
            configInstance.toggle +=1;
        }


        
        document.addEventListener('DOMContentLoaded',event =>{
            human(after_move_board)
        })
    }
    catch(err){
        console.log(err)
    }
    
}
initiateAI()
export default initiateAI