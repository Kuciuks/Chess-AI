//declaring the base class with constructor properties
class Piece{
    constructor(name, value, color, tile_index){
        this.name = name
        this.value = value
        this.color = color
        this.tile_index = tile_index
        this.moves = []
    }

    //method for checking move validity
    //iputs the chess board and an array of moves
    checkMoveValidity(chess_board, moves){
        let valid_moves = []
        // console.log(moves, " MOVES")

            moves.forEach(move => {
                //check if the move is not a border and not occupied by same color piece
                if (move != undefined && chess_board[move]?.name !== "Border" && chess_board[move]?.color !== this.color) {
                    // console.log(chess_board[move], " VALID MOVE", move)
                    valid_moves.push(move)
                }
            })

        return valid_moves
    }
}




//declaring the child classes that extend the base class Piece (capturing base class properties)
class Pawn extends Piece{
        constructor(name, value, color, tile_index, special_move){
            super(name, value, color, tile_index)
            this.special_move = special_move
            this.pawnScore= [
                null, null, null, null, null, null, null, null, null, null,
                null, 0, 0, 0, 0, 0, 0, 0, 0, null,
                null, 10, 10, 10, 10, 10, 10, 10, 10, null,
                null, 5, 5, 5, 5, 50, 5, 5, 5, null,
                null, 0, 0, 0, 0, 50, 0, 0, 0, null,
                null, -5, -5, -5, 500, -5, -10, 0, -5, null,
                null, -10, -10, -10, -10, 0, 0, -10, -10, null,
                null, -15, -15, -15, -15, -15, -15, -15, -15, null,
                null, 0, 0, 0, 0, 0, 0, 0, 0, null,
                null, null, null, null, null, null, null, null, null, null
            ]
        }
        //method to get available moves for the pawn
        getAvailableMoves(chess_board) {
            // console.log('\\\n',this.tile_index, "__________ ",this.name, this.color)
            const tile_index = this.tile_index

            if (this.color == "White") {
                //moves for black pawn
                const move_down = tile_index + 10
                const move_diag_left = tile_index + 9
                const move_diag_right = tile_index + 11
                const move_two_ahead = this.special_move && chess_board[move_down] == null ? tile_index + 20 : undefined

                let valid_moves = this.checkMoveValidity(chess_board, [move_down, move_diag_left, move_diag_right, move_two_ahead])
                // console.log(valid_moves)
                return valid_moves
            }
            if (this.color == "Black") {
                //moves for white pawn
                const move_up = tile_index - 10
                const move_diag_left = tile_index - 11
                const move_diag_right = tile_index - 9
                const move_two_ahead =  this.special_move && chess_board[move_up] == null ? tile_index - 20 : undefined

                let valid_moves = this.checkMoveValidity(chess_board, [move_up, move_diag_left, move_diag_right, move_two_ahead])
                // console.log(valid_moves)
                return valid_moves
            }
        }
    }
class Rook extends Piece{
        //method to get available moves for the pawn
        getAvailableMoves(chess_board, piece) {
            
        }
    }
class Knight extends Piece{
        //method to get available moves for the pawn
        getAvailableMoves(chess_board, piece) {
            
        }
    }
class Bishop extends Piece{
        //method to get available moves for the pawn
        getAvailableMoves(chess_board, piece) {
            
        }
    }
class Queen extends Piece{
        //method to get available moves for the pawn
        getAvailableMoves(chess_board, piece) {
            
        }
    }
class King extends Piece{
        //method to get available moves for the pawn
        getAvailableMoves(chess_board, piece) {
            
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
const pawn_b_1 = new Pawn('Pawn',100, 'Black', 35, true)
const pawn_b_2 = new Pawn('Pawn',100, 'Black', 72, true)
const pawn_b_3 = new Pawn('Pawn',100, 'Black', 73, true)
const pawn_b_4 = new Pawn('Pawn',100, 'Black', 74, true)
const pawn_b_5 = new Pawn('Pawn',100, 'Black', 75, true)
const pawn_b_6 = new Pawn('Pawn',100, 'Black', 76, true)
const pawn_b_7 = new Pawn('Pawn',100, 'Black', 77, true)
const pawn_b_8 = new Pawn('Pawn',100, 'Black', 78, true)

const rook_b_1 = new Rook('Rook',500, 'Black', 81)
const rook_b_2 = new Rook('Rook',500, 'Black', 88)

const knight_b_1 = new Knight('Knight',300, 'Black', 82)
const knight_b_2 = new Knight('Knight',300, 'Black', 87)

const bishop_b_1 = new Bishop('Bishop',300, 'Black', 83)
const bishop_b_2 = new Bishop('Bishop',300, 'Black', 86)

const queen_b = new Queen('Queen',900, 'Black', 84)
const king_b = new King('King',10000, 'Black', 85)


const border = new Border('Border')


//storing starting chess board state with initialized pieces, list of items from 1 to 64
const chess_board = [
    border,  border,    border,     border,    border,   border,    border,     border,    border,   border,
    border, rook_w_1, knight_w_1, bishop_w_1, queen_w,   king_w,  bishop_w_2, knight_w_2,  rook_w_2, border,
    border, pawn_w_1,  pawn_w_2,   pawn_w_3,  pawn_w_4, pawn_w_5,  pawn_w_6,   pawn_w_7,   pawn_w_8, border,
    border,   null,      null,       null,      null,     null,      pawn_b_1,       null,       null,   border,
    border,   null,      null,       null,      null,     null,      null,       null,       null,   border,
    border,   null,      null,       null,      null,     null,      null,       null,       null,   border,
    border,   null,      null,       null,      null,     null,      null,       null,       null,   border,
    border, null,  pawn_b_2,   pawn_b_3,  pawn_b_4, pawn_b_5,  pawn_b_6,   pawn_b_7,   pawn_b_8, border,
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
    

    let old_index = piece.tile_index
    console.log(`Piece ${piece.name, piece.color} moved from ${old_index} to ${move} with score changing from ${piece.pawnScore[old_index]} to ${score}`)

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