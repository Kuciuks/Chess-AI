//store pieces WHITE/BLACK
let black_pieces = [];
let white_pieces = [];

//store all possible moves
let all_piece_moves = [];

//store chess board
let chess_board = []

//control depth, ply
let depth = 3

//store alpha beta initial values
let alpha = -Infinity;
let beta = Infinity;


let checkedBoardCount = 0;


let pieceNameMemAI = [];
let pieceNameMemHU = [];
let count = 0;




let moveCount = 0;
let moveStorage = [];