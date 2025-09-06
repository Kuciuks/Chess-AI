import getBoard from './getBoard.js';
import whoTurn from './whoTurn.js';
import minimax from './minimax.js';
import moveBestPiece from './getBestMove.js';
import uploadImages from './uploadImages.js';
import paintTiles from './paintTiles.js';
import config from './config.js';
import human from './human.js';
const configInstance = config.getInstance()



// console.log('[Initiate script]')

//initiates the game process
function initiateAI(){
    try{

        //store a copy of the main board before making the move
        let before_move_board = configInstance.chess_board;

        //capture which player's turn it is (WHITE / BLACK)
        // let currentPLayer = whoTurn(configInstance.toggle);

        //if the captured player is BLACK then activate the AI process
        if(true == true){

            //acivate minimax and capture returned values
            let [best_move, best_score, original_index] = minimax(configInstance.depth, before_move_board, true)

            console.log(best_move, best_score)

            //using returned minimax values take a step
            const after_move_board = moveBestPiece(best_move, original_index, before_move_board);


            
            //add a point - switch turn
            configInstance.toggle +=1;
        }



        configInstance.all_piece_moves = [];
        configInstance.black_pieces=[];
        configInstance.white_pieces = [];
        
        document.addEventListener('DOMContentLoaded',event =>{
            human()
        })
    }
    catch(err){
        console.log(err)
    }
    
}
initiateAI()
export default initiateAI