var world = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,1],
    [1,2,1,2,1,1,1,1,1,1,1,1,1,1,2,1,2,1],
    [1,2,1,2,2,2,2,2,2,2,2,2,2,2,2,1,2,1],
    [1,2,1,1,1,1,1,2,1,1,2,1,1,1,1,1,2,1],
    [1,2,1,2,2,2,2,2,1,1,2,2,2,2,2,1,2,1],
    [1,2,1,2,1,2,1,1,1,1,1,1,2,1,2,1,2,1],
    [1,2,2,2,1,2,1,2,2,2,2,1,2,1,2,2,2,1],
    [1,2,2,2,1,2,1,2,2,2,2,1,2,1,2,2,2,1],
    [1,2,1,2,1,2,1,1,1,1,1,1,2,1,2,1,2,1],
    [1,2,1,2,2,2,2,2,1,1,2,2,2,2,2,1,2,1],
    [1,2,1,1,1,1,1,2,1,1,2,1,1,1,1,1,2,1],
    [1,2,1,2,2,2,2,2,2,2,2,2,2,2,2,1,2,1],
    [1,2,1,2,1,1,1,1,1,1,1,1,1,1,2,1,2,1],
    [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
];

var pacman = {
    x: 1,
    y: 1
}

function display_world(){
    output=''
    for(i=0; i < world.length; i++){
        output += "\n<div class='row'>\n";
        for(j=0; j < world[i].length; j++){
            if (world[i][j] == 1)
                output += "<div class='brick'></div>";
            else if (world[i][j] == 2)
                output += "<div class='space'></div>";
            else if (world[i][j] == 0)
            output += "<div class='coin'></div>";
        output += "\n</div>"
        }
        document.getElementById('world').innerHTML = output
        console.log(output)
    }
}
function display_pacman(){
    document.getElementById("pacman").style.left = pacman.y*30 + "px";
    document.getElementById("pacman").style.top = pacman.x*30 + "px";
}

display_world();
display_pacman();

document.onkeydown = function(k){
    if(k.key == 'ArrowDown' && world[pacman.y][pacman.x + 5] != 1 ){
        pacman.x ++
        document.getElementById("pacman").style.transform = "rotate(90deg)"
    }
    else if(k.key == 'ArrowUp' && world[pacman.y][pacman.x - 5] != 1 ){
        pacman.x --;
        document.getElementById("pacman").style.transform = "rotate(270deg)"
    }
    else if(k.key == 'ArrowRight' && world[pacman.y + 5][pacman.x] != 1 ){
        pacman.y ++;
        document.getElementById("pacman").style.transform = "rotate(0deg)"
    }
    else if(k.key == 'ArrowLeft' && world[pacman.y - 5][pacman.x] != 1 ){
        pacman.y --;
        document.getElementById("pacman").style.transform = "rotate(180deg)"
    }
    console.log(k.code)
display_pacman()
}



