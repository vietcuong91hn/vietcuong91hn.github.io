var content = document.getElementById("content");
var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p3 = document.getElementById("p3");

//Bai 1 :
// let a = document.querySelector('#content').style.fontSize ;
document.write("Bài 1: changeFontSize(x) với x là giá trị px của font chữ</br>");

function changeFontSize(x) {
 
    if (typeof x == "number" && x > 0) {
        // content.style.fontSize = x + 'px';
        content.style.fontSize = x + 'px';
    }
    else { console.log("Ban phai nhap x la 1 so nguyen"); }
   
}

// Bai 2 + Bai 3:
document.write("Bài 2: Sau khi changeFontSize gọi hàm increaseFontSize() để tăng font chữ lên 1 px</br>");
document.write("Bài 3: Sau khi changeFontSize gọi hàm increaseFontSize() để giảm font chữ lên 1 px</br>");

function increaseFontSize() {
    let b = content.style.fontSize;
    let a = parseFloat(b);
    console.log(b);
    for ( i = a; i > 0; i--) {
        content.style.fontSize = a + i;
    }
}
function decreaseFontSize() {
    let b = content.style.fontSize;
    let a = parseFloat(b);
    console.log(b);
    for ( i = a; i > 0; i--) {
        content.style.fontSize = a-i;
    }
}




//Bai 4:
document.write("Bài 4: Gọi hàm changeColor() để thay màu chữ cả 3 đoạn văn</br>");
function changeColor() {
    p1.style.color = "green";
    p2.style.color = "yellow";
    p3.style.color = "red";
}

//Bai 5:
document.write("Bài 5: Gọi hàm changeBgColor() để thay màu nền của 3 đoạn văn</br>");
function changeBgColor(x) {
    content.style.backgroundColor = x;
}

//Bai 6 :
document.write("Bài 6: Gọi hàm copyContent(a,b) để thay đổi nội dung 2 đoạn giống nhau, id 3 đoạn văn là p1, p2, p3</br>");
function copyContent(a, b) {
    a.innerHTML = b.innerHTML;
}