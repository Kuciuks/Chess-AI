//checks who turn, return true of black turn, false if white
function whoTurn(toggle){
    // console.log('[whoTurn CALL]')

    //Using a global variable's instance to store turn controling value
    //The value is an (int) is it's cases are:
        // When the toggle value is ODD (i.e., 3 % 2 = 1), dividing by 2 yields non-integer results, leading to uneven splits.
        // When the toggle value is EVEN (i.e., 4 % 2 = 0), dividing by 2 yields integer results, leading to even splits.


    // if current player is EVEN(white piece)
    if(toggle % 2 !== 0){

        document.getElementById("h").innerText = "whites turn";
        // console.log("\n*\n[***********WHITE TURN***********]\n*\n");
        return false;
    }
        
    // if current player is ODD(black piece)
    else if(toggle % 2 == 0){

        // Update text
        document.getElementById("h").innerText = "black's turn";
        return true
    }
}
export default whoTurn