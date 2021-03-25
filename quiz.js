const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");

let score = document.querySelector(".score");
let highScore = document.querySelector(".notification-score")
let scoreV = 0;
let HighScore = 0;

var x = document.getElementById("myAudio");
var answer = 0;

const progressBar = document.getElementsByClassName('progress-bar')[0]
setInterval(() => {
  const computedStyle = getComputedStyle(progressBar)
  const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0
  progressBar.style.setProperty('--width', width + .1 )
  if (width  >= 90)
{  return window.location.assign('gameover.html')}


}, 10)
function random_equation(){
  var val1 = Math.floor(Math.random() * 10);
  var val2 = Math.floor(Math.random() * 10);
  var val3 = Math.floor(Math.random() * 10);
  var dummyAnswer1 = Math.floor(Math.random() * 8);
  var dummyAnswer2 = Math.floor(Math.random() * 8);

  var random = [];
  answer = eval(val1 + val2 + val3);

  document.getElementById("value1").innerHTML = val1;
  document.getElementById("value2").innerHTML = val2;
  document.getElementById("value3").innerHTML = val3;


  var randomAnswers = [answer, dummyAnswer1, dummyAnswer2];

  for (var randomAnswers = [answer, dummyAnswer1, dummyAnswer2], i = randomAnswers.length; i--;){
    random.push(randomAnswers.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);
  };

  option1.innerHTML = random[0];
  option2.innerHTML = random[1];
  option3.innerHTML = random[2];


};


option1.addEventListener("click", function(){
    if(option1.innerHTML == answer){
      random_equation();
      scoreV += 1
      score.textContent = scoreV;
      HighScore = score.textContent;


    }
    else{

      x.play();
    }
});
option2.addEventListener("click", function(){
    if(option2.innerHTML == answer){
      random_equation();
      scoreV += 1
      score.textContent = scoreV;

    }
    else{
      x.play();
    }
});
option3.addEventListener("click", function(){
    if(option3.innerHTML == answer){
      random_equation();
      scoreV += 1
      score.textContent = scoreV;

    }
    else{
      x.play();
    }
});

random_equation()


