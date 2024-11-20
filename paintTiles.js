//paints tiles (grey white)
function paintTiles(){
    console.log('[paintTiles CALL]')
    document.querySelectorAll(".tile").forEach(tile =>{
        
        //Get tiles position(row,col)
        let arr = Array.from(tile.id);
        let row = arr.shift();
        let col = arr.pop();

        if(row % 2 !== 0){
            if(col % 2 !== 0){
                tile.style.backgroundColor = "white";
            }
            if(col % 2 == 0){
                tile.style.backgroundColor = "grey";
            }
        }
        if(row % 2 == 0){
            if(col % 2 !== 0){
                tile.style.backgroundColor = "grey";
            }
            if(col % 2 == 0){
                tile.style.backgroundColor = "white";
            }
        }
    })
}

export default paintTiles