

function moveUpLeft (chess_board, move){ //move = piece tile index
    const valid_moves = []

    //up left
    for (let j = 0; j < 7; j++){
        move -= 11 
        if (chess_board[move] == null || chess_board[move]?.name !== "Border" && chess_board[move]?.color !== this.color && chess_board[move+11]?.color !== chess_board[move]?.color) { // changed from !== 'White' to !== chess_board[move]?.color so that it checks whether the next move up left is the same color as the previous move's color, this way l dont need to hardcode 'White' or 'Black'
            valid_moves.push(move)
        } else {
            break
        }
    }
    return valid_moves
}

function moveDownLeft (chess_board, move){ //move = piece tile index
    const valid_moves = []

    //down left
    for (let k = 0; k < 7; k++){
        move += 9
        if (chess_board[move] == null || chess_board[move]?.name !== "Border" && chess_board[move]?.color !== this.color && chess_board[move-9]?.color !== chess_board[move]?.color) {
            valid_moves.push(move)
        }
        else {
            break
        }
    }
    return valid_moves
}

function moveUpRight (chess_board, move){ //move = piece tile index
    const valid_moves = []

    //up right
    for (let l = 0; l < 7; l++){
        move -= 9
        if (chess_board[move] == null || chess_board[move]?.name !== "Border" && chess_board[move]?.color !== this.color && chess_board[move+9]?.color !== chess_board[move]?.color) {
            valid_moves.push(move)
        } else {
            break
        }
    }
    return valid_moves
}

function moveDownRight (chess_board, move){ //move = piece tile index
    const valid_moves = []

    //down right
    for (let m = 0; m < 7; m++){
        move += 11
        if (chess_board[move] == null || chess_board[move]?.name !== "Border" && chess_board[move]?.color !== this.color && chess_board[move-11]?.color !== chess_board[move]?.color) {
            valid_moves.push(move)
        } else {
            break
        }
    }
    return valid_moves
}

function moveUp (chess_board, move){ //move = piece tile index
    const valid_moves = []

    //up
    for (let j = 0; j < 7; j++){
        move -= 10 
        if (chess_board[move] == null || chess_board[move]?.name !== "Border" && chess_board[move]?.color !== this.color && chess_board[move+10]?.color !== chess_board[move]?.color) {
            valid_moves.push(move)
        } else {
            break
        }
    }
    return valid_moves
}

function moveDown (chess_board, move){ //move = piece tile index
    const valid_moves = []

    //down
    for (let k = 0; k < 7; k++){
        move += 10 
        if (chess_board[move] == null || chess_board[move]?.name !== "Border" && chess_board[move]?.color !== this.color && chess_board[move-10]?.color !== chess_board[move]?.color) {
            valid_moves.push(move)
        }
        else {
            break
        }
    }
    return valid_moves
}

function moveLeft (chess_board, move){ //move = piece tile index
    const valid_moves = []

    //left
    for (let l = 0; l < 7; l++){
        move -= 1 
        if (chess_board[move] == null || chess_board[move]?.name !== "Border" && chess_board[move]?.color !== this.color && chess_board[move+1]?.color !== chess_board[move]?.color) {
            valid_moves.push(move)
        } else {
            break
        }
    }
    return valid_moves
}

function moveRight (chess_board, move){ //move = piece tile index
    const valid_moves = []

    //right
    for (let m = 0; m < 7; m++){
        move += 1 
        if (chess_board[move] == null || chess_board[move]?.name !== "Border" && chess_board[move]?.color !== this.color && chess_board[move-1]?.color !== chess_board[move]?.color) {
            valid_moves.push(move)
        } else {
            break
        }
    }
    return valid_moves
}


export default {moveUpLeft, moveDownLeft, moveUpRight, moveDownRight, moveUp, moveDown, moveLeft, moveRight}