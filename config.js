//declaring the base class with constructor properties
class Piece{
    constructor(name, value, color, positional_values, tile_index){
        this.name = name
        this.value = value
        this.color = color
        this.positional_values = positional_values
        this.tile_index = tile_index
    }
}
//declaring the child classes that extend the base class Piece (capturing base class properties)
class Pawn extends Piece{
    constructor(name, value, color, positional_values, tile_index){
        super(name, value, color, positional_values, tile_index)
        this.name = name
        this.value = value
        this.color = color
        this.positional_values = positional_values
        this.tile_index = tile_index
        }
    }
class Rook extends Piece{
    constructor(name, value, color, positional_values, tile_index){
        super(name, value, color, positional_values, tile_index)
        this.name = name
        this.value = value
        this.color = color
        this.positional_values = positional_values
        this.tile_index = tile_index
        }
    }
class Knight extends Piece{
    constructor(name, value, color, positional_values, tile_index){
        super(name, value, color, positional_values, tile_index)
        this.name = name
        this.value = value
        this.color = color
        this.positional_values = positional_values
        this.tile_index = tile_index
        }
    }
class Bishop extends Piece{
    constructor(name, value, color, positional_values, tile_index){
        super(name, value, color, positional_values, tile_index)
        this.name = name
        this.value = value
        this.color = color
        this.positional_values = positional_values
        this.tile_index = tile_index
        }
    }
class Queen extends Piece{
    constructor(name, value, color, positional_values, tile_index){
        super(name, value, color, positional_values, tile_index)
        this.name = name
        this.value = value
        this.color = color
        this.positional_values = positional_values
        this.tile_index = tile_index
        }
    }
class King extends Piece{
    constructor(name, value, color, positional_values, tile_index){
        super(name, value, color, positional_values, tile_index)
        this.name = name
        this.value = value
        this.color = color
        this.positional_values = positional_values
        this.tile_index = tile_index
        }
    }



//initializing the pieces with their respective classes and colors (WHITE PIECES)
const pawn_w = new Pawn('Pawn',100, 'White',[])
const rook_w = new Rook('Rook',500, 'White',[])
const knight_w = new Knight('Knight',300, 'White',[])
const bishop_w = new Bishop('Bishop',300, 'White',[])
const queen_w = new Queen('Queen',900, 'White',[])
const king_w = new King('King',10000, 'White',[])

//initializing the pieces with their respective classes and colors (BLACK PIECES)
const pawn_b = new Pawn('Pawn',100, 'Black',[])
const rook_b = new Rook('Rook',500, 'Black',[])
const knight_b = new Knight('Knight',300, 'Black',[])
const bishop_b = new Bishop('Bishop',300, 'Black',[])
const queen_b = new Queen('Queen',900, 'Black',[])
const king_b = new King('King',10000, 'Black',[])

//storing starting chess board state with initialized pieces, list of items from 1 to 64
// const chess_board = [
//     rook_w, knight_w, bishop_w, queen_w, king_w, bishop_w, knight_w, rook_w,
//     pawn_w, pawn_w, pawn_w, pawn_w, pawn_w, pawn_w, pawn_w, pawn_w,
//     null, null, null, null, null, null, null, null,
//     null, null, null, null, null, null, null, null,
//     null, null, null, null, null, null, null, null,
//     null, null, null, null, null, null, null, null,
//     pawn_b, pawn_b, pawn_b, pawn_b, pawn_b, pawn_b, pawn_b, pawn_b,
//     rook_b, knight_b, bishop_b, queen_b, king_b, bishop_b, knight_b, rook_b
// ]

const chess_board = [
   [rook_w, 1], [knight_w, 2], [bishop_w, 3], [queen_w, 4],[king_w,5], [bishop_w, 6], [knight_w, 7],[rook_w, 8],
   [pawn_w, 9],[pawn_w, 10],[pawn_w, 11],[pawn_w, 12],[pawn_w, 13],[pawn_w, 14],[pawn_w, 15],[pawn_w, 16],
    [null, 17], [null, 18], [null, 19], [null, 20], [null, 21], [null, 22], [null, 23], [null, 24],
    [null, 25], [null, 26], [null, 27], [null, 28], [null, 29], [null, 30], [null, 31], [null, 32],
    [null, 33], [null, 34], [null, 35], [null, 36], [null, 37], [null, 38], [null, 39], [null, 40],
    [null, 41], [null, 42], [null, 43], [null, 44], [null, 45], [null, 46], [null, 47], [null, 48],
   [pawn_b, 49],[pawn_b, 50],[pawn_b, 51],[pawn_b, 52],[pawn_b, 53],[pawn_b, 54],[pawn_b, 55],[pawn_b, 56],
   [rook_b, 57], [knight_b, 58], [bishop_b, 59], [queen_b, 60],[king_b, 61], [bishop_b, 62], [knight_b, 63],[rook_b, 64]
]

export function getColoredPieces(chess_board){

    let black_pieces = []
    let white_pieces = []
    //mapping through the board to separate pieces based on color
    chess_board.map(piece =>{
        //asign tile number to the piece on which the piece is located
        if (piece[0] != null){

            console.log(piece[0].name, piece[1], " PIECE NAME AND TILE INDEX")
            console.log('setting tile index for piece', piece[0].name, 'to', piece[1])
            

            if (piece[0].color == "Black") { 
                black_pieces.push(piece[0])
                console.log(piece[0].name, " was pushed to black_pieces")
                console.log(black_pieces.length, " BLACK PIECES LENGTH\\\n")
                console.log(black_pieces, " BLACK PIECES")
            }
            else if (piece[0].color == "White") {
                white_pieces.push(piece[0])
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