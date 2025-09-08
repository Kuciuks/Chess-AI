//makes a move from - to, with the best move from minimax
function moveBestPiece(move, original_index, chess_board){
    
    let moved_piece = document.getElementById(move)
    let original_piece = document.getElementById(original_index)
    // console.log(`[MADE A MOVE] - you made a move with  ${original_piece.innerText} at ${original_piece.id} to ${moved_piece?.innerText} at ${moved_piece.id}`)

    console.log(move, original_index,'-------------')

    //moving piece on ARRAY board - internal
    if(chess_board[move] == null){
        console.log('[MOVING TO NULL FINAL]',move, original_index)
        chess_board[move] = chess_board[original_index]

        chess_board[move].tile_index = parseInt(move)
        chess_board[original_index] = null
    }
    else if (chess_board[move] != null){
        console.log('[MOVING TO NON NULL FINAL]',move, original_index)

        chess_board[move] = chess_board[original_index]
        chess_board[original_index] = null
        chess_board[move].tile_index = parseInt(move)

        moved_piece.classList.remove(`${moved_piece.innerText}`)
        moved_piece.classList.remove(`${moved_piece.innerText[0]}`)

    }

    console.log('____________________________________________________')
    console.log('____________________________________________________')
    console.log(chess_board[move],chess_board[original_index])
    console.log('____________________________________________________')
    console.log('____________________________________________________')
    
    original_piece.classList.remove(`${original_piece.innerText[0]}`)
    original_piece.classList.remove(`${original_piece.innerText}`)
    original_piece.style.cursor = ''




    //moving the piece on the DOM board
    //uploading images to dom
    moved_piece.innerHTML=`${original_piece.innerText}<img class="pic" src="Assets/${original_piece.innerText}.png">`;
    original_piece.innerText = ""

    moved_piece.classList.add(`${moved_piece.innerText}`)
    moved_piece.classList.add(`${moved_piece.innerText[0]}`)
    moved_piece.style.cursor = 'pointer'


    return chess_board
}



function movePiece(move, original_index, chess_board){
    const chess_board_copy = chess_board
    console.log(chess_board[move])
    //moving piece on ARRAY board - internal
    if (chess_board_copy[move] != null && chess_board_copy[move].name != 'Border'){
        const removed_piece = chess_board[move]
        
        chess_board_copy[move] = chess_board_copy[original_index]
        chess_board_copy[move].tile_index = parseInt(move)
        
        console.log('[MOVING TO NOT NULL]',move, original_index)
        console.log('REMOVED PIECE', removed_piece,'--------------------')
        
        return [chess_board_copy, removed_piece]
    }
    else if (chess_board[move] == null){
        console.log('[MOVING TO NULL] from ', original_index,' to ',move)
        chess_board_copy[move] = chess_board_copy[original_index]
        chess_board_copy[move].tile_index = parseInt(move)
        chess_board_copy[original_index] = null
        return [chess_board_copy, null]
    }
}

function undoMovePiece(move, original_index, chess_board, removed_piece){
    const chess_board_copy = chess_board
    console.log('[UNDO MOVE 1] - from ', move,' to ',original_index)
    if(removed_piece != null){
        chess_board_copy[original_index] = chess_board_copy[move]
        chess_board_copy[original_index].tile_index = parseInt(original_index)
        chess_board_copy[move] = removed_piece
    }
    else if(chess_board[original_index] == null){
        chess_board_copy[original_index] = chess_board_copy[move]
        chess_board_copy[original_index].tile_index = parseInt(original_index)
        chess_board_copy[move] = null

        return chess_board_copy

    }

}

export default {moveBestPiece, movePiece, undoMovePiece}
