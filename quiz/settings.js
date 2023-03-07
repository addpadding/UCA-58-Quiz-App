// settings
console.log("settings p2")

// https://opentdb.com/api.php?amount=10&category=9&difficulty=easy


class Settings {
    constructor() {
        this.settingDom = document.querySelector(".settings");
        this.quizDom = document.querySelector(".quiz");
        this.categoryDom = document.querySelector("#category");
        this.nQuestionsDom = document.querySelector("#nQuestions");
        this.startBtn = document.querySelector("#startBtn");
        this.difficulty = [
            document.querySelector("#easy"),
            document.querySelector("#medium"),
            document.querySelector("#hard"),
        ];

        this.startBtn.addEventListener("click", this.startQuizApp)
    }

    startQuizApp = async () => {

        try {
            const amount = this.getAmount();
            const categoryID = this.categoryDom.value;
            const difficulty = this.getDifficulty();

            const url = `https://opentdb.com/api.php?amount=${amount}&category=${categoryID}&difficulty=${difficulty}`
            let result = await this.fetchData(url);

            this.toggleElements();
        } catch (err) {
            alert(err)
        }

        // const amount = this.getAmount();
        // const categoryID = this.categoryDom.value;
        // const difficulty = this.getDifficulty();

        // const url = `https://opentdb.com/api.php?amount=${amount}&category=${categoryID}&difficulty=${difficulty}`
        // let result;
        // // let result = this.fetchData(url);
        // console.log("result", result)

        // fetch(url)
        //     .then((response) => response.json())
        //     .then((data) => {
        //         this.toggleElements();
        //     });

        // if (result) {
        //     this.quizDom.style.display = "block"
        //     this.settingDom.style.display = "none"
        // } else { }

    };

    toggleElements = () => {
        this.quizDom.style.display = "block"
        this.settingDom.style.display = "none"
    }

    getDifficulty = () => {
        const difficulty = this.difficulty.filter((el) => el.checked);
        if (difficulty.length === 1) {
            return difficulty[0].id
        } else {
            alert("please select difficulty")
        }
    }

    fetchData = (url) => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                return data.result;
            });
    }

    getAmount = () => {
        const amount = this.nQuestionsDom.value
        if (amount > 0 && amount < 20) {
            return amount
        } else {
            alert("please enter questions")
        }
    }
}

export default Settings

