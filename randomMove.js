





//scrap code for random moves
function randomMove(pieceObj){
    //capture random piece
    let random_piece = pieceObj[Math.floor(Math.random() * pieceObj.length)];
    console.log(random_piece,"captured piece object");
    //store all moves for captured piece in array
    let moveArr = []
    moveArr = random_piece.To;

    //get a random move for the captured piece from move array
    let random_move = moveArr[Math.floor(Math.random() * moveArr.length)];
    
    let newMove = {"From": random_piece.From, "To": random_move}
    return newMove;
}
