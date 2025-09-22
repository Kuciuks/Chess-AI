import { Pawn, Rook, Bishop, King, Queen, Knight, Border } from "./piece_class.js"


//initializing the pieces with their respective classes and colors (BLACK PIECES)
const pawn_b_1 = new Pawn('Pawn',-100, 'Black', 21, 'B-Pawn', true)
const pawn_b_2 = new Pawn('Pawn',-100, 'Black', 22, 'B-Pawn', true)
const pawn_b_3 = new Pawn('Pawn',-100, 'Black', 23, 'B-Pawn', true)
const pawn_b_4 = new Pawn('Pawn',-100, 'Black', 24, 'B-Pawn', true)
const pawn_b_5 = new Pawn('Pawn',-100, 'Black', 25, 'B-Pawn', true)
const pawn_b_6 = new Pawn('Pawn',-100, 'Black', 26, 'B-Pawn', true)
const pawn_b_7 = new Pawn('Pawn',-100, 'Black', 27, 'B-Pawn', true)
const pawn_b_8 = new Pawn('Pawn',-100, 'Black', 28, 'B-Pawn', true)

const rook_b_1 = new Rook('Rook',-500, 'Black', 11, 'B-Rook')
const rook_b_2 = new Rook('Rook',-500, 'Black', 18, 'B-Rook')

const knight_b_1 = new Knight('Knight',-300, 'Black', 12, 'B-Knight')
const knight_b_2 = new Knight('Knight',-300, 'Black', 17, 'B-Knight')

const bishop_b_1 = new Bishop('Bishop',-300, 'Black', 13, 'B-Bishop')
const bishop_b_2 = new Bishop('Bishop',-300, 'Black', 16, 'B-Bishop')

const queen_b = new Queen('Queen',-900, 'Black', 14, 'B-Queen')
const king_b = new King('King',-10000, 'Black', 15, 'B-King')


//initializing the pieces with their respective classes and colors (WHITE PIECES)
const pawn_w_1 = new Pawn('Pawn',100, 'White', 71, 'W-Pawn', true)
const pawn_w_2 = new Pawn('Pawn',100, 'White', 72, 'W-Pawn', true)
const pawn_w_3 = new Pawn('Pawn',100, 'White', 73, 'W-Pawn', true)
const pawn_w_4 = new Pawn('Pawn',100, 'White', 74, 'W-Pawn', true)
const pawn_w_5 = new Pawn('Pawn',100, 'White', 75, 'W-Pawn', true)
const pawn_w_6 = new Pawn('Pawn',100, 'White', 76, 'W-Pawn', true)
const pawn_w_7 = new Pawn('Pawn',100, 'White', 77, 'W-Pawn', true)
const pawn_w_8 = new Pawn('Pawn',100, 'White', 78, 'W-Pawn', true)

const rook_w_1 = new Rook('Rook',500, 'White', 81, 'W-Rook')
const rook_w_2 = new Rook('Rook',500, 'White', 88, 'W-Rook')

const knight_w_1 = new Knight('Knight',300, 'White', 82, 'W-Knight')
const knight_w_2 = new Knight('Knight',300, 'White', 87, 'W-Knight')

const bishop_w_1 = new Bishop('Bishop',300, 'White', 83, 'W-Bishop')
const bishop_w_2 = new Bishop('Bishop',300, 'White', 86, 'W-Bishop')

const queen_w = new Queen('Queen',900, 'White', 84, 'W-Queen')
const king_w = new King('King',10000, 'White', 85, 'W-King')


const border = new Border('Border')


const normal_chess_board = [
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





// ****************************************************************
// ****************************************************************
// ******************* - INVERTED BOARD SETUP - *******************
// ****************************************************************
// ****************************************************************

//initializing the pieces with their respective classes and colors (WHITE PIECES)
const pawn_w_1_i = new Pawn('Pawn',100, 'White', 21, 'W-Pawn', true)
const pawn_w_2_i = new Pawn('Pawn',100, 'White', 22, 'W-Pawn', true)
const pawn_w_3_i = new Pawn('Pawn',100, 'White', 23, 'W-Pawn', true)
const pawn_w_4_i = new Pawn('Pawn',100, 'White', 24, 'W-Pawn', true)
const pawn_w_5_i = new Pawn('Pawn',100, 'White', 25, 'W-Pawn', true)
const pawn_w_6_i = new Pawn('Pawn',100, 'White', 26, 'W-Pawn', true)
const pawn_w_7_i = new Pawn('Pawn',100, 'White', 27, 'W-Pawn', true)
const pawn_w_8_i = new Pawn('Pawn',100, 'White', 28, 'W-Pawn', true)

const rook_w_1_i = new Rook('Rook',500, 'White', 11, 'W-Rook')
const rook_w_2_i = new Rook('Rook',500, 'White', 18, 'W-Rook')

const knight_w_1_i = new Knight('Knight',300, 'White', 12, 'W-Knight')
const knight_w_2_i = new Knight('Knight',300, 'White', 17, 'W-Knight')

const bishop_w_1_i = new Bishop('Bishop',300, 'White', 13, 'W-Bishop')
const bishop_w_2_i = new Bishop('Bishop',300, 'White', 16, 'W-Bishop')

const queen_w_i = new Queen('Queen',900, 'White', 14, 'W-Queen')
const king_w_i = new King('King',10000, 'White', 15, 'W-King')


//initializing the pieces with their respective classes and colors (BLACK PIECES)
const pawn_b_1_i = new Pawn('Pawn',-100, 'Black', 71, 'B-Pawn', true)
const pawn_b_2_i = new Pawn('Pawn',-100, 'Black', 72, 'B-Pawn', true)
const pawn_b_3_i = new Pawn('Pawn',-100, 'Black', 73, 'B-Pawn', true)
const pawn_b_4_i = new Pawn('Pawn',-100, 'Black', 74, 'B-Pawn', true)
const pawn_b_5_i = new Pawn('Pawn',-100, 'Black', 75, 'B-Pawn', true)
const pawn_b_6_i = new Pawn('Pawn',-100, 'Black', 76, 'B-Pawn', true)
const pawn_b_7_i = new Pawn('Pawn',-100, 'Black', 77, 'B-Pawn', true)
const pawn_b_8_i = new Pawn('Pawn',-100, 'Black', 78, 'B-Pawn', true)

const rook_b_1_i = new Rook('Rook',-500, 'Black', 81, 'B-Rook')
const rook_b_2_i = new Rook('Rook',-500, 'Black', 88, 'B-Rook')

const knight_b_1_i = new Knight('Knight',-300, 'Black', 82, 'B-Knight')
const knight_b_2_i = new Knight('Knight',-300, 'Black', 87, 'B-Knight')

const bishop_b_1_i = new Bishop('Bishop',-300, 'Black', 83, 'B-Bishop')
const bishop_b_2_i = new Bishop('Bishop',-300, 'Black', 86, 'B-Bishop')

const queen_b_i = new Queen('Queen',-900, 'Black', 84, 'B-Queen')
const king_b_i = new King('King',-10000, 'Black', 85, 'B-King')



const inverted_chess_board = [
    border,  border,    border,     border,    border,   border,    border,     border,    border,   border,
    border, rook_w_1_i, knight_w_1_i, bishop_w_1_i, queen_w_i,   king_w_i,  bishop_w_2_i, knight_w_2_i,  rook_w_2_i, border,
    border, pawn_w_1_i,  pawn_w_2_i,   pawn_w_3_i,  pawn_w_4_i, pawn_w_5_i,  pawn_w_6_i,   pawn_w_7_i,   pawn_w_8_i, border,
    border,   null,      null,       null,      null,     null,      null,       null,       null,   border,
    border,   null,      null,       null,      null,     null,      null,       null,       null,   border,
    border,   null,      null,       null,      null,     null,      null,       null,       null,   border,
    border,   null,      null,       null,      null,     null,      null,       null,       null,   border,
    border, pawn_b_1_i,  pawn_b_2_i,   pawn_b_3_i,  pawn_b_4_i, pawn_b_5_i,  pawn_b_6_i,   pawn_b_7_i,   pawn_b_8_i, border,
    border, rook_b_1_i, knight_b_1_i, bishop_b_1_i, queen_b_i,   king_b_i,  bishop_b_2_i, knight_b_2_i,  rook_b_2_i, border,
    border,  border,    border,     border,    border,   border,    border,     border,     border,  border
]


export {normal_chess_board, inverted_chess_board}
