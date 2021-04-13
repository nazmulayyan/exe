$(function(){

    //typed js
    $(".typed").typed({
		strings: ["Unique.", "Design."],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 30,
		// time before typing starts
		startDelay: 1000,
		// backspacing speed
		backSpeed: 50,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: 5,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
    //wow js
    new WOW().init();
     //back to top button
     $('.back-to-top').click(function(){
        $('html,body').animate({scrollTop:0}, 1500);
    });

    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();
        if(scrolling > 400){
            $('.back-to-top').fadeIn(500);
        }
        else{
            $('.back-to-top').fadeOut(500);
        }
        if (scrolling > 50){
            $('.nav').addClass('bg');
        }
        else{
            $('.nav').removeClass('bg');
        }
    });
    //animation scroll js
    var html_body = $('html, body');
    $('a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 65
                }, 1500,);
                return false;
            }
        }
    });
    
    //venobox popup picture
    $('.venobox').venobox();
    //counterup
    $('.counter').counterUp({
        delay: 5,
        time: 2000
    });
    //preloader
    $(window).on('load', function(){
        $('.preloader').delay(500).fadeOut(500);
    });
    //banner slide
    $('.banner-img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed:2000,
        arrows:true,
        dots:false,
        prevArrow:'.banner-right',
        nextArrow:'.banner-left',
      });
    //chosse slide
    $('.choose-left').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed:1000,
        arrows:false,
        dots:true,
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        verticalPadding:0,
    });
    //choose hide
    $('.hide').click(function(){
        $('.hide1-part').toggle();
    });
    $('.hide1').click(function(){
        $('.hide2-part').toggle();
    });
    $('.hide2').click(function(){
        $('.hide-part').toggle();
    });
    $('.hide3').click(function(){
        $('.hide3-part').toggle();
    });
    //blog slide
    $('.blog-main').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed:1000,
        arrows:false,
        dots:true,
      });
    //slide
    //$('.banner-text').slick();

    //brand slide 
    $('.brand-main').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        speed:1000,
        arrows:true,
        prevArrow:'.brand-right',
        nextArrow:'.brand-left',
    });
});