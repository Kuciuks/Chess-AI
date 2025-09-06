//makes a move from - to, with the best move from minimax
function moveBestPiece(move, original_index, chess_board){
    let moved_piece = document.getElementById(move)
    let original_piece = document.getElementById(original_index)

    

    //moving the piece on the DOM board
    moved_piece.innerText = original_piece.innerText;
    original_piece.innerText = "";


    //moving piece on ARRAY board - internal
    chess_board[move] = chess_board[original_index]
    chess_board[original_index] = null


    //uploading images to dom
    if (moved_piece.innerText != "" || moved_piece.innerHTML == ""){
            moved_piece.innerHTML=`<img class="pic" src="Assets/${moved_piece.innerText}.png">`;
            moved_piece.style.cursor = "pointer";
    }

}

export default moveBestPiece
