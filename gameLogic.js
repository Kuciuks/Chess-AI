import { getColoredPieces } from "./config.js"
import gameManager from './gameManager.js'
import getBestMove from './getBestMove.js'

//check to see if any of the current moves being made by own pieces puts the king piece in danger
function validifyMoves(chess_board, color){

    const legalized_moves = []
    const own_pieces = getColoredPieces(chess_board)[color == 'Black' ? 'black_pieces' : 'white_pieces']

    for(const piece of own_pieces){

        const pseudo_legal_moves = piece.getAvailableMoves(chess_board).flat()

        for(const move of pseudo_legal_moves){

            const deep_board_copy = gameManager.makeDeepCopy(chess_board)
            const [new_board,_] = getBestMove.movePiece(move, piece.tile_index, deep_board_copy)


            //check if the move that has been made is legal and does not expose own king to enemy attacks
            if(!isKingChecked(new_board,color)){
                legalized_moves.push(move)
            }
        }

    }
    return legalized_moves

}

//check if own king's position is being attacked by any of the enemy's pieces
function isKingChecked(chess_board, color){
    let own_king_index = -1

    //find the position of own king on the board
    for( const index in chess_board){
        if (chess_board[index]?.name == 'King' && chess_board[index].color == color){
            own_king_index = index
            break
        }
    }

    //get all pieces of opposite color
    const opponentColor = color == 'Black' ? 'White': 'Black'
    const opponentPieces = getColoredPieces(chess_board)[opponentColor == 'Black' ? 'white_pieces' : 'black_pieces']

    const opponentMoves = []
    for ( const piece of opponentPieces){
        opponentMoves.push(piece.getAvailableMoves(chess_board).flat())
    }

    //if the king index is within the opposing player's piece moves then the king is check
    if(opponentMoves.includes(own_king_index)){
        return true
    }

    //the king is not being targeted
    return false
}

//check if own king is checked and mated and there are no legal moves left
function isKingMated(chess_board, color){
    if(isKingChecked(chess_board,color) && validifyMoves(chess_board,color).length == 0){
        //the king is in checkmate and has no place to move
        console.log('THE KING IS IN CHECK MATE')
        return true
    }
    //there are still legal moves to be made
    console.log('THERE ARE STILL AVAIALBLE MOVES')
    return false
}

export default {validifyMoves, isKingChecked, isKingMated}