var crystal = {
	blue: 
	{
		value: 0
	},
	green:
	{
		value: 0
	},
	red:
	{
		value: 0
	},
	yellow:
	{
		value: 0
	}
};

var score = 0;
var randomScore = 0;
var wins = 0;
var losses = 0;

var getRandom = function(min, max){
	return Math.floor(Math.random()* (max - min + 1)) + min;
}


var start = function(){
	
	score = 0;
	randomScore = getRandom(19, 120);

	crystal.blue.value = getRandom(1, 12);
	crystal.green.value = getRandom(1, 12);
	crystal.red.value = getRandom(1, 12);
	crystal.yellow.value = getRandom(1, 12);

	$("#targetScore").html(randomScore);
	$("#yourScore").html(score);


}


var addValue = function(crystal) {
	score = score + crystal.value;
	$('#yourScore').html(score);
	checkWin();	
}

var checkWin = function (){
	if (score > randomScore) {
		alert("Try again, you loss")
		losses++;
		$("#lossCount").html(losses);
		start();
	} else if (score === randomScore) {
		alert("YoU WinZ");
		wins++;
		$("#winCount").html(wins);
		start();
	}
}





start();

$("#blue").click(function(){
	addValue(crystal.blue);
});
$("#green").click(function(){
	addValue(crystal.green);
});
$("#red").click(function(){
	addValue(crystal.red);
});
$("#yellow").click(function(){
	addValue(crystal.yellow);
});