import config, {getColoredPieces, evaluateBoard} from './config.js'
// import getAvailable from './getAvailable.js'
// import undoMove from './undoMove.js'
// import makeMove from './makeMove.js'
// import { getBlackPiece, getWhitePiece } from './getPieces.js'


//minimax returns best score and best move for black pieces
function minimax(depth,chess_board, maximizingPlayer){

    // if(depth == 0){
    //     return evaluateBoard(board)
    // }

    //if AI turn
    if(maximizingPlayer){

        //declare the best score, move
        let bestScore = -Infinity;
        let bestMove = null;
        let piece_index = ""

        //get all black pieces for current board
        const black_pieces = getColoredPieces(chess_board).black_pieces;


        // go through black pieces
        black_pieces.forEach(piece => {
            console.log('____________')
            console.log('__________________')
            console.log(`                   [CHECKING PIECE] - checking piece moves - ${piece.name} at ${piece.tile_index}`)
 

            const piece_moves = piece.getAvailableMoves(chess_board);
            console.log('[PIECE MOVES]',piece_moves.flat())
            //make the moves for each piece and return the best move based on best score
            piece_moves.flat().forEach(move =>{
                let score = evaluateBoard(piece, move, chess_board)

                if (score > bestScore){
                    bestScore = score
                    bestMove = move
                    piece_index = piece.tile_index
                }
                console.log(`[MINIMAX EVALUATION] - evaluates the cost of moving a piece to ${move} with score - ${score}`)
            })           
            console.log('__________________')
            console.log('____________')
        })
        // console.log(bestMove,bestScore,' _____BEST MOVE _____')
        return [bestMove, bestScore, piece_index]
        
    }
}

export default minimax