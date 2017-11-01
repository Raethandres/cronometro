var centesimas = 0;
var segundos = 0;
var minutos = 0;
var horas = 0;
var sw=0;
var sum=-1;
var su=0;
// $SCRIPT_ROOT={{ request.scrpt_root|tojson|safe}}

// console.log(sum);
$('.start').on('click',function(){
	if(su<8){
		su++;
		console.log(sum,su);
		sw=1;
		// console.log(i);
		sum++;
		var i="#c"+sum ;
		var con="<id=\"c"+sum+"\"br><div id=\"c"+sum+"\" class=\"c\" st=0> <p class= \"reloj\" id=\"Minutos"+sum+"\">00</p><p class= \"reloj\">:</p><p class=\"reloj\" id=\"Segundos"+sum+"\">00</p><p class=\"stop\" onclick=stop(\""+i+"\")>stop</p> </div>";
		// Concurrent.Thread.create(imprimir, 10);

		
		$("#contenedor").append(con);
		$(i).css("background-color","#"+Math.floor(Math.random()*16777215).toString(16));
		Concurrent.Thread.create(cronometro,sum,1);

		
		
	}

});

function stop(idp){

		var mas=idp;
		var ss=mas[2];
		console.log("stop",mas,ss);
		$(mas).attr("st","1");
		var s=parseInt($("#Segundos"+ss).html());
		var m=parseInt($("#Minutos"+ss).html());
		$("#Segundos"+ss).html("00");
		$("#Minutos"+ss).html("00");
		m=m*60;
		s+=m;
		console.log(s,"tiempo");
		$(mas).css("background-color","#CD5555");
		// sleep(500);
		su--;
		console.log(su,"cantidad");
		$(mas).remove();
		console.log(s,localStorage);
		var stored = JSON.parse(localStorage.getItem("time"));
		if (stored==null) {
			stored=new Array();
		}
		stored.push(s);
		localStorage.setItem("time", JSON.stringify(stored));

}

function cronometro (iter,time,sp) {
	// console.log(sum);
	while(true){
	
	// var cen=parseInt($("#Centesimas"+iter).html());
	var seg=parseInt($("#Segundos"+iter).html());
	var min=parseInt($("#Minutos"+iter).html());
	// 
	if (seg < 59) {
		seg ++;
		if (seg < 10) { seg = "0"+seg }
		$("#Segundos"+iter).html(seg);
	}
	if (seg == 59) {
		seg = 0;
		$("#Segundos"+iter).html("0"+seg);
	}
	if ( seg == 0 ) {
		min++;
		if (min < 10) { min = "0"+min }
		$("#Minutos"+iter).html(min);
	}
	
	if ($("#c"+iter).attr("st")=="1") {
		Concurrent.Thread.stop(this);
		break;
 	}
 	sleep(1000);
	}
	
}


function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
// function contador(iter,time,sp){
// 	var con=0;
// 		while(true){
// 				i=parseInt($("#"+iter).html());
// 				i++;
// 				con=0;
// 				console.log(i,$("#"+iter).attr("st"));
// 				$("#"+iter).html(i);
// 				sleep(time*1000);
// 				if ($("#"+iter).attr("st")=="1") {
// 					Concurrent.Thread.stop(this);
// 					sp=0;
// 				}
		
// 		}
	

// 	}

// $("#start").click(function(){
// 	Concurrent.Thread.create(contador,iterar,1,sp0);
// 	iterar++;
// });
// $("#stop").click(function(){
// 	iterar--;
// 	console.log($("#"+iterar).attr("st"),iterar);
// 	$("#"+iterar).attr("st","1");
// 	console.log($("#"+iterar).attr("st"),iterar);
// });




