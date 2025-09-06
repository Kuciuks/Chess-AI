import config, {getColoredPieces, evaluateBoard} from './config.js'
// import getAvailable from './getAvailable.js'
// import undoMove from './undoMove.js'
// import makeMove from './makeMove.js'
// import { getBlackPiece, getWhitePiece } from './getPieces.js'


//minimax returns best score and best move for black pieces
function minimax(depth,chess_board, maximizingPlayer){

    // if(depth == 0){
    //     return evaluateBoard(board)
    // }

    //if AI turn
    if(maximizingPlayer){

        //declare the best score, move
        let bestScore = -Infinity;
        let bestMove = null;

        //get all black pieces for current board
        const black_pieces = getColoredPieces(chess_board).black_pieces;
        console.log(black_pieces,"__________ BLACK PIECES")

        let all_moves = []

        // go through black pieces
        black_pieces.forEach(piece => {

            const piece_moves = piece.getAvailableMoves(chess_board);
            console.log(piece.name, piece_moves, ' PIECE AND MOVES _____')

            //make the moves for each piece and return the best move based on best score
            const move_results = piece_moves.map(move =>{
                const score = evaluateBoard(piece, move, chess_board)

                // piece.moves.push({move, score})

                if (score > bestScore){
                    bestScore = score
                    bestMove = move
                }

                return {move: move, score: score, tile_index: piece.tile_index}
            })
            all_moves.push(...move_results)
            console.log(move_results, ' MOVE RESULTS')
            return piece
        })
        const original_index = all_moves[0].tile_index
        console.log(bestMove,bestScore,' _____BEST MOVE _____')
        return [bestMove, bestScore, original_index]
        
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
        // console.log(white_pieces,"__________ WHITE PIECES")
        // console.log("white moves", moves)

        //go through object list
        for(let i = 0; i < moves.length; i++){
        //    console.log("Piece count:  ",i,)

            //take object and measure how many moves it can make
            //try{
                // console.log(moves)

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