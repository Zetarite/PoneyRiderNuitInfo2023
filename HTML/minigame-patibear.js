let murs =
    [[1,1,1,1,1,0,1,1,1,1,1],
        [1,0,1,0,0,0,0,1,0,0,1],
        [1,0,0,0,0,0,1,0,0,0,1],
        [1,0,0,1,0,1,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,1,0,1],
        [1,1,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,1,0,1,0,0,1,1],
        [1,0,1,0,0,0,0,0,1,0,1],
        [1,0,0,0,0,1,0,0,0,0,1],
        [1,0,1,0,0,0,1,0,0,0,1],
        [1,0,0,0,1,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,1,1],
        [1,1,1,1,1,0,1,1,1,1,1]];

let bear = document.createElement('img');
bear.src = "Ressourses/ours.png";
let bearPosition = [12,5];

function makeMapAppear(){
    let labyrinthe = document.createElement('img');
    labyrinthe.src = "Ressourses/Map.png";

    let parent = document.getElementById('jeu');
    parent.appendChild(labyrinthe);
}
function createBear(){
    let parent = document.getElementById('jeu');
    parent.appendChild(bear);

    bear.style.position = "absolute";
    bear.style.zIndex = 1;
    posBear(bearPosition);

}

function posBear(bearPosition){
    bear.style.top = (bearPosition[0]*64+12)+"px";
    bear.style.left = (bearPosition[1]*64+10)+"px";
}

function deplacer(event){
    if(event.key === "ArrowUp"){
        try {
            while (murs[bearPosition[0] - 1][bearPosition[1]] !== 1) {
                bearPosition[0] -= 1;
                posBear(bearPosition);
            }
        } catch (error){
            alert("Vous avez gagné !");
            let parent = document.getElementById("jeu");
            while (parent.firstChild) {
                parent.removeChild(myNode.firstChild);
            }
            startGame();
        }
    }
    if(event.key === "ArrowDown"){
        while(murs[bearPosition[0]+1][bearPosition[1]] !== 1){
            bearPosition[0] += 1;
            posBear(bearPosition);
        }
    }
    if(event.key === "ArrowLeft"){
        while(murs[bearPosition[0]][bearPosition[1]-1] !== 1){
            bearPosition[1] -= 1;
            posBear(bearPosition);
        }
    }
    if(event.key === "ArrowRight"){
        while(murs[bearPosition[0]][bearPosition[1]+1] !== 1){
            bearPosition[1] += 1;
            posBear(bearPosition);
        }
    }

}
function startGame(){
    makeMapAppear();
    createBear();
    addEventListener("keydown", (event) => {
        deplacer(event);
    });
}
