import getBoard from "./getBoard.js";
import config from "./config.js";
import uploadImages from "./uploadImages.js";
import paintTiles from "./paintTiles.js";
const configInstance = config.getInstance()

//undoes move from to - from, returns board minues previous move
function undoMove(player){

    if(player){

        document.getElementById(pieceNameMemAI[configInstance.pieceNameMemAI.length-1].FROM).innerText = pieceNameMemAI[configInstance.pieceNameMemAI.length-1].fromNAME;

        document.getElementById(pieceNameMemAI[configInstance.pieceNameMemAI.length-1].TO).innerText = pieceNameMemAI[configInstance.pieceNameMemAI.length-1].toNAME;
        configInstance.pieceNameMemAI.pop(pieceNameMemAI[configInstance.pieceNameMemAI.length-1])
        let boardCopy = getBoard()
        uploadImages()
        paintTiles()
        return boardCopy;
    }
    if(!player){

        document.getElementById(pieceNameMemHU[configInstance.pieceNameMemHU.length-1].FROM).innerText = pieceNameMemHU[configInstance.pieceNameMemHU.length-1].fromNAME;
        
        document.getElementById(pieceNameMemHU[configInstance.pieceNameMemHU.length-1].TO).innerText = pieceNameMemHU[configInstance.pieceNameMemHU.length-1].toNAME;
        configInstance.pieceNameMemHU.pop(pieceNameMemHU[configInstance.pieceNameMemHU.length-1])
        let boardCopy = getBoard()
        uploadImages()
        paintTiles()
        return boardCopy;
    }
}

export default undoMove
