$(document).ready(function(){

	var stored = JSON.parse(localStorage.getItem("time"));
	console.log(stored);
		if (stored!=null) {
			var st=JSON.stringify(stored)
			console.log(st);
			$.ajax({
            type: 'POST',
            url: '/send',
            data: st,
            dataType:'JSON',
            success: function (result) {
            	console.log(result);
                if(result.ok==true){
                	$('.end').html("exito");
                	localStorage.clear();
                	location.href="/";

                }else{
                	localStorage.clear();
                	location.href="/";
                }
              
            }
          });
		}

});