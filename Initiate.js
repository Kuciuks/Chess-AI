import getBoard from './getBoard.js';
import whoTurn from './whoTurn.js';
import minimax from './minimax.js';
import moveBestPiece from './getBestMove.js';
import uploadImages from './uploadImages.js';
import paintTiles from './paintTiles.js';
import config from './config.js';
const configInstance = config.getInstance()



console.log('Initiate script')


function initiateAI(){
    //get main board
    let chess_board = getBoard();

    // console.log(chess_board,'board')
    //store a copy of the main board
    let checking_board = getBoard();

    //get player
    let currentPLayer = whoTurn(configInstance.toggle);
    //if player turn Black then activate minimax
    if(currentPLayer == true){
        let [value1, value2] = minimax(configInstance.depth, checking_board, currentPLayer)
        //console.log("Minimax Value : ", value2, " Best move : ", value1);
        // console.log(value1, value2,'77777777777777777777777777777555555555556666666666666666666666633333')
        moveBestPiece(value1.from, value1.to);
        //console.log("Total checked boards: ", checkedBoardCount)
        configInstance.checkedBoardCount = 0;
        //console.log(pieceNameMemAI,"ALL MOVE PIECE NAMES")
        configInstance.toggle +=1;
        // console.log(configInstance.toggle,'$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$')
    }

    //upload images, repaint tiles, reset values
    uploadImages()
    paintTiles()
    configInstance.all_piece_moves = [];
    configInstance.black_pieces=[];
    configInstance.white_pieces = [];
}
initiateAI()

export default initiateAI