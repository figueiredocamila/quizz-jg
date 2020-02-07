var startGameButton = document.querySelector('#startGameButton');

    startGameButton.addEventListener('click', function(event){
    event.preventDefault();
    console.log('ola');

    var welcome = document.querySelector('.welcome');
    welcome.style.display = 'none';

    var quizz = document.querySelector('.quizz');
    quizz.style.display = 'block';

    fillQuestion(currentQuestion);
    timeOut()
    
});

var arr = [
    {
        question: "Por que o quadro negro é verde?",
        answers: {
            a: "Porque sim.",
            b: "Porque antigamente era feito de um material negro.",
            c: "Porque foi criado pra causar medo e hoje a cor verde é utilizada para facilitar a leitura."
        },
        correctAnswer: a
    },
    {
        question: "Se as pessoas vieram dos macacos, por que ainda existem macacos?",
        answers: {
            a: "Os macacos tem evolução mais lenta, mas um dia se tornarão humanos.",
            b: "Macacos são legais.",
            c: "Os serem humanos e os macacos evoluíram da mesma especie anscestral, mas de maneiras diferentes."
        },
        correctAnswer: b
    },
    {
        question: "Se fantasmas podem atravessar paredes, por que não caem através do chão?",
        answers: {
            a: "Fantasmas costumam repetir seus comportamentos ancestrais",
            b: "Fantamas sabem voar",
            c: "Não existem fantamas"
        },
        correctAnswer: b
    },
];

var currentQuestion = 0;

var question = document.getElementById('question');
var optionA = document.getElementById('a');
var optionB = document.getElementById('b');
var optionC = document.getElementById('c');
var questionsClassEl = document.querySelectorAll('.answer');

var score = 0;
var page = 1;

var fillQuestion = function(index) { 
    question.textContent = arr[index].question;
    optionA.textContent = arr[index].answers.a;
    optionB.textContent = arr[index].answers.b;
    optionC.textContent = arr[index].answers.c;
}

questionsClassEl.forEach(function(item, i) {     
    item.addEventListener('click', function(event) { 

        var selectedAnswer = event.target.id; 
        
        var correctAnswer = arr[currentQuestion].correctAnswer; 

        var correctAnswerValue = arr[currentQuestion].answers[correctAnswer]; 

        if(selectedAnswer === correctAnswer) {
        score++;
        }

        
        currentQuestion++;

        if(currentQuestion > (arr.length - 1)) { 
            var quizz = document.querySelector('.quizz');
            quizz.style.display = 'none';
            telaFinal();
            scoreMessage ();
            
        } else {
            fillQuestion(currentQuestion);
            count = 10;
            score;
        }
    });
});



function telaFinal(){
    var tela = document.createElement('p');
    tela.textContent = 'acabou';
    var telaFinal = document.querySelector('.telaFinal');
    telaFinal.appendChild(tela).textContent;

}

function scoreMessage() {

    var textScore = document.querySelector('.mensagem');
    if (score === 2) {
        textScore.textContent = 'TOPZERA, SUAS RESPOSTAS NÃO TEM NADA HAVER COM PORRA NENHUMA';
    }
    else if (score < 2 ){
        textScore.textContent = 'VOCÊ NÃO É TÃO INTELIGENTE ASSIM'
    }
    else if (score == 0) {
        textScore.textContent = 'PARABÉNS!! VOCE ERROU TODAS AS RESPOSTAS!! SABE O QUE SIGNIFICA? VOCÊ NÃO ENTENDEU A LÓGICA DO JOGO';
    }
}

var count = 10;
// CONTAGEM REGRESSIVA
function timeOut() {
    if ((count-1) >= 0) {
    count = count - 1;
    document.getElementById("time").textContent = count;
    setTimeout('timeOut();', 1000);
    }
    // else {

    //     quizz.style.display = 'none';
    //     var msgFail = document.createElement('p');
    //     msgFail.textContent = 'SEM TEMPO IRMÃO';
    //     fail = document.querySelector('.fail');
    //     fail.appendChild(msgFail).textContent;

    // }
}

function page