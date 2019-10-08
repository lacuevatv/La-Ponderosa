document.addEventListener('DOMContentLoaded', function() {
    console.log('Doc Ready');
    //reduce los textos
    hideElements();
});

window.addEventListener('load', function() {

    //activa los sliders
    initSlider();

});

//setea los elementos que hay que cliquear para ver más
function hideElements() {

    /*
    * 1. parrafo inicio
    */
    
    var residenciaIntroParagraps = document.querySelector('#residencia').querySelectorAll('p');
    var btnInicio = document.querySelector('#more-intro');

    for (var index = 1; index < residenciaIntroParagraps.length; index++) {
        residenciaIntroParagraps[index].style.height = 0;
    }
    //cambia título, texto, gira el icono
    btnInicio.setAttribute('title', 'Más');
    btnInicio.querySelector('.more-title-btn').innerText = 'Más';
    btnInicio.querySelector('img').style.transform = 'translateY(-50%) rotate(0)';

    btnInicio.addEventListener('click', function(){
        openIntro();
    });

    /*
    * 2. detalles
    */
    var textDetalles = document.querySelectorAll('.text-detalles');
    var btnDetalles = document.querySelectorAll('.detalles-more-btn');
    
    for (var i = 0; i < textDetalles.length; i++) {
        textDetalles[i].style.height = '50px'; 
    }

    for (var j = 0; j < btnDetalles.length; j++) {
        btnDetalles[j].setAttribute('title', 'Leer Más');
        btnDetalles[j].innerText = 'Leer más';
        
        btnDetalles[j].addEventListener('click', function(){
            openDetails(this);
        });
    }

    /*
    * 3. servicios
    */
    var textServicios = document.querySelectorAll('.lista-servicio');
    var btnServicios = document.querySelectorAll('.service-btn');

    for (var s = 0; s < textDetalles.length; s++) {
        textServicios[s].style.height = '0'; 
    }
    for (var b = 0; b < textDetalles.length; b++) {
        btnServicios[b].setAttribute('aria-label', 'Ver Más');
        btnServicios[b].style.transform = 'translateX(-50%) rotate(180deg)';

        btnServicios[b].addEventListener('click', function(){
            openServicio(this);
        });
    }
    
}

function openServicio(el) {
    console.log(el)
}

function openDetails(el) {
    console.log(el)
}

function openIntro() {
    console.log('inicio')
}

//inicia el slider
function initSlider() {
    var slider = tns({
        container: '.slider-content',
        items: 1,
        slideBy: 1,
        controls: false,
        autoplay: true,
        //autoWidth: true,
        nav: true,
        autoplayButtonOutput: false,
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