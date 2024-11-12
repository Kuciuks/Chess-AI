//checks who turn, return true of black turn, false if white
function whoTurn(toggle){
    
    //check whos turn
    if(toggle % 2 !== 0){

        //update text
        document.getElementById("h").innerText = "whites turn";
        console.log("\n*\n[***********WHITE TURN***********]\n*\n");

        return false;
    }
    else if(toggle % 2 == 0){

        //update text
        document.getElementById("h").innerText = "blacks turn";
        console.log("\n*\n[***********BLACK TURN***********]\n*\n");
        return true;
        
    }

}

export default whoTurn