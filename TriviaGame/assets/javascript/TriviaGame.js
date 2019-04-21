$("#startButton").on("click", function(){
	//THIS LOADS THE QUESTIONS AND ANSWERS FROM THE ramonesARRAY in the HTML
	quizLoad();
	//THE stopTime function disables the buttons so the player can no longer answer questions.
	setTimeout(stopTime, 1000 * 35);
	//THE CODE BELOW STARTS THE COUNTDOWN CLOCK ON THE PAGE
	run();
	//AFTER THE PLAYER STARTS THE GAME, I HIDE THE START BUTTON
	$("#startButton").attr("hidden", true);
	$("#nextQues").attr("hidden", false);
})
//I STOLE THIS CODE TO THE NEXT PAIR OF HASHMARKS FROM THE interval-solved ACTIVITY BECAUSE CODERS ARE LAZY!!!
var number = 35;
var intervalId;
function run() {
	clearInterval(intervalId);
	intervalId = setInterval(decrement, 1000);
  }

  function decrement() {
	number--;
	$("#timeLeft").html("<h2>Better start hoppin' cretin! You've got " + number + " seconds left!</h2>");
	if (number === 0) {
		clearInterval(intervalId);
		$("#timeLeft").html("<h2> </h2>");
	  stop();
	  alert("Time Up!");
	}
  }

 // 
var wins = 0;
var losses = 0;
//THIS CREATES SEVEN OBJECTS THAT I WILL 
function RamonesQuestion(quesR, ansR1, ansR2, ansR3, ansR4, corrNum) {	
	return {
		questionRamones: quesR,
		answers: [
			ansR1,
			ansR2,
			ansR3,
			ansR4	
		],   
		correctNum:corrNum
	};
} 
var question1 = RamonesQuestion("What was Dee Dee's real name?", "Dietrich Gunther", "Douglas Colvin", "David Jones", "Ronald Trump", "answer1"); 
var question2 = RamonesQuestion("What NY punk bar launched the Ramones' career?", "CBGB's", "Heebie Jeebie's", "JuJubes", "Applebee's", "answer0");
var question3 = RamonesQuestion("What bar in KC did the Ramones play in January 1978?", "One Block West", "The Merry-Go-Round", "Jimmy's Jigger", "Your Momma's Basement", "answer0");
var question4 = RamonesQuestion("Who replaced Tommy Ramone as the drummer?", "Eddie Ramone", "Vincey Ramone", "Marky Ramone", "Debbie Ramone", "answer2");
var question5 = RamonesQuestion("What was Joey's real name?", "Jeffrey Hyman", "Joel Eisenberg", "Joe Manelli", "Abe Schicklgruber", "answer0");
var question6 = RamonesQuestion("What area of Queens were the Ramones from?", "LaGuardia Gardens", "The Heights", "Forest Hills", "Raymore-Peculiar", "answer2");
var question7 = RamonesQuestion("What weapon does the eagle hold in its talons on the Ramones logo?", "baseball bat", "switchblade", "a stick of dynamite", "A picture of Rosie O'Donnell naked", "answer0");

var ramonesArray = [question1, question2, question3, question4, question5, question6, question7];

function stopTime (){
	//$("#timeLeft").html("<h2> </h2>");
	$("#timeLeft").html("<h2> </h2>");
	$("#startButton").attr("disabled", true);
	$(".answers").off("click");
	$("#nextQues").attr("disabled", true);
}

var quesCount = 0;
function quizLoad(){
	for (i=0; i < ramonesArray.length;i++) 	{
	$(".questionDiv").text(ramonesArray[quesCount].questionRamones);
	$("#answer0").text(ramonesArray[quesCount].answers[0]);
	$("#answer1").text(ramonesArray[quesCount].answers[1]);
	$("#answer2").text(ramonesArray[quesCount].answers[2]);
	$("#answer3").text(ramonesArray[quesCount].answers[3]);} 
}
 
$(".answers").on("click", function(){
	if ($(this).attr("id") === ramonesArray[quesCount].correctNum){
		wins++;
		$("#quesResultH3").text("GABBA GABBA HEY! You are one of us!");
	} else{
		losses++;
		//console.log("The else loop is working");
		$("#quesResultH3").text("Have you been sniffing glue again?  How can you not know that?");
	}
	$("#winsLosses").html("<p><h2>You have " + wins+ " right and " + losses+ " wrong.</h2></p>")
	quesCount++;
	console.log("quesCount is " + quesCount);

	if (quesCount < 7){
		//console.log("Inside the if statement, QuesCount is " +quesCount);
		$("#nextQues").on("click", function() {
			quizLoad();
		})}
		
	})



