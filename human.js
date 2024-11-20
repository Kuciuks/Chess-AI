import config from "./config.js"
import getBoard from "./getBoard.js"
import evaluateBoard from "./evaluateBoard.js"
import paintTiles from "./paintTiles.js"
import whoTurn from "./whoTurn.js"
import uploadImages from "./uploadImages.js"
import initiateAI from './Initiate.js'
import showMoves from './showMoves.js';

const configInstance = config.getInstance()


//currenly the game can be player [human vs human] and [human vs AI]
//controller for the human player
// console.log('Human script')
function human(){
    // console.log('[Human script]')

    //capture all tiles and add an event listener to all
    document.querySelectorAll(".tile").forEach(tile => {

        //adds the event listener to each tile and executes code when triggered
        tile.addEventListener("click", event => {


            
    
            //if selection is empty and tile text is full 
            if(!configInstance.selection && tile.innerText !== ""){
                let chess_board = getBoard()
                let a = evaluateBoard(chess_board)
                console.log(a,"Starting score")
                configInstance.selected_letter = (Array.from(tile.innerText)).shift()
    
                //update bg color
                tile.style.backgroundColor = "orange";
                
                //update selection
                configInstance.selection = tile;
    
                showMoves(configInstance.selection,"W")
            }
    
                
    
            //If selected is the same tile, unselect
            else if(configInstance.selection === tile){
                //reset tile colors
                paintTiles();
    
                //remove selection;
                configInstance.selection = null;
            }
    
            //MOVING
            //check if clicked on green without text
            if(tile.style.backgroundColor == "green" && tile.innerText == ""){
                
                tile.innerText = configInstance.selection.innerText;
    
                //remove old tile txt
                document.getElementById(configInstance.selection.id).innerText = "";
                //set green tile txt to selected txt
                
                //update images
                uploadImages();
    
                //remove selected item
                configInstance.selection = null;
    
                //update tile coloring
                paintTiles();
                configInstance.toggle++
    
                //Initiate AI move
                initiateAI()
            }
    
            //check if clicked on green with text
            if (tile.style.backgroundColor == "green" && tile.innerText !== ""){
                
                //get tiles first letter
                let green_letter = (Array.from(tile.innerText)).shift();
                
                //check if valid
                if(green_letter !== configInstance.selected_letter){
                    //remove old tile txt
                    document.getElementById(configInstance.selection.id).innerText = "";
                    // console.log(green_letter,configInstance.selection)
                    //set green tile txt to selected txt
                    tile.innerText = configInstance.selection.innerText;
                                         
                    //update images
                    uploadImages();
    
                    //remove selected item
                    configInstance.selection = null;
    
                    //update tile coloring
                    paintTiles();
                    configInstance.toggle++;
    
                    //Initiate AI move
                    initiateAI()
                    
                }
                if(green_letter == configInstance.selected_letter){
                    // console.log("ILLEGAL")
                    
                }
            }
        })
    })
    
}

export default human