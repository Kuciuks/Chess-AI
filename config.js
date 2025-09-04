import getMoves from "./getMoves.js";

//declaring the base class with constructor properties
class Piece{
    constructor(name, value, color, tile_index){
        this.name = name
        this.value = value
        this.color = color
        this.tile_index = tile_index
        this.moves = []
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
            this.moves = this.color == 'Black' ? ['UP', 'UP-LEFT', 'UP-RIGHT'] : ['DOWN', 'DOWN-LEFT', 'DOWN-RIGHT']
        }

        checkMoveValidity(chess_board, moves){
            let valid_moves = []
            console.log(moves)
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
                        valid_moves.push(getMoves.moveUp(chess_board, this.tile_index, this.color, this.name, this.special_move))
                        break
                    case "DOWN":
                        valid_moves.push(getMoves.moveDown(chess_board, this.tile_index, this.color, this.name, this.special_move))
                        break
                    case "LEFT":
                        valid_moves.push(getMoves.moveLeft(chess_board, this.tile_index, this.color, this.name))
                        break
                    case "RIGHT":
                        valid_moves.push(getMoves.moveRight(chess_board, this.tile_index, this.color, this.name))
                        break
                }
            })
            console.log(valid_moves, " VALID MOVES")
            return valid_moves
        }


        //method to get available moves for the pawn
        getAvailableMoves(chess_board) {
            // // console.log('\\\n',this.tile_index, "__________ ",this.name, this.color)
            // const tile_index = this.tile_index

            // if (this.color == "White") {
            //     //moves for black pawn
            //     const move_up = chess_board[tile_index + 10] == null ? tile_index + 10 : undefined
            //     const move_diag_left = chess_board[tile_index + 11]?.color == 'Black' ? tile_index + 11 : undefined
            //     const move_diag_right = chess_board[tile_index + 9]?.color == 'Black' ? tile_index + 9 : undefined
            //     const move_two_ahead =  this.special_move && chess_board[tile_index + 20] == null ? tile_index + 20 : undefined

            //     let valid_moves = this.checkMoveValidity(chess_board, [move_down, move_diag_left, move_diag_right, move_two_ahead])
            //     // console.log(valid_moves)
            //     return valid_moves
            // }
            // if (this.color == "Black") {
            //     //moves for white pawn
            //     const move_up = chess_board[tile_index - 10] == null ? tile_index - 10 : undefined
            //     const move_diag_left = chess_board[tile_index - 11]?.color == 'White' ? tile_index - 11 : undefined
            //     const move_diag_right = chess_board[tile_index - 9]?.color == 'White' ? tile_index - 9 : undefined
            //     const move_two_ahead =  this.special_move && chess_board[tile_index - 20] == null ? tile_index - 20 : undefined

            let valid_moves = this.checkMoveValidity(chess_board, this.moves)
            console.log(valid_moves)
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
        }

        //getting the valid moves for the rook
        checkMoveValidity(chess_board){
            let valid_moves = []

            //going through the possible moves and getting the valid ones
            this.moves.forEach(move => {
                switch(move){
                    case "UP":
                        valid_moves.push(getMoves.moveUp(chess_board, this.tile_index))
                        break
                    case "DOWN":
                        valid_moves.push(getMoves.moveDown(chess_board, this.tile_index))
                        break
                    case "LEFT":
                        valid_moves.push(getMoves.moveLeft(chess_board, this.tile_index))
                        break
                    case "RIGHT":
                        valid_moves.push(getMoves.moveRight(chess_board, this.tile_index))
                        break
                }
            })
            console.log(valid_moves, " VALID MOVES")
            return valid_moves
        }

        //method to get available moves for the pawn
        getAvailableMoves(chess_board) {

            let valid_moves = this.checkMoveValidity(chess_board)

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
        }
        //getting the valid moves for the Bishop
        checkMoveValidity(chess_board){

            const valid_moves = getMoves.knightMoves(chess_board, this.tile_index, this.color)

            console.log(valid_moves, " VALID MOVES")
            return valid_moves
        }
        //method to get available moves for the pawn
        getAvailableMoves(chess_board, piece) {
            let valid_moves = this.checkMoveValidity(chess_board)
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
        }
        //getting the valid moves for the Bishop
        checkMoveValidity(chess_board){
            let valid_moves = []

            //going through the possible moves and getting the valid ones
            this.moves.forEach(move => {
                switch(move){
                    case "UP-LEFT":
                        valid_moves.push(getMoves.moveUpLeft(chess_board, this.tile_index))
                        break
                    case "UP-RIGHT":
                        valid_moves.push(getMoves.moveUpRight(chess_board, this.tile_index))
                        break
                    case "DOWN-LEFT":
                        valid_moves.push(getMoves.moveDownLeft(chess_board, this.tile_index))
                        break
                    case "DOWN-RIGHT":
                        valid_moves.push(getMoves.moveDownRight(chess_board, this.tile_index))
                        break
                }
            })
            console.log(valid_moves, " VALID MOVES")
            return valid_moves
        }

        //method to get available moves for the pawn
        getAvailableMoves(chess_board) {

            let valid_moves = this.checkMoveValidity(chess_board)

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
        }
        //getting the valid moves for the Queen
        checkMoveValidity(chess_board){
            let valid_moves = []

            //going through the possible moves and getting the valid ones
            this.moves.forEach(move => {
                switch(move){
                    case "UP-LEFT":
                        valid_moves.push(getMoves.moveUpLeft(chess_board, this.tile_index))
                        break
                    case "UP-RIGHT":
                        valid_moves.push(getMoves.moveUpRight(chess_board, this.tile_index))
                        break
                    case "DOWN-LEFT":
                        valid_moves.push(getMoves.moveDownLeft(chess_board, this.tile_index))
                        break
                    case "DOWN-RIGHT":
                        valid_moves.push(getMoves.moveDownRight(chess_board, this.tile_index))
                        break
                    case "UP":
                        valid_moves.push(getMoves.moveUp(chess_board, this.tile_index))
                        break
                    case "DOWN":
                        valid_moves.push(getMoves.moveDown(chess_board, this.tile_index))
                        break
                    case "LEFT":
                        valid_moves.push(getMoves.moveLeft(chess_board, this.tile_index))
                        break
                    case "RIGHT":
                        valid_moves.push(getMoves.moveRight(chess_board, this.tile_index))
                        break
                }
            })
            console.log(valid_moves, " VALID MOVES")
            return valid_moves
        }

        //method to get available moves for the pawn
        getAvailableMoves(chess_board) {

            let valid_moves = this.checkMoveValidity(chess_board)

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
        }
        //getting the valid moves for the King
        checkMoveValidity(chess_board){
            let valid_moves = []

            //going through the possible moves and getting the valid ones
            this.moves.forEach(move => {
                switch(move){
                    case "UP-LEFT":
                        valid_moves.push(getMoves.moveUpLeft(chess_board, this.tile_index, this.color, 'King'))
                        break
                    case "UP-RIGHT":
                        valid_moves.push(getMoves.moveUpRight(chess_board, this.tile_index, this.color, 'King'))
                        break
                    case "DOWN-LEFT":
                        valid_moves.push(getMoves.moveDownLeft(chess_board, this.tile_index, this.color, 'King'))
                        break
                    case "DOWN-RIGHT":
                        valid_moves.push(getMoves.moveDownRight(chess_board, this.tile_index, this.color, 'King'))
                        break
                    case "UP":
                        valid_moves.push(getMoves.moveUp(chess_board, this.tile_index, this.color, 'King'))
                        break
                    case "DOWN":
                        valid_moves.push(getMoves.moveDown(chess_board, this.tile_index, this.color, 'King'))
                        break
                    case "LEFT":
                        valid_moves.push(getMoves.moveLeft(chess_board, this.tile_index, this.color, 'King'))
                        break
                    case "RIGHT":
                        valid_moves.push(getMoves.moveRight(chess_board, this.tile_index, this.color, 'King'))
                        break
                }
            })
            console.log(valid_moves, " VALID MOVES")
            return valid_moves
        }

        //method to get available moves for the pawn
        getAvailableMoves(chess_board) {

            let valid_moves = this.checkMoveValidity(chess_board)

            return valid_moves
        }
    }

class Border {
    constructor(name){
        this.name = name
    }
}

//initializing the pieces with their respective classes and colors (WHITE PIECES)
const pawn_w_1 = new Pawn('Pawn',100, 'White', 21, true)
const pawn_w_2 = new Pawn('Pawn',100, 'White', 22, true)
const pawn_w_3 = new Pawn('Pawn',100, 'White', 23, true)
const pawn_w_4 = new Pawn('Pawn',100, 'White', 25, true)
const pawn_w_5 = new Pawn('Pawn',100, 'White', 26, true)
const pawn_w_6 = new Pawn('Pawn',100, 'White', 27, true)
const pawn_w_7 = new Pawn('Pawn',100, 'White', 28, true)
const pawn_w_8 = new Pawn('Pawn',100, 'White', 29, true)

const rook_w_1 = new Rook('Rook',500, 'White', 11)
const rook_w_2 = new Rook('Rook',500, 'White', 28)

const knight_w_1 = new Knight('Knight',300, 'White', 12)
const knight_w_2 = new Knight('Knight',300, 'White', 17)

const bishop_w_1 = new Bishop('Bishop',300, 'White', 13)
const bishop_w_2 = new Bishop('Bishop',300, 'White', 16)

const queen_w = new Queen('Queen',900, 'White', 14)
const king_w = new King('King',10000, 'White', 15)



//initializing the pieces with their respective classes and colors (BLACK PIECES)
const pawn_b_1 = new Pawn('Pawn',100, 'Black', 25, true)
const pawn_b_2 = new Pawn('Pawn',100, 'Black', 48, true)
const pawn_b_3 = new Pawn('Pawn',100, 'Black', 35, true)
const pawn_b_4 = new Pawn('Pawn',100, 'Black', 74, true)
const pawn_b_5 = new Pawn('Pawn',100, 'Black', 75, true)
const pawn_b_6 = new Pawn('Pawn',100, 'Black', 76, true)
const pawn_b_7 = new Pawn('Pawn',100, 'Black', 77, true)
const pawn_b_8 = new Pawn('Pawn',100, 'Black', 78, true)

const rook_b_1 = new Rook('Rook',500, 'Black', 45)
const rook_b_2 = new Rook('Rook',500, 'Black', 78)

const knight_b_1 = new Knight('Knight',300, 'Black', 55)
const knight_b_2 = new Knight('Knight',300, 'Black', 87)

const bishop_b_1 = new Bishop('Bishop',300, 'Black', 55)
const bishop_b_2 = new Bishop('Bishop',300, 'Black', 86)

const queen_b = new Queen('Queen',900, 'Black', 45)
const king_b = new King('King',10000, 'Black', 65)


const border = new Border('Border')


//storing starting chess board state with initialized pieces, list of items from 1 to 64
const chess_board = [
    border,  border,    border,     border,    border,   border,    border,     border,    border,   border,
    border, rook_w_1, knight_w_1, bishop_w_1, queen_w,   king_w,  bishop_w_2, knight_w_2,  rook_w_2, border,
    border, pawn_w_1,  pawn_w_2,   pawn_w_3,  pawn_w_4, pawn_w_5,  pawn_w_6,   pawn_w_7,   pawn_w_8, border,
    border,   null,      null,       null,      null,     null,      null,       null,       null,   border,
    border,   null,      null,       null,      null,     null,      null,       null,       null,   border,
    border,   null,      null,       null,      null,     knight_b_1,      null,       null,       null,   border,
    border,   null,      null,       null,      null,     null,      null,       null,       null,   border,
    border, border,  border,   border,  border, border,  border,   border,   border, border,
    border, border, border, border, border,   border,  border, border,  border, border,
    border,  border,    border,     border,    border,   border,    border,     border,     border,  border
]

    // border, rook_b_1, knight_b_1, bishop_b_1, queen_b,   king_b,  bishop_b_2, knight_b_2,  rook_b_2, border,
    // border,  border,    border,     border,    border,   border,    border,     border,     border,  border

// const chess_board = [
//     [border],   [border],         [border],          [border],      [border],        [border],       [border],       [border],         [border],    [border],
//     [border], [rook_w_1, 1],   [knight_w_1, 2],  [bishop_w_1, 3], [queen_w, 4],     [king_w,5],  [bishop_w_2, 6], [knight_w_2, 7],   [rook_w_2, 8], [border],
//     [border], [pawn_w_1, 9],   [pawn_w_2, 10],   [pawn_w_3, 11],  [pawn_w_4, 12], [pawn_w_5, 13], [pawn_w_6, 14],  [pawn_w_7, 15],  [pawn_w_8, 16], [border],
//     [border],   [null, 17],      [null, 18],       [null, 19],      [null, 20],     [null, 21],     [null, 22],      [null, 23],      [null, 24],   [border],
//     [border],   [null, 25],      [null, 26],       [null, 27],      [null, 28],     [null, 29],     [null, 30],      [null, 31],      [null, 32],   [border],
//     [border],   [null, 33],      [null, 34],       [null, 35],      [null, 36],     [null, 37],     [null, 38],      [null, 39],      [null, 40],   [border],
//     [border],   [null, 41],      [null, 42],       [null, 43],      [null, 44],     [null, 45],     [null, 46],      [null, 47],      [null, 48],   [border],
//     [border], [pawn_b_1, 49],  [pawn_b_2, 50],   [pawn_b_3, 51],  [pawn_b_4, 52], [pawn_b_5, 53], [pawn_b_6, 54],   [pawn_b_7, 55], [pawn_b_8, 56], [border],
//     [border], [rook_b_1, 57], [knight_b_1, 58], [bishop_b_1, 59], [queen_b, 60],   [king_b, 61], [bishop_b_2, 62], [knight_b_2, 63],[rook_b_2, 64], [border],
//     [border],    [border],       [border],           [border],       [border],       [border],       [border],           [border],      [border],   [border]
// ]



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

// export function undoMove(piece, move,chess_board){
//     let old_index = piece.tile_index
//     let new_index = move

//     //set old tile to null where the piece moved form
//     chess_board[old_index] = null

//     //set piece tile index to new index
//     piece.tile_index = new_index

//     //set new tile to the piece object 
//     chess_board[new_index] = piece
//     return [chess_board[new_index], old_index]
// }




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
        return {
            black_pieces: [],
            white_pieces: [],
            all_piece_moves: [],
            depth: 1,
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