$(document).ready(function() {
	chooseSide();
});

var playerSelect, aiSelect = "";
var turn;
var gameOn;
var xWins;
var counter = 0;
var drawGame = false;
var gridArray = [];

function chooseSide(){
	$('#gridContainer').remove();
	$('#winnerContainer').remove();
	$('.container').hide().append('<div id="textContainer"><p> Choose side: </p> <div class="chooseButton">X</div> <div class="chooseButton">O</div></div>').fadeIn("fast");;

	$('.chooseButton').click(function(){
		playerSelect = $(this).html();

		if(playerSelect == "X"){
			aiSelect = "O";
		} else { aiSelect = "X"; }

		iniGame();

	});
}

function iniGame(){
	$('#textContainer').fadeOut("fast", function(){
		$('#textContainer').remove();
	});

	$('body').hide().append('<div id="gridContainer"></div>').fadeIn("slow");
	$('body').hide().append('<div id="winnerContainer"> <div id="replay" class="text-center fa fa-refresh fa-3x"></div> </div>').fadeIn("slow");
	
	gameOn = true;
	turn = "player";
	resetGrid();
}

function resetGrid(){

	$('.gridElement').remove();

	for(var i = 0; i < 9; i++){
		$('#gridContainer').append('<div class="gridElement" id="gridNumber'+i+'"></div>');
		gridArray.push('e');
	}

	$('.gridElement').click(function(e){
		handlePlayerClick(e);
	});

	$('#replay').click(function(e){
		chooseSide();
	});

}

function handlePlayerClick(e){

	if(gameOn == false){

		return;

	}  else {

		if(turn == "player"){

			square = $(e.target);

			if(square.html() == ""){
				square.html(playerSelect);
				turn = "enemy";
				checkForWin();
				if(gameOn == true){
					makeEnemyMove();	
				}
			} else { } 

		} else {
			if(gameOn == true){
				makeEnemyMove();	
			}
		}

	}
}

function makeEnemyMove(){
	var chooseNumber = Math.floor(Math.random()*9);
	var chooseBox = $('#gridNumber'+chooseNumber);

	if(chooseBox.html() == ''){
		chooseBox.html(aiSelect);
		checkForWin();
		turn ="player";
	} else {
		makeEnemyMove();
	}

}

function checkForWin(){


	for(var i = 0; i < 9; i++){
		var squareVal = $('#gridNumber' + i).html();
		if(squareVal !== ''){
			counter ++;
		}
		gridArray[i] = squareVal;
	}
	
	//--- X Checks for winning ----
	if( (gridArray[0] == 'X' && gridArray[1] == 'X' && gridArray[2] == 'X') ||
		(gridArray[3] == 'X' && gridArray[4] == 'X' && gridArray[5] == 'X') ||
		(gridArray[6] == 'X' && gridArray[7] == 'X' && gridArray[8] == 'X') ||
		(gridArray[0] == 'X' && gridArray[3] == 'X' && gridArray[6] == 'X') ||
		(gridArray[1] == 'X' && gridArray[4] == 'X' && gridArray[7] == 'X') ||
		(gridArray[2] == 'X' && gridArray[5] == 'X' && gridArray[8] == 'X') ||
		(gridArray[0] == 'X' && gridArray[4] == 'X' && gridArray[8] == 'X') ||
		(gridArray[2] == 'X' && gridArray[4] == 'X' && gridArray[6] == 'X') ) 
	{ 
		gameOn = false; 
		xWins = true;
		//$('#replay').html('X WINS!');
	}

	//--- Y Checks for winning ----
	if( (gridArray[0] == 'O' && gridArray[1] == 'O' && gridArray[2] == 'O') ||
		(gridArray[3] == 'O' && gridArray[4] == 'O' && gridArray[5] == 'O') ||
		(gridArray[6] == 'O' && gridArray[7] == 'O' && gridArray[8] == 'O') ||
		(gridArray[0] == 'O' && gridArray[3] == 'O' && gridArray[6] == 'O') ||
		(gridArray[1] == 'O' && gridArray[4] == 'O' && gridArray[7] == 'O') ||
		(gridArray[2] == 'O' && gridArray[5] == 'O' && gridArray[8] == 'O') ||
		(gridArray[0] == 'O' && gridArray[4] == 'O' && gridArray[8] == 'O') ||
		(gridArray[2] == 'O' && gridArray[4] == 'O' && gridArray[6] == 'O') )
	{ 
		gameOn = false; 
		xWins = false;
		//$('#winnerContainer').append('<div id="winnerText">O WINS!</div>');
	}

	if(counter == 9 && gameOn == true){
		drawGame = true;
		gameOn = false;
	} else {counter = 0;}

	if(gameOn == false && drawGame == false){
		return;
	}

}



























