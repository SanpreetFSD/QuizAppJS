// creating an object for Questions

const questions = [{
    "que": "Which of the following is a markup language",
    "a": "HTML",
    "b": "CSS",
    "c": "JavaScriptL",
    "d": "PHP",
    "correct": "a"
},
{
    "que": "In which year Javascript was launched",
    "a": "1996",
    "b": "1995",
    "c": "1994",
    "d": "None of the above",
    "correct": "b"
},
{
    "que": "What does CSS stand for",
    "a": "Hyper text markup language",
    "b": "Cascading style sheet",
    "c": "Jason object notation",
    "d": "Can't say anything",
    "correct": "b"
}

]

let index =0;
const quesBox = document.getElementById("quesBox")
const optionInputs = document.querySelectorAll(".options")
const loadQuestions = ()=>{
    const data = questions[index]
    quesBox.innerText = `${index+1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () =>{
    const ans = getAnswer()
}

const getAnswer = () =>{
    optionInputs.forEach(
        (input) =>{
            if (input.checked){
                return input.value;
            }
        }
    )
}

// initial call
loadQuestions() 