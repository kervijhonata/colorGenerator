/** @type {HTMLCanvasElement} */
const hexInput = document.querySelector('#hex-input');
const addButton = document.querySelector('#add-button');
const randomButton = document.querySelector('#random-button');
const clearButton = document.querySelector('#clear-button');
const saveButton = document.querySelector('#save-button');
const colorInput = document.querySelector('#color-input');
const renderImage = document.querySelector("#render-pallete");
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
var canvasWidth = canvas.clientWidth;
var canvasHeight = canvas.clientHeight;
var currentColor = "#000000";
const csSize = 60; 
const csw = csSize; //Color Sample Size Width: 40px;
const csh = csSize; //Color Sample Size Height: 40px;

colorInput.addEventListener("change", watchColor);
hexInput.addEventListener("keyup", watchColor);
addButton.addEventListener("click", addColor);
randomButton.addEventListener("click", randomizeColor);
clearButton.addEventListener("click", clearCanvas);
saveButton.addEventListener("click", savePalette);

hexInput.value = colorInput.value;
function watchColor(){
    colorInput.value = hexInput.value;
    currentColor = hexInput.value;
}

function addColor(){
    addNewSample(currentColor);
}

function randomizeColor(){
    currentColor = getRandomColor('HEX');
    hexInput.value = currentColor;
    colorInput.value = currentColor;
}

function getRandomColor(colorKind){
    let cr, cg, cb;
    if(colorKind == "RGB" || colorKind == "rgb"){
        cr = Math.floor(Math.random()*255);
        cg = Math.floor(Math.random()*255);
        cb = Math.floor(Math.random()*255);
        let rgb = `rgb(${cr},${cg},${cb})`;
        return rgb;
    }
    if(colorKind == "eHEX" || colorKind == "ehex"){
        cr = Math.floor(Math.random()*255);
        cg = Math.floor(Math.random()*255);
        cb = Math.floor(Math.random()*255);
        let hr = cr.toString(16);
        let hg = cg.toString(16);
        let hb = cb.toString(16);
        hr = parseInt(hr, 16);
        hg = parseInt(hg, 16);
        hb = parseInt(hb, 16);
        let hex = `#${hr}${hg}${hb}`;
        return ehex.toString(16);
    }
    if(colorKind == "HEX" || colorKind == "hex"){
        let maxDecLim = 16777215; // HEX: FFFFFF-white = DEC: 16777215; HEX: 000000-black = DEC: 0;
        let hexNum = Math.floor(Math.random()*maxDecLim);
        hexNum = hexNum.toString(16);
        let hex = `#${hexNum}`;
        console.log(hex.toUpperCase())
        return hex;
    }
}
function setBackgroundColor(bgColor){
    bgColor ? document.body.style.backgroundColor = bgColor : console.log("invalid color reference");
}

var csq = 0; // color Samples Quantity;
function addNewSample(color){
    ctx.fillStyle = color;
    ctx.fillRect(0,(csq*csSize),csw,csh);
    csq++;
    ctx.fillStyle = "#000000";
    ctx.font = "12px Monospace";
    ctx.fillText(colorInput.value.toUpperCase(), (csw+10), ((csh*csq)-27));
    const a = "stay cool, its just a kiss, the way i gotta miss so talktive";
}
function clearCanvas(){
    csq = 0;
    ctx.clearRect(0,0,canvasWidth,canvasHeight);
}

function savePalette(){
    let canvasMedia = canvas.toDataURL("image/png");
    //let dataUrl = 'data:image/svg+xml,'+encodeURIComponent(canvasMedia);
    renderImage.setAttribute("src", canvasMedia);
}