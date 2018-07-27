var screen = $('#screen');
function clearDisplay() {
    $('#screen').html('');
}

function pressNum(str) {
    
    $('#screen').append(str);
}

function equal(_this) {
    var result = $('#screen').text();
    $('#screen').html(eval(result));
}

function pressNegativeNum(_this) {
    var neg = $('#screen').text();
    $('#screen').html(eval(0-neg));
}
function pressPercent(_this) {
    var per = $('#screen').text();
    $('#screen').html(eval(per/100));
}
function clearNumber(_this) {
    var clear = $('#screen').text();
    $('#screen').html(clear.slice(0,clear.length - 1));
}
// function pressAbsolute(_this) {
//     var ab = $('#screen').text();
//     $('#screen').html() = Math.abs(ab);
// }
function pressSquare(_this) {
    var sqr = $('#screen').text();
    $('#screen').html(sqr*sqr);
}
function pressSquareRoot(_this) {
    var sqroot = $('#screen').text();
    $('#screen').html(Math.sqrt(sqroot).toFixed(5));
}
var count = 0;
const colors = ['red','black', 'white','red'];
const bgColors = ['black', 'white', 'black','white'];
const length = colors.length;

function changeThemes(){
    $('.buttoncal input').css({"background-color": bgColors[count],"color": colors[count]});
    $('#screen').css({"background-color": bgColors[count],"color": colors[count]});
    count++;
    if (count== length){
        count = 0;
    }
    // switch(count){
    //     case 0:
    //     $('.buttoncal input').css({"background-color": "black","color": "white"});
    //     break;
    //     case 1:
    //     $('.buttoncal input').css({"background-color": "white","color": "black"});
    //     break;
    //     case 2:
    //     $('.buttoncal input').css({"background-color": "black","color": "red"});
    //     break;
    //     case 3:
    //     $('.buttoncal input').css({"background-color": "white","color": "red"});
    //     break;
    // }
    // count++;

}   