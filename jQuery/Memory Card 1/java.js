var front = $('.front');

$(".card").click(function(){
    $(this).find('.front').css("transform",'rotateY(180deg)');
})
let html =` <div class="card" data-id="1" id="card1">
<div class="card__wrap">
    <div class="back">
        <img src="img/1karius.jpg">
    </div>
    <div class="front">
        <img src="img/liver.jpg">
    </div>
</div>

</div>`

var images = ["img/1karius.jpg","img/4virgil.jpg","img/13lallana.jpg","img/14henderson.jpg","img/7milner.jpg","img/9firmino.jpg","img/10mane.jpg","img/11salah.jpg","img/16chamberlain.jpg"];
var div = "<div> "
for ( let i = 0; i < images.length; i++) {
    html += "images[i]";
}
function shuffle(images) {
    
    var currentIndex = images.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = images[currentIndex];
        images[currentIndex] = images[randomIndex];
        images[randomIndex] = temporaryValue;
  }

  return images;
}



// while (images.length !== 0) {
//     var index = Math.floor(Math.random() * images.length);
//     $('<img src="' + images.splice(index, 1) + '">').appendTo('#images');
// }
// function shuffle(card) {
// for (var i = card.length - 1; i > 0; i--) {
//     var j = Math.floor(Math.random() * (i + 1));
//     var temp = card[i];
//     card[i] = card[j];
//     card[j] = temp;
// }
// }