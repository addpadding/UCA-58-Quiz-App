import Final from "./final.js";
import Question from "./question.js";

class Quiz {
    constructor(quizElement, amount, questions) {
        this.quizElement = quizElement;
        this.currentElemnt = document.querySelector(".current");
        this.totalElemnt = document.querySelector(".total");
        this.finalElemnt = document.querySelector(".final");
        this.nextBtn = document.querySelector("#next");

        this.totalAmount = amount;
        this.answredAmount = 0;

        this.questions = this.setQuestion(questions);
        this.nextBtn.addEventListener("click", this.nextQuestions);
        this.renderQuestions();
    }

    setQuestion(questions) {
        return questions.map((questions) => new Question(questions));
    }

    renderQuestions() {
        this.questions[this.answredAmount].render();
        this.currentElemnt.innerHTML = this.answredAmount;
        this.totalElemnt.innerHTML = this.totalAmount;
    }

    nextQuestions = () => {
        const checkElement = this.questions[
            this.answredAmount
        ].answerElement.filter((ele) => ele.firstChild.checked);
        if (checkElement.length == 0) {
            alert("check Elemnt");
        } else {
            this.questions[this.answredAmount].answer(checkElement);
            this.answredAmount++;
            this.answredAmount < totalAmount
                ? this.renderQuestions()
                : this.endQuizApp();
        }
    };

    endQuizApp() {
        this.quizElement.style.display = "none";
        this.finalElemnt.style.display = "block";
        const correct = this.countCorrectAnswer();
        new Final(correct, this.totalAmount);
    }

    countCorrectAnswer() {
        let count = 0;
        this.questions.forEach((ele) => {
            if (ele.isCorrect) {
                count++;
            }
        });
        return count;
    }
}

export default Quiz;
