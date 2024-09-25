
//make move from - to, returns an altered board
function makeMove(to, from){
    if(to !== null){
        //moveStorage.push({to,from});
        //moveCount++;

        document.getElementById(to).innerText = document.getElementById(from).innerText;

        document.getElementById(from).innerText = "";

        boardCopy = getBoard(); 
        upload_Images()
        paintTiles()
        return boardCopy;
    }
}
