import checkValid from './checkValidity.js'

//search through all of the black pieces and find possible moves, add them to array and before returning the array run through checkValid function to remove all illegal moves
function availableMoves(pieces,player){
    let all_piece_moves = []

    // console.log('[availableMoves CALL]')
    
    //if(player == true){
    ///    pieces.forEach(tile => {
    //        if(document.getElementById(tile).innerText[0] == ""){
    //            pieces.pop(tile);
    //        }
    //    })
    //}
    //else{
    //    pieces.forEach(tile => {
    ///        if(document.getElementById(tile).innerText[0] == ""){
    //            pieces.pop(tile);
    //        }
    //    })
    //}
    pieces.forEach(tile =>{

        if(player == true){
            if(document.getElementById(tile).innerText[0] == ""){
                pieces.pop(tile);
            }
        }else{
            if(document.getElementById(tile).innerText[0] == ""){
                pieces.pop(tile);
            }
        }

        let obj = {}
        let store_chosen_tile = [];
        let store_possible_tile_moves = []
        store_chosen_tile = document.getElementById(tile).id;
        let innerText = document.getElementById(tile).innerText;

        let row = eval(document.getElementById(tile).id[0]);
        let col = eval(document.getElementById(tile).id[2]);

        switch(innerText){
        
            case "B-Pawn":                
            
                try{
                    //if(document.getElementById(`${row+2}-${col}`).innerText == ""){
                    //    store_possible_tile_moves.push(document.getElementById(`${row+2}-${col}`).id);
                    //}

                    if(document.getElementById(`${row+1}-${col}`).innerText == ""){
                        store_possible_tile_moves.push(document.getElementById(`${row+1}-${col}`).id);
                    }
        
                    if(document.getElementById(`${row+1}-${col+1}`).innerText[0] == "W"){
                        store_possible_tile_moves.push(document.getElementById(`${row+1}-${col+1}`).id);
                    }
                    
                    if(document.getElementById(`${row+1}-${col-1}`).innerText[0] == "W"){
                        store_possible_tile_moves.push(document.getElementById(`${row+1}-${col-1}`).id);
                    }
                }
                catch{}

                
                
            break;

            case "W-Pawn":    
                try{
                    //if(document.getElementById(`${row-2}-${col}`).innerText == "" ){
                    //    store_possible_tile_moves.push(document.getElementById(`${row-2}-${col}`).id);
                    //}

                    if(document.getElementById(`${row-1}-${col}`).innerText == ""){
                        store_possible_tile_moves.push(document.getElementById(`${row-1}-${col}`).id);
                    }
        
                    if(document.getElementById(`${row-1}-${col-1}`).innerText[0] == "B"){
                        store_possible_tile_moves.push(document.getElementById(`${row-1}-${col-1}`).id);
                    }
                    
                    if(document.getElementById(`${row-1}-${col+1}`).innerText[0] == "B"){
                        store_possible_tile_moves.push(document.getElementById(`${row-1}-${col-1}`).id);
                    }
                }
                catch{}

            break;

            case "B-Night":
                try{

                    if(row >= 3 && col > 1){
                        //document.getElementById(`${row-2}-${col-1}`).style.backgroundColor = "green";
                        store_possible_tile_moves.push(document.getElementById(`${row-2}-${col-1}`).id)
                    }
                    if(row >= 3 && col < 8){
                        //document.getElementById(`${row-2}-${col+1}`).style.backgroundColor = "green";
                        store_possible_tile_moves.push(document.getElementById(`${row-2}-${col+1}`).id)
                    }
                    if(row > 1 && col >= 3){
                        //document.getElementById(`${row-1}-${col-2}`).style.backgroundColor = "green";
                        store_possible_tile_moves.push(document.getElementById(`${row-1}-${col-2}`).id)
                    }
                    if(row > 1 && col < 7){
                        //document.getElementById(`${row-1}-${col+2}`).style.backgroundColor = "green";
                        store_possible_tile_moves.push(document.getElementById(`${row-1}-${col+2}`).id)
                    }
                    if(row < 8 && col >= 3){
                        //document.getElementById(`${row+1}-${col-2}`).style.backgroundColor = "green";
                        store_possible_tile_moves.push(document.getElementById(`${row+1}-${col-2}`).id)
                    }
                    if(row < 8 && col < 7){
                        //document.getElementById(`${row+1}-${col+2}`).style.backgroundColor = "green";
                        store_possible_tile_moves.push(document.getElementById(`${row+1}-${col+2}`).id)
                    }
                    if(row < 7 && col > 1){
                        //document.getElementById(`${row+2}-${col-1}`).style.backgroundColor = "green";
                        store_possible_tile_moves.push(document.getElementById(`${row+2}-${col-1}`).id)
                    }
                    if(row < 7 && col < 8){
                        //document.getElementById(`${row+2}-${col+1}`).style.backgroundColor = "green";
                        store_possible_tile_moves.push(document.getElementById(`${row+2}-${col+1}`).id)
                    }
                }
                catch{

                }
            break;

            case "W-Night":
                                try{

                    if(row >= 3 && col > 1){
                        //document.getElementById(`${row-2}-${col-1}`).style.backgroundColor = "green";
                        store_possible_tile_moves.push(document.getElementById(`${row-2}-${col-1}`).id)
                    }
                    if(row >= 3 && col < 8){
                        //document.getElementById(`${row-2}-${col+1}`).style.backgroundColor = "green";
                        store_possible_tile_moves.push(document.getElementById(`${row-2}-${col+1}`).id)
                    }
                    if(row > 1 && col >= 3){
                        //document.getElementById(`${row-1}-${col-2}`).style.backgroundColor = "green";
                        store_possible_tile_moves.push(document.getElementById(`${row-1}-${col-2}`).id)
                    }
                    if(row > 1 && col < 7){
                        //document.getElementById(`${row-1}-${col+2}`).style.backgroundColor = "green";
                        store_possible_tile_moves.push(document.getElementById(`${row-1}-${col+2}`).id)
                    }
                    if(row < 8 && col >= 3){
                        //document.getElementById(`${row+1}-${col-2}`).style.backgroundColor = "green";
                        store_possible_tile_moves.push(document.getElementById(`${row+1}-${col-2}`).id)
                    }
                    if(row < 8 && col < 7){
                        //document.getElementById(`${row+1}-${col+2}`).style.backgroundColor = "green";
                        store_possible_tile_moves.push(document.getElementById(`${row+1}-${col+2}`).id)
                    }
                    if(row < 7 && col > 1){
                        //document.getElementById(`${row+2}-${col-1}`).style.backgroundColor = "green";
                        store_possible_tile_moves.push(document.getElementById(`${row+2}-${col-1}`).id)
                    }
                    if(row < 7 && col < 8){
                        //document.getElementById(`${row+2}-${col+1}`).style.backgroundColor = "green";
                        store_possible_tile_moves.push(document.getElementById(`${row+2}-${col+1}`).id)
                    }
                }
                catch{
                    
                }
            break;

            case "B-Rook":


                let ahead_0 = 8 - col;
                let behind_0 = col - 1;
                let below_0 = 8 - row;
                let up_0 = row - 1;

                
                for (let i = 1; i <= ahead_0; i++){
                    if(document.getElementById(`${row}-${col+i}`) == null){
                        break;
                    }
                    store_possible_tile_moves.push(document.getElementById(`${row}-${col+i}`).id)
            
                    if(document.getElementById(`${row}-${col+i}`).innerText[0] == "W" || document.getElementById(`${row}-${col+i}`).innerText[0] == "B"){
                        break;
                    }
                }
            
                for (let j = 1; j <= behind_0; j++){
                    if(document.getElementById(`${row}-${col-j}`) == null){
                        break;
                    }
                    store_possible_tile_moves.push(document.getElementById(`${row}-${col-j}`).id)
                    if(document.getElementById(`${row}-${col-j}`).innerText[0] == "W" || document.getElementById(`${row}-${col-j}`).innerText[0] == "B"){
                        break;
                    }
                }
            
                for (let k = 1; k <= below_0; k++){
                    if(document.getElementById(`${row+k}-${col}`) == null){
                        break;
                    }
                    store_possible_tile_moves.push(document.getElementById(`${row+k}-${col}`).id)
                    if(document.getElementById(`${row+k}-${col}`).innerText[0] == "W" || document.getElementById(`${row+k}-${col}`).innerText[0] == "B"){
                        break;
                    }
                }
            
                for (let l = 1; l <= up_0; l++){
                    if(document.getElementById(`${row-l}-${col}`) == null){
                        break;
                    }
                    store_possible_tile_moves.push(document.getElementById(`${row-l}-${col}`).id)
                    if(document.getElementById(`${row-l}-${col}`).innerText[0] == "W" || document.getElementById(`${row-l}-${col}`).innerText[0] == "B"){
                        break;
                    }
                }
            
            break;

            case "W-Rook":


                let ahead_1 = 8 - col;
                let behind_1 = col - 1;
                let below_1 = 8 - row;
                let up_1 = row - 1;

                
                for (let i = 1; i <= ahead_1; i++){
                    if(document.getElementById(`${row}-${col+i}`) == null){
                        break;
                    }
                    store_possible_tile_moves.push(document.getElementById(`${row}-${col+i}`).id)
            
                    if(document.getElementById(`${row}-${col+i}`).innerText[0] == "W" || document.getElementById(`${row}-${col+i}`).innerText[0] == "B"){
                        break;
                    }
                }
            
                for (let j = 1; j <= behind_1; j++){
                    if(document.getElementById(`${row}-${col-j}`) == null){
                        break;
                    }
                    store_possible_tile_moves.push(document.getElementById(`${row}-${col-j}`).id)
                    if(document.getElementById(`${row}-${col-j}`).innerText[0] == "W" || document.getElementById(`${row}-${col-j}`).innerText[0] == "B"){
                        break;
                    }
                }
            
                for (let k = 1; k <= below_1; k++){
                    if(document.getElementById(`${row+k}-${col}`) == null){
                        break;
                    }
                    store_possible_tile_moves.push(document.getElementById(`${row+k}-${col}`).id)
                    if(document.getElementById(`${row+k}-${col}`).innerText[0] == "W" || document.getElementById(`${row+k}-${col}`).innerText[0] == "B"){
                        break;
                    }
                }
            
                for (let l = 1; l <= up_1; l++){
                    if(document.getElementById(`${row-l}-${col}`) == null){
                        break;
                    }
                    store_possible_tile_moves.push(document.getElementById(`${row-l}-${col}`).id)
                    if(document.getElementById(`${row-l}-${col}`).innerText[0] == "W" || document.getElementById(`${row-l}-${col}`).innerText[0] == "B"){
                        break;
                    }
                }
            
            break;

            case "B-Bishop":
                for(let i = 1; i < 9; i++){

                    try{

                        msg = "";
                        if(document.getElementById(`${row-i}-${col-i}`).innerText == ""){

                            if (document.getElementById(`${row-i}-${col-i}`).innerText[0] == "W"){
                                store_possible_tile_moves.push(document.getElementById(`${row-i}-${col-i}`).id);
                                i = 9
                            }
                        }
                        if(document.getElementById(`${row-i}-${col-i}`).innerText[0] == "B"){
                            i=9
                        }
                        //console.log(i,"COUNT _________-")

                    }
                    catch(err){

                    }

                }


                for(let j = 1; j < 9; j++){

                    try{
                        if(document.getElementById(`${row-j}-${col+j}`).innerText == ""){
                            if (document.getElementById(`${row-j}-${col+j}`).innerText[0] == "W"){
                                store_possible_tile_moves.push(document.getElementById(`${row-j}-${col+j}`).id);
                                j = 9
                            }   
                        }
                        msg = "";
                        if(document.getElementById(`${row-j}-${col+j}`).innerText[0] == "B"){
                            j=9
                        }

                    }
                    catch(err){

                    }

                }


                for(let k = 1; k < 9; k++){

                    try{
                        if(document.getElementById(`${row+k}-${col-k}`).innerText == ""){
                            if(document.getElementById(`${row+k}-${col-k}`).innerText[0] == "W"){
                                store_possible_tile_moves.push(document.getElementById(`${row+k}-${col-k}`).id);
                                k = 9
                            }
                        }
                        msg = "";
                        if(document.getElementById(`${row+k}-${col-k}`).innerText[0] == "B"){
                            k=9
                        }

                    }
                    catch(err){

                    }

                }

                for(let l = 1; l < 9; l++){

                    try{
                        if(document.getElementById(`${row+l}-${col+l}`).innerText == ""){ 
                            if(document.getElementById(`${row+l}-${col+l}`).innerText[0] == "W"){
                                store_possible_tile_moves.push(document.getElementById(`${row+l}-${col+l}`).id);
                                l = 9
                            }
                        }
                        msg = "";
                        if(document.getElementById(`${row+l}-${col+l}`).innerText[0] == "B"){
                            l=9
                        }

                    }
                    catch(err){

                    }

                }



            

            break;
        
            case "W-Bishop":
                for(let i = 1; i < 9; i++){

                    try{

                        msg = "";
                        if(document.getElementById(`${row-i}-${col-i}`).innerText == "" || document.getElementById(`${row-i}-${col-i}`).innerText[0] == "B"){
                            store_possible_tile_moves.push(document.getElementById(`${row-i}-${col-i}`).id);
                            
                        }
                        if(document.getElementById(`${row-i}-${col-i}`).innerText[0] == "W"){
                            i=9
                        }
                        //console.log(i,"COUNT _________-")

                    }
                    catch(err){

                    }

                }


                for(let j = 1; j < 9; j++){

                    try{
                        if(document.getElementById(`${row-j}-${col+j}`).innerText == "" || document.getElementById(`${row-j}-${col+j}`).innerText[0] == "B"){
                            store_possible_tile_moves.push(document.getElementById(`${row-j}-${col+j}`).id);
                            
                        }
                        msg = "";
                        if(document.getElementById(`${row-j}-${col+j}`).innerText[0] == "W"){
                            j=9
                        }

                    }
                    catch(err){

                    }

                }


                for(let k = 1; k < 9; k++){

                    try{
                        if(document.getElementById(`${row+k}-${col-k}`).innerText == "" || document.getElementById(`${row+k}-${col-k}`).innerText[0] == "B"){
                            store_possible_tile_moves.push(document.getElementById(`${row+k}-${col-k}`).id);
                            
                        }
                        msg = "";
                        if(document.getElementById(`${row+k}-${col-k}`).innerText[0] == "W"){
                            k=9
                        }

                    }
                    catch(err){

                    }

                }

                for(let l = 1; l < 9; l++){

                    try{
                        if(document.getElementById(`${row+l}-${col+l}`).innerText == "" || document.getElementById(`${row+l}-${col+l}`).innerText[0] == "B"){
                            store_possible_tile_moves.push(document.getElementById(`${row+l}-${col+l}`).id);
                            
                        }
                        msg = "";
                        if(document.getElementById(`${row+l}-${col+l}`).innerText[0] == "W"){
                            l=9
                        }

                    }
                    catch(err){

                    }

                }


            

            break;

            case "B-Queen":
                let ahead_2 = 8 - col;
                let behind_2 = col - 1;
                let below_2 = 8 - row;
                let up_2 = row - 1;


                for (let i = 1; i <= ahead_2; i++){
                    if(document.getElementById(`${row}-${col+i}`) == null){
                        break;
                    }
                    store_possible_tile_moves.push(document.getElementById(`${row}-${col+i}`).id)
            
                    if(document.getElementById(`${row}-${col+i}`).innerText[0] == "W" || document.getElementById(`${row}-${col+i}`).innerText[0] == "B"){
                        break;
                    }
                }
            
                for (let j = 1; j <= behind_2; j++){
                    if(document.getElementById(`${row}-${col-j}`) == null){
                        break;
                    }
                    store_possible_tile_moves.push(document.getElementById(`${row}-${col-j}`).id)
                    if(document.getElementById(`${row}-${col-j}`).innerText[0] == "W" || document.getElementById(`${row}-${col-j}`).innerText[0] == "B"){
                        break;
                    }
                }
            
                for (let k = 1; k <= below_2; k++){
                    if(document.getElementById(`${row+k}-${col}`) == null){
                        break;
                    }
                    store_possible_tile_moves.push(document.getElementById(`${row+k}-${col}`).id)
                    if(document.getElementById(`${row+k}-${col}`).innerText[0] == "W" || document.getElementById(`${row+k}-${col}`).innerText[0] == "B"){
                        break;
                    }
                }
            
                for (let l = 1; l <= up_2; l++){
                    if(document.getElementById(`${row-l}-${col}`) == null){
                        break;
                    }
                    store_possible_tile_moves.push(document.getElementById(`${row-l}-${col}`).id)
                    if(document.getElementById(`${row-l}-${col}`).innerText[0] == "W" || document.getElementById(`${row-l}-${col}`).innerText[0] == "B"){
                        break;
                    }
                }
            
                for(let i = 1; i < 9; i++){

                    try{

                        msg = "";
                        if(document.getElementById(`${row-i}-${col-i}`).innerText[0] == "B"){
                            i=9
                        }
                        store_possible_tile_moves.push(document.getElementById(`${row-i}-${col-i}`).id);
                        if(document.getElementById(`${row-i}-${col-i}`).innerText[0] == "W"){
                            i=9
                        }

                    }
                    catch(err){

                    }

                }


                for(let j = 1; j < 9; j++){

                    try{
                        if(document.getElementById(`${row-j}-${col+j}`).innerText[0] == "B"){
                            j=9
                        }
                        msg = "";
                        store_possible_tile_moves.push(document.getElementById(`${row-j}-${col+j}`).id);
                        if(document.getElementById(`${row-j}-${col+j}`).innerText[0] == "W"){
                            j=9
                        }

                    }
                    catch(err){

                    }

                }


                for(let k = 1; k < 9; k++){

                    try{
                        if(document.getElementById(`${row+k}-${col-k}`).innerText[0] == "B"){
                            k=9
                        }
                        msg = "";
                        store_possible_tile_moves.push(document.getElementById(`${row+k}-${col-k}`).id);
                        if(document.getElementById(`${row+k}-${col-k}`).innerText[0] == "W"){
                            k=9
                        }

                    }
                    catch(err){

                    }

                }

                for(let l = 1; l < 9; l++){

                    try{
                        if(document.getElementById(`${row+l}-${col+l}`).innerText[0] == "B"){
                            l=9
                        }
                        msg = "";
                        store_possible_tile_moves.push(document.getElementById(`${row+l}-${col+l}`).id);
                        if(document.getElementById(`${row+l}-${col+l}`).innerText[0] == "W"){
                            l=9
                        }

                    }
                    catch(err){
                    }

                }
            break;
        
            case "W-Queen":
                let ahead_3 = 8 - col;
                let behind_3 = col - 1;
                let below_3 = 8 - row;
                let up_3 = row - 1;


                for (let i = 1; i <= ahead_3; i++){
                    if(document.getElementById(`${row}-${col+i}`) == null){
                        break;
                    }
                    store_possible_tile_moves.push(document.getElementById(`${row}-${col+i}`).id)
            
                    if(document.getElementById(`${row}-${col+i}`).innerText[0] == "W" || document.getElementById(`${row}-${col+i}`).innerText[0] == "B"){
                        break;
                    }
                }
            
                for (let j = 1; j <= behind_3; j++){
                    if(document.getElementById(`${row}-${col-j}`) == null){
                        break;
                    }
                    store_possible_tile_moves.push(document.getElementById(`${row}-${col-j}`).id)
                    if(document.getElementById(`${row}-${col-j}`).innerText[0] == "W" || document.getElementById(`${row}-${col-j}`).innerText[0] == "B"){
                        break;
                    }
                }
            
                for (let k = 1; k <= below_3; k++){
                    if(document.getElementById(`${row+k}-${col}`) == null){
                        break;
                    }
                    store_possible_tile_moves.push(document.getElementById(`${row+k}-${col}`).id)
                    if(document.getElementById(`${row+k}-${col}`).innerText[0] == "W" || document.getElementById(`${row+k}-${col}`).innerText[0] == "B"){
                        break;
                    }
                }
            
                for (let l = 1; l <= up_3; l++){
                    if(document.getElementById(`${row-l}-${col}`) == null){
                        break;
                    }
                    store_possible_tile_moves.push(document.getElementById(`${row-l}-${col}`).id)
                    if(document.getElementById(`${row-l}-${col}`).innerText[0] == "W" || document.getElementById(`${row-l}-${col}`).innerText[0] == "B"){
                        break;
                    }
                }
            
                for(let i = 1; i < 9; i++){

                    try{

                        msg = "";
                        if(document.getElementById(`${row-i}-${col-i}`).innerText[0] == "B"){
                            i=9
                        }
                        store_possible_tile_moves.push(document.getElementById(`${row-i}-${col-i}`).id);
                        if(document.getElementById(`${row-i}-${col-i}`).innerText[0] == "W"){
                            i=9
                        }

                    }
                    catch(err){

                    }

                }


                for(let j = 1; j < 9; j++){

                    try{
                        if(document.getElementById(`${row-j}-${col+j}`).innerText[0] == "B"){
                            j=9
                        }
                        msg = "";
                        store_possible_tile_moves.push(document.getElementById(`${row-j}-${col+j}`).id);
                        if(document.getElementById(`${row-j}-${col+j}`).innerText[0] == "W"){
                            j=9
                        }

                    }
                    catch(err){

                    }

                }


                for(let k = 1; k < 9; k++){

                    try{
                        if(document.getElementById(`${row+k}-${col-k}`).innerText[0] == "B"){
                            k=9
                        }
                        msg = "";
                        store_possible_tile_moves.push(document.getElementById(`${row+k}-${col-k}`).id);
                        if(document.getElementById(`${row+k}-${col-k}`).innerText[0] == "W"){
                            k=9
                        }

                    }
                    catch(err){

                    }

                }

                for(let l = 1; l < 9; l++){

                    try{
                        if(document.getElementById(`${row+l}-${col+l}`).innerText[0] == "B"){
                            l=9
                        }
                        msg = "";
                        store_possible_tile_moves.push(document.getElementById(`${row+l}-${col+l}`).id);
                        if(document.getElementById(`${row+l}-${col+l}`).innerText[0] == "W"){
                            l=9
                        }

                    }
                    catch(err){
                    }

                }
            break;

            case "B-King":
                let ahead_4 = 1;
                let behind_4 = 1;
                let below_4 = 1;
                let up_4 = 1;


                for (let i = 1; i <= ahead_4; i++){
                    if(document.getElementById(`${row}-${col+i}`) == null || document.getElementById(`${row}-${col+i}`).innerText[0] == "B"){
                        break
                    }
                    store_possible_tile_moves.push(document.getElementById(`${row}-${col+i}`).id)

                    if(document.getElementById(`${row}-${col+i}`).innerText[0] == "W"){
                        i=9;
                    }
                }



                for (let j = 1; j <= behind_4; j++){
                    if(document.getElementById(`${row}-${col-j}`) == null || document.getElementById(`${row}-${col-j}`).innerText[0] == "B"){
                        break
                    }
                    store_possible_tile_moves.push(document.getElementById(`${row}-${col-j}`).id)
                    if(document.getElementById(`${row}-${col-j}`).innerText[0] == "W"){
                        j=9;
                    }
                }



                for (let k = 1; k <= below_4; k++){

                    if(document.getElementById(`${row+k}-${col}`) == null || document.getElementById(`${row+k}-${col}`).innerText[0] == "B"){
                        break
                    }
                    store_possible_tile_moves.push(document.getElementById(`${row+k}-${col}`).id)
                    if(document.getElementById(`${row+k}-${col}`).innerText[0] == "W"){
                        k=9;
                    }
                }
        


                for (let l = 1; l <= up_4; l++){

                    if(document.getElementById(`${row-l}-${col}`) == null || document.getElementById(`${row-l}-${col}`).innerText[0] == "B"){
                        break
                    }
                    store_possible_tile_moves.push(document.getElementById(`${row-l}-${col}`).id)
                    if(document.getElementById(`${row-l}-${col}`).innerText[0] == "W"){
                        l=9;
                    }
                }
            
                for(let i = 1; i < 2; i++){

                    try{

                        msg = "";
                        if(document.getElementById(`${row-i}-${col-i}`).innerText[0] == "B"){
                            i=9
                        }
                        store_possible_tile_moves.push(document.getElementById(`${row-i}-${col-i}`).id);
                        if(document.getElementById(`${row-i}-${col-i}`).innerText[0] == "W"){
                            i=9
                        }

                    }
                    catch(err){

                    }

                }


                for(let j = 1; j < 2; j++){

                    try{
                        if(document.getElementById(`${row-j}-${col+j}`).innerText[0] == "B"){
                            j=9
                        }
                        msg = "";
                        store_possible_tile_moves.push(document.getElementById(`${row-j}-${col+j}`).id);
                        if(document.getElementById(`${row-j}-${col+j}`).innerText[0] == "W"){
                            j=9
                        }

                    }
                    catch(err){
                    }

                }


                for(let k = 1; k < 2; k++){

                    try{
                        if(document.getElementById(`${row+k}-${col-k}`).innerText[0] == "B"){
                            k=9
                        }
                        msg = "";
                        store_possible_tile_moves.push(document.getElementById(`${row+k}-${col-k}`).id);
                        if(document.getElementById(`${row+k}-${col-k}`).innerText[0] == "W"){
                            k=9
                        }

                    }
                    catch(err){
                    }

                }

                for(let l = 1; l < 2; l++){

                    try{
                        if(document.getElementById(`${row+l}-${col+l}`).innerText[0] == "B"){
                            l=9
                        }
                        msg = "";
                        store_possible_tile_moves.push(document.getElementById(`${row+l}-${col+l}`).id);
                        if(document.getElementById(`${row+l}-${col+l}`).innerText[0] == "W"){
                            l=9
                        }

                    }
                    catch(err){
                    }

                }
            break;
        
            case "W-King":
                let ahead_5 = 1;
                let behind_5 = 1;
                let below_5 = 1;
                let up_5 = 1;


                for (let i = 1; i <= ahead_5; i++){
                    if(document.getElementById(`${row}-${col+i}`) == null || document.getElementById(`${row}-${col+i}`).innerText[0] == "B"){
                        break
                    }
                    store_possible_tile_moves.push(document.getElementById(`${row}-${col+i}`).id)

                    if(document.getElementById(`${row}-${col+i}`).innerText[0] == "W"){
                        i=9;
                    }
                }



                for (let j = 1; j <= behind_5; j++){
                    if(document.getElementById(`${row}-${col-j}`) == null || document.getElementById(`${row}-${col-j}`).innerText[0] == "B"){
                        break
                    }
                    store_possible_tile_moves.push(document.getElementById(`${row}-${col-j}`).id)
                    if(document.getElementById(`${row}-${col-j}`).innerText[0] == "W"){
                        j=9;
                    }
                }



                for (let k = 1; k <= below_5; k++){

                    if(document.getElementById(`${row+k}-${col}`) == null || document.getElementById(`${row+k}-${col}`).innerText[0] == "B"){
                        break
                    }
                    store_possible_tile_moves.push(document.getElementById(`${row+k}-${col}`).id)
                    if(document.getElementById(`${row+k}-${col}`).innerText[0] == "W"){
                        k=9;
                    }
                }
        


                for (let l = 1; l <= up_5; l++){

                    if(document.getElementById(`${row-l}-${col}`) == null || document.getElementById(`${row-l}-${col}`).innerText[0] == "B"){
                        break
                    }
                    store_possible_tile_moves.push(document.getElementById(`${row-l}-${col}`).id)
                    if(document.getElementById(`${row-l}-${col}`).innerText[0] == "W"){
                        l=9;
                    }
                }
            
                for(let i = 1; i < 2; i++){

                    try{

                        msg = "";
                        if(document.getElementById(`${row-i}-${col-i}`).innerText[0] == "B"){
                            i=9
                        }
                        store_possible_tile_moves.push(document.getElementById(`${row-i}-${col-i}`).id);
                        if(document.getElementById(`${row-i}-${col-i}`).innerText[0] == "W"){
                            i=9
                        }

                    }
                    catch(err){

                    }

                }


                for(let j = 1; j < 2; j++){

                    try{
                        if(document.getElementById(`${row-j}-${col+j}`).innerText[0] == "B"){
                            j=9
                        }
                        msg = "";
                        store_possible_tile_moves.push(document.getElementById(`${row-j}-${col+j}`).id);
                        if(document.getElementById(`${row-j}-${col+j}`).innerText[0] == "W"){
                            j=9
                        }

                    }
                    catch(err){
                    }

                }


                for(let k = 1; k < 2; k++){

                    try{
                        if(document.getElementById(`${row+k}-${col-k}`).innerText[0] == "B"){
                            k=9
                        }
                        msg = "";
                        store_possible_tile_moves.push(document.getElementById(`${row+k}-${col-k}`).id);
                        if(document.getElementById(`${row+k}-${col-k}`).innerText[0] == "W"){
                            k=9
                        }

                    }
                    catch(err){
                    }

                }

                for(let l = 1; l < 2; l++){

                    try{
                        if(document.getElementById(`${row+l}-${col+l}`).innerText[0] == "B"){
                            l=9
                        }
                        msg = "";
                        store_possible_tile_moves.push(document.getElementById(`${row+l}-${col+l}`).id);
                        if(document.getElementById(`${row+l}-${col+l}`).innerText[0] == "W"){
                            l=9
                        }

                    }
                    catch(err){
                    }

                }
            break;
        }

        
        //check and update valid move board
        store_possible_tile_moves = checkValid(store_possible_tile_moves,player);
        obj = {"From":store_chosen_tile,"To":store_possible_tile_moves}

        all_piece_moves.push(obj);

        if(obj.To.length == 0){
            all_piece_moves.pop(obj);
        }

    })
    return all_piece_moves;
}

export default availableMoves