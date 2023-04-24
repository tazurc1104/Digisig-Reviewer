const submitButton = document.querySelector(".submit");
const question1Answer = document.getElementById("q1");
const question2Answer = document.getElementById("q2");
const question3Answer = document.getElementById("q3");
const question4Answer = document.getElementsByName("q4");
const question5Answer = document.getElementsByName("q5");
const question6Answer = document.getElementById("q6");
const question7Answer = document.getElementById("q7");
const question8Answer = document.getElementById("q8");
const question9Answer = document.getElementById("q9");
const question10Answer = document.getElementById("q10");
const question11Answer = document.getElementById("q11");
const question12Answer = document.getElementById("q12");
const question13Answer = document.getElementById("q13");
const question14Answer = document.getElementById("q14");
const question15Answer = document.getElementById("q15");
const question16Answer = document.getElementById("q16");
const question17Answer = document.getElementById("q17");
const question18Answer = document.getElementsByName("q18");
const question19Answer = document.getElementById("q19");
const question20Answer = document.getElementsByName("q20");
const question21Answer = document.getElementById("q21");
const question22Answer = document.getElementById("q22");
const question23Answer = document.getElementsByName("q23");
const question24Answer = document.getElementsByName("q24");
const question25Answer = document.getElementById("q25");
const question26Answer = document.getElementById("q26");
const question27Answer = document.getElementsByName("q27");
const question28Answer = document.getElementsByName("q28");
const question29Answer = document.getElementById("q29");
const question30Answer = document.getElementsByName("q30");
const question31Answer = document.getElementById("q31");
const question32Answer = document.getElementsByName("q32");
const question33Answer = document.getElementsByName("q33");
const question34Answer = document.getElementsByName("q34");
const question35Answer = document.getElementsByName("q35");
const question36Answer = document.getElementsByName("q36");
const question37Answer = document.getElementsByName("q37");
const question38Answer = document.getElementsByName("q38");
const question39Answer = document.getElementsByName("q39");
const question40Answer = document.getElementsByName("q40");
const question41Answer = document.getElementsByName("q41");
const question42Answer = document.getElementsByName("q42");
const question43Answer = document.getElementsByName("q43");
const question44Answer = document.getElementsByName("q44");




var correct = 0;
var score = document.getElementById("score-value");
var scoreContainer = document.getElementById("score");
submitButton.addEventListener("click", function(){
    if (question1Answer.value === "signal"){
        question1Answer.style.backgroundColor = "green";
        correct++;
    }
    if (question2Answer.value === "noise"){
        question2Answer.style.backgroundColor = "green";
        correct++;
    }
    if (question3Answer.value === "signal"){
        question3Answer.style.backgroundColor = "green";
        correct++;
    }

    for (let i = 0; i < question4Answer.length; i++) {
        if (question4Answer[i].checked) {
          chosenAnswer = question4Answer[i].value;
          if (chosenAnswer === "A"){
            question4Answer[i].style.accentColor = "green";
            correct++;
          }
        }
    }

    for (let i = 0; i < question5Answer.length; i++) {
        if (question5Answer[i].checked) {
          chosenAnswer = question5Answer[i].value;
          if (chosenAnswer === "B"){
            question5Answer[i].style.accentColor = "green";
            correct++;
          }
        }
    }

    if (question6Answer.value === "one-dimensional signal"){
        question6Answer.style.backgroundColor = "green";
        correct++;
    }
    if (question7Answer.value === "two-dimensional signal"){
        question7Answer.style.backgroundColor = "green";
        correct++;
    }
    if (question8Answer.value === "multi-dimensional signal"){
        question8Answer.style.backgroundColor = "green";
        correct++;
    }

    if (question9Answer.value === "speech signals"){
        question9Answer.style.backgroundColor = "green";
        correct++;
    }
    if (question10Answer.value === "image signals"){
        question10Answer.style.backgroundColor = "green";
        correct++;
    }
    if (question11Answer.value === "system"){
        question11Answer.style.backgroundColor = "green";
        correct++;
    }
    if (question12Answer.value === "signal source"){
        question12Answer.style.backgroundColor = "green";
        correct++;
    }
    if (question13Answer.value === "system"){
        question13Answer.style.backgroundColor = "green";
        correct++;
    }
    if (question14Answer.value === "filter"){
        question14Answer.style.backgroundColor = "green";
        correct++;
    }

    if (question15Answer.value === "signal processing"){
        question15Answer.style.backgroundColor = "green";
        correct++;
    }
    if (question16Answer.value === "signal processing"){
        question16Answer.style.backgroundColor = "green";
        correct++;
    }
    if (question17Answer.value === "software program"){
        question17Answer.style.backgroundColor = "green";
        correct++;
    }
    for (let i = 0; i < question18Answer.length; i++) {
        if (question18Answer[i].checked) {
          chosenAnswer = question18Answer[i].value;
          if (chosenAnswer === "A"){
            question18Answer[i].style.accentColor = "green";
            correct++;
          }
        }
    }

    if (question19Answer.value === "algorithm"){
        question19Answer.style.backgroundColor = "green";
        correct++;
    }
    for (let i = 0; i < question20Answer.length; i++) {
        if (question20Answer[i].checked) {
          chosenAnswer = question20Answer[i].value;
          if (chosenAnswer === "A"){
            question20Answer[i].style.accentColor = "green";
            correct++;
          }
        }
    }
    if (question21Answer.value === "continuous-time signal"){
        question21Answer.style.backgroundColor = "green";
        correct++;
    }
    if (question22Answer.value === "discrete-time signal"){
        question22Answer.style.backgroundColor = "green";
        correct++;
    }
    for (let i = 0; i < question23Answer.length; i++) {
        if (question23Answer[i].checked) {
          chosenAnswer = question23Answer[i].value;
          if (chosenAnswer === "A"){
            question23Answer[i].style.accentColor = "green";
            correct++;
          }
        }
    }
    for (let i = 0; i < question24Answer.length; i++) {
        if (question24Answer[i].checked) {
          chosenAnswer = question24Answer[i].value;
          if (chosenAnswer === "B"){
            question24Answer[i].style.accentColor = "green";
            correct++;
          }
        }
    }
    if (question25Answer.value === "digital signal"){
        question25Answer.style.backgroundColor = "green";
        correct++;
    }
    if (question26Answer.value === "quantization"){
        question26Answer.style.backgroundColor = "green";
        correct++;
    }
    for (let i = 0; i < question27Answer.length; i++) {
        if (question27Answer[i].checked) {
          chosenAnswer = question27Answer[i].value;
          if (chosenAnswer === "A"){
            question27Answer[i].style.accentColor = "green";
            correct++;
          }
        }
    }
    for (let i = 0; i < question28Answer.length; i++) {
        if (question28Answer[i].checked) {
          chosenAnswer = question28Answer[i].value;
          if (chosenAnswer === "A"){
            question28Answer[i].style.accentColor = "green";
            correct++;
          }
        }
    }

    if (question29Answer.value === "aperiodic signal"){
        question29Answer.style.backgroundColor = "green";
        correct++;
    }
    for (let i = 0; i < question30Answer.length; i++) {
        if (question30Answer[i].checked) {
          chosenAnswer = question30Answer[i].value;
          if (chosenAnswer === "B"){
            question30Answer[i].style.accentColor = "green";
            correct++;
          }
        }
    }

    if (question31Answer.value === "signal model"){
        question31Answer.style.backgroundColor = "green";
        correct++;
    }
    for (let i = 0; i < question32Answer.length; i++) {
        if (question32Answer[i].checked) {
          chosenAnswer = question32Answer[i].value;
          if (chosenAnswer === "A"){
            question32Answer[i].style.accentColor = "green";
            correct++;
          }
        }
    }
    for (let i = 0; i < question33Answer.length; i++) {
        if (question33Answer[i].checked) {
          chosenAnswer = question33Answer[i].value;
          if (chosenAnswer === "B"){
            question33Answer[i].style.accentColor = "green";
            correct++;
          }
        }
    }
    for (let i = 0; i < question34Answer.length; i++) {
      if (question34Answer[i].checked) {
        chosenAnswer = question34Answer[i].value;
        if (chosenAnswer === "True"){
          question34Answer[i].style.accentColor = "green";
          correct++;
        }
      }
  }
  for (let i = 0; i < question35Answer.length; i++) {
    if (question35Answer[i].checked) {
      chosenAnswer = question35Answer[i].value;
      if (chosenAnswer === "True"){
        question35Answer[i].style.accentColor = "green";
        correct++;
      }
    }
  }
   for (let i = 0; i < question36Answer.length; i++) {
    if (question36Answer[i].checked) {
      chosenAnswer = question36Answer[i].value;
      if (chosenAnswer === "True"){
        question36Answer[i].style.accentColor = "green";
        correct++;
      }
    }
  }
  for (let i = 0; i < question37Answer.length; i++) {
    if (question37Answer[i].checked) {
      chosenAnswer = question37Answer[i].value;
      if (chosenAnswer === "False"){
        question37Answer[i].style.accentColor = "green";
        correct++;
      }
    }
  }
  for (let i = 0; i < question38Answer.length; i++) {
    if (question38Answer[i].checked) {
      chosenAnswer = question38Answer[i].value;
      if (chosenAnswer === "D"){
        question38Answer[i].style.accentColor = "green";
        correct++;
      }
    }
  }
  for (let i = 0; i < question39Answer.length; i++) {
    if (question39Answer[i].checked) {
      chosenAnswer = question39Answer[i].value;
      if (chosenAnswer === "B"){
        question39Answer[i].style.accentColor = "green";
        correct++;
      }
    }
  }
  for (let i = 0; i < question40Answer.length; i++) {
    if (question40Answer[i].checked) {
      chosenAnswer = question40Answer[i].value;
      if (chosenAnswer === "D"){
        question40Answer[i].style.accentColor = "green";
        correct++;
      }
    }
  }
  for (let i = 0; i < question41Answer.length; i++) {
    if (question41Answer[i].checked) {
      chosenAnswer = question41Answer[i].value;
      if (chosenAnswer === "True"){
        question41Answer[i].style.accentColor = "green";
        correct++;
      }
    }
  }

  
    if (question42Answer[1].checked){
      question42Answer[1].style.accentColor = "green";
      correct++;
    }
    if (question42Answer[2].checked){
      question42Answer[2].style.accentColor = "green";
      correct++;
    }
    if (question42Answer[3].checked){
      question42Answer[3].style.accentColor = "green";
      correct++;
    }
    if (question42Answer[4].checked){
      question42Answer[4].style.accentColor = "green";
      correct++;
    }

    if (question43Answer[0].value === "A"){
      question43Answer[0].style.backgroundColor = "green";
      correct++;
    }
    if (question43Answer[1].value === "B"){
      question43Answer[1].style.backgroundColor = "green";
      correct++;
    }
    if (question43Answer[2].value === "E"){
      question43Answer[2].style.backgroundColor = "green";
      correct++;
    }
    if (question43Answer[3].value === "D"){
      question43Answer[3].style.backgroundColor = "green";
      correct++;
    }
    if (question43Answer[4].value === "C"){
      question43Answer[4].style.backgroundColor = "green";
      correct++;
    }





    for (let i = 0; i < question44Answer.length; i++) {
      if (question44Answer[i].checked) {
        chosenAnswer = question44Answer[i].value;
        if (chosenAnswer === "True"){
          question44Answer[i].style.accentColor = "green";
          correct++;
        }
      }
    }
    scoreContainer.style.opacity = 1;
    score.innerHTML = "Score: " + correct
});

