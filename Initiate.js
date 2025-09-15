import whoTurn from './whoTurn.js';
import minimax from './minimax.js';
import getBestMove from './getBestMove.js';
import config from './config.js';
const configInstance = config.getInstance()
//initiates the game process
function initiateAI(chess_board,enemy){
    console.log('[AI INITIATED]', enemy)
    //acivate minimax and capture returned values
    let [best_move, best_score, original_index] = minimax(configInstance.depth, chess_board, enemy, -Infinity, Infinity)
    console.log(chess_board)
    console.log(`[AI MOVED] - took a move to take [${chess_board[best_move]?.name !== undefined ? chess_board[best_move].name :'EMPTY'}] with a ${chess_board[original_index].name};  with a board score ${best_score}`)
    console.log(`[AI MOVED] - Moved piece from ${original_index} to ${best_move}`)
    //using returned minimax values take a step
    getBestMove.moveBestPiece(best_move, original_index, chess_board)

    //add a point - switch turn
    configInstance.toggle +=1
    whoTurn(configInstance.toggle, chess_board,configInstance.enemy_color)
}

export default initiateAI