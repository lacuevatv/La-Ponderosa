document.addEventListener('DOMContentLoaded', function() {
    console.log('Doc Ready');
});

window.addEventListener('load', function() {
    console.log('all loaded');
});

function initSlider() {
    var slider = tns({
        container: '.my-slider',
        items: 3,
        slideBy: 'page',
        autoplay: true
    });
}