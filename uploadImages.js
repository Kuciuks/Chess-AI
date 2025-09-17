import { getColoredPieces } from "./config.js"

//uploads images to tiles based on inner text
function uploadImages(chess_board){
    const white_pieces = getColoredPieces(chess_board).white_pieces
    const black_pieces = getColoredPieces(chess_board).black_pieces

    
    //matching object board tile details to DOM elements
    for(const piece in chess_board){

        if(chess_board[piece] && chess_board[piece].name != 'Border'){

            document.getElementById(chess_board[piece].tile_index).innerHTML=`${chess_board[piece].DOM_name} <img class="pic" src="Assets/${chess_board[piece].DOM_name}.png">`
            document.getElementById(chess_board[piece].tile_index).style.cursor = "pointer"
        }
        else if (chess_board[piece] == null){
            document.getElementById(piece). innerHTML = ''
        }
    }
    
    // .forEach(tile => {
    //     if (tile.innerText != ""){

    //     }
    //     else{
    //         // console.log(tile,' is empty')
    //     }
    // })
}

export default uploadImages
