let questions = [
    {
        "question": "Wer hat html erfunden?",
        "answer_1": "Zyaar",
        "answer_2": "Jamal",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Junus Ergin",
        "right_answer": 3

    },

    {
        "question": "Was steht für HTML ?",
        "answer_1": "Hypertext Markup Language",
        "answer_2": "Hyper Tranfer more Lenght",
        "answer_3": "High Transport Motre Lary",
        "answer_4": "Keine Antwort ist Richtig",
        "right_answer": 1

    },

    {
        "question": "Wofür steht Css?",
        "answer_1": "Copy style Sheet",
        "answer_2": "Cascading Style Sheet",
        "answer_3": "Cal sal sal",
        "answer_4": "Car sell sold",
        "right_answer": 2
    },

    {
        "question": "Was ist eine Endung für eine HTML Datei?",
        "answer_1": "--.htm",
        "answer_2": "--.web",
        "answer_3": "--.html",
        "answer_4": "--.l",
        "right_answer": 3

    },


    {
        "question": "Was hilft einen um den Style von HTML-Dateien zu verbessern?",
        "answer_1": "Cct",
        "answer_2": "Ccs",
        "answer_3": "jss",
        "answer_4": "Css",
        "right_answer": 4

    },
];

let = rightQuestions = 0;

let currentQuestion = 0;

function init() {
    document.getElementById("all-questions").innerHTML = questions.length;

    showCurrentQuestion();
}

function showCurrentQuestion() {
    let question = questions[currentQuestion];

    if (currentQuestion >= questions.length) {
        //TODo: Show End SCreen

        document.getElementById('endScreen').style = '';
        document.getElementById('questionBody').style = 'display: none';
        document.getElementById('amount-of-question').innerHTML = questions.length;
        document.getElementById('amount-of-right-questions').innerHTML = rightQuestions;
        document.getElementById('endScreenCup').src = 'img/cup.jpg';



    } else {//show question
        let percent = (currentQuestion + 1)/ questions.length ;
        percent = Math.round(percent * 100);
        document.getElementById('prograssBar').innerHTML = `${percent} %`;
        document.getElementById('prograssBar').style= `width:${percent}%`;
        document.getElementById("question-number").innerHTML = currentQuestion + 1;
        document.getElementById("question-text").innerHTML = question['question'];
        document.getElementById("answer_1").innerHTML = question['answer_1'];
        document.getElementById("answer_2").innerHTML = question['answer_2'];
        document.getElementById("answer_3").innerHTML = question['answer_3'];
        document.getElementById("answer_4").innerHTML = question['answer_4'];
    }
}

function answer(selection) {
    let question = questions[currentQuestion];
    //console.log('Selected answer is ', selection);
    let selectedQuestionNumber = selection.slice(-1); // die letzt Buchstabe holen
    //console.log('selectedQuestionNumber is ', selectedQuestionNumber);
    //console.log('current question is ', question['right_answer']);
    let idOfRightAnswer = `answer_${question['right_answer']}`;
    if (selectedQuestionNumber == question['right_answer']) {
        rightQuestions++;
       // console.log('Richtige Antwort');
        document.getElementById(selection).parentNode.classList.add('bg-success');
    } else {
       // console.log('Falsche ANtwort');

        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    document.getElementById('next-button').disabled = true;
    resetAnswerButton();
    showCurrentQuestion();


}

function resetAnswerButton() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');

}
function falsTrue(){

}