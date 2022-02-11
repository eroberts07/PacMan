var world = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,1],
    [1,2,1,2,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1],
    [1,2,1,2,2,2,2,2,2,0,2,2,2,2,2,2,1,2,1],
    [1,2,1,1,1,1,1,1,2,1,2,1,1,1,1,1,1,2,1],
    [1,2,1,2,2,2,2,2,2,1,2,2,2,2,2,2,1,2,1],
    [1,2,1,2,1,2,1,1,1,1,1,1,1,2,1,2,1,2,1],
    [1,2,1,2,1,2,1,3,3,3,3,3,1,2,1,2,1,2,1],
    [4,2,0,2,1,2,3,3,3,3,3,3,3,2,1,2,0,2,5],
    [1,2,1,2,1,2,1,3,3,3,3,3,1,2,1,2,1,2,1],
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
    y: 1,
    x: 1
}

var ghost1 = {
    x: 7,
    y: 7,
}
var up =  document.getElementById('ghost1').style.top = ghost1.y-30 + "px";
var down = document.getElementById('ghost1').style.top = ghost1.y+30 + "px";
var left = document.getElementById('ghost1').style.left = ghost1.x-30 + "px";
var right = document.getElementById('ghost1').style.left = ghost1.x+30 + "px";
var paths = [
    up, down, left, right
]






function display_world(){
    output=''
    for(i=0; i < world.length; i++){
        output += "\n<div class='row'>\n";
        for(j=0; j < world[i].length; j++){
            if (world[i][j] == 1)
                output += "<div class='brick'></div>";
            if (world[i][j] == 2)
                output += "<div class='space'><div class='decor'></div></div>";
            if (world[i][j] == 0)
            output += "<div class='coin'></div>";
            if (world[i][j] == 3)
            output += "<div class='blank'></div>"
            if (world[i][j] == 4)
            output += "<div class='teleporter'></div>"
            if (world[i][j] == 5)
            output += "<div class='teleporter2'></div>"
        }
        output += "\n</div>"
        document.getElementById('world').innerHTML = output
        //console.log(output)
    }
}

function display_pacman(){
    document.getElementById("pacman").style.left = pacman.y*30 + "px";
    document.getElementById("pacman").style.top = pacman.x*30 + "px";
}

function display_ghost1(){
    document.getElementById("ghost1").style.left = ghost1.x*30 + "px";
    document.getElementById("ghost1").style.top = ghost1.y*30 + "px";
}



function display_score(){
    document.getElementById("score").innerHTML = score;
}

function move_player(){
    document.getElementById("pacman").style.top = 240 + "px";
    document.getElementById("pacman").style.left = 540 + "px";
    document.getElementById("pacman").style.transform = "rotate(180deg)"
}


display_world();
display_pacman();
display_ghost1();
display_score();
chase_player();


function collision_detection(){
    for(i=0; i < world.length; i++){
        for(j=0; j < world[i].length; j++){
        if (world[i][j] ==1){
            var wall = world[i][j];
            
        }
        if (pacman.x < wall.x + wall.w &&
            pacman.x + pacman.w > wall.x &&
            pacman.y < wall.y + wall.h &&
            pacman.h + pacman.y > wall.y) {
            console.log("Collision Detected!")
                return false;
    } else {
        return true;
    }
}
}
}
function wonder(){
    ghost1.x ++
    if([ghost1.x + 1][ghost1.y] == 1){
        Math.floor(Math.random(paths.length));
        console.log("ghost detected wall")
    }
}
function chase_player(){
    while([ghost1.x][ghost1.y] != [pacman.x][pacman.y])
    ghost1.x ++;
    console.log("function ran")
}

function AILoop(){
    wonder();
    display_ghost1();
}
function playerLoop(){
    
}

setInterval(AILoop, 1000);

document.onkeydown = function(k){
    if(k.key == 'ArrowDown' && collision_detection() == true){
        pacman.x ++ ;
        document.getElementById("pacman").style.transform = "rotate(90deg)"
    }
    else if(k.key == 'ArrowUp' && collision_detection() == true){
        pacman.x --;
        document.getElementById("pacman").style.transform = "rotate(270deg)"
    }
    else if(k.key == 'ArrowRight' && collision_detection() == true){
        pacman.y ++;
        document.getElementById("pacman").style.transform = "rotate(0deg)"
    }
    else if(k.key == 'ArrowLeft' && collision_detection() == true){
        pacman.y --; 
        document.getElementById("pacman").style.transform = "rotate(180deg)"
    }
    if(world[pacman.x][pacman.y] == 0){
        world[pacman.x][pacman.y] = 3;
        score += 10;
        console.log("Coin should be picked up")
    }
    else if(world[pacman.x][pacman.y] == 2){
        world[pacman.x][pacman.y] = 3;
        score ++;
    }
    else if(world[pacman.x][pacman.y] == 4){
        move_player();
    }
    console.log(k.code)
display_world();
display_score();
display_pacman();
}




