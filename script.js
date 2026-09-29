// ============================================
// NAVBAR SCROLL EFFECT
// ============================================
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 50) {
        $('.scrolling-navbar').addClass('top-nav-collapse');
    } else {
        $('.scrolling-navbar').removeClass('top-nav-collapse');
    }
});

// ============================================
// SMOOTH SCROLL
// ============================================
$('a.nav-link, a.btn').on('click', function(event) {
    if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top - 70
        }, 800);
    }
});

// ============================================
// CAROUSEL AUTO PLAY
// ============================================
$('.carousel').carousel({
    interval: 5000,
    pause: 'hover'
});

// ============================================
// FORM SUBMIT
// ============================================
$('form').on('submit', function(e) {
    e.preventDefault();
    alert('Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên hệ sớm nhất.');
    this.reset();
});