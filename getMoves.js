

function moveUpLeft (chess_board, tile_index, color, special){ //move = piece tile index; special = king or pawn piece; special = king or pawn piece; special = king or pawn piece
    const valid_moves = []
    //directional move count - maximum possible moves in one direction = 7, 
    //if the moving piece is King or Pawn then they can only move 1 move in select directions
    const directional_move_count = special == 'King' || special == 'Pawn' ? 1 : 7

    //up left
    for (let j = 0; j < directional_move_count; j++){
        tile_index -= 11 
        if (chess_board[tile_index] == null || chess_board[tile_index]?.name !== "Border" && chess_board[tile_index]?.color !== color && chess_board[tile_index+11]?.color !== chess_board[tile_index]?.color) { // changed from !== 'White' to !== chess_board[tile_index]?.color so that it checks whether the next tile_index up left is the same color as the previous tile_index's color, this way l dont need to hardcode 'White' or 'Black'
            valid_moves.push(tile_index)
        } else {
            break
        }
    }
    return valid_moves
}

function moveDownLeft (chess_board, tile_index, color, special){ //move = piece tile index; special = king or pawn piece; special = king or pawn piece
    const valid_moves = []
    //directional move count - maximum possible moves in one direction = 7, 
    //if the moving piece is King or Pawn then they can only move 1 move in select directions
    const directional_move_count = special == 'King' || special == 'Pawn' ? 1 : 7

    //down left
    for (let k = 0; k < directional_move_count; k++){
        tile_index += 9
        if (chess_board[tile_index] == null || chess_board[tile_index]?.name !== "Border" && chess_board[tile_index]?.color !== color && chess_board[tile_index-9]?.color !== chess_board[tile_index]?.color) {
            valid_moves.push(tile_index)
        }
        else {
            break
        }
    }
    return valid_moves
}

function moveUpRight (chess_board, tile_index, color, special){ //move = piece tile index; special = king or pawn piece
    const valid_moves = []
    //directional move count - maximum possible moves in one direction = 7, 
    //if the moving piece is King or Pawn then they can only move 1 move in select directions
    const directional_move_count = special == 'King' || special == 'Pawn' ? 1 : 7

    //up right
    for (let l = 0; l < directional_move_count; l++){
        tile_index -= 9
        if (chess_board[tile_index] == null || chess_board[tile_index]?.name !== "Border" && chess_board[tile_index]?.color !== color && chess_board[tile_index+9]?.color !== chess_board[tile_index]?.color) {
            valid_moves.push(tile_index)
        } else {
            break
        }
    }
    return valid_moves
}

function moveDownRight (chess_board, tile_index, color, special){ //move = piece tile index; special = king or pawn piece
    const valid_moves = []
    //directional move count - maximum possible moves in one direction = 7, 
    //if the moving piece is King or Pawn then they can only move 1 move in select directions
    const directional_move_count = special == 'King' || special == 'Pawn' ? 1 : 7

    //down right
    for (let m = 0; m < directional_move_count; m++){
        tile_index += 11
        if (chess_board[tile_index] == null || chess_board[tile_index]?.name !== "Border" && chess_board[tile_index]?.color !== color && chess_board[tile_index-11]?.color !== chess_board[tile_index]?.color) {
            valid_moves.push(tile_index)
        } else {
            break
        }
    }
    return valid_moves
}

function moveUp (chess_board, tile_index, color, special){ //move = piece tile index; special = king or pawn piece
    const valid_moves = []
    //directional move count - maximum possible moves in one direction = 7, 
    //if the moving piece is King or Pawn then they can only move 1 move in select directions
    const directional_move_count = special == 'King' || special == 'Pawn' ? 1 : 7

    //up
    for (let j = 0; j < directional_move_count; j++){
        tile_index -= 10 
        if (chess_board[tile_index] == null || chess_board[tile_index]?.name !== "Border" && chess_board[tile_index]?.color !== color && chess_board[tile_index+10]?.color !== chess_board[tile_index]?.color) {
            valid_moves.push(tile_index)
        } else {
            break
        }
    }
    return valid_moves
}

function moveDown (chess_board, tile_index, color, special){ //move = piece tile index; special = king or pawn piece
    const valid_moves = []
    //directional move count - maximum possible moves in one direction = 7, 
    //if the moving piece is King or Pawn then they can only move 1 move in select directions
    const directional_move_count = special == 'King' || special == 'Pawn' ? 1 : 7

    //down
    for (let k = 0; k < directional_move_count; k++){
        tile_index += 10 
        if (chess_board[tile_index] == null || chess_board[tile_index]?.name !== "Border" && chess_board[tile_index]?.color !== color && chess_board[tile_index-10]?.color !== chess_board[tile_index]?.color) {
            valid_moves.push(tile_index)
        }
        else {
            break
        }
    }
    return valid_moves
}

function moveLeft (chess_board, tile_index, color, special){ //move = piece tile index; special = king or pawn piece
    const valid_moves = []
    //directional move count - maximum possible moves in one direction = 7, 
    //if the moving piece is King or Pawn then they can only move 1 move in select directions
    const directional_move_count = special == 'King' || special == 'Pawn' ? 1 : 7

    //left
    for (let l = 0; l < directional_move_count; l++){
        tile_index -= 1 
        if (chess_board[tile_index] == null || chess_board[tile_index]?.name !== "Border" && chess_board[tile_index]?.color !== color && chess_board[tile_index+1]?.color !== chess_board[tile_index]?.color) {
            valid_moves.push(tile_index)
        } else {
            break
        }
    }
    return valid_moves
}

function moveRight (chess_board, tile_index, color, special){ //move = piece tile index; special = king or pawn piece
    const valid_moves = []
    //directional move count - maximum possible moves in one direction = 7, 
    //if the moving piece is King or Pawn then they can only move 1 move in select directions
    const directional_move_count = special == 'King' || special == 'Pawn' ? 1 : 7

    //right
    for (let m = 0; m < directional_move_count; m++){
        tile_index += 1 
        if (chess_board[tile_index] == null || chess_board[tile_index]?.name !== "Border" && chess_board[tile_index]?.color !== color && chess_board[tile_index-1]?.color !== chess_board[tile_index]?.color) {
            valid_moves.push(tile_index)
        } else {
            break
        }
    }
    return valid_moves
}


export default {moveUpLeft, moveDownLeft, moveUpRight, moveDownRight, moveUp, moveDown, moveLeft, moveRight}