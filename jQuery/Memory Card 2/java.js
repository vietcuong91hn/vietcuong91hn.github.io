

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
function flip(card__wrap){
  $(card__wrap).toggleClass('flip__front');
//   $(card__wrap).css('pointer-events', 'none');;
  

   if(!current) {  
       current = $(card__wrap);
       
   
   }
   else {
       if (current.attr('data-name') != $(card__wrap).attr('data-name')) {
           console.log ("khac nhau");
           console.log(current.attr('data-name'));
           console.log($(card__wrap).attr('data-name'));
           
        
           setTimeout(function(){
           
            $(card__wrap).toggleClass('flip__front');
           
           },500);
           current.toggleClass('flip__front');
        //    $(card__wrap).css('pointer-events', 'none');
        //    current.css('pointer-events', 'none');
           current = null;
           

       }
           
       else {
           setTimeout(function(){
            $(card__wrap).css('opacity','0');
            
           },500);
           current.css({'opacity':'0','transition':'0.5'});
           console.log ("Giong nhau");
           console.log(current.attr('data-name'));
           console.log($(card__wrap).attr('data-name'));
           current = null;
          
         
       }
   }
    
    
}  

$(function(){
    images =images.concat(images);
    images = shuffle(images);
    for ( i = 0; i < images.length; i++ ){
        $(".content").append(`<div class="card">
            <div class="card__wrap"  class="flip__front"  data-name="${images[i]}" onclick="flip(this)">
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

});

