/*eslint-env jquery */
/*global ch*/

(function($){
  'use strict';
  $(document).ready(function(){

    var carrucel = new ch.Carousel($('#Carrusel')[0], {'limitPerPage': 4, 'pagination': true});
    var CarruselMain = new ch.Carousel($('#CarruselMain')[0], {'limitPerPage': 1, 'pagination': true});

    console.log(carrucel, CarruselMain);
  });

  $('.ch-form-actions input').on('click', function(e){
    e.preventDefault();
    var pressed = e.target.getAttribute('aria-pressed') === 'true';
    event.target.setAttribute('aria-pressed', pressed ? 'false' : 'true');

  });

  //tabs aria
  var $tabs = $('.tabs-container label');
    $tabs.on('click', function(){
      $tabs.attr('aria-selected', false);
      $(this).attr('aria-selected', true);

  });

  //work arround carrucel
  $(window).trigger('resize');

})(jQuery);
