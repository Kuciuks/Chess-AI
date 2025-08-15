//declaring the base class with constructor properties
class Piece{
    constructor(name, value, color){
        this.name = name
        this.value = value
        this.color = color; // 'white' or 'black'
    }
}

//declaring the child classes that extend the base class Piece (capturing base class properties)
class Pawn extends Piece{
    constructor(name, value, row_index, col_index){
        super(name, value, row_index, col_index)
        this.name = name
        this.value = value
        this.row_index = row_index
        this.col_index = col_index
        }
    }
class Rook extends Piece{
    constructor(name, value, row_index, col_index){
        super(name, value, row_index, col_index)
        this.name = name
        this.value = value
        this.row_index = row_index
        this.col_index = col_index
        }
    }
class Knight extends Piece{
    constructor(name, value, row_index, col_index){
        super(name, value, row_index, col_index)
        this.name = name
        this.value = value
        this.row_index = row_index
        this.col_index = col_index
        }
    }
class Bishop extends Piece{
    constructor(name, value, row_index, col_index){
        super(name, value, row_index, col_index)
        this.name = name
        this.value = value
        this.row_index = row_index
        this.col_index = col_index
        }
    }
class Queen extends Piece{
    constructor(name, value, row_index, col_index){
        super(name, value, row_index, col_index)
        this.name = name
        this.value = value
        this.row_index = row_index
        this.col_index = col_index
        }
    }
class King extends Piece{
    constructor(name, value, row_index, col_index){
        super(name, value, row_index, col_index)
        this.name = name
        this.value = value
        this.row_index = row_index
        this.col_index = col_index
        }
    }

//initializing the pieces with their respective classes and colors (WHITE PIECES)
const pawn_w = new Pawn('Pawn',100, 'White')
const rook_w = new Rook('Rook',500, 'White')
const knight_w = new Knight('Knight',300, 'White')
const bishop_w = new Bishop('Bishop',300, 'White')
const queen_w = new Queen('Queen',900, 'White')
const king_w = new King('King',10000, 'White')

//initializing the pieces with their respective classes and colors (BLACK PIECES)
const pawn_b = new Pawn('Pawn',100, 'Black')
const rook_b = new Rook('Rook',500, 'Black')
const knight_b = new Knight('Knight',300, 'Black')
const bishop_b = new Bishop('Bishop',300, 'Black')
const queen_b = new Queen('Queen',900, 'Black')
const king_b = new King('King',10000, 'Black')

//storing starting chess board state with initialized pieces, list of items from 1 to 64
const chess_board = [
    rook_w, knight_w, bishop_w, queen_w, king_w, bishop_w, knight_w, rook_w,
    pawn_w, pawn_w, pawn_w, pawn_w, pawn_w, pawn_w, pawn_w, pawn_w,
    null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null,
    pawn_b, pawn_b, pawn_b, pawn_b, pawn_b, pawn_b, pawn_b, pawn_b,
    rook_b, knight_b, bishop_b, queen_b, king_b, bishop_b, knight_b, rook_b
]

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
            // console.log('[config CALL]')
            return instance;
        }
    };
})();


console.log(config.chess_board)

export default config;