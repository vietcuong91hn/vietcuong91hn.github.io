var screen = document.getElementById("screen");

function clearDisplay() {
    screen.innerText = "";
}

function pressNum(str) {
    screen.innerText += str;
}

function equal(_this) {
    var result = screen.textContent;
    screen.innerText = eval(result);
}

function pressNegativeNum(_this) {
    var neg = screen.textContent;
    screen.innerText = eval(0-neg);
}
function pressPercent(_this) {
    var per = screen.textContent;
    screen.innerText = eval(per/100);
}
function clearNumber(_this) {
    var clear = screen.textContent;
    screen.innerText = clear.slice(0,clear.length - 1);
}
function pressAbsolute(_this) {
    var ab = screen.textContent;
    screen.innerText = Math.abs(ab);
}
function pressSquare(_this) {
    var sqr = screen.textContent;
    screen.innerText = sqr*sqr;
}
function pressSquareRoot(_this) {
    var sqroot = screen.textContent;
    screen.innerText = Math.sqrt(sqroot);
}