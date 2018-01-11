$.fn.drawLine = function drawLine(data, colour) {

		function calculate(data, index, d, max) {
				var valueRatio = data[index] / max * d - 10;
				return d - valueRatio;
		};

		function getMax(data) {
				return Math.max.apply(null, data);
		}

		data['sorted'] = data.sort(function(a, b) {
				return parseFloat(a.x, 10) - parseFloat(b.x, 10);
		});
		data['x'] = new Array();
		data['y'] = new Array();

		for (var i = 0; i < data['sorted'].length; i++) {
				data['x'][i] = data['sorted'][i].x;
				data['y'][i] = data['sorted'][i].y;
		}

};

// var endpoint = parseInt($('.percent').text());

// let percentMainArray = [80, 50, 90, 85];
// let percentSubArray = [70, 85, 80, 70, 60, 60];

// function run(percent) {
// 	for (let i = 0; i < percent.length; i++) {
//     	Snap.animate(0, percent[i], function(val) {
//     		console.log(i)
//     		$('.percent-'+i).text(Math.round(val) +'%');


//         // $('.percent').text(Math.round(val) +'%');
        

//        }, mina.easeinout); 


//     }
     
// }

// function runBack(percent) {
//     Snap.animate(endpoint, 0, function(val) {
//         $('.percent').text(Math.round(val) +'%');

//     }, mina.easeinout);  
// }

$(document).ready(function() {


		var $window = $(window);
		revealOnScroll();
		$window.on('scroll', revealOnScroll);

		function revealOnScroll() {
				var rings = $('.ring-chart');
				var data = new Array();

				rings.each(function() {
						var chart = $(this);
						var win_height_padded = $window.height() * 1.1;
						var scrolled = $window.scrollTop();
						var offsetTop = chart.parents('.chart-wrap').offset().top;
						var offsetBottom = chart.parents('.chart-wrap').offset().top + parseInt(chart.parents('.chart-wrap').outerHeight());
						/* Clipping */
						var width = chart.width();
						var height = chart.height();
						var clipmask = 'rect(0,' + width + 'px,' + height + 'px,' + width / 2 + 'px)';
						var clipfill = 'rect(0,' + width / 2 + 'px,' + height + 'px,0)';
						chart.find('.mask').css({
								'clip': clipmask
						});
						chart.find('.mask').find('.fill').css({
								'clip': clipfill
						});

						if (scrolled + win_height_padded > offsetTop) {
								/* Percentage */
								var per = parseInt(chart.attr('data-progress'));
								var csshalf = {
										'-webkit-transform': 'rotate(' + 180 * per / 100 + 'deg)',
										'transform': 'rotate(' + 180 * per / 100 + 'deg)'
								};
								var cssfull = {
										'-webkit-transform': 'rotate(' + 360 * per / 100 + 'deg)',
										'transform': 'rotate(' + 360 * per / 100 + 'deg)'
								};
								setTimeout(function() {
										chart.find('.mask.full').css(csshalf);
										chart.find('.fill').css(csshalf);
										chart.find('.fix').css(cssfull);
										// run(percentMainArray);
								}, 500);
								


						} else if (scrolled + win_height_padded < offsetTop) {
								var cssempty = {
										'-webkit-transform': 'rotate(0deg)',
										'transform': 'rotate(0deg)'
								};
								setTimeout(function() {
										chart.find('.mask.full').css(cssempty);
										chart.find('.fill').css(cssempty);
										// runBack(endpoint);
								}, 0);
						}
				});

				
		}
});