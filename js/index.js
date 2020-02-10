var startGameButton = document.querySelector('#startGameButton');

var count = 5;

startGameButton.addEventListener('click', function(event){

    var welcome = document.querySelector('.welcome');
    welcome.style.display = 'none';

    var quizz = document.querySelector('.quizz');
    quizz.style.display = 'block';

    timeOut();
    showProgress();
    fillQuestion(currentQuestion);
    
});


var score = 0;

var currentQuestion = 0;

var question = document.getElementById('question');
var optionA = document.getElementById('a');
var optionB = document.getElementById('b');
var optionC = document.getElementById('c');
var questionsClassEl = document.querySelectorAll('.answer');

var fillQuestion = function(index) { 
    question.textContent = arr[index].question;
    optionA.textContent = arr[index].answers.a;
    optionB.textContent = arr[index].answers.b;
    optionC.textContent = arr[index].answers.c;
}

questionsClassEl.forEach(function(item, i) {     
    item.addEventListener('click', function(event) { 

        var correct = arr[currentQuestion].correctAnswer.id;
        var selected = event.target.id;

        if(correct === selected) {
            score++;
            console.log('score')
        }

        currentQuestion++;

        if(currentQuestion > (arr.length - 1)) { 
            var quizz = document.querySelector('.quizz');
            quizz.style.display = 'none';
            scoreMessage ();
            
        } else {
            fillQuestion(currentQuestion);
            showProgress();
            count = 10;
        } 

        
    });
});


function scoreMessage() {

    var finalScore = document.getElementById('finalMessage');
    finalScore.textContent = 'Você acertou um total de ' + score + ' respostas';


    var textScore = document.querySelector('.mensagem');

    if (score > 2) {
        textScore.textContent = 'TOPZERA, SUAS RESPOSTAS NÃO TEM NADA HAVER COM PORRA NENHUMA';
    }
    else if (score <= 2 && score > 0){
        textScore.textContent = 'VOCÊ NÃO É TÃO INTELIGENTE ASSIM'
    }
    else{
        textScore.textContent = 'PARABÉNS!! VOCE ERROU TODAS AS RESPOSTAS!! SABE O QUE SIGNIFICA? VOCÊ NÃO ENTENDEU A LÓGICA DO JOGO';
    }
}



// CONTAGEM REGRESSIVA
function timeOut() {
    if ((count-1) >= 0) {
    count = count - 1;
    document.getElementById("time").textContent = count;
    setTimeout('timeOut();', 1000);
    }
    if (count == 0){
        document.getElementById("timeIsUP") = timeIsUpMessage;
        timeIsUpMessage.style.display = 'block';
        timeIsUpMessage.textContent = 'Sem tempo irmão, clique para continuar';
    }
}

function showProgress (){
    var progress = document.getElementById('progress');
    progress.textContent = (currentQuestion + 1) +' de ' + arr.length;
}

