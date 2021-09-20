// import questions from "./Question.js";
let questionsDB = [{
        question: "hello how are you",
        options: [
            "i am good ",
            "what about you",
            "i am doing awesome",
            "good to hear from you",
        ],
        correctanswer: 1,
    },
    {
        question: "kasie ho aap?",
        options: [
            "mast ",
            "tu bata bhai",
            "mai toh mast hu",
            "good to hear from you",
        ],
        correctanswer: 1,
    },
    {
        question: "3 rd question",
        options: [
            "i 3rd am good ",
            "what about you",
            "i am doing awesome",
            "good to hear from you",
        ],
        correctanswer: 1,
    },
    {
        question: "hello 4th how are you",
        options: [
            "i am good 4th ",
            "what about you",
            "i am doing awesome",
            "good to hear from you",
        ],
        correctanswer: 1,
    },
];

const container = document.getElementById("app");

class CreateQuestions {
    constructor(questionprompt, options, correctIndex) {
        this.questionprompt = questionprompt;
        this.options = options;
        this.correctIndex = correctIndex;
    }
    getoptionDomNode() {
        const optionContainer = document.createElement("div");
        // console.log(this.options);
        for (const option of this.options) {
            const optiondiv = document.createElement("div");
            const optionlist = document.createElement("h3");
            let that = this;
            optionlist.addEventListener("click", function() {
                console.log(this);
                if (option == that.options[that.correctIndex]) {
                    alert("correct");
                } else {
                    alert("wrong");
                }
            });
            optionlist.textContent = option;
            optiondiv.append(optionlist);
            optionContainer.append(optiondiv);
        }
        return optionContainer;
    }
    createDomNode() {
        const div = document.createElement("div");
        const h1 = document.createElement("h1");
        h1.append(this.questionprompt);
        div.append(h1);
        // console.log(this);
        const optionContainer = this.getoptionDomNode();
        div.appendChild(optionContainer);
        return div;
    }
}

class Quiz {
    constructor(questions, container) {
        this.questions = questions;
        this.i = 0;
        this.container = container;
        this.next = this.getNextButton();
        this.prev = this.getPrevButton();
    }
    disableButton() {
        console.log("check");
        if (this.i <= 0) {
            this.prev.disabled = true;
        } else {
            this.prev.disabled = false;
        }
        if (this.i >= this.questions.length) {
            this.next.disabled = true;
        } else {
            this.next.disabled = false;
        }
    }

    getPrevButton() {
        const prevButton = document.createElement("button");
        prevButton.innerText = "prev";
        // console.log("second" + this.i);
        prevButton.addEventListener("click", () => {
            this.i = this.i - 1;
            // console.log("inside event listener", i);
            this.update();
        });
        return prevButton;
    }
    getNextButton() {
        const nextButton = document.createElement("button");
        nextButton.innerText = "Next";
        // this.i = this.i + 1;
        // console.log("second" + this.i);
        nextButton.addEventListener("click", () => {
            this.i = this.i + 1;
            console.log("inside event listener" + this.i);
            this.update();
        });
        return nextButton;
    }
    update = () => {
        this.disableButton();
        const q = this.questions[this.i];

        // console.log("third" + this.i);
        // console.log(q.createDomNode() + "" + this.i);
        this.container.firstElementChild.replaceWith(q.createDomNode());
    };
    render() {
        this.disableButton();
        const q = this.questions[this.i];
        // console.log(q.createDomNode());
        // console.log("first" + this.i);

        // console.log(q.createDomNode());
        // console.log("first2", this.i);
        this.container.appendChild(q.createDomNode());
        // this.container.appendChild(this.getPrevButton());

        // this.container.appendChild(this.getNextButton());
        this.container.appendChild(this.prev);

        this.container.appendChild(this.next);
    }

    start() {
        this.render();
    }
}

// function CreateQuestions(questionprompt, options, correctIndex) {
//     return {
//         getoptionDomNode() {
//             const optionContainer = document.createElement("div");
//             for (const option of options) {
//                 const optiondiv = document.createElement("div");
//                 const optionlist = document.createElement("h3");
//                 optionlist.addEventListener("click", function() {
//                     if (option == options[correctIndex]) {
//                         alert("correct");
//                     } else {
//                         alert("wrong");
//                     }
//                 });
//                 optionlist.textContent = option;
//                 optiondiv.append(optionlist);
//                 optionContainer.append(optiondiv);
//             }
//             return optionContainer;
//         },
//         createDomNode() {
//             const div = document.createElement("div");
//             const h1 = document.createElement("h1");
//             h1.append(questionprompt);
//             div.append(h1);
//             const optionContainer = this.getoptionDomNode();
//             div.append(optionContainer);
//             return div;
//         },
//     };
// }

// const q = CreateQuestions("hello", [1, 2, 3, 4], 0);
// container.append(q.createDomNode());

// function createQuestion(questionprompt, options, correctIndex) {
//     const div = document.createElement('div');
//     const h1 = document.createElement('h1');
//     h1.append(questionprompt);
//     div.append(h1);
// const optionContainer = document.createElement('div');
// for (const option of options) {

//     const optiondiv = document.createElement('div');
//     const optionlist = document.createElement('h3');
//     optionlist.addEventListener("click", function() {
//         if (option == options[correctIndex]) {
//             alert("correct");
//         } else {
//             alert("wrong");
//         }

//     })
//     optionlist.textContent = option;
//     optiondiv.append(optionlist);
//     optionContainer.append(optiondiv);

// }
//     div.appendChild(optionContainer);

//     container.append(div);

// }

// questionprompt, options, correctIndex
const questions = questionsDB.map((el) => {
    return new CreateQuestions(el.question, el.options, el.correctanswer);
});
const quiz1 = new Quiz(questions, container);
quiz1.start();

// for (const questionObj of questions) {
//     let q = new CreateQuestions(
//         questionObj.question,
//         questionObj.options,
//         questionObj.correctanswer
//     );
//     container.append(q.createDomNode());
// }