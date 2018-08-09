
function year(){
    for (i = 1900; i <= 2018; i++) {
        $("#year").append(` <option value="Năm ${[i]}"> ${[i]} </option> 
    `)
    };
};
function date(){
    var month = $("#month");
    if ( month != 2) {
        for (i = 1; i <= 31; i++) {
            $("#date").append(` <option value="Ngày ${[i]}"> ${[i]} </option> 
        `)
        } }
  
    else {
        for (i = 1; i <= 28; i++) {
            $("#date").append(` <option value="ngay ${[i]}"> ${[i]} </option> 
        `)
        };
    }
    }
  
function month(){
    for (i = 1; i <= 12; i++) {
        $("#month").append(` <option value="Tháng ${[i]}"> ${[i]} </option> 
    `)
    };
};



$(function(){
    year();
    month();
    date();
})