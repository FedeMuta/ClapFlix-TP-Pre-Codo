document.addEventListener("DOMContentLoaded", function() {
    var index = 0;
    var imgs = document.querySelector('.carrusel .imagenes');
    var totalImages = document.querySelectorAll('.carrusel img').length;

    document.querySelector('.prev').addEventListener('click', function() {
        index--;
        if (index < 0) {
            index = totalImages - 1;
        }
        updateCarousel();
    });

    document.querySelector('.next').addEventListener('click', function() {
        index++;
        if (index >= totalImages) {
            index = 0;
        }
        updateCarousel();
    });

    function updateCarousel() {
        imgs.style.transform = 'translateX(' + (-index * 100) + '%)';
    }
});