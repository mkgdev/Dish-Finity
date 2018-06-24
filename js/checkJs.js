function base64toBlob(base64Data, contentType) {
    contentType = contentType || '';
    var sliceSize = 1024;
    var byteCharacters = atob(base64Data);
    var bytesLength = byteCharacters.length;
    var slicesCount = Math.ceil(bytesLength / sliceSize);
    var byteArrays = new Array(slicesCount);

    for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
        var begin = sliceIndex * sliceSize;
        var end = Math.min(begin + sliceSize, bytesLength);

        var bytes = new Array(end - begin);
        for (var offset = begin, i = 0; offset < end; ++i, ++offset) {
            bytes[i] = byteCharacters[offset].charCodeAt(0);
        }
        byteArrays[sliceIndex] = new Uint8Array(bytes);
    }
    return new Blob(byteArrays, { type: contentType });
}

$(document).ready(function(){
     $('.modal').modal();
  });



     var video = document.getElementById('video');
     var subbtn=document.getElementById("submit");
     var canvas=document.getElementById("canvas");
     // var modalimg=document.getElementById('objectimg')

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

         var png = imgdata.split(',')[1];
         var the_file = new Blob([window.atob(png)],  {type: 'image/png', encoding: 'utf-8'});
         var fr = new FileReader();
         fr.onload = function ( oFREvent ) {
             var v = oFREvent.target.result.split(',')[1]; // encoding is messed up here, so we fix it
             v = atob(v);
             var good_b64 = btoa(decodeURIComponent(escape(v)));
             document.getElementById("uploadPreview").src = "data:image/png;base64," + good_b64;
         };
         fr.readAsDataURL(the_file);
         // modalimg.src=imgdata;
         // console.log(imgdata);
         // var url = 'subscribe';
         // var idata = base64toBlob(imgdata.split('base64,')[1]);
         console.log(the_file);
         $.ajax({
            url: "http://127.0.0.1:8000/app/age/",
            method: "POST",
            data:{'image':the_file},
            // dataType : 'jsonp',
            // contentType: false,
            // processData: false,
        // crossDomain:true,
        }).done(function(data) {
          console.log(data);
           // if(data.ans =='no')
           // {

           //  $('#submit').trigger('click');
            

           // }else{
               
           // }
        }).fail(function(data) {
          console.log('fail');
        });
        console.log('ad');
    }
         );