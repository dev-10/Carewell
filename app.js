function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length;i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Assesment Result</h1>";
    
	if(quiz.score<10){
	gameOverHTML += "<h2 id='score'> Your assesment result:you did not have any risk </h2>";
	}
	else{
		gameOverHTML += "<h2 id='score'> Your assesment result:you have to inform to authorities that you have chances of getting COVID-19</h2>";
	}
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};


var questions = [
    new Question("Are you a smoker?", ["Yes", "No"], "Yes"),
    new Question("Have you been diagnosed with high blood pressure?", ["Yes", "No"], "Yes"),
    new Question("Do you have diabetes?", ["Yes", "No"], "Yes"),
    new Question("Have you had a fever in the last 24 hours?", ["Yes", "No"], "Yes"),
    new Question("Do you have a cough?", ["Yes", "No"], "Yes"),
	new Question("Do you have extreme exhaustion?", ["Yes", "No"], "Yes"),
    new Question("Do you have a headache?", ["Yes", "No"], "Yes"),
    new Question("Do you have generalized muscle aches and pains?", ["Yes", "No"], "Yes"),
    new Question("Do you have a sore throat?",["Yes", "No"], "Yes"),
    new Question("Do you have diarrhea?", ["Yes", "No"], "Yes"),
	 new Question("Do you have a reduction in/loss of your sense of smell or taste?", ["Yes", "No"], "Yes"),
	  new Question("Do you have a runny nose?", ["Yes", "No"], "Yes"),
	   new Question("Do you have red or sore eyes, or are they producing an unusual discharge?", ["Yes", "No"], "Yes"),
	    new Question("Have you been informed that you had close contact in the last 14 days to a person who is positive for COVID-19? (For example, by the health authorities, a contact tracing app or an affected individual)", ["Yes", "No"], "No"),
		 new Question("Have you had a heart attack in the past?", ["Yes", "No"], "Yes"),
		  new Question("Do you regularly suffer from chest pain?", ["Yes", "No"], "Yes"),
		   new Question("Do you have a chronic lung condition? (for example asthma, or chronic bronchitis)", ["Yes", "No"], "Yes"),
	new Question("Do you have cancer?", ["Yes", "No"], "Yes"),
	new Question("Have you been told that you have a condition that weakens your immune system? (for example if you are having chemotherapy, if you’ve had an organ transplant, if you have HIV/AIDS or if you had your spleen removed)", ["Yes", "No"], "Yes")
	
	
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();





