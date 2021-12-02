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
        "answer_1": "--.html",
        "answer_2": "--.web",
        "answer_3": "--.ht",
        "answer_4": "--.l",
        "right_answer": 1

    },


    {
        "question": "Was hilft einen um den Style von HTML-Dateien zu verbessern?",
        "answer_1": "Cct",
        "answer_2": "Css",
        "answer_3": "jss",
        "answer_4": "ccs",
        "right_answer": 2

    },
];


let currentQuestion = 0;

function init() {
    document.getElementById("all-questions").innerHTML = questions.length;

    showCurrentQuestion();
}

function showCurrentQuestion() {

    let question = questions[currentQuestion];

    document.getElementById("question-text").innerHTML = question['question'];
    
    document.getElementById("answer_1").innerHTML = question['answer_1'];
    document.getElementById("answer_2").innerHTML = question['answer_2'];
    document.getElementById("answer_3").innerHTML = question['answer_3'];
    document.getElementById("answer_4").innerHTML = question['answer_4'];
}