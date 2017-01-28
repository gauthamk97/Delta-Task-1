var daysLeft;
var hoursLeft;
var minutesLeft;
var secondsLeft;

var daysLabel = document.getElementById('days');
var hoursLabel = document.getElementById('hours');
var minutesLabel = document.getElementById('minutes');
var secondsLabel = document.getElementById('seconds');

var finalDate;

var isTimerRunning = false;
var startButton = document.getElementById('startButton');

var timerVar;

function clickedStart() {

	if (isTimerRunning == true) {
		window.clearInterval(timerVar);
		startButton.innerHTML = "Start";
		daysLabel.innerHTML = "00";
		hoursLabel.innerHTML = "00";
		minutesLabel.innerHTML = "00";
		secondsLabel.innerHTML = "00";
		isTimerRunning = false;
		return;
	}

	if ((document.getElementById('input1').value) == "") {
		window.alert('Enter Date');
		return;
	}

	else if ((document.getElementById('input2').value) == "") {
		window.alert('Enter Time');
		return;
	}

	finalDate = new Date("" + document.getElementById('input1').value + "T" + document.getElementById('input2').value + "+05:30");

	setTimer();
	isTimerRunning = true;
	startButton.innerHTML = "Stop";
	
}

function setTimer() {

	var currentDate = new Date();
		
	var finalTime = finalDate.getTime();
	var currentTime = currentDate.getTime();

	var timeLeft = finalTime - currentTime;

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

	timerVar = setInterval(function() {
		var currentDate = new Date();
		
		var finalTime = finalDate.getTime();
		var currentTime = currentDate.getTime();

		var timeLeft = finalTime - currentTime;

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
	}, 1000);
	
}
