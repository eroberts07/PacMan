var world = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,1],
    [1,2,1,2,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1],
    [1,2,1,2,2,2,2,2,2,0,2,2,2,2,2,2,1,2,1],
    [1,2,1,1,1,1,1,1,2,1,2,1,1,1,1,1,1,2,1],
    [1,2,1,2,2,2,2,2,2,1,2,2,2,2,2,2,1,2,1],
    [1,2,1,2,1,2,1,1,1,1,1,1,1,2,1,2,1,2,1],
    [1,2,1,2,1,2,1,2,2,2,2,2,1,2,1,2,1,2,1],
    [1,2,0,2,1,2,1,2,2,2,2,2,1,2,1,2,0,2,1],
    [1,2,1,2,1,2,1,2,2,2,2,2,1,2,1,2,1,2,1],
    [1,2,1,2,1,2,1,1,1,1,1,1,1,2,1,2,1,2,1],
    [1,2,1,2,2,2,2,2,2,1,2,2,2,2,2,2,1,2,1],
    [1,2,1,1,1,1,1,1,2,1,2,1,1,1,1,1,1,2,1],
    [1,2,1,2,2,2,2,2,2,0,2,2,2,2,2,2,1,2,1],
    [1,2,1,2,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1],
    [1,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];
var score = 0;

var pacman = {
    x: 1,
    y: 1
}

var player = {
    top: pacman.y-1,
    left: pacman.x+1,
    right: pacman.x-1,
    bottom: pacman.y+1
}



function display_world(){
    output=''
    for(i=0; i < world.length; i++){
        output += "\n<div class='row'>\n";
        for(j=0; j < world[i].length; j++){
            if (world[i][j] == 1)
                output += "<div class='brick'><div class='decor'></div></div>";
            else if (world[i][j] == 2)
                output += "<div class='space'></div>";
            else if (world[i][j] == 0)
            output += "<div class='coin'></div>";
        }
        output += "\n</div>"
        document.getElementById('world').innerHTML = output
        //console.log(output)
    }
}
function display_pacman(){
    document.getElementById("pacman").style.left = pacman.x*30 + "px";
    document.getElementById("pacman").style.top = pacman.y*30 + "px";
}



function display_score(){
    document.getElementById("score").innerHTML = score;
}



display_world();
display_pacman();
display_score();

function collision_detection(){
    
}

document.onkeydown = function(k){
    if(k.key == 'ArrowDown' && world[pacman.x][pacman.y + 1] != 1 ){
        pacman.y ++
        document.getElementById("pacman").style.transform = "rotate(90deg)"
    }
    else if(k.key == 'ArrowUp'  && world[pacman.x][pacman.y - 1] != 1 ){
        pacman.y --;
        document.getElementById("pacman").style.transform = "rotate(270deg)"
    }
    else if(k.key == 'ArrowRight'  && world[pacman.x + 1][pacman.y] != 1 ){
        pacman.x ++;
        document.getElementById("pacman").style.transform = "rotate(0deg)"
    }
    else if(k.key == 'ArrowLeft'  && world[pacman.x - 1][pacman.y] != 1 ){
        pacman.x --; 
        document.getElementById("pacman").style.transform = "rotate(180deg)"
    }
    if(world[pacman.x][pacman.y] == 0){
        world[pacman.x][pacman.y] = 2;
        score += 10;
        display_world();
        display_score();
        console.log("Coin should be picked up")
    }
    console.log(k.code)

display_pacman()
}




