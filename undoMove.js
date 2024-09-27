import getBoard from "./getBoard.js";
import config from "./config.js";
import uploadImages from "./uploadImages.js";
import paintTiles from "./paintTiles.js";

//undoes move from to - from, returns board minues previous move
function undoMove(player){

    if(player){

        document.getElementById(pieceNameMemAI[config.pieceNameMemAI.length-1].FROM).innerText = pieceNameMemAI[config.pieceNameMemAI.length-1].fromNAME;

        document.getElementById(pieceNameMemAI[config.pieceNameMemAI.length-1].TO).innerText = pieceNameMemAI[config.pieceNameMemAI.length-1].toNAME;
        config.pieceNameMemAI.pop(pieceNameMemAI[config.pieceNameMemAI.length-1])
        let boardCopy = getBoard()
        uploadImages()
        paintTiles()
        return boardCopy;
    }
    if(!player){

        document.getElementById(pieceNameMemHU[config.pieceNameMemHU.length-1].FROM).innerText = pieceNameMemHU[config.pieceNameMemHU.length-1].fromNAME;
        
        document.getElementById(pieceNameMemHU[config.pieceNameMemHU.length-1].TO).innerText = pieceNameMemHU[config.pieceNameMemHU.length-1].toNAME;
        config.pieceNameMemHU.pop(pieceNameMemHU[config.pieceNameMemHU.length-1])
        let boardCopy = getBoard()
        uploadImages()
        paintTiles()
        return boardCopy;
    }
}

export default undoMove
