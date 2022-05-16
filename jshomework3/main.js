const numberOfQuestion = document.getElementById('number-of-question'); //question number
const numberOfAllQuestions = document.getElementById('number-of-all-questions'); //All questions number



const question = document.getElementById('question'); //question

const option1 = document.querySelector('.option1'), //var1
      option2 = document.querySelector('.option2'), //var2
      option3 = document.querySelector('.option3'), //var3
      option4 = document.querySelector('.option4'); //var4
const optionElements = document.querySelectorAll('.option'); //all variants

const btnNext = document.getElementById('btn-next'); //'next' button 


const answersTracker = document.getElementById('answers-tracker'); //tracker's wrapper



const quizOverModal = document.querySelector('.quiz-over-modal');
const correctAnswer = document.getElementById('correct-answer'); //correct answers count
const numberOfAllQuestions2 = document.getElementById('number-of-all-questions-2'); //correct answers count (in modal window)
const btnTryAgain = document.getElementById('btn-try-again'); //'retry' button

let indexOfQuestion, //question index
    indexOfPage = 0, //Page index
    score = 0; //quiz result


const questions = [
    {
        question: 'Результат выражения "2*2"+2 ?',
        options: [
            '8',
            '6',
            'undefined',
            '2*22'
        ],
        rightAnswer: 3
    },
    {
        question: 'Отличная драма ?',
        options: [
            'Clannad: After story',   
            'Golden time',
            'Plastic memories',
            'Your Lie in April'
        ],
        rightAnswer: 0
    },
    {
        question: 'аоыаооыы ',
        options: [
           'Виктор Корнеплод',
           'иллюминаты',
           'что?',
           'чзх'
        ],
        rightAnswer: 0
    }
];
let completedAnswers = [

];






numberOfAllQuestions.innerHTML = questions.length;
const randomQuestion = () => {
    let randomNumber = Math.floor(Math.random()*questions.length); //randomnumber generation
    let hitDuplicate = false; //same questions check 
    if(indexOfPage == questions.length){
        quizOver();
    } else {
        if(completedAnswers.length > 0){
            completedAnswers.forEach(item => {
                if(item == randomNumber){
                    hitDuplicate = true;
                }
            });
            if(hitDuplicate){
                randomQuestion();    
            } else{
                indexOfQuestion = randomNumber;
                load();
            }
        }
        if(completedAnswers.length == 0){
            indexOfQuestion = randomNumber;
            load();
        }
        completedAnswers.push(indexOfQuestion);
    }
};
const quizOver = () => {
    quizOverModal.classList.add('active');
    correctAnswer.innerHTML = score;
    numberOfAllQuestions2.innerHTML = questions.length;
};
const load = () => {
    question.innerHTML = questions[indexOfQuestion].question;

    option1.innerHTML = questions[indexOfQuestion].options[0];
    option2.innerHTML = questions[indexOfQuestion].options[1];
    option3.innerHTML = questions[indexOfQuestion].options[2];
    option4.innerHTML = questions[indexOfQuestion].options[3];

    numberOfQuestion.innerHTML = indexOfPage + 1;
    indexOfPage++;
};








const checkAnswer = el => {
    if(el.target.dataset.id == questions[indexOfQuestion].rightAnswer){
        el.target.classList.add('correct');
        updateAnswerTracker('correct');
        score++;
    } else{
        el.target.classList.add('wrong');
        optionElements[questions[indexOfQuestion].rightAnswer].classList.add('correct');
        updateAnswerTracker('wrong');
    }
    optionElements.forEach(item => {
        item.classList.add('disabled');
    });
};
for(option of optionElements){
    option.addEventListener('click', e => {
        checkAnswer(e);
    })
}



const validate = () => {
    if(!optionElements[0].classList.contains('disabled')){
        alert('Э на вопрос ответь баран')
    } else{
        clearQuestion();
        randomQuestion();
    }
}

const clearQuestion = () => {
    optionElements.forEach(item => {
        item.classList.remove('disabled');
        item.classList.remove('correct');
        item.classList.remove('wrong');
    })
}

const answerTracker = () => {
    questions.forEach(()=> {
        const div = document.createElement('div');
        answersTracker.appendChild(div);
    })
}
const updateAnswerTracker = status => {
    answersTracker.children[indexOfPage-1].classList.add(`${status}`);
}

window.addEventListener('load', ()=> {
    randomQuestion();
    answerTracker();
});
btnNext.addEventListener('click', ()=> {
    validate();
})
btnTryAgain.addEventListener('click', ()=> {
    window.location.reload();
})