$('#analyze-audio').on('click',function()
{
    var url = 'app/audio';
    var data = $('#src-audio').val();
    var ajaxRequest = $.ajax({
        url: "/"+url,
        method: "POST",
        data:data,
    });

    ajaxRequest.done(function(data) {

    });

    ajaxRequest.fail(function(data) {

    });



}
);

$('#analyze-video').on('click',function()
{
    var url = 'app/video';
    var data = $('#src-video').val();
    var ajaxRequest = $.ajax({
        url: "/"+url,
        method: "POST",
        data:data,
    });

    ajaxRequest.done(function(data) {

    });

    ajaxRequest.fail(function(data) {

    });

})
$(window).on('load',function () {

    $('video-1').on('play',function()
    {

        var width = $('.video-play-1').width();
        var height = $('.video-play-1').height();
        var position = $('.video-play-1').position();
        console.log(position.top);

        // $('.blur').height(height);
        // $('.blur').width(height);
        // $('.blur').css("position","absolute");
        // $('.blur').css({top: position.top, left: position.left, position:'absolute', width: width, background:'white',opacity:0.7});
        //$('.blur').css('background','red');

    });

    $('.video-2').on('play',function()
    {

        var width = $('.video-play-2').width();
        var height = $('.video-play-2').height();
        var position = $('.video-play-2').position();
        console.log(position.top);

        setTimeout(function(){

            $('.blur-2').height(height);
            $('.blur-2').width(height);
            $('.blur-2').css("position","absolute");
            $('.blur-2').css({top: position.top, left: position.left, position:'absolute', width: width, background:'white',opacity:0.93});
        },7000)

        setTimeout(function(){
            $('.blur-2').css({background:'transparent',opacity:0})
        },22000)


         //$('.blur').css('background','red');
 
     });
});


