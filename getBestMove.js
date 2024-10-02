import getBoard from "./getBoard.js";

//makes a move from - to, with the best move from minimax
function moveBestPiece(from, to){
    document.getElementById(to).innerText = document.getElementById(from).innerText;
    document.getElementById(from).innerText = "";
    let chess_board = getBoard();

    return{
        chess_board
    }
}

export default moveBestPiece
