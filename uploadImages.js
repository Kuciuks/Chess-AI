//uploads images to tiles based on inner text
function uploadImages(chess_board){
    console.log(chess_board)
    const all_tiles = document.querySelectorAll(".tile")
    
    //matching object board tile details to DOM elements
    for(let i = 0; i < all_tiles.length; i++){
        if(chess_board[all_tiles[i].id] && all_tiles[i].innerText != ''){
            console.log(chess_board[all_tiles[i].id])
            all_tiles[i].innerHTML=`${chess_board[all_tiles[i].id].DOM_name} <img class="pic" src="Assets/${chess_board[all_tiles[i].id].DOM_name}.png">`
            all_tiles[i].style.cursor = "pointer"
            // if(chess_board[all_tiles[i].id])
            // console.log(all_tiles[i],'-------------- uploading images for tile', all_tiles[i].DOM_name)
        }
        else{
            all_tiles[i].innerText = ''
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
