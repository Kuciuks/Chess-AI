import uploadImages from './uploadImages.js'
import paintTiles from './paintTiles.js'
import getBoard from './getBoard.js';


//make move from - to, returns an altered board
function makeMove(to, from){
    if(to !== null){
        //moveStorage.push({to,from});
        //moveCount++;

        document.getElementById(to).innerText = document.getElementById(from).innerText;

        document.getElementById(from).innerText = "";

        let boardCopy = getBoard(); 
        uploadImages()
        paintTiles()
        return boardCopy;
    }
}

export default makeMove