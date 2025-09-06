import getBoard from "./getBoard.js";


//makes a move from - to, with the best move from minimax
function moveBestPiece(move, original_index){
    // console.log('[moveBestPiece CALL]')
    console.log('BEFORE replacement current piece loc', document.getElementById(original_index), 'and where it moved from', document.getElementById(move))

    document.getElementById(move).innerText = document.getElementById(original_index).innerText;
    document.getElementById(original_index).innerText = "";
    console.log('AFTER replacement current piece loc', document.getElementById(move), 'and where it moved from', document.getElementById(original_index))
}

export default moveBestPiece
