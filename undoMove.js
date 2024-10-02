import getBoard from "./getBoard.js";
import config from "./config.js";
import uploadImages from "./uploadImages.js";
import paintTiles from "./paintTiles.js";
const configInstance = config.getInstance()

//undoes move from to - from, returns board minues previous move
function undoMove(player){

    if(player){

        document.getElementById(configInstance.pieceNameMemAI[configInstance.pieceNameMemAI.length-1].FROM).innerText = configInstance.pieceNameMemAI[configInstance.pieceNameMemAI.length-1].fromNAME;

        document.getElementById(configInstance.pieceNameMemAI[configInstance.pieceNameMemAI.length-1].TO).innerText = configInstance.pieceNameMemAI[configInstance.pieceNameMemAI.length-1].toNAME;
        configInstance.pieceNameMemAI.pop(configInstance.pieceNameMemAI[configInstance.pieceNameMemAI.length-1])
        let boardCopy = getBoard()
        uploadImages()
        paintTiles()
        return boardCopy;
    }
    if(!player){

        document.getElementById(configInstance.pieceNameMemHU[configInstance.pieceNameMemHU.length-1].FROM).innerText = configInstance.pieceNameMemHU[configInstance.pieceNameMemHU.length-1].fromNAME;
        
        document.getElementById(configInstance.pieceNameMemHU[configInstance.pieceNameMemHU.length-1].TO).innerText = configInstance.pieceNameMemHU[configInstance.pieceNameMemHU.length-1].toNAME;
        configInstance.pieceNameMemHU.pop(configInstance.pieceNameMemHU[configInstance.pieceNameMemHU.length-1])
        let boardCopy = getBoard()
        uploadImages()
        paintTiles()
        return boardCopy;
    }
}

export default undoMove
