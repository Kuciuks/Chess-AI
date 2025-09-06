import config, {getColoredPieces, evaluateBoard} from './config.js'
import getBoard from "./getBoard.js"
import paintTiles from "./paintTiles.js"
import whoTurn from "./whoTurn.js"
import uploadImages from "./uploadImages.js"
import initiateAI from './Initiate.js'
import showMoves from './showMoves.js';

const configInstance = config.getInstance()


//currenly the game can be player [human vs human] and [human vs AI]
//controller for the human player
console.log('Human script')
function human(chess_board){
    //get all black pieces for current board
    const white_pieces = getColoredPieces(chess_board).white_pieces;
    console.log(white_pieces,"__________ WHITE PIECES")


    // go through black pieces
    white_pieces.forEach(piece => {
        if(!configInstance.selection && tile.innerText !== ""){

            //if selection is empty and tile text is full 
            const piece_moves = piece.getAvailableMoves(chess_board);
            console.log(piece.name, piece_moves, ' PIECE AND MOVES _____')

            piece_moves.forEach(element => {
                
            })
            //make the moves for each piece and return the best move based on best score
            const score = evaluateBoard(piece, move, chess_board)

        }
    })
            
    
            
    //             let chess_board = getBoard()
    //             let a = evaluateBoard(chess_board)
    //             console.log(a,"Starting score")
    //             configInstance.selected_letter = (Array.from(tile.innerText)).shift()
    
    //             //update bg color
    //             tile.style.backgroundColor = "orange";
                
    //             //update selection
    //             configInstance.selection = tile;
    
    //             showMoves(configInstance.selection,"W")
    //         }
    
                
    
    //         //If selected is the same tile, unselect
    //         else if(configInstance.selection === tile){
    //             //reset tile colors
    //             paintTiles();
    
    //             //remove selection;
    //             configInstance.selection = null;
    //         }
    
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
    
}

export default human