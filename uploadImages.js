//uploads images to tiles based on inner text
function upload_Images(){
    document.querySelectorAll(".tile").forEach(tile => {
        switch(tile.innerText){
            case "":
                break;
            default:
                tile.innerHTML=`${tile.innerText} <img class="pic" src="Assets/${tile.innerText}.png">`;
                tile.style.cursor = "pointer";
                break;
        }
    })
}
