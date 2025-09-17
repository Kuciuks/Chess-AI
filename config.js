import uploadImages from "./uploadImages.js";
import paintTiles from "./paintTiles.js";
import { og_chess_board, og_inverted_chess_board } from "./board_presets.js";


export function evaluateBoard(chess_board){
    let board_cost = 0

    for(const tile in chess_board){
        if (chess_board[tile] !== null && chess_board[tile]?.name !== 'Border'){
            board_cost += chess_board[tile].value + chess_board[tile].pawnScore[tile]
        }
    }
    return board_cost
}


export function getColoredPieces(chess_board){

    let black_pieces = []
    let white_pieces = []
    //mapping through the board to separate pieces based on color
    chess_board.forEach(piece =>{
        //asign tile number to the piece on which the piece is located
        if (piece != null && piece.name !== 'Border') {

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
            uploadImages(og_chess_board)
            paintTiles()
        return {
            checkedBoardCount: 0,
            toggle: 1,
            depth: 2,
            selection: null,
            selected_letter: "",
            chess_board: og_chess_board,
            inverted_chess_board: og_inverted_chess_board,
            active_board : og_chess_board,
            clone_board: undefined,
            enemy_color: "Black",
            enemy: true,
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