var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");


var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
    messageDisplay.textContent = "";
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        if (colors[i]){
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
});
hardBtn.addEventListener("click", function(){
    messageDisplay.textContent = "";
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
 
            squares[i].style.background = colors[i];

            squares[i].style.display = "block";

    }
    h1.style.backgroundColor = "steelblue";
})

/*
var modeButtons = document.querySelectorAll(".mode");


for(var i=0; i< modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
    modeButtons[0].classList.remove("selected");
    modeButtons[1].classList.remove("selected");
    this.classList.add("selected");
    if(this.textContent =="Easy")  
    {numSquares = 3;}
    else{ numSquares = 6;}
    reset();
    });
}

function reset(){ 
    colors = generateRandomColors(numSquares);
    
    pickedColor = pickColor();
    
    colorDisplay.textContent = pickedColor;
    resetButton.textContent= "New Colors";
    messageDisplay.textContent = "";
    
    for (var i = 0; i < squares.length; i++) {
       if(colors[i]){ 
        squares[i].style.display = "block";
        squares[i].style.background = colors[i];

       } 
       else{
           squares[i].style.display = "none";
       } 
    }
    h1.style.background = "steelblue";
}

resetButton.addEventListener("click", function () {
    
    reset();
});
*/
resetButton.addEventListener("click",function(){
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent=pickedColor;
    this.textContent = "New Colors"
    messageDisplay.textContent = "";
    for (var i = 0; i< squares.length; i++){
        squares[i].style.background = colors[i];  //backgroundColor
        
    }
    h1.style.backgroundColor = "steelblue";
})
colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
   
    squares[i].style.background = colors[i];
   
   
    squares[i].addEventListener("click", function () {
   
        var clickedColor = this.style.backgroundColor;
   
  //      console.log(clickedColor, pickedColor);
   
        if (clickedColor == pickedColor) {
            messageDisplay.textContent = "Correct!";
            messageDisplay.style.color ="#26D701";
            resetButton.textContent = "Play Again!";
            changeColors(clickedColor);
            h1.style.background = clickedColor;
        }
        else {
            this.style.backgroundImage = "url('wrong.jpg')";
            this.style.backgroundSize = "cover";
            messageDisplay.textContent = "Try Again!";
            messageDisplay.style.color="#ff1616";
            
        }
    });
}
function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = color;
    }
}
function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
function generateRandomColors(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}
function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}