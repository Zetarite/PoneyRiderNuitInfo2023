const menuHamburger = document.querySelector(".menu")
const navLinks = document.querySelector(".nav-links")

const grum = document.querySelector(".turn")
const page = document.querySelector(".turning-page")

menuHamburger.addEventListener('click',()=>{
navLinks.classList.toggle('mobile-menu')})

grum.addEventListener('click',()=>{
page.classList.toggle('turning')})

/*const dinnerbone = document.querySelector(".dinnerbone")
dinnerbone.addEventListener('change',()=>
function anaText(){
    let paragraph = "";
    for(input of document.getElementsByClassName("dinnerbone")){
        paragraph += input.value;
        console.log(input.value)
    }
    console.log(paragraph)
    const capturingRegex = /GRUMM|_JEB/g;
    const found = paragraph.match(capturingRegex);

    if(found && found.includes("GRUMM")){
        page.classList.toggle('turning');
    }
}
)*/



function random_bg_color() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + r + "," + g + "," + b + ")";
    document.body.style.background = bgColor;
    }


let input = document.querySelector("input[type=text]");

input.onblur = inputBlur;


function inputBlur() {
  if(input.value == "GRUMM" || input.value == "DINNERBONE"){
    console.log("yes");
    page.classList.toggle('turning')
  }
  while(input.value == "_JEB"){
    
    new Promise(resolve => setTimeout(resolve, 1000)).then(random_bg_color());
  }
}
