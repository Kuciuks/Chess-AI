import uploadImages from './uploadImages.js'
import paintTiles from './paintTiles.js'
import getBoard from './getBoard.js';
import config from './config.js';

const configInstance = config.getInstance()

//make move from - to, returns an altered board
function makeMove(to, from){
    // console.log('[makeMove CALL]')
    if(to !== null){
        // console.log(`--------> MAKE MOVE --------> ${to, from}`)
        configInstance.moveStorage.push({to,from});
        configInstance.moveCount++;
        // console.log('Make a move')
        // console.log(document.getElementById(from).innerText,'=======================')
        document.getElementById(to).innerText = document.getElementById(from).innerText;

        document.getElementById(from).innerText = "";

        let boardCopy = getBoard(); 
        configInstance.white_move_set.add(boardCopy)
        console.log(configInstance.white_move_set)
        uploadImages()
        paintTiles()
        return boardCopy;
    }
}

export default makeMove