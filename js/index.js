var startGameButton = document.querySelector('#startGameButton');

    startGameButton.addEventListener('click', function(event){
    event.preventDefault();
    console.log('ola');

    welcome = document.querySelector('.welcome');
    welcome.style.display = 'none';

    var quizz = document.querySelector('#quizz');

    var question = document.createElement('h2');
    var answers = document.createElement('div');

    var answerA = document.createElement('p');
    var answerB = document.createElement('p');
    var answerC = document.createElement('p');
    var answerD = document.createElement('p');

    quizz.appendChild(question);
    quizz.appendChild(answers);
    
    answers.appendChild(answerA);
    answers.appendChild(answerB);
    answers.appendChild(answerC);
    answers.appendChild(answerD);

    question.textContent = 'Por que o quadro negro é verde?';
    answerA.textContent = 'Porque sim.';
    answerB.textContent = 'Porque antigamente era feito de um material negro.';
    answerC.textContent = 'Porque foi criado pra causar medo e hoje a cor verde é utilizada para facilitar a leitura.';
    answerD.textContent = 'Não sei.';
});



