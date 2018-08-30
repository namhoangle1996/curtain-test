$(document).ready(function () {
    var dt = new Date();
    var time = dt.getHours();
    console.log(time);
    console.log(dt);
    $togle = $('.curtain-absolute');
    if(6 <= time < 18){
        $('.curtain-bgc-night').hide();
        $('.curtain-bgc-day').show();
    }

    $('.btn-close').click(function(){
        if(!$togle.hasClass('add-close'))
        {
            $togle.addClass('add-close');
        }
    });
    $('.btn-open').click(function(){
        $togle.removeClass('add-close');
        $togle.css('width', '48%');
    });
    $('.btn-pause').click(function () {
       var widthCur = $togle.css('width');
       $togle.css({'width': widthCur});
       $togle.removeClass('add-close');
    });

});