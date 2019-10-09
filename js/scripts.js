$(document).ready(function() {
    // закрепление меню
    $(window).scroll(function(){
        if ($(this).scrollTop() > 50) {
            $(".header").addClass("fixed");
        } else {
            $(".header").removeClass("fixed");
        }
    });

    // инициализация слайдера
    $('#slider').nivoSlider({
        effect: 'random', // Specify sets like: 'fold,fade,sliceDown'
        slices: 15, // For slice animations
        boxCols: 8, // For box animations
        boxRows: 4, // For box animations
        animSpeed: 500, // Slide transition speed
        pauseTime: 3000, // How long each slide will show
        startSlide: 0, // Set starting Slide (0 index)
        directionNav: true, // Next & Prev navigation
        controlNav: false, // 1,2,3... navigation
        controlNavThumbs: false, // Use thumbnails for Control Nav
        pauseOnHover: true, // Stop animation while hovering
        manualAdvance: false, // Force manual transitions
        prevText: 'Prev', // Prev directionNav text
        nextText: 'Next', // Next directionNav text
        randomStart: false, // Start on a random slide
        beforeChange: function(){}, // Triggers before a slide transition
        afterChange: function(){}, // Triggers after a slide transition
        slideshowEnd: function(){}, // Triggers after all slides have been shown
        lastSlide: function(){}, // Triggers when last slide is shown
        afterLoad: function(){} // Triggers when slider has loaded
    });
    
    // мобильное меню
    var menu = new MmenuLight( document.querySelector( '#menu' ), {
        title: 'MENU',
        // theme: 'light',// 'dark'
        // slidingSubmenus: true,// false
        // selected: 'Selected'
    });
    menu.enable( 'all' ); // '(max-width: 900px)'
    menu.offcanvas({
        // position: 'left',// 'right'
        // move: true,// false
        // blockPage: true,// false / 'modal'
    });
    //	Open the menu.
    document.querySelector( 'a[href="#menu"]' ).addEventListener( 'click', ( evnt ) => {
        menu.open();
        //	Don't forget to "preventDefault" and to "stopPropagation".
        evnt.preventDefault();
        evnt.stopPropagation();
    });
});
