// console.log('getMoves.js CALL')


function moveUpLeft (chess_board, tile_index, color, special_piece, enemy_color){ //move = piece tile index; special_piece = king or pawn piece; special_piece = king or pawn piece; special_piece = king or pawn piece
    const valid_moves = []
    // console.log(special_piece,'---------------------------------------------------------------------')
    //directional move count - maximum possible moves in one direction = 7, 
    //if the moving piece is King or Pawn then they can only move 1 move in select directions
    const directional_move_count = special_piece == 'King' || special_piece == 'Pawn' ? 1 : 7


    if(special_piece == 'Pawn' && chess_board[tile_index-11]?.name !== "Border" && chess_board[tile_index-11]?.color != color && chess_board[tile_index-11] != null){
        valid_moves.push(tile_index-11)
    }

    else if (special_piece == 'King' || special_piece == undefined){
        //up left
        for (let j = 0; j < directional_move_count; j++){
            tile_index -= 11 
            if (chess_board[tile_index]?.name !== "Border" && chess_board[tile_index]?.color != color) {
                if(chess_board[tile_index] == null){
                    valid_moves.push(tile_index)
                    // console.log(valid_moves,'FROM BISHOP INTERNAL VALIDATION - normal move')
                }
                else if (chess_board[tile_index]?.color != color){
                    valid_moves.push(tile_index)
                    break
                }
            } 
            else{
                break
            }
        }
    }

    return valid_moves
}

function moveDownLeft (chess_board, tile_index, color, special_piece, enemy_color){ //move = piece tile index; special_piece = king or pawn piece; special_piece = king or pawn piece
    const valid_moves = []
    //directional move count - maximum possible moves in one direction = 7, 
    //if the moving piece is King or Pawn then they can only move 1 move in select directions
    const directional_move_count = special_piece == 'King' || special_piece == 'Pawn' ? 1 : 7


    if(special_piece == 'Pawn' && chess_board[tile_index+9]?.name !== "Border" && chess_board[tile_index+9]?.color != color && chess_board[tile_index+9] != null){
            valid_moves.push(tile_index+9)
        }

    else if (special_piece == 'King' || special_piece == undefined){
        //down left
        for (let k = 0; k < directional_move_count; k++){
            tile_index += 9
            if (chess_board[tile_index]?.name !== "Border"&& chess_board[tile_index]?.color != color) {
                if(chess_board[tile_index] == null){
                    valid_moves.push(tile_index)
                    // console.log(valid_moves,'FROM BISHOP INTERNAL VALIDATION - normal move')
                }
                else if (chess_board[tile_index]?.color != color){
                    valid_moves.push(tile_index)
                    break
                }
            }
            else {
                break
            }
        }
    }
    return valid_moves
}

function moveUpRight (chess_board, tile_index, color, special_piece, enemy_color){ //move = piece tile index; special_piece = king or pawn piece
    const valid_moves = []
    //directional move count - maximum possible moves in one direction = 7, 
    //if the moving piece is King or Pawn then they can only move 1 move in select directions
    const directional_move_count = special_piece == 'King' || special_piece == 'Pawn' ? 1 : 7

    if(special_piece == 'Pawn' && chess_board[tile_index-9]?.name !== "Border" && chess_board[tile_index-9]?.color != color && chess_board[tile_index-9] != null){
            valid_moves.push(tile_index-9)
        }

    else if (special_piece == 'King' || special_piece == undefined){
        //up right
        for (let l = 0; l < directional_move_count; l++){
            tile_index -= 9
            if (chess_board[tile_index]?.name !== "Border"&& chess_board[tile_index]?.color != color) {
                if(chess_board[tile_index] == null){
                    valid_moves.push(tile_index)
                    // console.log(valid_moves,'FROM BISHOP INTERNAL VALIDATION - normal move')
                }
                else if (chess_board[tile_index]?.color != color){
                    valid_moves.push(tile_index)
                    break
                }
            } 
            else {
                break
            }
        }
    }
    return valid_moves
}

function moveDownRight (chess_board, tile_index, color, special_piece, enemy_color){ //move = piece tile index; special_piece = king or pawn piece
    const valid_moves = []
    //directional move count - maximum possible moves in one direction = 7, 
    //if the moving piece is King or Pawn then they can only move 1 move in select directions
    const directional_move_count = special_piece == 'King' || special_piece == 'Pawn' ? 1 : 7

    if(special_piece == 'Pawn' && chess_board[tile_index+11]?.name !== "Border" && chess_board[tile_index+11]?.color != color && chess_board[tile_index+11] != null){
            valid_moves.push(tile_index+11)
        }

    else if (special_piece == 'King' || special_piece == undefined){
        //down right
        for (let m = 0; m < directional_move_count; m++){
            tile_index += 11
            if (chess_board[tile_index]?.name !== "Border"&& chess_board[tile_index]?.color != color) {
                if(chess_board[tile_index] == null){
                    valid_moves.push(tile_index)
                    // console.log(valid_moves,'FROM BISHOP INTERNAL VALIDATION - normal move')
                }
                else if (chess_board[tile_index]?.color != color){
                    valid_moves.push(tile_index)
                    break
                }
            } 
            else {
                break
            }
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
    // console.log(directional_move_count , special_move, special_piece)
    //up
    // console.log('Step - 1')
    if(special_piece == 'Pawn' && chess_board[tile_index-10]?.name !== "Border"){
        if(chess_board[tile_index-10] == null){
            valid_moves.push(tile_index-10)
            // console.log('Step - 2')
        }
        // console.log(special_move,'SPECIALMOVE___________________________________________________')
        if(special_move && chess_board[tile_index-20] == null){
            // console.log('Step - 3')
            valid_moves.push(tile_index-20)

            chess_board[tile_index].special_tile = tile_index-20
            chess_board[tile_index].starting_position = tile_index

        }
        // console.log(valid_moves)
        return valid_moves
    }
    else if(special_piece == 'King' && chess_board[tile_index-10]?.name !== "Border" && chess_board[tile_index-10] == null){
        valid_moves.push(tile_index-10)
        // console.log('Step - 4')


        return valid_moves
    }

    else if (special_piece == undefined){
        // console.log('Step - 5')
        for (let j = 0; j < directional_move_count; j++){
            // console.log('Step - 6', special_piece)
            tile_index -= 10 
            if(chess_board[tile_index]?.color == color || tile_index < 10){
                return valid_moves

            }
            else if (special_piece == undefined && chess_board[tile_index]?.name !== "Border") {
                if(chess_board[tile_index] == null && tile_index > 10){
                    // console.log(chess_board[tile_index])
                    valid_moves.push(tile_index)
                }
                else if (chess_board[tile_index]?.color != color && tile_index > 10){
                    valid_moves.push(tile_index)

                    return valid_moves
                }
            }
        }
        return valid_moves
    }
    else{
        return valid_moves
    }
}

function moveDown (chess_board, tile_index, color, special_piece, special_move){ //move = piece tile index; special_piece = king or pawn piece
    const valid_moves = []
    //directional move count - maximum possible moves in one direction = 7, 
    //if the moving piece is King or Pawn then they can only move 1 move in select directions
    //if its a special piece then it checks whether the piece has a special move active, if it does then sets the directional move count to 2
    //else it means it its a king moving as special move is undefined, so sets to 1, if other pieces move sets to 7
    const directional_move_count = special_piece == 'King' || special_piece == 'Pawn' ? special_move ? 2: 1 : 7
    // console.log(directional_move_count , special_move, special_piece)

    if(special_piece == 'Pawn' && chess_board[tile_index+10]?.name !== "Border"){
        if(chess_board[tile_index+10] == null){
            valid_moves.push(tile_index+10)
            // console.log('Step - 2')
        }
        if(special_piece && chess_board[tile_index+20] == null){
            valid_moves.push(tile_index+20)
            chess_board[tile_index].special_tile = tile_index+20
            chess_board[tile_index].starting_position = tile_index

        }
        return valid_moves
    }
    else if(special_piece == 'King' && chess_board[tile_index+10]?.name !== "Border" && chess_board[tile_index+10] == null){
        valid_moves.push(tile_index+10)
        return valid_moves
    }
    //down
    
    else if (special_piece == undefined){
        for (let j = 0; j < directional_move_count; j++){
            tile_index += 10 
            if(chess_board[tile_index]?.color == color || tile_index > 89){
                return valid_moves

            }
            else if (special_piece == undefined && chess_board[tile_index]?.name !== "Border") {
                if(chess_board[tile_index] == null && tile_index < 89){
                    // console.log(chess_board[tile_index])
                    valid_moves.push(tile_index)
                }
                else if (chess_board[tile_index]?.color != color && tile_index < 89){
                    valid_moves.push(tile_index)

                    return valid_moves

                }
            }
        }
        return valid_moves
    }
    else{
        return valid_moves
    }
}

function moveLeft (chess_board, tile_index, color, special_piece){ //move = piece tile index; special_piece = king or pawn piece
    const valid_moves = []
    //directional move count - maximum possible moves in one direction = 7, 
    //if the moving piece is King or Pawn then they can only move 1 move in select directions
    const directional_move_count = special_piece == 'King' ? 1 : 7

    //left

    for (let j = 0; j < directional_move_count; j++){
        tile_index -= 1 
        if(chess_board[tile_index]?.color == color || chess_board[tile_index]?.name == 'Border' || tile_index < 10){
            return valid_moves
        }
        else if(chess_board[tile_index] == null){
            // console.log(chess_board[tile_index])
            valid_moves.push(tile_index)
        }
        else if (chess_board[tile_index]?.color != color){
            valid_moves.push(tile_index)
            return valid_moves

        }
    }
    return valid_moves
}

function moveRight (chess_board, tile_index, color, special_piece){ //move = piece tile index; special_piece = king or pawn piece
    const valid_moves = []
    //directional move count - maximum possible moves in one direction = 7, 
    //if the moving piece is King or Pawn then they can only move 1 move in select directions
    const directional_move_count = special_piece == 'King' ? 1 : 7

    //right

    for (let j = 0; j < directional_move_count; j++){
        tile_index += 1 
        if(chess_board[tile_index]?.color == color || chess_board[tile_index]?.name == 'Border' || tile_index > 89){
            return valid_moves
        }
        else if(chess_board[tile_index] == null){
            // console.log(chess_board[tile_index])
            valid_moves.push(tile_index)
        }
        else if (chess_board[tile_index]?.color != color){
            valid_moves.push(tile_index)
            return valid_moves

        }
    }
    return valid_moves
}

function knightMoves(chess_board, tile_index, color){

    const move_indices = [-21, 2, 11, 20, 9, -2, -11, -20]
    const move_indices_names = ['LEFT-UP', 'LEFT-DOWN', 'UP-LEFT', 'UP-RIGHT', 'RIGHT-UP', 'RIGHT-DOWN', 'DOWN-LEFT', 'DOWN-RIGHT']
    const valid_moves = []
    for(let i = 0; i < move_indices.length; i++){
        // console.log(tile_index,'-----')
        tile_index = tile_index + move_indices[i]

        // console.log(tile_index, move_indices[i])

        if(tile_index > 10 && tile_index < 89){
            if(chess_board[tile_index] == null || chess_board[tile_index]?.name !== 'Border' && chess_board[tile_index]?.color !== color){
                valid_moves.push(tile_index)
            }
        }

    }
    // console.log(valid_moves, 'valid moves')
    return valid_moves

}


export default {moveUpLeft, moveDownLeft, moveUpRight, moveDownRight, moveUp, moveDown, moveLeft, moveRight, knightMoves}