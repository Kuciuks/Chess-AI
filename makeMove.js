import uploadImages from './uploadImages.js'
import paintTiles from './paintTiles.js'
import getBoard from './getBoard.js';
import config from './config.js';

const configInstance = config.getInstance()

//make move from - to, returns an altered board
function makeMove(to, from){
    if(to !== null){
        configInstance.moveStorage.push({to,from});
        configInstance.moveCount++;
        console.log('Make a move')
        console.log(document.getElementById(from).innerText,'=======================')
        document.getElementById(to).innerText = document.getElementById(from).innerText;

        document.getElementById(from).innerText = "";

        let boardCopy = getBoard(); 
        uploadImages()
        paintTiles()
        return boardCopy;
    }
}

export default makeMove