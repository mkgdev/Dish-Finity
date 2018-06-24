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

    $('video').on('play',function()
    {

        var width = $('.video-play').width();
        var height = $('.video-play').height();
        var position = $('.video-play').position();
        console.log(position.top);

        $('.blur').height(height);
        $('.blur').width(height);
        $('.blur').css("position","absolute");
        $('.blur').css({top: position.top, left: position.left, position:'absolute', width: width, background:'white',opacity:0.7});
        //$('.blur').css('background','red');

    });
});


