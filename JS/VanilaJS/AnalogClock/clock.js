var hourHand=document.getElementById("hoursHand");
var minuteHand=document.getElementById("minuteHand");
var secondHand=document.getElementById("secondHand");

initClock();

function initClock(){
	var date=new Date();
	var hour=date.getHours()%12;//0-23 ,divide by 12 to get 1-12
	var minute=date.getMinutes();
	var seconds=date.getSeconds();
	
	var hourDegree=(hour*30)+(0.5*minute);//360/12=30degree every hour and 30/60 for minute hand
	var minuteDegree=(minute*6)+(0.1*seconds);
	var secondDegree=seconds*6;//360/60=6
	
	hourHand.style.transform='rotate('+hourDegree+ 'deg)';
	minuteHand.style.transform='rotate('+minuteDegree+ 'deg)';
	secondHand.style.transform='rotate('+secondDegree+ 'deg)';
	
	setTimeout(initClock,1000);
	
}