
class moveDirections{
    //method to get available moves for the pawn
    getAvailableMoves(chess_board) {
        const tile_index = this.tile_index

        const move_up_left = tile_index - 11
        const move_down_left = tile_index + 9
        const move_up_right = tile_index - 9
        const move_down_right = tile_index + 11

        const move_up = tile_index - 10
        const move_down = tile_index + 10
        const move_left = tile_index - 1
        const move_right = tile_index + 1
        
        const move_down = tile_index + 10
        const move_up = chess_board[tile_index - 10] == null ? tile_index - 10 : undefined
        const move_two_ahead =  this.special_move && chess_board[tile_index - 20] == null ? tile_index - 20 : undefined


        let valid_moves = this.checkMoveValidity(chess_board, [move_up_left, move_down_left, move_up_right, move_down_right])

        return valid_moves
    }
}




//up left
for (let j = 0; j < 7; j++){
    move -= 11 
    if (chess_board[move] == null || chess_board[move]?.name !== "Border" && chess_board[move]?.color !== this.color && chess_board[move+11]?.color !== chess_board[move]?.color) { // changed from !== 'White' to !== chess_board[move]?.color so that it checks whether the next move up left is the same color as the previous move's color, this way l dont need to hardcode 'White' or 'Black'
        valid_moves.push(move)
    } else {
        break
    }

}

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


//up right
for (let l = 0; l < 7; l++){
    move -= 9
    if (chess_board[move] == null || chess_board[move]?.name !== "Border" && chess_board[move]?.color !== this.color && chess_board[move+9]?.color !== chess_board[move]?.color) {
        valid_moves.push(move)
    } else {
        break
    }
}

//down right
for (let m = 0; m < 7; m++){
    move += 11
    if (chess_board[move] == null || chess_board[move]?.name !== "Border" && chess_board[move]?.color !== this.color && chess_board[move-11]?.color !== chess_board[move]?.color) {
        valid_moves.push(move)
    } else {
        break
    }
}

//up
for (let j = 0; j < 7; j++){
    move -= 10 
    if (chess_board[move] == null || chess_board[move]?.name !== "Border" && chess_board[move]?.color !== this.color && chess_board[move+10]?.color !== chess_board[move]?.color) {
        valid_moves.push(move)
    } else {
        break
    }

}

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

//left
for (let l = 0; l < 7; l++){
    move -= 1 
    if (chess_board[move] == null || chess_board[move]?.name !== "Border" && chess_board[move]?.color !== this.color && chess_board[move+1]?.color !== chess_board[move]?.color) {
        valid_moves.push(move)
    } else {
        break
    }
}

//right
for (let m = 0; m < 7; m++){
    move += 1 
    if (chess_board[move] == null || chess_board[move]?.name !== "Border" && chess_board[move]?.color !== this.color && chess_board[move-1]?.color !== chess_board[move]?.color) {
        valid_moves.push(move)
    } else {
        break
    }
}