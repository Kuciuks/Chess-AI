import whoTurn from './whoTurn.js';
import minimax from './minimax.js';
import getBestMove from './getBestMove.js';
import config from './config.js';
const configInstance = config.getInstance()
//initiates the game process
function initiateAI(chess_board){
    console.log('[AI INITIATED]')

    //store a copy of the main board before making the move
    let before_move_board = chess_board;
    //if the captured player is BLACK then activate the AI process

        //acivate minimax and capture returned values
        let [best_move, best_score, original_index] = minimax(configInstance.depth, before_move_board, true)

        console.log(best_move, best_score, original_index,'+++++++++++++++++++++++++++++++++++')

        //using returned minimax values take a step
        let after_move_board = getBestMove.moveBestPiece(best_move, original_index, before_move_board)

        //add a point - switch turn
        configInstance.toggle +=1
        configInstance.chess_board = after_move_board
        
        whoTurn(configInstance.toggle, after_move_board)
}

export default initiateAI