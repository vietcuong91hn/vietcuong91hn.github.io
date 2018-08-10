var url = $(location).attr('href');
var decodedUrl = decodeURIComponent(url);
console.log(decodedUrl);
// var itemtoRemove = "file:";
//     decodedUrl.splice($.inArray(itemtoRemove, decodedUrl),1);
//     console.log(decodedUrl);
var n = decodedUrl.indexOf("?");
var name = decodedUrl.indexOf("name=");
console.log(name)
var email = decodedUrl.indexOf("&email=");
console.log(email)

var address = decodedUrl.indexOf("&address=");
var tel = decodedUrl.indexOf("&tel=");
var password = decodedUrl.indexOf("&password=");
var date = decodedUrl.indexOf("&date=");
var month = decodedUrl.indexOf("&month=");
var year = decodedUrl.indexOf("&year=");
var gender = decodedUrl.indexOf("&gender=");
// $('#result').html(decodedUrl.slice(n+1) );
$('#name').html(decodedUrl.replace("+"," ").slice(name,email).replace("+"," ").split("name="));
$('#email').html(decodedUrl.replace("+"," ").slice(email+1,address).replace("+"," ").split("email="));
$('#address').html(decodedUrl.replace("+"," ").slice(address+1,tel).replace("+"," ").split("address="));
$('#tel').html(decodedUrl.replace("+"," ").slice(tel+1,password).replace("+"," ").split("tel="));
$('#password').html(decodedUrl.replace("+"," ").slice(password+1,date).replace("+"," ").split("password="));
$('#date').html(decodedUrl.replace("+"," ").slice(date+1,month).replace("+"," ").split("date="));
$('#month').html(decodedUrl.replace("+"," ").slice(month+1,year).replace("+"," ").split("month="));
$('#year').html(decodedUrl.replace("+"," ").slice(year+1,gender).replace("+"," ").split("year="));
$('#gender').html(decodedUrl.replace("+"," ").slice(gender+1,decodedUrl.length).replace("+"," ").split("gender="));