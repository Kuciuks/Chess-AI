import config, {getColoredPieces, evaluateBoard} from './config.js'
import getBestMove from './getBestMove.js'
// import getAvailable from './getAvailable.js'
// import undoMove from './undoMove.js'
// import makeMove from './makeMove.js'
// import { getwhitePiece, getWhitePiece } from './getPieces.js'


//minimax returns best score and best move Sfor black pieces
function minimax(depth,chess_board, maximizingPlayer){

    if(depth == 0){
        let board_score = evaluateBoard(chess_board)
        console.log(board_score)
        console.log(' __________________________________                 __________________________________')
        console.log(' __________________________________                 __________________________________')

        return [null,board_score,null]
    }

    //if AI turn
    if(maximizingPlayer){

        //declare the best score, move
        let bestScore = -Infinity;
        let bestMove = null;
        let piece_index = 0


        //get all black pieces for current board
        const black_pieces = getColoredPieces(chess_board).black_pieces;

        // go through black pieces
        black_pieces.forEach(piece => {
            const original_index = piece.tile_index


            console.log('\n\n')
            console.log('\n\n')
            console.log(`[NEW PIECE MOVING - ${piece.name}]`)


            const piece_moves = piece.getAvailableMoves(chess_board);

            //make the moves for each piece and return the best move based on best score
            piece_moves.flat().forEach(move =>{

                const cost = evaluateBoard(chess_board)

                const [chess_board_after_move, removed_piece] = getBestMove.movePiece(move,original_index,chess_board)

                const minimax_results = minimax(depth-1, chess_board_after_move, false)

                getBestMove.undoMovePiece(piece.tile_index,original_index,chess_board_after_move, removed_piece)

                if (minimax_results[1] < cost){
                    bestScore = minimax_results[1]
                    bestMove = move
                    piece_index = piece.tile_index
                }
            })           
        })
        return [bestMove, bestScore, piece_index]
    }
    else if(!maximizingPlayer){
        
        //declare the best score, move
        let bestScore = Infinity;
        let bestMove = null;
        let piece_index = 0


        //get all white pieces for current board
        const white_pieces = getColoredPieces(chess_board).white_pieces;


        // go through white pieces
        white_pieces.forEach(piece => {
            const original_index = piece.tile_index


            console.log('\n\n')
            console.log('\n\n')
            console.log(`[NEW PIECE MOVING - ${piece.name}]`)


            const piece_moves = piece.getAvailableMoves(chess_board);

            //make the moves for each piece and return the best move based on best score
            piece_moves.flat().forEach(move =>{

                const cost = evaluateBoard(chess_board)

                const [chess_board_after_move, removed_piece] = getBestMove.movePiece(move,original_index,chess_board)

                const minimax_results = minimax(depth-1, chess_board_after_move, false)

                getBestMove.undoMovePiece(piece.tile_index,original_index,chess_board_after_move, removed_piece)

                if (minimax_results[1] > cost){
                    bestScore = minimax_results[1]
                    bestMove = move
                    piece_index = piece.tile_index
                }
            })           
        })
        return [bestMove, bestScore, piece_index]
    }
}

export default minimax