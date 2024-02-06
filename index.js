//Array of objects to fetch question and its answer.
const questions=[
    {
        question:"Which is largest animal in the world?",
        answers:[
            { text:"Shark",correct:false},
            { text:"Blue whale",correct:true},
            { text:"Elephat",correct:false},
            { text:"Giraffe",correct:false}

        ]
    },

    {
        question:"Which is the smallest country in the world?",
        answers:[
            { text:"Vatican City",correct:true},
            { text:"Bhutan",correct:false},
            { text:"Nepal",correct:false},
            { text:"Shri Lanka",correct:false}

        ]
    },

    {
        question:"Which is largest the desert in the world?",
        answers:[
            { text:"Kalahari",correct:false},
            { text:"Gobi",correct:false},
            { text:"Sahara",correct:false},
            { text:"Antarctica",correct:true}

        ]
    },

    {
        question:"Which is the smallest continent in the world?",
        answers:[
            { text:"Asia",correct:false},
            { text:"Australia",correct:true},
            { text:"Arctic",correct:false},
            { text:"Africa",correct:false}

        ]
    },

];

const ques=document.querySelector(".ques");
const answerbtn=document.querySelectorAll(".ans-btn");
const nextbutton=document.querySelector(".next");
const resetbutton=document.querySelector("#reset");
let currentQuestionIndex=0;
let score=0;
// Starting the quiz and some default parameter after game is over.
function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextbutton.innerHTML="Next";
    answerbtn.forEach((option)=>{
        option.style.display="block";
        option.classList.remove("correct","wrong");
        option.classList.remove("disable");
    })
    resetbutton.style.display="none";
    showQuestion();
}
//Display the question and its option on the screen.
function showQuestion(){

        let currentQuestion=questions[currentQuestionIndex];
        let questionNo=currentQuestionIndex+1;
    ques.innerText=questionNo+". "+currentQuestion.question;
    answerbtn.forEach((option,index)=>{
        option.innerText=currentQuestion.answers[index].text;
    })

}
//Each option is checked for correct answer.
answerbtn.forEach((option,index)=>{
    option.addEventListener("click",()=>{
        nextbutton.style.display="inline";
        let corrans=questions[currentQuestionIndex].answers[index].correct ;
        if(corrans)
        {

             option.classList.add("correct");
             score++;
            Disablebtn();

        }
        else{
            option.classList.add("wrong");
          answerbtn.forEach((ans,index)=>{
            if(questions[currentQuestionIndex].answers[index].correct)
            {
                ans.classList.add("correct");

            }


          })
          Disablebtn();
        }

    })

})


//To jump on to next question.
nextbutton.addEventListener("click",function x(){
    currentQuestionIndex++;
    console.log(currentQuestionIndex);
           if(currentQuestionIndex<questions.length){
             showQuestion();
             nextbutton.style.display="none";
             answerbtn.forEach((option)=>{
                 option.classList.remove("correct","wrong");
                 option.classList.remove("disable");
             })
            }
            else{
    
       answerbtn.forEach((Option)=>{
        Option.style.display="none";
            })
            ques.innerHTML=`Your Score is ${score} out of ${questions.length}`;
            nextbutton.style.display="none";
            resetbutton.style.display="block";
            resetbutton.addEventListener("click",startQuiz);
    }
})
//To disable all the option once a option has been selected.
function Disablebtn()
{
    answerbtn.forEach((option)=>{
        option.classList.add("disable");
    })
}

startQuiz();