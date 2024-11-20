//returns the valid move board, if a move is illegal then highlights it red
function checkValid(tile,player){
    //console.log(tile);
    let valid = []
    console.log('[checkValid CALL]')
    //console.log(tile," POSSIBLE MOVES FOR ",player)
    switch(player){
        case true:
            tile.forEach( tile => {

                if(document.getElementById(tile).innerText == "" || document.getElementById(tile).innerText[0] == "B"){
                    
                   
                    valid.push(tile)
                    document.getElementById(tile).style.backgroundColor = "green";
                }
                
            })

            return valid;

        case false:
            tile.forEach( tile => {
                if(document.getElementById(tile).innerText == "" || document.getElementById(tile).innerText[0] == "W"){
                    
                    valid.push(tile)
                    document.getElementById(tile).style.backgroundColor = "green";
                }
            })
            return valid;
    }
}

export default checkValid
