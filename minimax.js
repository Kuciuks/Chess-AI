import evaluateBoard from './evaluateBoard.js'
import config from './config.js'
import getAvailable from './getAvailable.js'
import undoMove from './undoMove.js'
import makeMove from './makeMove.js'
import { getBlackPiece, getWhitePiece } from './getPieces.js'
const configInstance = config.getInstance()

//minimax returns best score and best move for black pieces
function minimax(depth,board, maximizingPlayer){
    console.log('[minimax CALL]')
    // console.log(depth,board, maximizingPlayer, alpha, beta)
    //return a score if depth == 0
    if(depth == 0){
        //board = chess_board;
        return evaluateBoard(board)
    }

    //if AI turn
    if(maximizingPlayer){
        // console.log()
        let black_pieces = []
        // console.log("BLACK SWITCH")

        //declare the best score, move
        let bestScore = -Infinity;
        let bestMove = null;

        //store available moves 
        black_pieces = getBlackPiece(board);
        
        //find all available moves
        let moves = getAvailable(black_pieces,false);
        // console.log(black_pieces,"__________ BLACK PIECES")
        // console.log("black moves", moves)

        //go through object list
        for(let i = 0; i < moves.length; i++){
            // console.log('\n---> [AI MOVES]',moves, moves.length)
            // console.log(`\n     [MOVING ${moves}]\n*\n`)
            // console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@   Piece count:  ",i,)
            

            //take object and measure how many moves can it make
            
                //take object and measure how many moves can it make
                for(let j =0; j < moves[i].To.length; j++){

                    // console.log("Moving ", document.getElementById(moves[i].From).innerText, " from ", document.getElementById(moves[i].From).id, " to ", document.getElementById(moves[i].To[j]).id);
                    //count++;
                    // console.log(count, " MOVE COUNT");  
                    //store current tile inner text
                    let tiletxt = document.getElementById(moves[i].To[j]).innerText;
                    // console.log(tiletxt, " TILE TXT")
                    
                    configInstance.pieceNameMemAI.push({ "FROM": moves[i].From, "fromNAME": document.getElementById(moves[i].From).innerText, "TO": moves[i].To[j], "toNAME": document.getElementById(moves[i].To[j]).innerText, "PLAYER": maximizingPlayer});
                    // console.log(configInstance.pieceNameMemAI,'_________________-')
                    
                    //declare board copy, move the object to each location  
                    let board = makeMove(moves[i].To[j], moves[i].From);
                    
                    //get a score for the board
                    let score = minimax(depth - 1, board, false);
                    
                    // console.log("Move: ", moves[i].From, moves[i].To[j], " and resulting score: ", score, " B");
                    //print score for black piece
                    // console.log("Score for black piece: ",score)

                    // console.log(score,"---- Black Score")
                    //check if score is greater than bestScore
                    if(score > bestScore){
                        bestScore = score;
                        bestMove = {"from": moves[i].From, "to": moves[i].To[j]}
                        // console.log(bestMove,' BEST MOVE LOG')
                        black_pieces = [];
                    }
                    configInstance.checkedBoardCount++;
                    configInstance.checkedBoardCount++;
                    //declare undone board
                    board = undoMove(maximizingPlayer)
                    

            }
        }
        // console.log(bestMove,bestScore,' _____BEST MOVE _____')
        return [bestMove, bestScore]
        
    }
    //if player turn
    else {

        let white_pieces = []
        // console.log("WHITE SWITCH")

        //declare the best score
        let bestScore = Infinity;

        //store available moves moves
        white_pieces = getWhitePiece(board) 

        // uses the altered board and get all pieces for white
        
        let moves = getAvailable(white_pieces,true);
        console.log(moves)
        // console.log(white_pieces,"__________ WHITE PIECES")
        // console.log("white moves", moves)

        //go through object list
        for(let i = 0; i < moves.length; i++){
        //    console.log("Piece count:  ",i,)

            //take object and measure how many moves it can make
            //try{
                    
                for(let j =0; j < moves[i].To.length; j++){
                    // console.log("Moving ", document.getElementById(moves[i].From).innerText, " from ", document.getElementById(moves[i].From).id, " to ", document.getElementById(moves[i].To[j]).id);
                    
                    //store current tile inner text
                    let tiletxt2 = document.getElementById(moves[i].To[j]).innerText;

                    // console.log(moves,"_________ WHITE MOVES")
                    configInstance.pieceNameMemHU.push({ "FROM": moves[i].From, "fromNAME": document.getElementById(moves[i].From).innerText, "TO": moves[i].To[j], "toNAME": document.getElementById(moves[i].To[j]).innerText, "PLAYER": maximizingPlayer});

                    //declare board copy, move the object to each location
                    board = makeMove(moves[i].To[j], moves[i].From);
                    //black_pieces=[]
                    
                    //get a score for the board
                    let score = minimax(depth - 1, board, true);

                    // console.log(moves);
                    //let evaldScore = score[1];

                    if(typeof(score) == "object"){
                        score = score[1];
                    }
                    // console.log(score,"---- White Score")
                    // console.log("Move: ", moves[i].From, moves[i].To[j], " and resulting score: ", score, " W");
                    //print score for black piece
                    // console.log("Score for white piece: ",score," move count: ",i)

                    //check if score is greater than bestScore
                    if(score < bestScore){
                        bestScore = score;
                    }
                    //declare undone board
                    board = undoMove(maximizingPlayer)

                }
            //}
            //catch{}
        }
        return bestScore
    }
}

export default minimax