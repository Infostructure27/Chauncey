$(document).ready(function(){
    var menuLinks = $('.menu-links'),
        slide = $('.slide'),
        prev = $('.prev'),
        next = $('.next'),
        magicNumber = 60,
        selected = menuLinks.find('a.selected').parent().index(),
        slideLength = slide.length,
        count = $('.count'),
        current = count.find('ins:first-child'),
        total = count.find('ins:last-child')
		devlink = $('#devlink');
    $('#menu-link').click(function () {
        $('#menu, #layout').toggleClass('active');
        return false;
    });
    if ($(window).width() < 767) {
        $('#menu, #layout').removeClass('active');
    } else {
        $('#menu, #layout').addClass('active');
    }
    menuLinks.find('a').click(function (e) {
        e.preventDefault();
        var that = $(this),
            block = $(that.attr('href')),
            blockTop = block.offset().top - magicNumber;
        menuLinks.find('a').removeClass('selected');
        that.addClass('selected');
        selected = menuLinks.find('a.selected').parent().index();
        $('body, html').animate({
            scrollTop: blockTop
        }, magicNumber * 10);
    });
	
	devval = $.cookie('devval');
    
    $('.linkplace').each(function() {
        _link = $(this).data("link"),
        _text = $(this).data("text");
        $(this).wrapInner('<a href="" target="_blank">');
        if (_text) {
            $(this).after('<code class="nolinkplace">' + _text + '</code>');
        } else {
            $(this).after('<span class="nolinkplace">{your_drupal_site}'+_link+'</span>');
        }
    });

	if (devval) {
        devlink.val(devval);
		$('body').addClass('withdevlink');
        $('.linkplace').each(function() {
            _link = $(this).data("link");
            $(this).find('a').attr('href',devval+_link);
        });
	}
	
	devlink.focusout(function() {
		devval = $(this).val();
        
		if (devval) {
            if (devval.slice(-1) == '/') {
                devval = devval.slice(0, -1);
                $(this).val(devval);
            }
			$.cookie('devval', devval);
			$('body').addClass('withdevlink');
            $('.linkplace').each(function() {
                _link = $(this).data("link");
                $(this).find('a').attr('href',devval+_link);
            });
		} else {
            $.cookie('devval', '');
            $('body').removeClass('withdevlink');
        }
	})
	
    if ($('.content').length > 0) {
        $('.content').waypoint(function (direction) {
            var $links = menuLinks.find('a[href="#' + this.id + '"]');
            selected = menuLinks.find('a.current').parent().index();
            $links.toggleClass('current', direction === 'down');
        }, {
            offset: '100%'
        }).waypoint(function (direction) {
            var $links = menuLinks.find('a[href="#' + this.id + '"]');
            $links.toggleClass('current', direction === 'up');
        }, {
            offset: function () {
                return -$(this).height() + 200;
            }
        });
		
		$('.menu-links li.hasSubmenu').each(function(){
			$(this).find('> a').click(function(){
				if ($(this).parent().hasClass('collapse')) {
					
					$(this).next().slideUp();
					$(this).parent().removeClass('collapse');
				} else {
					
					$(this).next().slideDown();
					$(this).parent().addClass('collapse');
				}
			})
		})
    }
    $(window).scroll(function () {
        /*if ($(this).scrollTop() == 0) {
            menuLinks.find('.general-part li:first-child a').addClass('selected').parent().siblings().find('a').removeClass('selected');
        }
        if ($(this).scrollTop() > 100) {
            $('#scrolltop').fadeIn(100);
        } else {
            $('#scrolltop').fadeOut(100);
        }*/
    });
});

