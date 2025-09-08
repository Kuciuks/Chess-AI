//makes a move from - to, with the best move from minimax
function moveBestPiece(move, original_index, chess_board){

    let moved_piece = document.getElementById(move)
    let original_piece = document.getElementById(original_index)
    console.log(`[MADE A MOVE] - you made a move with  ${original_piece.innerText} at ${original_piece.id} to ${moved_piece?.innerText} at ${moved_piece.id}`)

    let original_piece_name = original_piece.innerText
    original_piece.innerText = ""
    original_piece.classList.remove(`${original_piece_name}`)
    original_piece.classList.remove(`${chess_board[original_index].color[0]}`)
    original_piece.style.cursor = ''

    //moving the piece on the DOM board
    //uploading images to dom
    moved_piece.innerHTML=`${original_piece_name}<img class="pic" src="Assets/${original_piece_name}.png">`;
    moved_piece.classList.add(`${chess_board[original_index].color[0]}`)
    moved_piece.classList.add(`${original_piece_name}`)
    moved_piece.style.cursor = 'pointer'



    //moving piece on ARRAY board - internal
    chess_board[move] = chess_board[original_index]
    chess_board[move].tile_index = parseInt(move)
    chess_board[original_index] = null
    

    //setting pawn special move to false after the move
    if (chess_board[move] !== null && chess_board[move].name == "Pawn"){
        chess_board[move].special_move = false
    }


    return chess_board
}

export default moveBestPiece
