$(function(){
    $('.navigator').click(function(){
        var target = $(this).data('target');
        $('.content-Container').parent().find('.component').hide();
        $('.content-Container').parent().find('.'+target).show();
    });
});