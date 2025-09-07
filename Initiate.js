import whoTurn from './whoTurn.js';
import minimax from './minimax.js';
import moveBestPiece from './getBestMove.js';
import config from './config.js';
const configInstance = config.getInstance()
//initiates the game process
function initiateAI(chess_board, currentPlayer){
    console.log('[Initiate script]')

    //store a copy of the main board before making the move
    let before_move_board = chess_board;

    
    console.log(currentPlayer,'------------------------------------------CURRENT PLAYER')

    let after_move_board = []
    //if the captured player is BLACK then activate the AI process
    if(!currentPlayer){
        console.log('Switching to AI')

        //acivate minimax and capture returned values
        let [best_move, best_score, original_index] = minimax(configInstance.depth, before_move_board, true)

        // console.log(best_move, best_score)

        //using returned minimax values take a step
        after_move_board = moveBestPiece(best_move, original_index, before_move_board)

        //add a point - switch turn
        configInstance.toggle +=1
        configInstance.chess_board = after_move_board
        
        console.log('Switching to human AI SIDE')
        whoTurn(configInstance.toggle, after_move_board)
        return
    }
    else if(currentPlayer){
        configInstance.toggle +=1
        console.log('Switching to human - humans turn, some error occured')
        whoTurn(configInstance.toggle, chess_board)
        return
    }

    console.log('do nothing')
}

export default initiateAI