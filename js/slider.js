//Almacenamos el contenedor del slider
var slide = $('.slider__content');
//Almacenamos los botones
var prev = $('.slide__btnPrev');
var next = $('.slide__btnNext');

// Iniciamos el contenedor de la ultima imagen al principio
$('.slider__content .slider__img:last').insertBefore('.slider__content .slider__img:first');

//Ahora iniciamos el slide con la primera imagen
slide.css({
    'margin-left': '-100%'
});

//Funcion para iniciar el slide
function autoPlay() {
    interval = setInterval(function() {
        moveRight();
    }, 10000);
}
autoPlay();

//Funciones para que los botones hagan lo que deben hacer
next.on('click', function() {
    moveRight();
});
prev.on('click', function() {
    moveLeft();
});

function moveRight() {
    slide.animate({
        'margin-left': '-200%'
    }, 700, function() {
        $('.slider__content .slider__img:first').insertAfter('.slider__content .slider__img:last');
        slide.css({
            'margin-left': '-100%'
        });
    });
}

function moveLeft() {
    slide.animate({
        'margin-left': '0px'
    }, 700, function() {
        $('.slider__content .slider__img:last').insertBefore('.slider__content .slider__img:first');
        slide.css({
            'margin-left': '-100%'
        });
    });
}