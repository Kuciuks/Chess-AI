import getMoves from "./getMoves.js"

//declaring the base class with constructor properties
class Piece{
    constructor(name, value, color, tile_index){
        this.name = name
        this.value = value
        this.color = color
        this.tile_index = tile_index
    }

}

//declaring the child classes that extend the base class Piece (capturing base class properties)
export class Pawn extends Piece{
        constructor(name, value, color, tile_index, special_move, DOM_name){
            super(name, value, color, tile_index)
            this.special_move = special_move
            this.special_tile = 0
            this.starting_position = 0
            this.pawnScore= [
                null, null, null, null, null, null, null, null, null, null,
                null,   0,   0,   0,   0,   0,   0,   0,   0, null,
                null,  50,  50,  50,  50,  50,  50,  50,  50, null,
                null,  10,  10,  20,  30,  30,  20,  10,  10, null,
                null,   5,   5,  10,  25,  25,  10,   5,   5, null,
                null,   0,   0,   0,  20,  20,   0,   0,   0, null,
                null,   5,  -5, -10,   0,   0, -10,  -5,   5, null,
                null,   5,  10,  10, -20, -20,  10,  10,   5, null,
                null,   0,   0,   0,   0,   0,   0,   0,   0, null,
                null, null, null, null, null, null, null, null, null, null
                ]
            this.moves = {W:['UP', 'UP-LEFT', 'UP-RIGHT'], B:['DOWN', 'DOWN-LEFT', 'DOWN-RIGHT']}
            this.valid_moves = []
            this.DOM_name = DOM_name
        }

        checkMoveValidity(chess_board){
            let valid_moves = []

            let enemy_color = this.color == 'White' ? "Black" : this.color == "Black" ? "White" : null
            //going through the possible moves and getting the valid ones
            this.moves[this.color[0]].forEach(move => {
                switch(move){
                    case "UP-LEFT":
                        valid_moves.push(getMoves.moveUpLeft(chess_board, this.tile_index, this.color, this.name, enemy_color))
                        break
                    case "UP-RIGHT":
                        valid_moves.push(getMoves.moveUpRight(chess_board, this.tile_index, this.color, this.name, enemy_color))
                        break
                    case "DOWN-LEFT":
                        valid_moves.push(getMoves.moveDownLeft(chess_board, this.tile_index, this.color, this.name, enemy_color))
                        break
                    case "DOWN-RIGHT":
                        valid_moves.push(getMoves.moveDownRight(chess_board, this.tile_index, this.color, this.name, enemy_color))
                        break
                    case "UP":
                        valid_moves.push(getMoves.moveUp(chess_board, this.tile_index, this.color, this.name, this.special_move))
                        break
                    case "DOWN":
                        valid_moves.push(getMoves.moveDown(chess_board, this.tile_index, this.color, this.name, this.special_move))
                        break
                }
            })
            // console.log(valid_moves[0],'--------------------------------------', this.special_move)
            return valid_moves
        }
        //method to get available moves for the pawn
        getAvailableMoves(chess_board) {

            let valid_moves = this.checkMoveValidity(chess_board)
            // console.log(valid_moves)
            this.valid_moves = valid_moves
            return valid_moves
        }
    }
export class Rook extends Piece{
        constructor(name, value, color, tile_index, DOM_name){ //add special_move later on
            super(name, value, color, tile_index)
            // this.special_move = special_move
            this.pawnScore= [
                null, null, null, null, null, null, null, null, null, null,
                null,   0,   0,   0,   0,   0,   0,   0,   0, null,
                null,   5,  10,  10,  10,  10,  10,  10,   5, null,
                null,  -5,   0,   0,   0,   0,   0,   0,  -5, null,
                null,  -5,   0,   0,   0,   0,   0,   0,  -5, null,
                null,  -5,   0,   0,   0,   0,   0,   0,  -5, null,
                null,  -5,   0,   0,   0,   0,   0,   0,  -5, null,
                null,   0,   0,   0,   5,   5,   0,   0,   0, null,
                null,   0,   0,   0,   0,   0,   0,   0,   0, null,
                null, null, null, null, null, null, null, null, null, null
            ]
            this.moves = ['UP', 'DOWN', 'LEFT', 'RIGHT']
            this.valid_moves = []
            this.DOM_name = DOM_name
        }

        //getting the valid moves for the rook
        checkMoveValidity(chess_board){
            let valid_moves = []
            //going through the possible moves and getting the valid ones
            this.moves.forEach(move => {
                switch(move){
                    case "UP":
                        valid_moves.push(getMoves.moveUp(chess_board, this.tile_index,  this.color))
                        break
                    case "DOWN":
                        valid_moves.push(getMoves.moveDown(chess_board, this.tile_index, this.color))
                        break
                    case "LEFT":
                        valid_moves.push(getMoves.moveLeft(chess_board, this.tile_index, this.color))
                        break
                    case "RIGHT":
                        valid_moves.push(getMoves.moveRight(chess_board, this.tile_index, this.color))
                        break
                }
            })
            // console.log(valid_moves, " VALID MOVES")
            return valid_moves
        }

        //method to get available moves for the pawn
        getAvailableMoves(chess_board) {

            let valid_moves = this.checkMoveValidity(chess_board)
            this.valid_moves = valid_moves
            return valid_moves
        }
    }
export class Knight extends Piece{
        constructor(name, value, color, tile_index, DOM_name){
            super(name, value, color, tile_index)
            this.pawnScore= [
                null, null, null, null, null, null, null, null, null, null,
                null, -50, -40, -30, -30, -30, -30, -40, -50, null,
                null, -40, -20,   0,   0,   0,   0, -20, -40, null,
                null, -30,   0,  10,  15,  15,  10,   0, -30, null,
                null, -30,   5,  15,  20,  20,  15,   5, -30, null,
                null, -30,   0,  15,  20,  20,  15,   0, -30, null,
                null, -40, -20,   0,   5,   5,   0, -20, -40, null,
                null, -50, -40, -30, -30, -30, -30, -40, -50, null,
                null,   0,   0,   0,   0,   0,   0,   0,   0, null,
                null, null, null, null, null, null, null, null, null, null
            ]
            this.valid_moves = []
            this.DOM_name = DOM_name
        }
        //getting the valid moves for the Bishop
        checkMoveValidity(chess_board){

            const valid_moves = getMoves.knightMoves(chess_board, this.tile_index, this.color)

            // console.log(valid_moves, " VALID MOVES")
            return valid_moves
        }
        //method to get available moves for the pawn
        getAvailableMoves(chess_board, piece) {
            let valid_moves = this.checkMoveValidity(chess_board)
            this.valid_moves = valid_moves
            return valid_moves
        }
    }
export class Bishop extends Piece{
        constructor(name, value, color, tile_index, DOM_name){
            super(name, value, color, tile_index)
            this.pawnScore= [
                null, null, null, null, null, null, null, null, null, null,
                null, -20, -10, -10, -10, -10, -10, -10, -20, null,
                null, -10,   5,   0,   0,   0,   0,   5, -10, null,
                null, -10,  10,  10,  10,  10,  10,  10, -10, null,
                null, -10,   0,  10,  10,  10,  10,   0, -10, null,
                null, -10,   5,   5,  10,  10,   5,   5, -10, null,
                null, -10,   0,   5,  10,  10,   5,   0, -10, null,
                null, -20, -10, -10, -10, -10, -10, -10, -20, null,
                null,   0,   0,   0,   0,   0,   0,   0,   0, null,
                null, null, null, null, null, null, null, null, null, null
            ]
            this.moves = ['UP-LEFT', 'UP-RIGHT', 'DOWN-LEFT', 'DOWN-RIGHT']
            this.valid_moves = []
            this.DOM_name = DOM_name
        }
        //getting the valid moves for the Bishop
        checkMoveValidity(chess_board){
            let valid_moves = []

            //going through the possible moves and getting the valid ones
            this.moves.forEach(move => {
                switch(move){
                    case "UP-LEFT":
                        valid_moves.push(getMoves.moveUpLeft(chess_board, this.tile_index, this.color))
                        break
                    case "UP-RIGHT":
                        valid_moves.push(getMoves.moveUpRight(chess_board, this.tile_index, this.color))
                        break
                    case "DOWN-LEFT":
                        valid_moves.push(getMoves.moveDownLeft(chess_board, this.tile_index, this.color))
                        break
                    case "DOWN-RIGHT":
                        valid_moves.push(getMoves.moveDownRight(chess_board, this.tile_index, this.color))
                        break
                }
            })
            // console.log(valid_moves, " VALID MOVES")
            return valid_moves
        }

        //method to get available moves for the pawn
        getAvailableMoves(chess_board) {

            let valid_moves = this.checkMoveValidity(chess_board)
            this.valid_moves = valid_moves
            return valid_moves
        }
    }
export class Queen extends Piece{
        constructor(name, value, color, tile_index, DOM_name){
            super(name, value, color, tile_index)
            this.pawnScore= [
                null, null, null, null, null, null, null, null, null, null,
                null, -20, -10, -10,  -5,  -5, -10, -10, -20, null,
                null, -10,   0,   0,   0,   0,   0,   0, -10, null,
                null, -10,   0,   5,   5,   5,   5,   0, -10, null,
                null,  -5,   0,   5,   5,   5,   5,   0,  -5, null,
                null,   0,   0,   5,   5,   5,   5,   0,  -5, null,
                null, -10,   5,   5,   5,   5,   5,   0, -10, null,
                null, -20, -10, -10,  -5,  -5, -10, -10, -20, null,
                null,   0,   0,   0,   0,   0,   0,   0,   0, null,
                null, null, null, null, null, null, null, null, null, null
            ]
            this.moves = ['UP-LEFT', 'UP-RIGHT', 'DOWN-LEFT', 'DOWN-RIGHT', 'UP', 'DOWN', 'LEFT', 'RIGHT']
            this.valid_moves = []
            this.DOM_name = DOM_name
        }
        //getting the valid moves for the Queen
        checkMoveValidity(chess_board){
            let valid_moves = []

            //going through the possible moves and getting the valid ones
            this.moves.forEach(move => {
                switch(move){
                    case "UP-LEFT":
                        valid_moves.push(getMoves.moveUpLeft(chess_board, this.tile_index, this.color))
                        break
                    case "UP-RIGHT":
                        valid_moves.push(getMoves.moveUpRight(chess_board, this.tile_index, this.color))
                        break
                    case "DOWN-LEFT":
                        valid_moves.push(getMoves.moveDownLeft(chess_board, this.tile_index, this.color))
                        break
                    case "DOWN-RIGHT":
                        valid_moves.push(getMoves.moveDownRight(chess_board, this.tile_index, this.color))
                        break
                    case "UP":
                        valid_moves.push(getMoves.moveUp(chess_board, this.tile_index, this.color))
                        break
                    case "DOWN":
                        valid_moves.push(getMoves.moveDown(chess_board, this.tile_index, this.color))
                        break
                    case "LEFT":
                        valid_moves.push(getMoves.moveLeft(chess_board, this.tile_index, this.color))
                        break
                    case "RIGHT":
                        valid_moves.push(getMoves.moveRight(chess_board, this.tile_index, this.color))
                        break
                }
            })
            // console.log(valid_moves, " VALID MOVES")
            return valid_moves
        }

        //method to get available moves for the pawn
        getAvailableMoves(chess_board) {

            let valid_moves = this.checkMoveValidity(chess_board)
            this.valid_moves = valid_moves
            return valid_moves
        }
    }
export class King extends Piece{
        constructor(name, value, color, tile_index, DOM_name){ //add special_move later on
            super(name, value, color, tile_index)
            // this.special_move = special_move
            this.pawnScore= [
                null, null, null, null, null, null, null, null, null, null,
                null, -30, -40, -40, -50, -50, -40, -40, -30, null,
                null, -30, -40, -40, -50, -50, -40, -40, -30, null,
                null, -30, -40, -40, -50, -50, -40, -40, -30, null,
                null, -30, -40, -40, -50, -50, -40, -40, -30, null,
                null, -20, -30, -30, -40, -40, -30, -30, -20, null,
                null, -10, -20, -20, -20, -20, -20, -20, -10, null,
                null,  20,  20,   0,   0,   0,   0,  20,  20, null,
                null,  20,  30,  10,   0,   0,  10,  30,  20, null,
                null, null, null, null, null, null, null, null, null, null
            ]
            this.moves = ['UP-LEFT', 'UP-RIGHT', 'DOWN-LEFT', 'DOWN-RIGHT', 'UP', 'DOWN', 'LEFT', 'RIGHT']
            this.valid_moves = []
            this.DOM_name = DOM_name
        }
        //getting the valid moves for the King
        checkMoveValidity(chess_board){
            let valid_moves = []

            //going through the possible moves and getting the valid ones
            this.moves.forEach(move => {
                switch(move){
                    case "UP-LEFT":
                        valid_moves.push(getMoves.moveUpLeft(chess_board, this.tile_index, this.color, this.name))
                        break
                    case "UP-RIGHT":
                        valid_moves.push(getMoves.moveUpRight(chess_board, this.tile_index, this.color, this.name))
                        break
                    case "DOWN-LEFT":
                        valid_moves.push(getMoves.moveDownLeft(chess_board, this.tile_index, this.color, this.name))
                        break
                    case "DOWN-RIGHT":
                        valid_moves.push(getMoves.moveDownRight(chess_board, this.tile_index, this.color, this.name))
                        break
                    case "UP":
                        valid_moves.push(getMoves.moveUp(chess_board, this.tile_index, this.color, this.name))
                        break
                    case "DOWN":
                        valid_moves.push(getMoves.moveDown(chess_board, this.tile_index, this.color, this.name))
                        break
                    case "LEFT":
                        valid_moves.push(getMoves.moveLeft(chess_board, this.tile_index, this.color, this.name))
                        break
                    case "RIGHT":
                        valid_moves.push(getMoves.moveRight(chess_board, this.tile_index, this.color, this.name))
                        break
                }
            })
            // console.log(valid_moves, " VALID MOVES")
            
            return valid_moves
        }

        //method to get available moves for the pawn
        getAvailableMoves(chess_board) {

            let valid_moves = this.checkMoveValidity(chess_board)
            this.valid_moves = valid_moves
            return valid_moves
        }
    }

export class Border {
    constructor(name){
        this.name = name
    }
}

