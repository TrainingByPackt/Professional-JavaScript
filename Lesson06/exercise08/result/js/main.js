import { questions } from './questions.js';

let quizDiv = document.getElementById("quiz");
let scoreDiv = document.getElementById("score");

let score = 0;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

for(let q in questions) {
  let id = q;
  q = questions[q];  
  let qDiv = document.createElement("div");
  let qSpan = document.createElement("p");
  let br = document.createElement("br");
  qDiv.setAttribute("question", id);
  qDiv.setAttribute("id", "q" + id);
  qSpan.textContent = q.text; 
  qDiv.appendChild(qSpan);
  let answers = q.wrong;
  answers = answers.map(function(answer) {
    return {"answer": answer,
            "question": id,
            "true": false}
  });
  let rightAnswer = {
    "answer": q.right,
    "question": id,
    "true": true
  }
  answers.push(rightAnswer);
  shuffleArray(answers);
  let i =0;
  answers.forEach(function(a) {
    let aBtn = document.createElement("button");
    aBtn.textContent = a.answer;
    aBtn.setAttribute("id", "q" + id + "a" + i);
    aBtn.addEventListener('click', function() {
      if(a.true) {
        score++;
        scoreDiv.textContent = score;
      }
      var query = '[question="'+a.question+'"]';
      var instances = document.querySelectorAll(query);
      instances[0].remove();
    });
    qDiv.appendChild(aBtn);
    i++;
  });
  qDiv.appendChild(br);
  quizDiv.appendChild(qDiv);
}
