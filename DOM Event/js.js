var content = document.getElementById("buttoncal");
var btn1 = document.getElementById("n1");
var btn0 = document.getElementById("n0");
var btn2 = document.getElementById("n2");
var btn3 = document.getElementById("n3");
var btn4 = document.getElementById("n4");
var btn5 = document.getElementById("n5");
var btn6 = document.getElementById("n6");
var btn7 = document.getElementById("n7");
var btn8 = document.getElementById("n8");
var btn9 = document.getElementById("n9");
var btnPlus = document.getElementById("btPlus");
var btnSub = document.getElementById("btSub");
var btnMul = document.getElementById("btMul");
var btnDiv = document.getElementById("btDiv");
var btnEqual = document.getElementById("btEqual");
var screen = document.getElementById("screen");
var num = document.getElementById("number");


function btSub (_this){
    let valueContent = screen.textContent;
    valueContent -= _this.value;
    console.log('valueContent :', valueContent);
}
function btMul (_this){
    let valueContent = screen.textContent;
    valueContent *= _this.value;
    console.log('valueContent :', valueContent);
}
function btDiv (_this){
    let valueContent = screen.textContent;
    valueContent /= _this.value;
    console.log('valueContent :', valueContent);
}
function btPlus (_this){
    let valueContent = screen.textContent;
    valueContent += _this.value;
    console.log('valueContent :', valueContent);
}
function btEqual () {
    
}
function n1(str) {
    screen.innerText += str;
}
function n2(str) {
    screen.innerText += str;
}
function n3(str) {
    screen.innerText += str;
}
function n4(str) {
    screen.innerText += str;
}
function n5(str) {
    screen.innerText += str;
}
function n6(str) {
    screen.innerText += str;
}
function n7(str) {
    screen.innerText += str;
}
function n8(str) {
    screen.innerText += str;
}
function n9(str) {
    screen.innerText += str;
}
function n0(str) {
    screen.innerText += str;
}
function dot(str) {
    screen.innerText += str;
}
function ac(str) {
    screen.innerText = "";
}
function btEqual() {
    eval(num)
}