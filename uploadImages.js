//uploads images to tiles based on inner text
function uploadImages(){
    document.querySelectorAll(".tile").forEach(tile => {
        if (tile.innerText != ""){
            tile.innerHTML=`${tile.innerText} <img class="pic" src="Assets/${tile.innerText}.png">`;
            tile.style.cursor = "pointer";
        }
        
    })
}

export default uploadImages
