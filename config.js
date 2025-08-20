//declaring the base class with constructor properties
class Piece{
    constructor(name, value, color, tile_index){
        this.name = name
        this.value = value
        this.color = color
        this.tile_index = tile_index
    }
    //method to get available moves for the pawn
    getAvailableMoves(chess_board, tile_index) {
        
    }
}

//declaring the child classes that extend the base class Piece (capturing base class properties)
class Pawn extends Piece{

    }
class Rook extends Piece{

    }
class Knight extends Piece{

    }
class Bishop extends Piece{

    }
class Queen extends Piece{

    }
class King extends Piece{

    }



//initializing the pieces with their respective classes and colors (WHITE PIECES)
const pawn_w_1 = new Pawn('Pawn',100, 'White', 9)
const pawn_w_2 = new Pawn('Pawn',100, 'White', 10)
const pawn_w_3 = new Pawn('Pawn',100, 'White', 11)
const pawn_w_4 = new Pawn('Pawn',100, 'White', 12)
const pawn_w_5 = new Pawn('Pawn',100, 'White', 13)
const pawn_w_6 = new Pawn('Pawn',100, 'White', 14)
const pawn_w_7 = new Pawn('Pawn',100, 'White', 15)
const pawn_w_8 = new Pawn('Pawn',100, 'White', 16)

const rook_w_1 = new Rook('Rook',500, 'White', 1)
const rook_w_2 = new Rook('Rook',500, 'White', 8)

const knight_w_1 = new Knight('Knight',300, 'White', 2)
const knight_w_2 = new Knight('Knight',300, 'White', 7)

const bishop_w_1 = new Bishop('Bishop',300, 'White', 3)
const bishop_w_2 = new Bishop('Bishop',300, 'White', 6)

const queen_w = new Queen('Queen',900, 'White', 4)
const king_w = new King('King',10000, 'White', 5)



//initializing the pieces with their respective classes and colors (BLACK PIECES)
const pawn_b_1 = new Pawn('Pawn',100, 'Black', 49)
const pawn_b_2 = new Pawn('Pawn',100, 'Black', 50)
const pawn_b_3 = new Pawn('Pawn',100, 'Black', 51)
const pawn_b_4 = new Pawn('Pawn',100, 'Black', 52)
const pawn_b_5 = new Pawn('Pawn',100, 'Black', 53)
const pawn_b_6 = new Pawn('Pawn',100, 'Black', 54)
const pawn_b_7 = new Pawn('Pawn',100, 'Black', 55)
const pawn_b_8 = new Pawn('Pawn',100, 'Black', 56)

const rook_b_1 = new Rook('Rook',500, 'Black', 57)
const rook_b_2 = new Rook('Rook',500, 'Black', 64)

const knight_b_1 = new Knight('Knight',300, 'Black', 58)
const knight_b_2 = new Knight('Knight',300, 'Black', 63)

const bishop_b_1 = new Bishop('Bishop',300, 'Black', 59)
const bishop_b_2 = new Bishop('Bishop',300, 'Black', 62)

const queen_b = new Queen('Queen',900, 'Black', 60)
const king_b = new King('King',10000, 'Black', 61)




//storing starting chess board state with initialized pieces, list of items from 1 to 64
const chess_board = [
   [rook_w_1, 1], [knight_w_1, 2], [bishop_w_1, 3], [queen_w, 4],[king_w,5], [bishop_w_2, 6], [knight_w_2, 7],[rook_w_2, 8],
   [pawn_w_1, 9],[pawn_w_2, 10],[pawn_w_3, 11],[pawn_w_4, 12],[pawn_w_5, 13],[pawn_w_6, 14],[pawn_w_7, 15],[pawn_w_8, 16],
    [null, 17], [null, 18], [null, 19], [null, 20], [null, 21], [null, 22], [null, 23], [null, 24],
    [null, 25], [null, 26], [null, 27], [null, 28], [null, 29], [null, 30], [null, 31], [null, 32],
    [null, 33], [null, 34], [null, 35], [null, 36], [null, 37], [null, 38], [null, 39], [null, 40],
    [null, 41], [null, 42], [null, 43], [null, 44], [null, 45], [null, 46], [null, 47], [null, 48],
   [pawn_b_1, 49],[pawn_b_2, 50],[pawn_b_3, 51],[pawn_b_4, 52],[pawn_b_5, 53],[pawn_b_6, 54],[pawn_b_7, 55],[pawn_b_8, 56],
   [rook_b_1, 57], [knight_b_1, 58], [bishop_b_1, 59], [queen_b, 60],[king_b, 61], [bishop_b_2, 62], [knight_b_2, 63],[rook_b_2, 64]
]



export function getColoredPieces(chess_board){

    let black_pieces = []
    let white_pieces = []
    //mapping through the board to separate pieces based on color
    chess_board.map(piece =>{
        //asign tile number to the piece on which the piece is located
        if (piece[0] != null){

            if (piece[0].color == "Black") { 
                black_pieces.push(piece[0])
            }
            else if (piece[0].color == "White") {
                white_pieces.push(piece[0])
            }
        }
    })
    console.log(black_pieces)
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