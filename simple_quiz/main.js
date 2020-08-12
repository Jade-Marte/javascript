//const point = ask("Is the moon made of cheese?", "yes");

//console.log(point);

const questions = [
  "Is the sky blue?",
  "Do pigs fly?",
  "Is it cold in the room?",
  "Do you love JavaScript?",
];

const answers = ["yes", "no", "no", "yes"];

function ask(questions, answer) {
  for (let i = 0; i < questions.length; i++) {
    let ques = prompt(questions[i]);
    console.log(questions[i]);
    if (ques.toLowerCase() == answer[i]) {
      alert("Correct");
    } else {
      alert("Incorrect");
    }
  }
}
ask(questions, answers);
