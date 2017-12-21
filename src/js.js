$(function() {
  // $(document).scroll(function() {
  //   var $nav = $("nav");
  //   $nav.toggleClass('bg-elegant-color-dark', $(this).scrollTop() > $nav.height());
  // });

  $('body').scrollspy({
    target: '#navbar'
  });



});