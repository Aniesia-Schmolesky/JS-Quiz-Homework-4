var questions = [
    {
        title: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: "console log"
    },
    {
        title: "Arrays in Javascript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    },
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    
    
];
var score = 0;
var questionNumber = 0;

var time = document.querySelector("#time");
var timer = document.querySelector("#startingTime");
var javaquestions = document.querySelector("#javaquestions");
var card = document.querySelector("#card");

var timeDeduction = 10;
var secondsLeft = 101;
var startingTime = 0;
var createListItem = document.createElement("ul");

timer.addEventListener("click", function () {
    if (startingTime === 0) {
        startingTime = setInterval(function () {
            secondsLeft--;
            time.textContent = "Time: " + secondsLeft;
            if (secondsLeft <= 0) {
                clearInterval(startingTime);
                finished();
                time.textContent = "Game Over";
            }
        }, 1000);
    }
    render(questionNumber);
});

function render(questionNumber) { 
    javaquestions.innerHTML = "";
    createListItem.innerHTML = "";
    for (var i = 0; i < questions.length; i++) {
        var userQuestion = questions[questionNumber].title;
        var userChoices = questions[questionNumber].choices;
        javaquestions.textContent = userQuestion;
    }
    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        javaquestions.appendChild(createListItem);
        createListItem.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
}
function compare(event) {
    var element = event.target;
    if (element.matches("li")) {
        var choiceCompare = document.createElement("div");
        choiceCompare.setAttribute("id", "choiceCompare");
        
        if (element.textContent == questions[questionNumber].answer) {
            score++;
            choiceCompare.textContent = "Correct, the answer is " + questions[questionNumber].answer;
        } else {
            secondsLeft = secondsLeft - timeDeduction;
            choiceCompare.textContent = "Incorrect, the correct answer is " + questions[questionNumber].answer;
        }
    }
    questionNumber++;

    if (questionNumber >= questions.length) {
        finished();
        choiceCompare.textContent = "End of quiz." + " " + "You got  " + score + "/" + questions.length + " correct.";
    } else {
        render(questionNumber);
    }
    javaquestions.appendChild(choiceCompare);
}
function finished() {
    javaquestions.innerHTML = "";
    time.innerHTML = "";

    var createH1 = document.createElement("h1");
    createH1.setAttribute("id", "createH1");
    createH1.textContent = "Finished"

    javaquestions.appendChild(createH1);

    var createP = document.createElement("p");
    createP.setAttribute("id", "createP");

    javaquestions.appendChild(createP);

    if (secondsLeft >= 0) {
        var timeRemaining = secondsLeft;
        var createP2 = document.createElement("p");
        clearInterval(startingTime);
        createP.textContent = "Your final score is: " + timeRemaining;

        javaquestions.appendChild(createP2);
    }

    var createLabel = document.createElement("label");
    createLabel.setAttribute("id", "createLabel");
    createLabel.textContent = "Enter your initials: ";

    javaquestions.appendChild(createLabel);

    var createInput = document.createElement("input");
    createInput.setAttribute("type", "text");
    createInput.setAttribute("id", "initials");
    createInput.textContent = "";

    javaquestions.appendChild(createInput);

    var createSubmit = document.createElement("button");
    createSubmit.setAttribute("type", "submit");
    createSubmit.setAttribute("id", "Submit");
    createSubmit.textContent = "Submit";

    javaquestions.appendChild(createSubmit);

    createSubmit.addEventListener("click", function () {
        var initials = createInput.value;

        if (initials === 0) {

            console.log("Must enter initials!");

        } else {
            var finalScore = {
                initials: initials,
                score: timeRemaining
            }
            console.log(finalScore);
            window.location.replace("index2.html");
        }
    });

}
