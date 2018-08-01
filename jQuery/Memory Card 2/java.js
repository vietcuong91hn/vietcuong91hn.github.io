

var images = ["img/1karius.jpg","img/4virgil.jpg","img/13lallana.jpg","img/14henderson.jpg","img/7milner.jpg","img/9firmino.jpg","img/10mane.jpg","img/11salah.jpg","img/16chamberlain.jpg"];
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
var current = null;
function flip(){
    
    $(".card").click(function(){
        $(this).find('.front').css("transform",'rotateY(180deg)');
        $(this).css('pointer-events', 'none');
       
        if (!current) {
            current = $(this);
            // current.find('.front').css("transfrom",'rotateY(180deg)');
        }
        else {
            if(current.attr('data-name') != $(this).attr('data-name'))
            {
                $('.card').css('pointer-events', 'auto');
                console.log('Khac nhau');
            }
            else {
                console.log('Giong nhau');
               
                current.css("opacity",'0');
                $(this).css("opacity",'0')
                // setTimeout(function(){
                    
                //    ;
                // },500);
               
                
            }
        };
    }
    
    
);
    
}

    

$(function(){
    images =images.concat(images);
    images = shuffle(images);
    for ( i = 0; i < images.length; i++ ){
        $(".content").append(`<div class="card">
            <div class="card__wrap" data-name="${images[i]}">
                <div class="back">
                    <img src="../Memory Card 1/${images[i]}">
                </div>
                <div class="front">
                    <img src="../Memory Card 1/img/liver.jpg">
                </div>
            </div>
    
        </div>
    `)
    };
    flip();
});

