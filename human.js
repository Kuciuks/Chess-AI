import config, {getColoredPieces, evaluateBoard} from './config.js'
import getBoard from "./getBoard.js"
import paintTiles from "./paintTiles.js"
import whoTurn from "./whoTurn.js"
import uploadImages from "./uploadImages.js"
import initiateAI from './Initiate.js'
import showMoves from './showMoves.js';
import moveBestPiece from './getBestMove.js'

const configInstance = config.getInstance()


//currenly the game can be player [human vs human] and [human vs AI]
//controller for the human player
console.log('Human script')
function human(chess_board){

    //get all white pieces for current board
    const white_pieces = getColoredPieces(chess_board).white_pieces;
    console.log(white_pieces,"__________ WHITE PIECES")


    //capture all tiles and add an event listener to all
    document.querySelectorAll(".tile").forEach(tile => {

        //adds the event listener to each tile and executes code when triggered
        tile.addEventListener("click", event => {

            //if selection is empty and tile text is full 
            if(!configInstance.selection && chess_board[tile.id] !== "" && chess_board[tile.id]?.color !== "Black"){
                const piece_moves = chess_board[tile.id].getAvailableMoves(chess_board)
                configInstance.selection = tile.id

                piece_moves.flat().forEach(move => {
                    console.log(move)
                    document.getElementById(move).style.backgroundColor = 'orange'
                })
            }
            
            //If selected is the same tile, unselect
            else if (configInstance.selection === tile.id){
                configInstance.selection = null
                paintTiles()
            }

            if(tile.style.backgroundColor === 'orange'){
                moveBestPiece(tile.id, configInstance.selection, chess_board)
                paintTiles()
            }
        })
    })
}

            
 
    
    //         //MOVING
    //         //check if clicked on green without text
    //         if(tile.style.backgroundColor == "green" && tile.innerText == ""){
                
    //             tile.innerText = configInstance.selection.innerText;
    
    //             //remove old tile txt
    //             document.getElementById(configInstance.selection.id).innerText = "";
    //             //set green tile txt to selected txt
                
    //             //update images
    //             uploadImages();
    
    //             //remove selected item
    //             configInstance.selection = null;
    
    //             //update tile coloring
    //             paintTiles();
    //             configInstance.toggle++
    
    //             //Initiate AI move
    //             initiateAI()
    //         }
    
    //         //check if clicked on green with text
    //         if (tile.style.backgroundColor == "green" && tile.innerText !== ""){
                
    //             //get tiles first letter
    //             let green_letter = (Array.from(tile.innerText)).shift();
                
    //             //check if valid
    //             if(green_letter !== configInstance.selected_letter){
    //                 //remove old tile txt
    //                 document.getElementById(configInstance.selection.id).innerText = "";
    //                 // console.log(green_letter,configInstance.selection)
    //                 //set green tile txt to selected txt
    //                 tile.innerText = configInstance.selection.innerText;
                                         
    //                 //update images
    //                 uploadImages();
    
    //                 //remove selected item
    //                 configInstance.selection = null;
    
    //                 //update tile coloring
    //                 paintTiles();
    //                 configInstance.toggle++;
    
    //                 //Initiate AI move
    //                 initiateAI()
                    
    //             }
    //             if(green_letter == configInstance.selected_letter){
    //                 // console.log("ILLEGAL")
                    
    //             }
    //         }
    //     })
    // })
    

export default human