//makes a move from - to, with the best move from minimax
function moveBestPiece(move, original_index, chess_board){
    let moved_piece = document.getElementById(move)
    let original_piece = document.getElementById(original_index)

    console.log(original_piece)
    let original_piece_name = original_piece.innerText
    original_piece.innerText = ""

    //moving the piece on the DOM board
    //uploading images to dom
    moved_piece.innerHTML=`${original_piece_name}<img class="pic" src="Assets/${original_piece_name}.png">`;

    //moving piece on ARRAY board - internal
    chess_board[move] = chess_board[original_index]
    chess_board[original_index] = null

    return chess_board
}

export default moveBestPiece
