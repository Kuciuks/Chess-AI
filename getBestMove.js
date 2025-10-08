import gameManager from "./gameManager.js"

async function makeAnimations(move_to_piece,original_piece){
    if(move_to_piece){
        const move_to_pic = move_to_piece.querySelector('.pic')
    }
    const original_pic = original_piece.querySelector('.pic')
    
    const move_to_pos = move_to_piece.getBoundingClientRect()
    const original_pos = original_piece.getBoundingClientRect()

    const move_to_top = move_to_pos.top
    const move_to_left = move_to_pos.left

    const original_top = original_pos.top
    const original_left = original_pos.left

    // console.log(move_to_top, move_to_left,'---------------------', original_top, original_left)

    const deltaY = move_to_top - original_top
    const deltaX = move_to_left - original_left

    // const deltaX = (move_to_top != original_top) ? move_to_top != original_top : original_top
    // const deltaY = (move_to_left != original_left) ? move_to_left != original_left : original_left
    original_pic.style.transform = `translate(${deltaX}px, ${deltaY}px)`
    // original_pic.style.opacity = 0
    // original_pic.style.transform = `translate(${original_left}px, ${original_top}px)`
    
    await new Promise (resolve =>{setTimeout(resolve,400)})
}


//makes a move from - to, with the best move from minimax
async function moveBestPiece(move, original_index, chess_board){    
    
    let moved_piece = document.getElementById(move)
    let original_piece = document.getElementById(original_index)

    //waits until the makeAnimations method is done running
    await makeAnimations(moved_piece,original_piece)


    if(chess_board[original_index]?.name == 'Pawn'){
        chess_board[original_index].special_move = false
    }
    //moving piece on ARRAY board - internal
    if(chess_board[move] == null){


        // console.log('[MOVING TO NULL FINAL]',move, original_index)
        chess_board[move] = chess_board[original_index]

        chess_board[move].tile_index = parseInt(move)
        chess_board[original_index] = null
    }
    else if (chess_board[move] != null){
        // console.log('[MOVING TO NON NULL FINAL]',move, original_index)
        chess_board[move] = chess_board[original_index]
        chess_board[move].tile_index = parseInt(move)
        chess_board[original_index] = null

        moved_piece.classList.remove(`${moved_piece.innerText}`)
        moved_piece.classList.remove(`${moved_piece.innerText[0]}`)

    }
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
    console.log('end of best move piece')

    return chess_board
}



function movePiece(move, original_index, board){
    const chess_board = gameManager.makeDeepCopy(board)
    const original_piece = chess_board[original_index]
    const removed_piece = chess_board[move]


    chess_board[move] = original_piece
    chess_board[original_index] = null

    const isSpecialPawnMove = original_piece?.name == 'Pawn' && original_piece?.special_move == true && Math.abs(move-original_index) == 20

    
    if(chess_board[move]){
        chess_board[move].tile_index = parseInt(move)

        chess_board[move].special_move = false

        if(isSpecialPawnMove){
            chess_board[move].special_tile = move
            chess_board[move].starting_position = original_index
        }
    }
    
    return [chess_board, removed_piece]
}

function undoMovePiece(move, original_index, chess_board, removed_piece){
    const original_piece = chess_board[move]
    const isSpecial = (original_piece?.special_tile == move) //if true then it means the pawn was making a special move
    const isFirstMove = (original_piece?.starting_position == original_index)

    chess_board[original_index] = original_piece
    chess_board[move] = removed_piece

    if(chess_board[original_index]){
        chess_board[original_index].tile_index = parseInt(original_index)
        
        if(isSpecial || isFirstMove){
            chess_board[original_index].special_move = true
        }
    }
}


export default {moveBestPiece, movePiece, undoMovePiece}
