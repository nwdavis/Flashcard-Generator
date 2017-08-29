//requiring the constructor files
var basicFC = require("./BasicCard.js");
var clozeFC = require("./ClozeCard.js");
var inquirer = require("inquirer");

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
function start(){

  inquirer.prompt([
    {
      name: "action",
      choices: ["Use Existing Cards", "Make New Cards"]
      message: "Welcome to Flashy Cards. What would you like to do?"
    }
  ]).then(function(answer){
    if (answer.action === "Use Existing Cards"){
      inquirer.prompt([
        {
          name: "clozeOrBasic",
          choices: ["Cloze", "Basic"],
          message: "What type of card do you want to use?"
        }
      ]).then(function(answer){
        if (answer.clozeOrBasic === "Cloze"){
          printClozeCards();
        } else if (answer.clozeOrBasic === "Basic"){
          printBasicCards();
        }
      });      
    } else if (answer.action === "Make New Cards"){
      inquirer.prompt([
        {
          name: "cardChoice",
          choices: ["Basic", "Cloze"],
          message: "What type of card do you want to create?"
        }
      ]).then(function(answer){
        if (answer.cardChoice === "Basic"){
          basic();
        } else if (answer.cardChoice === "Cloze"){
          cloze();
        }
      });
    }  
  });
    

  function basic(){
    inquirer.prompt([
      {
        name: "question",
        type: "input",
        message: "Enter the question."
      },
      {
        name: "answer",
        type: "input",
        message: "Enter the answer."
      }
    ]).then(function(answer){
      basicQuestions.push(answer.question);
      answers.push(answer.answer);
      start();
    });
  };
};

function cloze(){
  inquirer.prompt([
    {
      name: "question",
      type: "input",
      message: "Enter the question."
    },
    {
      name: "answer",
      type: "input",
      message: "Enter the answer."
    }
  ]).then(function(answer){
    clozeQuestions.push(answer.question);
    answers.push(answer.answer);
    start();
  });
};
  


function printBasicCards(){
  inquirer.prompt([
    {
      name: "questions",
      choices: [basicQuestions.forEach(function(question){})],
      message: "Select a question to see the answer."
    }
  ]).then(function(answer){
    console.log(answers[basicQuestions.indexOf(answer)]);
  });
};


start();