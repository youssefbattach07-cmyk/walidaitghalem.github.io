$(document).ready(function() {
    // 1. Animation des barres de compétences au scroll
    $(window).scroll(function() {
        $('.skill-progress').each(function() {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll + windowHeight > position) {
                var width = $(this).data('width');
                $(this).css('width', width);
            }
        });
    }).scroll();

    // 2. Accordéon pour Formations - jQuery
    $('.accordion-title').click(function() {
        $(this).next('.accordion-content').slideToggle();
        $('.accordion-content').not($(this).next()).slideUp();
    });

    // 3. Validation Formulaire - jQuery
    $('#contactForm').submit(function(e) {
        e.preventDefault();
        let valid = true;
        
        if($('#nom').val().trim() === '') {
            $('#nomError').text('Le nom est obligatoire');
            valid = false;
        } else { 
            $('#nomError').text(''); 
        }
        
        let email = $('#email').val();
        let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!regex.test(email)) {
            $('#emailError').text('Email invalide');
            valid = false;
        } else { 
            $('#emailError').text('