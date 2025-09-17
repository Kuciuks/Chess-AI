import config, {getColoredPieces, evaluateBoard} from './config.js'
import getBestMove from './getBestMove.js'


//minimax returns best score and best move Sfor black pieces
function minimax(depth,chess_board, maximizingPlayer, alpha, beta, active_board){

    if(depth == 0){
        let board_score = evaluateBoard(chess_board)
        return [null,board_score,null]
    }

    //if AI turn
    if(!maximizingPlayer){
        //declare the best score, move
        let bestScore = Infinity;
        let bestMove = null;
        let piece_index = 0

        // const active_board = configInstance.active_board

        //get all black pieces for current board
        const black_pieces = getColoredPieces(chess_board).black_pieces;
        // go through black pieces
        for(let piece of black_pieces){
            const original_index = piece.tile_index

            const piece_moves = active_board[original_index].getAvailableMoves(chess_board);
            //make the moves for each piece and return the best move based on best score
            for(let move of piece_moves.flat()){

                const [chess_board_after_move, removed_piece] = getBestMove.movePiece(move, original_index, chess_board)

                const minimax_results = minimax(depth-1, chess_board_after_move, false, alpha, beta, active_board)

                getBestMove.undoMovePiece(move,original_index,chess_board_after_move, removed_piece)

                if (minimax_results[1] < bestScore){
                    bestScore = minimax_results[1]
                    bestMove = move
                    piece_index = piece.tile_index
                }
            }
            beta = Math.min(beta,bestScore)
            if (beta <= alpha){
                break
            }
        }         
        return [bestMove, bestScore, piece_index]
    }
    else if(maximizingPlayer){
        
        //declare the best score, move
        let bestScore = -Infinity;
        let bestMove = null;
        let piece_index = 0

        //get all white pieces for current board
        const white_pieces = getColoredPieces(chess_board).white_pieces;


        // go through white pieces
        for(let piece of white_pieces){
            const original_index = piece.tile_index
            const piece_moves = active_board[original_index].getAvailableMoves(chess_board);

            //make the moves for each piece and return the best move based on best score
            for(let move of piece_moves.flat()){

                const [chess_board_after_move, removed_piece] = getBestMove.movePiece(move, original_index, chess_board)

                const minimax_results = minimax(depth-1, chess_board_after_move, true, alpha, beta, active_board)

                getBestMove.undoMovePiece(move,original_index,chess_board_after_move, removed_piece)

                if (minimax_results[1] > bestScore){
                    bestScore = minimax_results[1]
                    bestMove = move
                    piece_index = piece.tile_index
                }
            }  

            alpha = Math.max(alpha,bestScore)
            if(beta <= alpha){
                break
            }  
        }
        return [bestMove, bestScore, piece_index]
    }
}

export default minimax