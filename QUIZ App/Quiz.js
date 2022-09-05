var quizData = [
  {
    id: 1,
    question: "Which was not one of Voldemort's Horcruxes?",
    name: "one",
    option1: "Harry",
    option2: "Nagini",
    option3: "Helga's Diadem",
    option4: "Tom Riddle's Dairy",
    correctoption: "Helga's Diadem"
  },
  {
    id: 2,
    question: "Which of these are not one of Hagrid's many pets?",
    name: "two",
    option1: "Grawp",
    option2: "Fluffy",
    option3: "Aragog",
    option4: "Noberta",
    correctoption: "Grawp"
  },
  {
    id: 3,
    question: "Which class did Serverus Snape always want to teach?",
    name: "three",
    option1: "Portions",
    option2: "Charms",
    option3: "Defense Against Dark Arts",
    option4: "Transfiguration",
    correctoption: "Defense Against Dark Arts"
  },
  {
    id: 4,
    question: "Which Hogwarts house did Moaning Myrtle belong in?",
    name: "four",
    option1: "Gryffindor",
    option2: "Slytherin",
    option3: "Ravenclaw",
    option4: "Hufflepuff",
    correctoption: "Ravenclaw"
  },
  {
    id: 5,
    question: "What class did Neville end up teaching at Hogwarts?",
    name: "five",
    option1: "Astronomy",
    option2: "Herbology",
    option3: "Charms",
    option4: "Muggle Studies",
    correctoption: "Herbology"
  }
];

var form = document.getElementById("quizForm");

for (let i = 0; i < 5; i++) {
  createQuestion(i);
}

function createQuestion(id) {
  var question = document.getElementById("question");
  var questionName = document.createElement("p");
  var counter = id + 1;
  questionName.innerHTML += "Q" + counter + ".";
  questionName.innerHTML += quizData[id].question;
  question.appendChild(questionName);
  callAddChoice(id);
  question.innerHTML += "<hr>";
  form.appendChild(question);
}

function callAddChoice(id) {
  addChoice(quizData[id].name, quizData[id].option1, quizData[id].option1);
  addChoice(quizData[id].name, quizData[id].option2, quizData[id].option2);
  addChoice(quizData[id].name, quizData[id].option3, quizData[id].option3);
  addChoice(quizData[id].name, quizData[id].option4, quizData[id].option4);
}

function addChoice(name, value, text) {
  var question = document.getElementById("question");
  var label = document.createElement("label");
  var element = document.createElement("input");
  element.setAttribute("type", "radio");
  element.setAttribute("value", value);
  element.setAttribute("name", name);
  label.appendChild(element);
  label.innerHTML += " " + "   " + text;
  label.innerHTML += "<br>";
  question.appendChild(label);
}
var checkedAnswers = [];
var submitButtonWrapper = document.createElement("div");
submitButtonWrapper.id = "submit-button-wrapper";
var submit = document.createElement("button");
submit.type = "submit";
submit.innerHTML = "Submit";
submit.id = "submit";
submitButtonWrapper.appendChild(submit);
form.appendChild(submitButtonWrapper);

submit.onclick = function (e) {
  e.preventDefault();
  for (let i = 0; i < 5; i++) {
    var val = getRadioValue(form, quizData[i].name);
    checkedAnswers[i] = val;
  }

  var count = 0;
  for (let i = 0; i < checkedAnswers.length; i++) {
    if (checkedAnswers[i] == quizData[i].correctoption) {
      count++;
    }
  }
  document.getElementById("score").innerHTML = count + "/5";
};

function getRadioValue(form, name) {
  var val;
  var radio = form.elements[name];
  for (var i = 0, len = radio.length; i < len; i++) {
    if (radio[i].checked) {
      val = radio[i].value;
      break;
    }
  }
  return val;
}
