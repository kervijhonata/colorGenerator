const hexInput = document.querySelector('#hex-input');
const addButton = document.querySelector('#add-button');
const randomButton = document.querySelector('#random-button');
const colorInput = document.querySelector('#color-input');

colorInput.addEventListener("change", watchColor);
hexInput.addEventListener("keyup", addColor);
addButton.addEventListener("click", addColor);
randomButton.addEventListener("click", randomizeColor);

function watchColor(){
    hexInput.value = colorInput.value;
}

function addColor(){
    document.body.style.backgroundColor = hexInput.value;
}

function randomizeColor(){
    let color = getRandomColor('RGB');
    document.body.style.backgroundColor = color;
    colorInput.value = color;
}

function getRandomColor(colorKind){
    if(colorKind == "RGB" || colorKind == "rgb"){
        let cr = Math.floor(Math.random()*255);
        let cg = Math.floor(Math.random()*255);
        let cb = Math.floor(Math.random()*255);
        let rgb = `rgb(${cr},${cg},${cb})`;
        return rgb;
    }
}
