//paints tiles (grey white)
function paintTiles(){
    document.querySelectorAll(".tile").forEach(tile =>{
        
        //Get tiles position(row,col)
        let arr = Array.from(tile.id);
        row = arr.shift();
        col = arr.pop();

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
