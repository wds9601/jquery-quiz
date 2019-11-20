let questions = [{
    prompt: "Which is the best semantic HTML element?",
    answers: ["Header", "Main", "Aside", "Footer"],
    correctAnswerIndex: 1
}, {
    prompt: "Which CSS color is the best?",
    answers: ["#C40B13", "#866EC7", "#0075F6", "#EEEEEE"],
    correctAnswerIndex: 1
}, {
    prompt: "Which day of the week is the best?",
    answers: ["Friday", "Saturday", "Sunday", "Wednesday"],
    correctAnswerIndex: 1
}, {
    prompt: "Which time of day is the best?",
    answers: ["9 AM", "Noon", "3 PM", "6 PM"],
    correctAnswerIndex: 0
}, {
    prompt: "Which food is the best?",
    answers: ["Pizza", "Tacos", "Icecream", "Sushi"],
    correctAnswerIndex: 0
}
]


let submits = 0
let score = 0
let userAnswer = []
$('#prompt').text(questions[submits].prompt)
    $('#answer1 p').text(questions[submits].answers[0])
    $('#answer2 p').text(questions[submits].answers[1])
    $('#answer3 p').text(questions[submits].answers[2])
    $('#answer4 p').text(questions[submits].answers[3])

$('#submit').click(() => {
    submits++

    // if ($('#button1').prop('checked', true)) {
    //     //STORE AS USERANSWER ARRAY??
    //     ans = $('input[type="radio"]:checked')
    //     console.log(ans)
    //     userAnswer.map(ans)
        
        //IF USER ANSWER === questions[submits].correctAnswerIndex
    // }
    
    $('.answerButton').prop('checked', false)
    $('#prompt').text(questions[submits].prompt)
    $('#answer1 p').text(questions[submits].answers[0])
    $('#answer2 p').text(questions[submits].answers[1])
    $('#answer3 p').text(questions[submits].answers[2])
    $('#answer4 p').text(questions[submits].answers[3])
})


//Extra jQuery syntax from lesson in class
// $('#title').text('Hello GA');
// $('h1').css('color', 'blue')
// $('#title').click(() => {
//     console.log('hello')
// })
// $('title').hover(() => {
//     console.log('hello')
// })

