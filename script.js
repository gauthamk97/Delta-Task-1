var daysLeft;
var hoursLeft;
var minutesLeft;
var secondsLeft;

var daysLabel = document.getElementById('days');
var hoursLabel = document.getElementById('hours');
var minutesLabel = document.getElementById('minutes');
var secondsLabel = document.getElementById('seconds');

var concertDate = new Date("2017-03-31T19:30:00+08:00");

setTimer();
setInterval(setTimer, 1000);

function setTimer() {
	var currentDate = new Date();

	var concertTime = concertDate.getTime();
	var currentTime = currentDate.getTime();

	var timeLeft = concertTime - currentTime;

	daysLeft = Math.floor(timeLeft/(1000*60*60*24));
	daysLabel.innerHTML = daysLeft;
	var days = daysLeft*24*60*60*1000;

	hoursLeft = Math.floor((timeLeft - days)/(1000*60*60));
	hoursLabel.innerHTML = hoursLeft;
	var hours = hoursLeft*60*60*1000;

	minutesLeft = Math.floor((timeLeft - days - hours)/(1000*60));
	minutesLabel.innerHTML = minutesLeft;
	var minutes = minutesLeft*1000*60;

	secondsLeft = Math.floor((timeLeft - days - hours - minutes)/1000);
	secondsLabel.innerHTML = secondsLeft;
}
