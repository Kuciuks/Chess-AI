
//gets board
function getBoard(){
    let new_board = []
    let txt = []
    document.querySelectorAll(".tile").forEach(tile => {
        new_board.push(tile.id);
        txt.push(tile.innerText);
    })
    return new_board;
}
