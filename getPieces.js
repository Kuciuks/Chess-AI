//gets white pieces from the board
function getWhitePiece(board){
    for(let i = 0; i < board.length; i++){
        if(document.getElementById(board[i]).innerText[0] == "W"){
            white_pieces.push(board[i]);
    
        }
    }
    return white_pieces
}

//gets black pieces from the board
function getBlackPiece(board){
    for(let i = 0; i < board.length; i++){
        if(document.getElementById(board[i]).innerText[0] == "B"){
            black_pieces.push(board[i]);
    
        }
    }
    return black_pieces
}
