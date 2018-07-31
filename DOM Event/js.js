var content = document.getElementById("buttoncal");
var btn1 = document.getElementById("n1").value;
var btn0 = document.getElementById("n0").value;
var btn2 = document.getElementById("n2").value;
var btn3 = document.getElementById("n3").value;
var btn4 = document.getElementById("n4").value;
var btn5 = document.getElementById("n5").value;
var btn6 = document.getElementById("n6").value;
var btn7 = document.getElementById("n7").value;
var btn8 = document.getElementById("n8").value;
var btn9 = document.getElementById("n9").value;
var btnPlus = document.getElementById("btPlus");
var btnSub = document.getElementById("btSub");
var btnMul = document.getElementById("btMul");
var btnDiv = document.getElementById("btDiv");
var btnEqual = document.getElementById("btEqual");
var screen = document.getElementById("screen");
var num = document.getElementById("number");


function btSub (_this){
    let valueSubContent = screen.textContent;
    valueSubContent = valueSubContent - _this.value;
    console.log(valueSubContent);
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
    valueContent = valueContent + _this.value ;
    screen.innerText ="";

    console.log(valuePlusContent);
}
function btEqual () {
   
}

function n1() {
    screen.innerText = screen.innerText + btn1;
    console.log(btn1);
}
function n2() {
    screen.innerText = screen.innerText + btn2;
    console.log(btn2);
}
function n3() {
    screen.innerText = screen.innerText + btn3;
    console.log(btn3);
}
function n4() {
    screen.innerText = screen.innerText + btn4;
    console.log(btn4);
}
function n5() {
    screen.innerText = screen.innerText + btn5;
    console.log(btn5);
}
function n6() {
    screen.innerText = screen.innerText + btn6;
    console.log(btn6);
}
function n7() {
    screen.innerText = screen.innerText + btn7;
    console.log(btn7);
}
function n8() {
    screen.innerText = screen.innerText + btn8;
    console.log(btn8);
}
function n9() {
    screen.innerText = screen.innerText + btn9;
    console.log(btn9);
}
function n0() {
    if ( screen.innerText.length < 1) {
        screen.innerText = 0;
    }
    else if ( screen.innerText.length > 1){
        screen.innerText = btn ;
    }  
    console.log(btn0);
}
function dot(str) {
    if (Number(screen.innerText) = 0) {
        screen.innerText = btn ;
    }
    
}
function ac(str) {
    screen.innerText = "";
}
