$(document).ready(function () {
    $('.cardprofile .card-view').click(function(){
        $('.card-details').addClass('active');
    });

    $('.cardprofile .card-details .card-close').click(function(){
        $('.card-details').removeClass('active');
    });
});