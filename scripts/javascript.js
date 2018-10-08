// $(window).on('load', function() {

//     var contentArea = $('section'),
//     nav = $('nav'),
//     navHeight = nav.outerHeight();

//   $(window).on('scroll', function() {
//     var curPos = $(this).scrollTop();

//     contentArea.each(function() {
//       var top = $(this).offset().top - navHeight,
//           bottom = top + $(this).outerHeight();

//       if(curPos >= top && curPos <= bottom) {
//         nav.find('a').removeClass('active');
//         contentArea.removeClass('active');

//         $(this).addClass('active');

//         nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
//       }
//     });
//   });

// nav.find('a').on('click', function () {
//   var $el = $(this)
//     , id = $el.attr('href');
  
//   $('html, body').animate({
//     scrollTop: $(id).offset().top - navHeight
//   }, 500);
//   console.log()
//   return false;
// });
// });  

