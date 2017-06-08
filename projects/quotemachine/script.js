$(document).ready(function(){
	getQuote();
});

var quotesObj = [
		{
			quote: "The best way to predict the future is to create it.",
			origin: "Abraham Lincoln"
		},
		{
			quote:"If today were the last day of your life, would you want to do what you are about to do today?",
			origin:"Steve Jobs"
		},
		{
			quote:"Have no fear of perfection, you'll never reach it.",
			origin:"Salvador Dahli"
		},
		{
			quote:"Design is not just what it looks like and feels like. Design is how it works.",
			origin:"Steve Jobs"
		},
		{
			quote:"We buy things we don't need, with money we don't have, to impress people we don't like.",
			origin:"Fight Club"
		},
		{
			quote:"People who are crazy enough to think they can change the world, are the ones who do.",
			origin:"Steve Jobs"
		},
		{
			quote:"Conformity is the jailer of freedom and the enemy of growth.",
			origin:"John E. Kennedy"
		},
		{
			quote:"Knowing is not enough, we must APPLY. Willing is not enough, we must DO.",
			origin:"Bruce Lee"
		},
		{
			quote:"Life is about making an impact, not making an income.",
			origin:"Kevin Kruse"
		},
		{
			quote:"The mind is everything. What you think you become.",
			origin:"Alice Walker"
		},
		{
			quote:"Believe you can and you're halfway there.",
			origin:"Theodore Roosevelt"
		},
		{
			quote:"Happiness is not something readymade.  It comes from your own actions.",
			origin:"Dalai Lama"
		},
		{
			quote:"A person who never made a mistake never tried anything new.",
			origin:"Albert Einstein"
		},
		{
			quote:"Dream big and dare to fail.",
			origin:"Norman Vaughan"
		},
		{
			quote:"Dude, suckin' at something is the first step to being sorta good at something.",
			origin:"Jake, the dog"
		},
		{
			quote:"The only way to do great work is to love what you do.",
			origin:"Steve Jobs"
		},
		{
			quote:"Stay hungry, stay foolish.",
			origin:"Steve Jobs"
		},
		{
			quote:"The way get started is to quit talking and begin doing.",
			origin:"Walt Disney"
		},
		{
			quote:"The pessimist sees difficulty in every opportunity. The optimist sees the opportunity in every difficulty",
			origin:"Winston Churchill"
		},
		{
			quote:"Do not let yesterday take up too much of today.",
			origin:"Will Rogers"
		},
		{
			quote:"It is not whether you get knocked down, it's whether you get up.",
			origin:"Vince Lombardi"
		},
		{
			quote:"Failure will never overtake me if my determination to succeed is strong enough.",
			origin:"Og Mandino"
		},
		{
			quote:"The man who has confidence in himself gains the confidence of others.",
			origin:"Hasidic Proverb"
		},
		{
			quote:"You are never to old to set another goal or to dream a new dream.",
			origin:"C.S. Lewis"
		}
	];

var colors = [ 
	"#0E4FA0",
	"#FBD242", 
	"white", 
	"black",  
	"#D81F70",
	"#B2D16C"
];

var numberOfQuotes = 24; //Current number of quotes, change this if you add more of them.
var numberOfColors = 6;

function getQuote(){

	$("body").fadeOut(500, function(){

		var quoteNumber = Math.floor(Math.random() * numberOfQuotes);
		var colorNumber01 = Math.floor(Math.random() * numberOfColors);
		var colorNumber02 = Math.floor(Math.random() * numberOfColors);

		while(colorNumber01 == colorNumber02){
			colorNumber02 = Math.floor(Math.random() * numberOfColors);
		}

		//Sets quote and the link for Twitter.
		$("#quote").html('\"' + quotesObj[quoteNumber].quote + '\"');
		$("#name").html('-' + quotesObj[quoteNumber].origin);
		$("#btnTwitter").attr("href","https://twitter.com/intent/tweet?text=" + '\"' + quotesObj[quoteNumber].quote + '\"' + " -" + quotesObj[quoteNumber].origin);

		//Sets colors based on the colors array and the random pick colorNumber does.
		$(".color01").css("color", colors[colorNumber01]);
		$(".quoteBox").css("border-color", colors[colorNumber01]);
		$("#btnNext").css("background-color", colors[colorNumber02]);
		$("body").css("background-color", colors[colorNumber02]);
	});

	$("body").fadeIn(500);

	
}
