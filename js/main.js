$(document).ready(function(){

    $('.sidenav').sidenav();

    $(".dropdown-trigger").dropdown();
    $(".materialboxed").materialbox();
    $('.parallax').parallax();

        
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    
    $('.slider').slider();

    
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.modal').modal();
    $('.modal').modal('methodName');
    $('.modal').modal('methodName', paramName);
  });


