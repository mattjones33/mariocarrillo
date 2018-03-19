
let offsetNav = $('nav').offset().top;
let offsetAbout = $('#about').offset().top;
let offsetJourney = $('#resume').offset().top;
let offsetSkills = $('#skills').offset().top;
let offsetProjects = $('#work').offset().top;
let offsetContact = $('#contact').offset().top;



let stickyYN = false;

// $('.animated').hide()


function stickyNav() {
  if (window.pageYOffset >= offsetNav && stickyYN === false) {
    $('nav').addClass('sticky');
    stickyYN = true;
    $('header').prepend(`<div id="replacementNav" class="stdHeight"></div>`);
  } else if (window.pageYOffset >= offsetNav && stickyYN === true) {
  	$('nav').addClass('sticky');
  } else {
    $('nav').removeClass('sticky');
    stickyYN = false;
    $('#replacementNav').remove();
  }
}

function changeActiveNav() {
	if (window.pageYOffset <= offsetAbout) {
		$('.active').removeClass('active');
		$('nav li:nth-child(1)').addClass('active');
		
	} else if (window.pageYOffset >= offsetAbout && window.pageYOffset <= offsetJourney) {
		$('.active').removeClass('active');
		$('nav li:nth-child(2)').addClass('active');
		// $('.about-animated').addClass('fadeInUp');
	} else if (window.pageYOffset >= offsetJourney && window.pageYOffset <= offsetSkills) {
		$('.active').removeClass('active');
		$('nav li:nth-child(3)').addClass('active');
	} else if (window.pageYOffset >= offsetSkills && window.pageYOffset <= offsetProjects) {
		$('.active').removeClass('active');
		$('nav li:nth-child(4)').addClass('active');
	} else if (window.pageYOffset >= offsetProjects && window.pageYOffset <= offsetContact) {
		$('.active').removeClass('active');
		$('nav li:nth-child(5)').addClass('active');
	} else if (window.pageYOffset >= offsetContact) {
		$('.active').removeClass('active');
		$('nav li:nth-child(6)').addClass('active');
	} else {
		$('.active').removeClass('active');
	}
}



$(window).scroll(function() {
  	stickyNav();
  	changeActiveNav();
});



$('nav li:nth-child(1)').click(function() {
	$('html, body').animate({
    	scrollTop: $("#splash").offset().top
    }, 1000);
})

$('nav li:nth-child(2)').click(function() {
	$('html, body').animate({
    	scrollTop: $("#about").offset().top
    }, 1000);
})

$('nav li:nth-child(3)').click(function() {
	$('html, body').animate({
    	scrollTop: $("#resume").offset().top
    }, 1000);
})

$('nav li:nth-child(4)').click(function() {
	$('html, body').animate({
    	scrollTop: $("#skills").offset().top
    }, 1000);
})

$('nav li:nth-child(5)').click(function() {
	$('html, body').animate({
    	scrollTop: $("#work").offset().top
    }, 1000);
})

$('nav li:nth-child(6)').click(function() {
	$('html, body').animate({
    	scrollTop: $("#contact").offset().top
    }, 1000);
})


$('#filter li').hover(function() {
    $( this ).addClass('active-filter-hover');
  }, function() {
    $( this ).removeClass('active-filter-hover');
    $
  }
);

$('#filter li').click(function() {
	$('.active-filter .diamond-timeline').hide();
	$('#filter li').removeClass('active-filter');
	$(this).addClass('active-filter');
	$('.active-filter .diamond-timeline').show();
})

$('.all-group').click(function() {
	$('.project').show('slow');
})

$('.econometrics-group').click(function() {
	$('.project').hide();
	$('.econometrics').show('slow');
})

$('.geospatial-group').click(function() {
	$('.project').hide();
	$('.geospatial').show('slow');
})

$('.kmeans-group').click(function() {
	$('.project').hide();
	$('.kmeans').show('slow');
})

$('.pca-group').click(function() {
	$('.project').hide();
	$('.pca').show('slow');
})

$('.regularization-group').click(function() {
	$('.project').hide();
	$('.regularization').show('slow');
})

$('.timeseries-group').click(function() {
	$('.project').hide();
	$('.timeseries').show('slow');
})








