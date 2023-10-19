// Example JavaScript for your WordPress site
jQuery(document).ready(function($) {
    // Add a smooth scroll effect to anchor links
    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });

    // Toggle a navigation menu on mobile devices
    $('#mobile-menu-button').on('click', function() {
        $('#mobile-menu').slideToggle();
    });

    // Example for handling form submission (assuming you have a form with the ID 'contact-form')
    $('#contact-form').on('submit', function(e) {
        e.preventDefault();
        // Perform AJAX submission or any other desired actions here
        // You may use the jQuery.ajax() function for this purpose.
    });
});
