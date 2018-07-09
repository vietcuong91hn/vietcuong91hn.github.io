var content = document.getElementById("content");
var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p3 = document.getElementById("p3");

//Bai 1 :
function changeFontSize(x) {
    content.style.fontSize = x + 'px';

}

// //Bai 2 : 
// var n = function changeFontSize(x) {
//     content.style.fontSize = x + 'px';
// }
// var m = return n.replace(/\D\/)
// function increaseFontSize(n) {


//     }

// //Bai 3 :
// function decreaseFontSize(x) {
//     x.style.changeFontSize = "smaller";
// }

//Bai 4:

function changeColor() {
    p1.style.color = "green";
    p2.style.color = "yellow";
    p3.style.color = "red";
}

//Bai 5:
function changeBgColor(x) {
    content.style.backgroundColor = x;
}

//Bai 6 :
function copyContent(a, b) {
    a.innerHTML = b.innerHTML;
}