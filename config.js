import uploadImages from "./uploadImages.js";
import paintTiles from "./paintTiles.js";
import getMoves from "./getMoves.js";

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
class Pawn extends Piece{
        constructor(name, value, color, tile_index, special_move){
            super(name, value, color, tile_index)
            this.special_move = special_move
            this.pawnScore= [
                null, null, null, null, null, null, null, null, null, null,
                null,    0,   0,   0,   0,   0,   0,   0,   0, null,
                null,   10,  10,  10,  10,  10,  10,  10,  10, null,
                null,    5,   5,   5,   5,  50,   5,   5,   5, null,
                null,    0,   0,   0,   0,  50,   0,   0,   0, null,
                null,   -5,  -5,  -5, 500,  -5, -10,   0,  -5, null,
                null,  -10, -10, -10, -10,   0,   0, -10, -10, null,
                null,  -15, -15, -15, -15, -15, -15, -15, -15, null,
                null,    0,   0,   0,   0,   0,   0,   0,   0, null,
                null, null, null, null, null, null, null, null, null, null
            ]
            this.moves = {W:['UP', 'UP-LEFT', 'UP-RIGHT'], B:['DOWN', 'DOWN-LEFT', 'DOWN-RIGHT']}
            this.valid_moves = []
        }

        checkMoveValidity(chess_board){
            let valid_moves = []

            let enemy_color = this.color == 'White' ? "Black" : this.color == "Black" ? "White" : null
            console.log(enemy_color)
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
            // console.log(valid_moves, " VALID MOVES")
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
class Rook extends Piece{
        constructor(name, value, color, tile_index){ //add special_move later on
            super(name, value, color, tile_index)
            // this.special_move = special_move
            this.pawnScore= [
                null, null, null, null, null, null, null, null, null, null,
                null, -10,  -5,  -5,  -5,  -5,  -5,  -5, -10, null,
                null,   5,  10,  10,  10,  10,  10,  10,   5, null,
                null,  -5,   0,   0,   0,   0,   0,   0,  -5, null,
                null,  -5,   0,   0,   0,   0,   0,   0,  -5, null,
                null,  -5,   0,   0,   0,   0,   0,   0,  -5, null,
                null,  -5,   0,   0,   0,   0,   0,   0,  -5, null,
                null,  -5,   0,   0,   0,   0,   0,   0,  -5, null,
                null,   0,   0,   0,   5,   5,   0,   0,   0, null,
                null, null, null, null, null, null, null, null, null, null
            ]
            this.moves = ['UP', 'DOWN', 'LEFT', 'RIGHT']
            this.valid_moves = []
        }

        //getting the valid moves for the rook
        checkMoveValidity(chess_board){
            let valid_moves = []

            //going through the possible moves and getting the valid ones
            this.moves.forEach(move => {
                switch(move){
                    case "UP":
                        valid_moves.push(getMoves.moveUp(chess_board, this.tile_index,  this.color, this.name))
                        break
                    case "DOWN":
                        valid_moves.push(getMoves.moveDown(chess_board, this.tile_index, this.color, this.name))
                        break
                    case "LEFT":
                        valid_moves.push(getMoves.moveLeft(chess_board, this.tile_index))
                        break
                    case "RIGHT":
                        valid_moves.push(getMoves.moveRight(chess_board, this.tile_index))
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
class Knight extends Piece{
        constructor(name, value, color, tile_index){
            super(name, value, color, tile_index)
            this.pawnScore= [
                null, null, null, null, null, null, null, null, null, null,
                null,  -20, -15, -10, -10, -10, -10, -15, -20, null,
                null,  -15,  -5,   0,   0,   0,   0,  -5, -15, null,
                null,  -10,   0,   5,   5,   5,   5,   0, -10, null,
                null,  -10,   0,   5,  10,  10,   5,   0, -10, null,
                null,  -10,   0,   5,  10,  10,   5,   0, -10, null,
                null,  -10,   0,   5,   5,   5,   5,   0, -10, null,
                null,  -15,  -5,   0,   0,   0,   0,  -5, -15, null,
                null,  -20, -15, -10, -10, -10, -10, -15, -20, null,
                null, null, null, null, null, null, null, null, null, null
            ]
            this.valid_moves = []
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
class Bishop extends Piece{
        constructor(name, value, color, tile_index){
            super(name, value, color, tile_index)
            this.pawnScore= [
                null, null, null, null, null, null, null, null, null, null,
                null,  -10,  -5,  -5,  -5,  -5,  -5,  -5, -10, null,
                null,   -5,   0,   0,   0,   0,   0,   0,  -5, null,
                null,   -5,   0,   5,   5,   5,   5,   0,  -5, null,
                null,   -5,   5,   5,  10,  10,   5,   5,  -5, null,
                null,   -5,   0,  10,  10,  10,  10,   0,  -5, null,
                null,   -5,  10,  10,  10,  10,  10,  10,  -5, null,
                null,   -5,   5,   0,   0,   0,   0,   5,  -5, null,
                null,  -10,  -5,  -5,  -5,  -5,  -5,  -5, -10, null,
                null, null, null, null, null, null, null, null, null, null
            ]
            this.moves = ['UP-LEFT', 'UP-RIGHT', 'DOWN-LEFT', 'DOWN-RIGHT']
            this.valid_moves = []
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
class Queen extends Piece{
        constructor(name, value, color, tile_index){
            super(name, value, color, tile_index)
            this.pawnScore= [
                null, null, null, null, null, null, null, null, null, null,
                null,  -20, -10, -10,  -5,  -5, -10, -10, -20, null,
                null,  -10,   0,   0,   0,   0,   0,   0, -10, null,
                null,  -10,   0,   5,   5,   5,   5,   0, -10, null,
                null,   -5,   0,   5,   5,   5,   5,   0,  -5, null,
                null,    0,   0,   5,   5,   5,   5,   0,  -5, null,
                null,  -10,   5,   5,   5,   5,   5,   0, -10, null,
                null,  -10,   0,   5,   0,   0,   0,   0, -10, null,
                null,  -20, -10, -10,  -5,  -5, -10, -10, -20, null,
                null, null, null, null, null, null, null, null, null, null
            ]
            this.moves = ['UP-LEFT', 'UP-RIGHT', 'DOWN-LEFT', 'DOWN-RIGHT', 'UP', 'DOWN', 'LEFT', 'RIGHT']
            this.valid_moves = []
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
            console.log(valid_moves, " VALID MOVES")
            return valid_moves
        }

        //method to get available moves for the pawn
        getAvailableMoves(chess_board) {

            let valid_moves = this.checkMoveValidity(chess_board)
            this.valid_moves = valid_moves
            return valid_moves
        }
    }
class King extends Piece{
        constructor(name, value, color, tile_index){ //add special_move later on
            super(name, value, color, tile_index)
            // this.special_move = special_move
            this.pawnScore= [
                null, null, null, null, null, null, null, null, null, null,
                null,   20,  30,  10,   0,   0,  10,  30,  20, null,
                null,   20,  20,   0,   0,   0,   0,  20,  20, null,
                null,  -10, -20, -20, -20, -20, -20, -20, -10, null,
                null,  -20, -30, -30, -40, -40, -30, -30, -20, null,
                null,  -30, -40, -40, -50, -50, -40, -40, -30, null,
                null,  -30, -40, -40, -50, -50, -40, -40, -30, null,
                null,  -30, -40, -40, -50, -50, -40, -40, -30, null,
                null,  -30, -40, -40, -50, -50, -40, -40, -30, null,
                null, null, null, null, null, null, null, null, null, null
            ]
            this.moves = ['UP-LEFT', 'UP-RIGHT', 'DOWN-LEFT', 'DOWN-RIGHT', 'UP', 'DOWN', 'LEFT', 'RIGHT']
            this.valid_moves = []
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

class Border {
    constructor(name){
        this.name = name
    }
}

//initializing the pieces with their respective classes and colors (WHITE PIECES)
const pawn_w_1 = new Pawn('Pawn',100, 'White', 71, true)
const pawn_w_2 = new Pawn('Pawn',100, 'White', 72, true)
const pawn_w_3 = new Pawn('Pawn',100, 'White', 73, true)
const pawn_w_4 = new Pawn('Pawn',100, 'White', 74, true)
const pawn_w_5 = new Pawn('Pawn',100, 'White', 75, true)
const pawn_w_6 = new Pawn('Pawn',100, 'White', 76, true)
const pawn_w_7 = new Pawn('Pawn',100, 'White', 77, true)
const pawn_w_8 = new Pawn('Pawn',100, 'White', 78, true)

const rook_w_1 = new Rook('Rook',500, 'White', 81)
const rook_w_2 = new Rook('Rook',500, 'White', 88)

const knight_w_1 = new Knight('Knight',300, 'White', 82)
const knight_w_2 = new Knight('Knight',300, 'White', 87)

const bishop_w_1 = new Bishop('Bishop',300, 'White', 83)
const bishop_w_2 = new Bishop('Bishop',300, 'White', 86)

const queen_w = new Queen('Queen',900, 'White', 84)
const king_w = new King('King',10000, 'White', 85)



//initializing the pieces with their respective classes and colors (BLACK PIECES)
const pawn_b_1 = new Pawn('Pawn',100, 'Black', 21, true)
const pawn_b_2 = new Pawn('Pawn',100, 'Black', 22, true)
const pawn_b_3 = new Pawn('Pawn',100, 'Black', 23, true)
const pawn_b_4 = new Pawn('Pawn',100, 'Black', 24, true)
const pawn_b_5 = new Pawn('Pawn',100, 'Black', 25, true)
const pawn_b_6 = new Pawn('Pawn',100, 'Black', 26, true)
const pawn_b_7 = new Pawn('Pawn',100, 'Black', 27, true)
const pawn_b_8 = new Pawn('Pawn',100, 'Black', 28, true)

const rook_b_1 = new Rook('Rook',500, 'Black', 11)
const rook_b_2 = new Rook('Rook',500, 'Black', 18)

const knight_b_1 = new Knight('Knight',300, 'Black', 12)
const knight_b_2 = new Knight('Knight',300, 'Black', 17)

const bishop_b_1 = new Bishop('Bishop',300, 'Black', 13)
const bishop_b_2 = new Bishop('Bishop',300, 'Black', 16)

const queen_b = new Queen('Queen',900, 'Black', 14)
const king_b = new King('King',10000, 'Black', 15)


const border = new Border('Border')


//storing starting chess board state with initialized pieces, list of items from 1 to 64
const chess_board = [
    border,  border,    border,     border,    border,   border,    border,     border,    border,   border,
    border, rook_b_1, knight_b_1, bishop_b_1, queen_b,   king_b,  bishop_b_2, knight_b_2,  rook_b_2, border,
    border, pawn_b_1,  pawn_b_2,   pawn_b_3,  pawn_b_4, pawn_b_5,  pawn_b_6,   pawn_b_7,   pawn_b_8, border,
    border,   null,      null,       null,      null,     null,      null,       null,       null,   border,
    border,   null,      null,       null,      null,     null,      null,       null,       null,   border,
    border,   null,      null,       null,      null,     null,      null,       null,       null,   border,
    border,   null,      null,       null,      null,     null,      null,       null,       null,   border,
    border, pawn_w_1,  pawn_w_2,   pawn_w_3,  pawn_w_4, pawn_w_5,  pawn_w_6,   pawn_w_7,   pawn_w_8, border,
    border, rook_w_1, knight_w_1, bishop_w_1, queen_w,   king_w,  bishop_w_2, knight_w_2,  rook_w_2, border,
    border,  border,    border,     border,    border,   border,    border,     border,     border,  border
]



export function evaluateBoard(piece, move,chess_board){
    let score = piece.pawnScore[move]

    if (chess_board[move] != null) {
        score += chess_board[move]?.value
    }
    //get score value from a piece score matrix for a specific tile index
    

    // let old_index = piece.tile_index
    // console.log(`Piece ${piece.name, piece.color} moved from ${old_index} to ${move} with score changing from ${piece.pawnScore[old_index]} to ${score}`)

    return score
}


export function getColoredPieces(chess_board){

    let black_pieces = []
    let white_pieces = []
    //mapping through the board to separate pieces based on color
    chess_board.forEach(piece =>{
        //asign tile number to the piece on which the piece is located
        if (piece != null && piece != border) {

            if (piece.color == "Black") { 
                black_pieces.push(piece)
            }
            else if (piece.color == "White") {
                white_pieces.push(piece)
            }
        }
    })
    return { black_pieces, white_pieces }
}



//only called once to create a singleton instance of the config object
const config = (function() {
    let instance;

    function createInstance() {
            //upload images, repaint tiles, reset values
            uploadImages()
            paintTiles()
        return {
            black_pieces: [],
            white_pieces: [],
            all_piece_moves: [],
            depth: 2,
            alpha: -Infinity,
            beta: Infinity,
            checkedBoardCount: 0,
            pieceNameMemAI: [],
            pieceNameMemHU: [],
            count: 0,
            moveCount: 0,
            moveStorage: [],
            toggle: 1,
            selection: null,
            selected_letter: "",
            white_move_set: new Set(),
            blacks_move_set: new Set(),
            chess_board: chess_board
        }
    }

    return {
        getInstance: function() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();



export default config;