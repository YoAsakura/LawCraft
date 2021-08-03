const personArr = document.querySelectorAll('.adventuresWith__person');

personArr.forEach(function(elem) {
     elem.addEventListener('click', function() {
        personArr.forEach(function(elem){
            if(elem.classList.contains('adventuresWith__person--active')) {
                elem.classList.remove('adventuresWith__person--active');
            }
        })
         if (!elem.classList.contains('adventuresWith__person--active')) {
            elem.classList.add('adventuresWith__person--active');   
         }
     });

    });

const firstSectionSlider = document.querySelector('.visit'); 
const sliderArr = firstSectionSlider.querySelectorAll('.visit__content-image-slider-item');
const slideBox = document.querySelector('.visit__content-image-slider');

var slideIndex = 0;

for (let i = 0; i < sliderArr.length; i++) {
   
}

sliderArr.forEach(function(el){
    el.addEventListener('click', function() {
        if (el.classList.contains('visit__content-image-slider-item--left')) {
            el.classList.remove('visit__content-image-slider-item--left')
            el.classList.add('visit__content-image-slider-item--right')
        } else if (el.classList.contains('visit__content-image-slider-item--active')) {
            el.classList.remove('visit__content-image-slider-item--active')
            el.classList.add('visit__content-image-slider-item--left')
        } else if (el.classList.contains('visit__content-image-slider-item--right')) {
            el.classList.remove('visit__content-image-slider-item--right')
            el.classList.add('visit__content-image-slider-item--active')
        }
    });
});

   