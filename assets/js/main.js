document.addEventListener('DOMContentLoaded', function () {
    new Splide('.splide', {
        type: 'loop',
        rewind: true,
        pagination: false,
        autoplay: true,
    }).mount();
});