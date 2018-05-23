$(function() {
    /*-----------------------------------
     * FIXED  MENU - HEADER
     *-----------------------------------*/
    function menuscroll() {
        var $navmenu = $('.nav-menu');
        if ($(window).scrollTop() > 50) {
            $navmenu.addClass('is-scrolling');
        } else {
            $navmenu.removeClass("is-scrolling");
        }
        var $navmenu = $('.probootstrap-burger-menu');
        if ($(window).scrollTop() > 50) {
            $navmenu.addClass('topReduce');
        } else {
            $navmenu.removeClass("topReduce");
        }
    }
    menuscroll();
    $(window).on('scroll', function() {
        menuscroll();
    });
});

$(document).ready(function () {
	//Smooth scrolling when click to nav
	$('#top-nav > ul > li > a').click(function (e) {
	    e.preventDefault();
	    var curLink = $(this);
	    var scrollPoint = $(curLink.attr('href')).position().top;
	    $('body,html').animate({
	        scrollTop: scrollPoint
	    }, 500);
	})
    $(window).scroll(function () {
        onScrollHandle();
    });
    function onScrollHandle() {
        //Get current scroll position
        var currentScrollPos = $(document).scrollTop();
        //Iterate through all node
        $('#top-nav > ul > li > a').each(function () {
            var curLink = $(this);
            var refElem = $(curLink.attr('href'));
            //Compare the value of current position and the every section position in each scroll
            if (refElem.position().top <= currentScrollPos && refElem.position().top + refElem.height() > currentScrollPos) {
                //Remove class active in all nav
                $('#top-nav > ul > li').removeClass("active");
                //Add class active
                curLink.parent().addClass("active");
            }
            else {
                curLink.parent().removeClass("active");
            }
        });
    }
}); 