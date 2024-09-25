import getBoard from './getBoard.js';
import whoTurn from './whoTurn.js';
import minimax from './minimax.js';
import moveBestPiece from './getBestMove.js';
import uploadImages from './uploadImages.js';
import paintTiles from './paintTiles.js';
import config from './config.js';

function InitiateAI(){
    
    //get main board
    chess_board = getBoard();

    console.log(chess_board,'board')
    //store a copy of the main board
    checking_board = getBoard();

    //get player
    let currentPLayer = whoTurn(toggle);
    
    //if player turn Black then activate minimax
    if(currentPLayer == true){
        let [value1, value2] = minimax(config.depth, checking_board, currentPLayer,alpha, beta)
        //console.log("Minimax Value : ", value2, " Best move : ", value1);
        moveBestPiece(value1.from, value1.to);
        //console.log("Total checked boards: ", checkedBoardCount)
        config.checkedBoardCount = 0;
        //console.log(pieceNameMemAI,"ALL MOVE PIECE NAMES")
        toggle++;
    }

    //upload images, repaint tiles, reset values
    uploadImages()
    paintTiles()
    config.all_piece_moves = [];
    config.black_pieces=[];
    config.white_pieces = [];
}
InitiateAI()
