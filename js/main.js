$(document).ready(function() {
    slider();
});

// Slider Functionality
var slider = function(){
    var controls = $('.slider-controls').find('li');
    controls.first().addClass('is-selected');
    controls.on('click', 'a', function(){
        var liIndex = $(this).closest('li').index();
        $('.is-selected').removeClass('is-selected');
        $(this).closest('li').addClass('is-selected');
        $('.slider').fadeOut('slow', function(){
            $('.slider').css('background-image', 'url("img/slider' + liIndex + '.jpg")');
            $('.slider').fadeIn('slow', function(){
                $('.slider').css('background-image', 'url("img/slider' + liIndex + '.jpg")');
            });
        });
    });
}
