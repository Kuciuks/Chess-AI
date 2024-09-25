
//undoes move from to - from, returns board minues previous move
function undoMove(player){

    if(player == true){

        document.getElementById(pieceNameMemAI[pieceNameMemAI.length-1].FROM).innerText = pieceNameMemAI[pieceNameMemAI.length-1].fromNAME;

        document.getElementById(pieceNameMemAI[pieceNameMemAI.length-1].TO).innerText = pieceNameMemAI[pieceNameMemAI.length-1].toNAME;
        pieceNameMemAI.pop(pieceNameMemAI[pieceNameMemAI.length-1])
        boardCopy = getBoard()
        upload_Images()
        paintTiles()
        return boardCopy;
    }
    if(player == false){

        document.getElementById(pieceNameMemHU[pieceNameMemHU.length-1].FROM).innerText = pieceNameMemHU[pieceNameMemHU.length-1].fromNAME;
        
        document.getElementById(pieceNameMemHU[pieceNameMemHU.length-1].TO).innerText = pieceNameMemHU[pieceNameMemHU.length-1].toNAME;
        pieceNameMemHU.pop(pieceNameMemHU[pieceNameMemHU.length-1])
        boardCopy = getBoard()
        upload_Images()
        paintTiles()
        return boardCopy;
    }
}
