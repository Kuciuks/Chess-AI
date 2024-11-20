import config from "./config.js";
const configInstance = config.getInstance()



//gets white pieces from the board
export function getWhitePiece(board){
    // console.log('[getWhitePiece CALL]')
    for(let i = 0; i < board.length; i++){
        if(document.getElementById(board[i]).innerText[0] == "W"){
            configInstance.white_pieces.push(board[i]);
        }
    }
    return configInstance.white_pieces
}

//gets black pieces from the board
export function getBlackPiece(board){
    // console.log('[getBlackPiece CALL]')
    for(let i = 0; i < board.length; i++){
        if(document.getElementById(board[i]).innerText[0] == "B"){
            configInstance.black_pieces.push(board[i]);
        }
    }
    return configInstance.black_pieces
}
