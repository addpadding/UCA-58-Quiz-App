class Quiz {
    constructor(quizElement, amount, questions) {
        this.quizElement = quizElement;
        this.currentElemnt = document.querySelector(".current")
        this.totalElemnt = document.querySelector(".total")
        this.finalElemnt = document.querySelector(".final")
        this.nextBtn = document.querySelector("#next")

        this.totalAmount = amount;
        this.answredAmount = 0;
    }
}

export default Quiz;