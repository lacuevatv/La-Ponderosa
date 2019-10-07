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

    var imagenesToLoad = document.querySelectorAll('.lazy-load-image');

    //si no hay ninguna retorna
    if ( imagenesToLoad.length <= 0 ) {
        return true;
    }

    var baseUrl = 'assets/images/galeria/';

    for (var index = 0; index < imagenesToLoad.length; index++) {
        var imagen = imagenesToLoad[index];
        
        var dataImgMovil   = imagen.getAttribute('data-img-mov');
            dataImgMovil2x = imagen.getAttribute('data-img-mov2x');
            dataImg        = imagen.getAttribute('data-img');
            dataImg2x      = imagen.getAttribute('data-img2x');

        if ( dataImgMovil == '' && dataImgMovil2x == '' && dataImg == '' && dataImg2x == '' ) {
            break;
        } else {

            html = '<picture>';

            //si hay imagen movil construye el picture por 2 sino solo coloca uno
            if ( dataImgMovil != '' ) {

                html += '<source srcset="'+ baseUrl + dataImg +' 1x';
                if ( dataImg2x != '' ) {
                    html += ', '+ baseUrl + dataImg +' 2x';
                }
                html += '" media="(min-width: 768px)">';
            
                html += '<source srcset="'+ baseUrl + dataImgMovil +' 1x';
                if ( dataImgMovil2x != '' ) {
                    html += ', '+ baseUrl + dataImgMovil2x +' 2x';
                }
                html += '" media="(min-width: 300px)">';
            } else {
                //al no haber imagen para movil carga una sola source
                html += '<source srcset="'+ baseUrl + dataImg +' 1x';
                if ( dataImg2x != '' ) {
                    html += ', '+ baseUrl + dataImg +' 2x';
                }
                html += '" media="(min-width: 300px)">';
            }
           
            //imagen por defecto
            html += '<img src="'+ baseUrl + dataImg +'" alt="Fotos La Ponderosa">';

            html += '</picture>';

            imagen.innerHTML = html;
        }//else
    }//for
}