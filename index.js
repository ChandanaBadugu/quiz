function time10(){
    alert("ur time is up");
	//10secTimer
  }
  
setTimeout(time10, 10000);



// function time20(){
// 	alert("ur time is up");

// }

// setTimeout(time20,10000);

//   function msg() {
//     alert("Submitted successfully");}

function check(){
	var quiz = document.getElementById("quiz");
    var question1 = quiz.question1.value;
	var question2 = quiz.question2.value;
	var question3 = quiz.question3.value;
	var question4 = quiz.question4.value;
	var question5 = quiz.question5.value;


	//console.log(question1,question2)

    var correct = 0;

    if (question1 == "two") {
		correct++;
    }
	if (question2 == "blue") {
		correct++;
    }	

	if (question3 == "solid") {
		correct++;
    }	

	if (question4 == "marvel") {
		correct++;
    }	

	if (question5 == "yes") {
		correct++;
    }	





    var score;

    if (correct == 0) {
		score = 0;
	}

    if (correct == 1) {
		score = 10;
	}

    if (correct == 2) {
		score = 20;
	}

	if (correct == 3) {
		score = 30;
	}

	if (correct == 4) {
		score = 40;
	}

	if (correct == 5) {
		score = 50;
	}

	document.getElementById("message").innerHTML = score;
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct, well done";
	

}