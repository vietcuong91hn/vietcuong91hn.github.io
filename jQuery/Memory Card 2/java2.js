

var images = ["1karius", "4virgil", "13lallana", "14henderson", "7milner", "9firmino", "10mane", "11salah", "16chamberlain"];

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

function loadImages() {
    images = images.concat(images);
    images = shuffle(images);
    for (i = 0; i < images.length; i++) {
        $(".content").append(`<div class="card">
            <div class="card__wrap" data-name="${images[i]}">
                <div class="back">
                    <img src="../Memory Card 1/img/${images[i]}.jpg">
                </div>
                <div class="front">
                    <img src="../Memory Card 1/img/liver.jpg">
                </div>
            </div>
    
        </div>
    `)
    };
}


var current = null;
function flip() {
    $('.card__wrap').click(function () {



        $(this).addClass('flip');

        $(this).find('.front').addClass('flip');
        $(this).find('.back').addClass('flip');
        $(this).toggleClass('flip');
        // current.toggleClass('flip');

        console.log($(this));



        if (!current) {
            current = $(this);
            console.log(current);
          


        }
        else {
            if (current.attr('data-name') != $(this).attr('data-name')) {
                // current.find('.front').css('transform', 'rotateY(180deg)');
                let _this = this;
               
                console.log(current[0])

                setTimeout(function () {
                    $(_this).find('.front').toggleClass('flip');
                    $(_this).find('.back').toggleClass('flip');

                    current.find('.front').toggleClass('flip');
                    current.find('.back').toggleClass('flip');
                current = null;
               

                },900);
                console.log(current.attr('data-name'));
                console.log($(this).attr('data-name'));
               





            }

            else {
                let _this = this;
                console.log("Giong nhau");
                console.log(current.attr('data-name'));
                console.log($(this).attr('data-name'));
              

                setTimeout(function () {
                    $(_this).css('opacity', '0');
                    current.css('opacity', '0');
                    console.log(current[0])
                    current = null;
                }, 1000);
                

                


            }
        }


    })
}

$(function () {
    loadImages();
    flip();
})