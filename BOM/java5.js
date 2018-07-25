var ans1 = document.getElementById("ansA").value;
var ans2 = document.getElementById("ansB").value;
var ans3 = document.getElementById("ansC").value;
var ans4 = document.getElementById("ansD").value;
var screen = document.getElementById("screen");

function ans(str) {
    screen.innerText = "Đáp án bạn chọn là : " + str;
}
function submit(){
    var correct = "Đáp án bạn chọn là : " + ans1;
    var result = screen.textContent;
    if ( result == correct) {
        screen.innerText = "Đáp án chính xác";
        window.location.href = "win.html";
    }
    else {
        screen.innerText = "Đáp án sai";
        window.location.href = "lose.html";
    }
    
}