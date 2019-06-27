$(document).ready(function() {
  //Scroll handler for experiences bar
  $('body').scrollspy({ target: '#page-nav-wrapper', offset: 100});

  $('.scrollto').on('click', function(e){
    //store hash
    var target = this.hash;
    e.preventDefault();

    $('body').scrollTo(target, 800, {offset: -60, 'axis':'y'});
  });
  
  $(window).on('scroll resize load', function() {
    $('#page-nav-wrapper').removeClass('fixed');

    var scrollTop = $(this).scrollTop();
    var topDistance = $('#page-nav-wrapper').offset().top;

    if ( (topDistance) > scrollTop ) {
      $('#page-nav-wrapper').removeClass('fixed');
      $('body').removeClass('sticky-page-nav');
    }
    else {
      $('#page-nav-wrapper').addClass('fixed');
      $('body').addClass('sticky-page-nav');
    }
  });
  
  //Vivid chart    
  $('.chart').easyPieChart({		
    barColor: '#0077b5',
    trackColor: '#D0D3D4',
    scaleColor: false,
    lineWidth : 5,
    animate: 2000,
    onStep: function(from, to, percent) {
      $(this.el).find('span').text(Math.round(percent));
    }
  });

  //portfolio filter  
  var $container = $('.isotope');

  $container.imagesLoaded(function () {
    $('.isotope').isotope({
      itemSelector: '.item'
    });
  });

  // filter items on click
  $('#filters').on( 'click', '.type', function() {
    var filterValue = $(this).attr('data-filter');
    $container.isotope({ filter: filterValue });
  });

  // change is-checked class on buttons
  $('.filters').each( function( i, typeGroup ) {
    var $typeGroup = $( typeGroup );
    $typeGroup.on( 'click', '.type', function() {
      $typeGroup.find('.active').removeClass('active');
      $( this ).addClass('active');
    });
  });
});