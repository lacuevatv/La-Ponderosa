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

function lazyLoadImgs() {

    html = '<picture>';
        html += '<source srcset="assets/images/galeria/galeria1.jpg 1x, assets/images/galeria1@2x.jpg 2x" media="(min-width: 768px)">';
        html += '<source srcset="assets/images/galeria/galeria1-mov.jpg 1x, assets/images/galeria1.jpg 2x" media="(min-width: 300px)">';
        html += '<img src="assets/images/galeria/galeria1.jpg" alt="Fotos La Ponderosa">';
    html += '</picture>';

}