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
});

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