$(document).ready(function() {
    slider();
});

// Slider Functionality
var slider = function(){
    var controls = $('.slider-controls').find('li');
    controls.first().addClass('is-selected');
    controls.on('click', 'a', function(event){
        event.preventDefault();
        var liIndex = $(this).closest('li').index();
        $('.is-selected').removeClass('is-selected');
        $(this).closest('li').addClass('is-selected');
        $('.slider').fadeOut('100', function(){
            $('.slider').css('background-image', 'url("img/slider' + liIndex + '.jpg")');
            $('.slider').fadeIn('100', function(){
                $('.slider').css('background-image', 'url("img/slider' + liIndex + '.jpg")');
            });
        });
    });
}
