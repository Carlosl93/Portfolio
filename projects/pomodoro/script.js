
var startPomodoro = 25;
var startBreak = 5;
var inter;
var canTime = true;
var canBreak = true;
var firstTime = true;
var min = startPomodoro;
var seconds = 60;
var startMin = startPomodoro;

$(document).ready(function(){

	$('#breakTime').html(formating(startBreak));
	$('#pomodoroTime').html(formating(startPomodoro));

	/*----------- BUTTONS -----------*/
	$('.buttonMore').click(function(){

		if($(this).parent().attr('id') == "breakBox"){
			startBreak++;
			$('#breakTime').html(formating(startBreak));
		} else {
			startPomodoro++;
			startMin = startPomodoro;
			$('#pomodoroTime').html(formating(startPomodoro));
		}

	});

	$('.buttonLess').click(function(){

		if($(this).parent().attr('id') == "breakBox"){
			startBreak--;
			$('#breakTime').html(formating(startBreak));
		} else {
			startPomodoro--;
			startMin = startPomodoro;
			$('#pomodoroTime').html(formating(startPomodoro));
		}

	});

	/*----------- TIMER -----------*/

	$('.playB').click(function(){
		if(canTime){
			if(firstTime){
				timerStart(startMin, seconds);
			} else {timerStart(min, seconds);}
			
			$(this).attr('class', 'fa fa-pause fa-3x playB');
			canTime = false;

		} else {
			timerPause();
			$(this).attr('class', 'fa fa-play fa-3x playB');
			canTime = true;
		}
	});

	$('.stopB').click(function(){
		$('#timer').html('00:00');
		$('.playB').attr('class', 'fa fa-play fa-3x playB');
		timerPause();
		canTime = true;
		firstTime = true;
		min = startPomodoro;
		seconds = 60;
	});

});

function timerStart(minute, sec){

	if(firstTime == true){
		min = minute-1;
		firstTime = false;
	} else {
		min = minute;
	}

	seconds = sec;

	inter = setInterval(function() {

		if(seconds == 0){
			if(min == 0){
				timeOut();
			} else {
				min--;
				seconds = 60;
			}
		} else{
			seconds--;
		}	
		$('#timer').html(formating(min) + ":" + formating(seconds));

	}, 1000);
	
}

function timerPause(){
	clearInterval(inter);
}

function timeOut(){
	$('#timer').html("00:00");
	clearInterval(inter);

	if(canBreak == true){
		min = startBreak - 1;
		seconds = 60;
		timerStart(min, seconds);
		canBreak = false;
	} else {
		canBreak = true;
		canTime = true;
	}
}

function formating(n){
	return n > 9 ? "" + n: "0" + n;
}







