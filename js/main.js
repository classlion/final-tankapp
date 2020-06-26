const toggle = document.getElementsByClassName("navbar-toggle");

toggle[0].addEventListener("click", function(event) {
    event.preventDefault();
    this.classList.toggle("is-active");
});

const closeNavbarMobile = document.getElementsByClassName("close");

closeNavbarMobile[0].addEventListener("click", function(event) {
    event.preventDefault();
    toggle[0].classList.remove("is-active");
});


const swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 480px
        640: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        // when window width is >= 640px
        800: {
            slidesPerView: 3,
            spaceBetween: 40
        },

        900: {
            slidesPerView: 4,
            spaceBetween: 40
        }
    }
});

var swiperSecondary = new Swiper('.swiper-container-secondary', {

    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination-secondary',
        clickable: true,
        renderBullet: function(index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    },
});