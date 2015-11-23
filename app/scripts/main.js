/*eslint-env jquery */
/*global ch*/

(function($){
  'use strict';
  $(document).ready(function(){

    var carrucel = new ch.Carousel($('#Carrusel')[0], {'limitPerPage': 4, 'pagination': true});
    var CarruselMain = new ch.Carousel($('#CarruselMain')[0], {'limitPerPage': 1, 'pagination': true});

    console.log(carrucel, CarruselMain);
  });


})(jQuery);
