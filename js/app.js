$(document)
.ready(function() {
  $('.main.menu').visibility({
         type: 'fixed'
       });
  // fix menu when passed
  $('.masthead')
  .visibility({
    once: false,
    onBottomPassed: function() {
      $('.fixed.menu').transition('fade in');
    },
    onBottomPassedReverse: function() {
      $('.fixed.menu').transition('fade out');
    }
  });

  $('.ui.modal')
  .modal('attach events', '.contact.item', 'show');

  $('.ui.modal')
  .modal('attach events', '.contact-footer', 'show');

  $('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top - 44
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});

  $('#fullpage').fullpage({
		autoScrolling: false,
		fitToSection: false
	});
});
