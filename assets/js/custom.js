function mobileOnlySlider(i, n, s, e) {
	var l = $(i),
		o = {
			mobileFirst: !0,
			dots: n,
			arrows: s,
			responsive: [{
				breakpoint: e,
				settings: "unslick"
			}]
		};
	l.slick(o), $(window).on("resize", function() {
		if (!($(window).width() > e) && !l.hasClass("slick-initialized")) return l.slick(o)
	})
}

function mobileOnlySlider(i, n, s, e) {
	var l = $(i),
		o = {
			mobileFirst: !0,
			dots: n,
			arrows: s,
			responsive: [{
				breakpoint: e,
				settings: "unslick"
			}]
		};
	l.slick(o), $(window).on("resize", function() {
		if (!($(window).width() > e) && !l.hasClass("slick-initialized")) return l.slick(o)
	})
}

function mobileOnlySlider(i, n, s, e) {
	var l = $(i),
		o = {
			mobileFirst: !0,
			dots: !1,
			arrows: s,
			responsive: [{
				breakpoint: e,
				settings: "unslick"
			}]
		};
	l.slick(o), $(window).on("resize", function() {
		if (!($(window).width() > e) && !l.hasClass("slick-initialized")) return l.slick(o)
	})
}
// mobileOnlySlider(".packk", !0, !0, 767), mobileOnlySlider(".combo", !0, !0, 767), mobileOnlySlider(".testimonial", !0, !0, 767), $(function() {
// 	new WOW().init()
// }), $(function() {
// 	$("#menu").slicknav()
// });




fetch('https://api.ipify.org?format=json')
	.then(response => response.json())
	.then(data => {
		const ipElements = document.getElementsByClassName('user_ip');
		for (let i = 0; i < ipElements.length; i++) {
			ipElements[i].value = data.ip;
		}
	})
	.catch(error => console.error('Error fetching IP address:', error));