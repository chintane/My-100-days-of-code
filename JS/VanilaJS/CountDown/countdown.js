function countdown(){
	var now=new Date();
	var eventDate=new Date(2018,11,27);
	
	var nowTime=now.getTime();
	var eventTime=eventDate.getTime();
	var remTime=eventTime-nowTime;


var s=Math.floor(remTime/1000);

var m=Math.floor(s/60);

var h=Math.floor(m/60);

var d=Math.floor(h/24);


//remaining time
	h%=24;
	m%=60;
	s%=60;

h=(h<10)?"0"+h:h;
m=(m<10)?"0"+m:m;
s=(h<10)?"0"+s:s;

document.getElementById("d").innerHTML=d;

	
document.getElementById("h").innerHTML=h;
document.getElementById("m").innerHTML=m;
document.getElementById("s").innerHTML=s;	
setTimeout(countdown,1000);
	
}

countdown();