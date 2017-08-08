//requiring the constructor files
var basicFC = require("./BasicCard.js");
var clozeFC = require("./ClozeCard.js");

//questions in basic format
var basicQuestions = [
    "Who is the current Senate Minority Leader?", 
    "When was the Declaration of Independence signed?",
    "How many stars were on the flag of the USA during World War One?",
    "What were the two theaters of World War Two?",
    "Who was President during the Bay of Pigs invasion?"

];

//questions that can have the cloze redacted
var clozeQuestions = [
    "Chuck Schumer is the current Senate Minority Leader.",
    "The Declaration of Independence was signed in 1776.",
    "There were 48 stars on the US flag during World War One.",
    "The two theaters of World War Two were European and Pacific.",
    "John F. Kennedy was President during the Bay of Pigs invasion."
];

//answers that act as both the back and the cloze for both question arrays
var answers = ["Chuck Schumer", "1776", "48", "European and Pacific", "John F. Kennedy" ]

//example front/back card
var basicExample = new basicFC(basicQuestions[0], answers[0])
//example cloze card
var clozeExample = new clozeFC(clozeQuestions[2], answers[2])

//printing out examples to the console
console.log(`--------------------`);
basicExample.printFront();
basicExample.printBack();
console.log(`--------------------`);
console.log(`--------------------`);
clozeExample.printPartial();
clozeExample.printFullText();
console.log(`--------------------`);
