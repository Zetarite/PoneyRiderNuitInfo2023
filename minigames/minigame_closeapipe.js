var pipes = document.getElementById("pipes");
var pipeRect = pipes.getBoundingClientRect();
var score = 0;
var interval = 1000;

var leakPositions = [[784,161, 0], [721, 255, 1], [774, 314, 2], [735,373, 3], [845,416, 4], [744,460, 5], [764,559, 6],
    [892,175, 7], [892,311, 8], [892,498, 9],
    [1054, 143, 10], [1054,230, 11], [1095,312, 12], [1055,420, 13], [978,543, 14], [1064,483, 15]];


var spawnedLeaks = [];

async function spawnLeak(){
    if(leakPositions.length===spawnedLeaks.length)
        return;

    let leak = document.createElement("div");
    leak.classList.add("block");
    let index=-1;
    do {
        index = Math.floor(Math.random() * leakPositions.length);
    }while(spawnedLeaks.includes(leakPositions[index][2]));

    let position = leakPositions[index];

    spawnedLeaks.push(position[2]);

    leak.style.left=position[0]-pipeRect.left +"px";
    leak.style.top=position[1]-pipeRect.top +"px";

    leak.addEventListener("click", leakClickHandler);
    leak.setAttribute("leakIdentifier", position[2]);

    pipes.appendChild(leak);

    checkLeaks();

    setTimeout(spawnLeak, interval);
}

function leakClickHandler(){
    let identifier =this.getAttribute("leakIdentifier");
    let index=spawnedLeaks.indexOf(parseInt(identifier));
    spawnedLeaks.splice(index, index);

    pipes.removeChild(this);
    score+=1;
    if(interval>500)
        interval-=(score+1);
    checkLeaks();
}

function checkLeaks(){
    if(spawnedLeaks.length===leakPositions.length){
        alert("Partie terminée\n" +
            "Eviter la cause d'un problème ne résoudra rien et risque même d'exploser\n" +
            " SCORE : "+ (score*10));
        reset();
    }
}

function reset(){
    spawnedLeaks = [];
    while(pipes.firstChild != null){
        pipes.removeChild(pipes.firstChild);
    }
    score=0;
    interval=1000;
}

spawnLeak();