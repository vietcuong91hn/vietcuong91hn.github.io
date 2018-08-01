

var images = ["img/1karius.jpg","img/4virgil.jpg","img/13lallana.jpg","img/14henderson.jpg","img/7milner.jpg","img/9firmino.jpg","img/10mane.jpg","img/11salah.jpg","img/16chamberlain.jpg",
"img/1karius.jpg","img/4virgil.jpg","img/13lallana.jpg","img/14henderson.jpg","img/7milner.jpg","img/9firmino.jpg","img/10mane.jpg","img/11salah.jpg","img/16chamberlain.jpg"];

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
  }

  return array;
}

shuffle(images);

    for ( i = 0; i < images.length; i++ ){
        $(".content").append(`<div class="card">
            <div class="card__wrap">
                <div class="back">
                    <img src="${images[i]}">
                </div>
                <div class="front">
                    <img src="img/liver.jpg">
                </div>
            </div>
    
        </div>
  `)
    }
    
$(".card").click(function(){
    $(this).find('.front').css("transform",'rotateY(180deg)');
});


