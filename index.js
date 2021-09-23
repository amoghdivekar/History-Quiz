var readlineSync = require("readline-sync");

var score = 0;

var userName = readlineSync.question("What is your name? ");
console.log("Welcome " + userName);

function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer === answer) {
    console.log("Right!");
    score = score + 1;
  } else {
    console.log("Wrong!");
  }
  console.log("Current Score: " , score);
  console.log("-----------");
}

var questions = [{
  question: "In which place did Satyagraha first started by Mahatma Gandhi? ",
  answer: "champaran"
}, {
  question: "The first session of the All India Congress held in Bombay in 1920, was presided over by? ",
  answer: "Lala Lajpat Rai"
}, {
  question: "Who introduce English as official language? ",
  answer: "Charles Wood"
}, {
  question: "Who was the first to address Mahtma Gandhi as the Father of Nation ",
  answer: "Subhas Chandra Bose"
}, {
  question: "Who wrote the biography of Akbar - 'Akbarnama' Book of Akbar ",
  answer: "Abul Fazl"
}, {
  question: "Who had renamed the famous diamond 'Syamantaka-mani' as 'Kuh-e nur'? ",
  answer: "Nadir Shah"
}, {
  question: "Who had implemented the 'Doctrine of Lapse' policy in India? ",
  answer: "Lord Dalhousie"
}, {
  question: "Who said this 'Swaraj is my birthright and I shall have it'? ",
  answer: "Bal Gangadhar Tilak"
}, {
  question: "Who is the writer of the book 'Panchatantra'? ",
  answer: "Vishnu Sarma"
}, {
  question: "Who was first to introduce the silver coin named 'Rupia'? ",
  answer: "Shershah Suri"
}];

for(var i=0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}

console.log("YAY! You scored: ", score);