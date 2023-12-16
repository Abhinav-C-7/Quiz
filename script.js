const quizData = [
    {
        question:"Who is the chief minister of kerala ?",
        a:"Pinarayi Vijayan",b:"Manmohan Singh",c:"Narendra Modi",d:"Ashwant Kok",correct:"a",
    },
    {
        question: "Which player holds the record for the most goals in a single calendar year?",
        a: "Neymar",
        b: "Lionel Messi",
        c: "Cristiano Ronaldo",
        d: "Zlatan Ibrahimović",
        correct: "b"
    },
    {
        question: "Who directed the movie 'Inception'?",
        a: "Christopher Nolan",
        b: "Quentin Tarantino",
        c: "Steven Spielberg",
        d: "Martin Scorsese",
        correct: "a"
    },
    {
        question: "Which actor played the character Jack Dawson in the movie 'Titanic'?",
        a: "Leonardo DiCaprio",
        b: "Brad Pitt",
        c: "Johnny Depp",
        d: "Tom Hanks",
        correct: "a"
    },
    {
        question: "What does HTML stand for?",
        a: "Hyper Text Markup Language",
        b: "High Tech Machine Learning",
        c: "Hyper Transfer Mode Language",
        d: "Highly Typed Multilayered Language",
        correct: "a"
    },
    {
        question: "Which programming language is known for its use in web development and is often used for both client-side and server-side scripting?",
        a: "Java",
        b: "C++",
        c: "Python",
        d: "JavaScript",
        correct: "d"
    },
    {
        question: "Who is the co-founder of Microsoft Corporation?",
        a: "Steve Jobs",
        b: "Bill Gates",
        c: "Mark Zuckerberg",
        d: "Larry Page",
        correct: "b"
    },
    {
        question: "What is the purpose of CSS (Cascading Style Sheets) in web development?",
        a: "To perform mathematical calculations",
        b: "To control the layout and presentation of HTML documents",
        c: "To interact with databases",
        d: "To handle server-side scripting",
        correct: "b"
    } 
    
    
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz()

function loadQuiz()
{
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question;

    a_text.innerText=currentQuizData.a;
    b_text.innerText=currentQuizData.b;
    c_text.innerText=currentQuizData.c;
    d_text.innerText=currentQuizData.d;
}

function deselectAnswers()
{
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected()
{
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked)
        {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click',()=>{
    const answer = getSelected()
    if (answer){
        if (answer === quizData[currentQuiz].correct)
        {
            score++
        }
        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz()

        }
        else{
            quiz.innerHTML = `<h2> You answered ${score}/${quizData.length} questions correctly </h2>`
        }
    }
    
})