

function moveUpLeft (chess_board, tile_index, color, special_piece){ //move = piece tile index; special_piece = king or pawn piece; special_piece = king or pawn piece; special_piece = king or pawn piece
    const valid_moves = []
    //directional move count - maximum possible moves in one direction = 7, 
    //if the moving piece is King or Pawn then they can only move 1 move in select directions
    const directional_move_count = special_piece == 'King' || special_piece == 'Pawn' ? 1 : 7

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

function moveDownLeft (chess_board, tile_index, color, special_piece){ //move = piece tile index; special_piece = king or pawn piece; special_piece = king or pawn piece
    const valid_moves = []
    //directional move count - maximum possible moves in one direction = 7, 
    //if the moving piece is King or Pawn then they can only move 1 move in select directions
    const directional_move_count = special_piece == 'King' || special_piece == 'Pawn' ? 1 : 7

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

function moveUpRight (chess_board, tile_index, color, special_piece){ //move = piece tile index; special_piece = king or pawn piece
    const valid_moves = []
    //directional move count - maximum possible moves in one direction = 7, 
    //if the moving piece is King or Pawn then they can only move 1 move in select directions
    const directional_move_count = special_piece == 'King' || special_piece == 'Pawn' ? 1 : 7

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

function moveDownRight (chess_board, tile_index, color, special_piece){ //move = piece tile index; special_piece = king or pawn piece
    const valid_moves = []
    //directional move count - maximum possible moves in one direction = 7, 
    //if the moving piece is King or Pawn then they can only move 1 move in select directions
    const directional_move_count = special_piece == 'King' || special_piece == 'Pawn' ? 1 : 7
    
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

function moveUp (chess_board, tile_index, color, special_piece, special_move){ //move = piece tile index; special_piece = king or pawn piece
    const valid_moves = []
    //directional move count - maximum possible moves in one direction = 7, 
    //if the moving piece is King or Pawn then they can only move 1 move in select directions
    //if its a special piece then it checks whether the piece has a special move active, if it does then sets the directional move count to 2
    //else it means it its a king moving as special move is undefined, so sets to 1, if other pieces move sets to 7
    const directional_move_count = special_piece == 'King' || special_piece == 'Pawn' ? special_move ? 2: 1 : 7
    console.log(directional_move_count , special_move, special_piece)
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

function moveDown (chess_board, tile_index, color, special_piece, special_move){ //move = piece tile index; special_piece = king or pawn piece
    const valid_moves = []
    //directional move count - maximum possible moves in one direction = 7, 
    //if the moving piece is King or Pawn then they can only move 1 move in select directions
    //if its a special piece then it checks whether the piece has a special move active, if it does then sets the directional move count to 2
    //else it means it its a king moving as special move is undefined, so sets to 1, if other pieces move sets to 7
    const directional_move_count = special_piece == 'King' || special_piece == 'Pawn' ? special_move ? 2: 1 : 7
    console.log(directional_move_count , special_move, special_piece)

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

function moveLeft (chess_board, tile_index, color, special_piece){ //move = piece tile index; special_piece = king or pawn piece
    const valid_moves = []
    //directional move count - maximum possible moves in one direction = 7, 
    //if the moving piece is King or Pawn then they can only move 1 move in select directions
    const directional_move_count = special_piece == 'King' || special_piece == 'Pawn' ? 1 : 7

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

function moveRight (chess_board, tile_index, color, special_piece){ //move = piece tile index; special_piece = king or pawn piece
    const valid_moves = []
    //directional move count - maximum possible moves in one direction = 7, 
    //if the moving piece is King or Pawn then they can only move 1 move in select directions
    const directional_move_count = special_piece == 'King' || special_piece == 'Pawn' ? 1 : 7

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

function knightMoves(chess_board, tile_index, color){

    const move_indices = [-21, 2, 11, 20, 9, -2, -11, -20]
    const move_indices_names = ['LEFT-UP', 'LEFT-DOWN', 'UP-LEFT', 'UP-RIGHT', 'RIGHT-UP', 'RIGHT-DOWN', 'DOWN-LEFT', 'DOWN-RIGHT']
    const valid_moves = []

    for(let i = 0; i < move_indices.length; i++){
        console.log(tile_index,'-----')
        tile_index += move_indices[i]
        console.log(tile_index, move_indices[i])
        if (chess_board[tile_index] == null || chess_board[tile_index]?.name !== 'Border' && chess_board[tile_index]?.color !== color){
            valid_moves.push(tile_index)
        }
    }
    return valid_moves

}


export default {moveUpLeft, moveDownLeft, moveUpRight, moveDownRight, moveUp, moveDown, moveLeft, moveRight, knightMoves}