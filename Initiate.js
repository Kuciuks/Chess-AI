import getBoard from './getBoard.js';
import whoTurn from './whoTurn.js';
import minimax from './minimax.js';
import moveBestPiece from './getBestMove.js';
import uploadImages from './uploadImages.js';
import paintTiles from './paintTiles.js';
import config from './config.js';
import human from './human.js';
const configInstance = config.getInstance()



// console.log('[Initiate script]')

//initiates the game process
function initiateAI(){
    try{
        //capture the board tile information
        let chess_board = getBoard();

        //store a copy of the main board
        let checking_board = chess_board;

        //capture which player's turn it is (WHITE / BLACK)
        let currentPLayer = whoTurn(configInstance.toggle);
        // console.log(currentPLayer)

        //if the captured player is BLACK then activate the AI process
        if(currentPLayer == true){

            //acivate minimax and capture returned values
            let [value1, value2] = minimax(configInstance.depth, checking_board, currentPLayer)

            //using returned minimax values take a step
            moveBestPiece(value1.from, value1.to);

            configInstance.checkedBoardCount = 0;
            
            //add a point - switch turn
            configInstance.toggle +=1;
        }


        //upload images, repaint tiles, reset values
        uploadImages()
        paintTiles()
        configInstance.all_piece_moves = [];
        configInstance.black_pieces=[];
        configInstance.white_pieces = [];
        
        document.addEventListener('DOMContentLoaded',event =>{
            human()
        })
    }
    catch(err){
        console.log(err)
    }
    
}
initiateAI()
export default initiateAI