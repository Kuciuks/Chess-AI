//checks who turn, return true of black turn, false if white
function whoTurn(toggle){
    
    //check whos turn
    if(toggle % 2 !== 0){

        //update text
        document.getElementById("h").innerText = "whites turn";
        console.log("whites turn");

        return false;
    }
    else if(toggle % 2 == 0){

        //update text
        document.getElementById("h").innerText = "blacks turn";
        return true;
        
    }

}

export default whoTurn