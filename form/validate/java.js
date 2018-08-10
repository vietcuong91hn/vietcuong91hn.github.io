
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

$("#form").on('submit', function(){
    if ($('#name').val().trim() == '') {
        $('#er1').text('Bạn phải nhập vào mục này');
        return false;
       
    }
    return true;
})
$("#form").on('submit', function(){
    if ($('#email').val().trim() == '') {
        $('#er2').text('Bạn phải nhập vào mục này');
        return false;
       
    }
    else if ($('#email').val().match(/@/) == null) {
        $('#er2').text('Email không hợp lệ');
        return false;
       
    }
    else {
        return true;
    }
    
})
$("#form").on('submit', function(){
    if ($('#address').val().trim() == '') {
        $('#er3').text('Bạn phải nhập vào mục này');
        return false;
       
    }
    return true;
})
$("#form").on('submit', function(){
    if ($('#tel').val().trim() == '') {
        $('#er4').text('Bạn phải nhập vào mục này');
        return false;
       
    }
    return true;
})
$("#form").on('submit', function(){
    if ($('#password').val().trim() == '') {
        $('#er5').text('Bạn phải nhập vào mục này');
        return false;
       
    }
    else if ($('#password').val().length <= 8) {
        $('#er5').text('Mật khẩu phải lớn hơn hoặc bằng 8 ký tự');
        return false;
       
    }
    else {
        return true;
    }
   
})
$("#form").on('submit', function(){
    if ($('#date').val().trim() == '') {
        $('#er6').text('Bạn phải nhập vào mục này');
        return false;
       
    }
    return true;
})
$("#form").on('submit', function(){
    if ($('#month').val().trim() == '') {
        $('#er6').text('Bạn phải nhập vào mục này');
        return false;
       
    }
    return true;
})
$("#form").on('submit', function(){
    if ($('#year').val().trim() == '') {
        $('#er6').text('Bạn phải nhập vào mục này');
        return false;
       
    }
    return true;
})
$("#form").on('submit', function(){
    if ($('#gender').val().trim() == '') {
        $('#er7').text('Bạn phải nhập vào mục này');
        return false;
       
    }
    return true;
})



$(function(){
    year();
    month();
    date();
})