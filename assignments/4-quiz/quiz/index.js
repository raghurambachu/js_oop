class Question{
    constructor(title, options, correctAnswer){
        this.title = title;
        this.options = options;//should be an array.
        this.correctAnswer = correctAnswer;
    }
    isCorrect(answer){
        return answer === this.correctAnswer;
    }
    getCorrectAnswer(){
        return this.correctAnswer;
    }
    static createUI(question){
        document.querySelector(".question-container").innerHTML = "";
        document.querySelector(".question-container").innerHTML =  `
        <p class="question-title">${question.title}</p>
        <ul class="options-list">
            ${
                question.options.map((option,index) => {
                   return `<li class="flex">
                        <input type="radio" name="answer" id="o${index}">
                        <label for="o${index}">${option}</label>
                    </li>`
                }).join("")
            }
        </ul>
        `
    }
}

class Quiz{
    constructor(allQuestions,activeIndex,score){
        this.allQuestions = allQuestions;
        this.activeIndex = activeIndex;
        this.score = score;
    }

    nextQuestion(){
        Question.createUI(this.allQuestions[this.activeIndex++]);
    }

    updateScore(){

    }


}

const question1 = new Question("What is national animal of India",["peacock","tiger","lion","monkey"],"tiger");
const question2 = new Question("What is national Bird of India",["peacock","sparrow","pigeon","flying squirrel"],"peacock");

let quiz = new Quiz([question1,question2],0,0)
quiz.nextQuestion();
quiz.nextQuestion();


// {/* <div class="question-container">
// <p class="question-title">Title</p>
// <ul class="options-list">
//   <li class="flex">
//     <input type="radio" name="answer" id="option1">
//     <label for="option1">Option1</label>
//   </li>
// </ul>
// </div> */}