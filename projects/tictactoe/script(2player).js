$(document).ready(function() {
	chooseSide();
});

var playerSelect, aiSelect = "";
var turn;
var gameOn;
var xWins;
var gridArray = [];

function chooseSide(){

	$('#textContainer').html('<p> Choose side: </p> <div class="chooseButton">X</div> <div class="chooseButton">O</div>');

	$('.chooseButton').click(function(){
		playerSelect = $(this).html();

		if(playerSelect == "X"){
			aiSelect = "O";
		} else { aiSelect = "X"; }

		iniGame();
	});
}

function iniGame(){
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

	console.log(gridArray);

	var gridElementSize = $('#gridContainer').width()/3;

	$('.gridElement').css({'width': gridElementSize, 'height': gridElementSize});

	$('.gridElement').click(function(e){
		handlePlayerClick(e);
	});
}

function handlePlayerClick(e){
	if(gameOn == false){
		if(xWins == true){
			console.log("X Wins");
		} else {
			console.log("Y Wins");
		}
		return;
	} 

	square = $(e.target);

	if(square.html() == ''){

		switch(turn){
			case 'player':
				$(e.target).html(playerSelect);
				turn = 'enemy';
				console.log("Player has made a move");
				break;
			case 'enemy':
				$(e.target).html(aiSelect);
				turn = 'player';
				console.log("AI has made a move");
				break;
		}
			checkForWin();

	} else {
		console.log('Invalid move');
	}


}

function checkForWin(){
	for(var i = 0; i < 9; i++){
		var squareVal = $('#gridNumber' + i).html();
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
		(gridArray[2] == 'X' && gridArray[4] == 'X' && gridArray[6] == 'X') ) { gameOn = false; xWins = true;}

	//--- Y Checks for winning ----
	if( (gridArray[0] == 'O' && gridArray[1] == 'O' && gridArray[2] == 'O') ||
		(gridArray[3] == 'O' && gridArray[4] == 'O' && gridArray[5] == 'O') ||
		(gridArray[6] == 'O' && gridArray[7] == 'O' && gridArray[8] == 'O') ||
		(gridArray[0] == 'O' && gridArray[3] == 'O' && gridArray[6] == 'O') ||
		(gridArray[1] == 'O' && gridArray[4] == 'O' && gridArray[7] == 'O') ||
		(gridArray[2] == 'O' && gridArray[5] == 'O' && gridArray[8] == 'O') ||
		(gridArray[0] == 'O' && gridArray[4] == 'O' && gridArray[8] == 'O') ||
		(gridArray[2] == 'O' && gridArray[4] == 'O' && gridArray[6] == 'O') ){ gameOn = false; xWins = false;}

		if(gameOn == false){
			if(xWins == true){
				console.log("X Wins");
			} else {
				console.log("Y Wins");
			}
		return;
		}

}



























