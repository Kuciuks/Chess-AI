function InitiateAI(){
    
    //get main board
    chess_board = getBoard();

    //store a copy of the main board
    checking_board = getBoard();

    //get player
    let currentPLayer = whoTurn(toggle);
    
    //if player turn Black then activate minimax
    if(currentPLayer == true){
        let [value1, value2] = minimax(depth, checking_board, currentPLayer,alpha, beta)
        //console.log("Minimax Value : ", value2, " Best move : ", value1);
        moveBestPiece(value1.from, value1.to);
        //console.log("Total checked boards: ", checkedBoardCount)
        checkedBoardCount = 0;
        //console.log(pieceNameMemAI,"ALL MOVE PIECE NAMES")
        toggle++;
    }

    //upload images, repaint tiles, reset values
    upload_Images()
    paintTiles()
    all_piece_moves = [];
    black_pieces=[];
    white_pieces = [];
}
InitiateAI()






