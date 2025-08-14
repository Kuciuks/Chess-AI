//declaring the base class with constructor properties
class Piece{
    constructor(name, value, row_index, col_index){
        this.name = name
        this.value = value
        this.row_index = row_index
        this.col_index = col_index
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


//initializing the pieces with their respective classes
const pawn_p = new Pawn()
const rook_p = new Rook()
const knight_p = new Knight()
const bishop_p = new Bishop()
const queen_p = new Queen()
const king_p = new King()

//storing starting chess board state with initialized pieces
chess_board = [
    [rook_p, knight_p, bishop_p, queen_p, king_p, bishop_p, knight_p, rook_p],
    [pawn_p, pawn_p, pawn_p, pawn_p, pawn_p, pawn_p, pawn_p, pawn_p],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [pawn_p, pawn_p, pawn_p, pawn_p, pawn_p, pawn_p, pawn_p, pawn_p],
    [rook_p, knight_p, bishop_p, queen_p, king_p, bishop_p, knight_p, rook_p]
];




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
            chess_board: []
        };
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

export default config;