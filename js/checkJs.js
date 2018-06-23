$(document).ready(function(){
     $('.modal').modal();
  });



     var video = document.getElementById('video');
     var subbtn=document.getElementById("submit");
     var canvas=document.getElementById("canvas");
     var modalimg=document.getElementById('objectimg')

     navigator.getUserMedia = navigator.getUserMedia ||
                         navigator.webkitGetUserMedia ||
                         navigator.mozGetUserMedia;

if (navigator.getUserMedia) {
   navigator.getUserMedia({ audio: true, video: true },
      function(stream) {

         video.srcObject = stream;

      },
      function(err) {
         console.log("The following error occurred: " + err.name);
      }
   );
} else {
   console.log("getUserMedia not supported");
}

     subbtn.addEventListener('click',function(){

         var cont=canvas.getContext('2d');
         cont.drawImage(video,0,0,canvas.width,canvas.height)
         var imgdata=canvas.toDataURL();
         modalimg.src=imgdata;

         var url = 'subscribe';
         var data = imgdata;
        // var ajaxRequest = $.ajax({
        //     url: "/"+url,
        //     method: "POST",
        //     data:data,
        // });

        // ajaxRequest.done(function(data) {
        //    if(data.ans =='no')
        //    { 

        //     $('#submit').trigger('click');
            

        //    }else{
               
        //    }
        // });

        // ajaxRequest.fail(function(data) {
          
        // });



    }
         
    
         );
         
  