const quizDB = [
    {
        question: "Q1: What is the full form of HTML?",
        a: 'Hyper Text Markup Language',
        b: 'Hyperlinks and Text Markup Language',
        c: 'Home Tool Markup Language',
        d: 'Hyperlinking Text Mark Language',
        ans: "ans1"
    },
    {
        question: "Q2: What is the full form of CSS?",
        a: 'Cascading Style Sheets',
        b: 'Cascading Style System',
        c: 'Computer Style Sheets',
        d: 'Creative Style System',
        ans: "ans1"
    },
    {
        question: "Q3: What is the full form of HTTP?",
        a: 'Hypertext Transfer Product',
        b: 'Hypertext Transfer Protocol',
        c: 'Hyper Transfer Protocol',
        d: 'Hypertext Transmission Protocol',
        ans: "ans2"
    },
    {
        question: "Q4: What is the full form of JS?",
        a: 'JavaSource',
        b: 'JavaSystem',
        c: 'JavaScript',
        d: 'JustScript',
        ans: "ans3"
    },
    {
        question: "Q5: What is the full form of XML?",
        a: 'eXtensible Markup Language',
        b: 'eXtra Modern Link',
        c: 'eXamine Multiple Language',
        d: 'eXtensible Multiple Language',
        ans: "ans1"
    },
    {
        question: "Q6: Which language runs in a web browser?",
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'JavaScript',
        ans: "ans4"
    },
    {
        question: "Q7: What does API stand for?",
        a: 'Application Programming Interface',
        b: 'Application Program Interface',
        c: 'Applied Programming Interface',
        d: 'Application Program Interaction',
        ans: "ans1"
    },
    {
        question: "Q8: What does SQL stand for?",
        a: 'Stylish Question Language',
        b: 'Stylesheet Query Language',
        c: 'Statement Question Language',
        d: 'Structured Query Language',
        ans: "ans4"
    },
    {
        question: "Q9: What is the full form of JSON?",
        a: 'JavaScript Object Notation',
        b: 'Java Source Object Notation',
        c: 'JavaScript Oriented Notation',
        d: 'JavaScript Object Naming',
        ans: "ans1"
    },
    {
        question: "Q11: What is the full form of PHP?",
        a: 'Personal Hypertext Processor',
        b: 'Hypertext Preprocessor',
        c: 'Pretext Hypertext Processor',
        d: 'Preprocessor Hypertext',
        ans: "ans2"
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;
const loadQuestions = () => {
    const questionList = quizDB[questionCount];
    question.innerHTML = questionList.question;

    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;
};
loadQuestions();

const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnsElmnt) => {
        if (curAnsElmnt.checked) {
            answer = curAnsElmnt.id;
        }
    });
    return answer;
}

const deslectAll = () =>{
    answers.forEach((curAnsElmnt) =>  curAnsElmnt.checked = false)
}
submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if (checkedAnswer === quizDB[questionCount].ans) {
        score++;
    }

    questionCount++;

    deslectAll()

    if (questionCount < quizDB.length) {
        loadQuestions();
        
    } else {
        showScore.innerHTML = `<h3>Your Score is ${score}/${quizDB.length}✌️</h3>
        <button class="btn" onclick="location.reload()">Play Again</button>`;
        showScore.classList.remove('scoreArea');

    }
});
