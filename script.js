/* =========================================================
   QUIZ WEBSITE - COMPLETE SCRIPT
   Original Homepage UI + Correct Answer Handling
   Supports:
   - Multiple choice answers stored as TEXT
   - Multiple choice answers stored as INDEX
   - Matching answers stored as DESCRIPTION
========================================================= */

import { QUIZZES } from "./quizData.js";

import {
    ensureAnonymousUser,
    saveQuizResult,
    getAllResults
} from "./firebase.js";


/* =========================================================
   ELEMENTS
========================================================= */

const homeScreen =
    document.getElementById("homeScreen");

const quizScreen =
    document.getElementById("quizScreen");

const resultScreen =
    document.getElementById("resultScreen");

const resultsScreen =
    document.getElementById("resultsScreen");

const topicGrid =
    document.getElementById("topicGrid");

const homeBtn =
    document.getElementById("homeBtn");

const questionType =
    document.getElementById("questionType");

const quizTitle =
    document.getElementById("quizTitle");

const questionNumber =
    document.getElementById("questionNumber");

const quizTotal =
    document.getElementById("quizTotal");

const quizProgress =
    document.getElementById("quizProgress");

const questionText =
    document.getElementById("questionText");

const questionArea =
    document.getElementById("questionArea");

const backBtn =
    document.getElementById("backBtn");

const nextBtn =
    document.getElementById("nextBtn");

const cancelQuizBtn =
    document.getElementById("cancelQuizBtn");

const resultTopic =
    document.getElementById("resultTopic");

const resultPercent =
    document.getElementById("resultPercent");

const resultScore =
    document.getElementById("resultScore");

const firebaseStatus =
    document.getElementById("firebaseStatus");

const resultRetakeBtn =
    document.getElementById("resultRetakeBtn");

const resultHomeBtn =
    document.getElementById("resultHomeBtn");

const resultsHomeBtn =
    document.getElementById("resultsHomeBtn");

const resultsList =
    document.getElementById("resultsList");


/* =========================================================
   QUIZ STATE
========================================================= */

let currentTopic = null;

let currentQuestionIndex = 0;

let currentQuestions = [];

let currentAnswers = [];

let currentScore = 0;

let studentName = "";

let currentQuestionAnswered = false;


/* =========================================================
   SHOW SCREEN
========================================================= */

function showScreen(screen) {

    const screens = [
        homeScreen,
        quizScreen,
        resultScreen,
        resultsScreen
    ];

    screens.forEach(item => {

        if (item) {
            item.classList.remove("active");
        }

    });

    if (screen) {
        screen.classList.add("active");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   SHUFFLE ARRAY
========================================================= */

function shuffleArray(array) {

    const copy = [...array];

    for (
        let i = copy.length - 1;
        i > 0;
        i--
    ) {

        const randomIndex =
            Math.floor(
                Math.random() * (i + 1)
            );

        [
            copy[i],
            copy[randomIndex]
        ] = [
            copy[randomIndex],
            copy[i]
        ];

    }

    return copy;

}


/* =========================================================
   ESCAPE HTML
========================================================= */

function escapeHTML(value) {

    if (
        value === null ||
        value === undefined
    ) {
        return "";
    }

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


/* =========================================================
   FORMAT DATE
========================================================= */

function formatDate(timestamp) {

    if (!timestamp) {
        return "No date";
    }

    try {

        let date;

        if (
            timestamp &&
            typeof timestamp.toDate === "function"
        ) {

            date = timestamp.toDate();

        } else if (
            timestamp &&
            timestamp.seconds
        ) {

            date =
                new Date(
                    timestamp.seconds * 1000
                );

        } else {

            date =
                new Date(timestamp);

        }

        if (
            Number.isNaN(
                date.getTime()
            )
        ) {

            return "No date";

        }

        return date.toLocaleString();

    } catch (error) {

        console.error(
            "Date formatting error:",
            error
        );

        return "No date";

    }

}


/* =========================================================
   GET MULTIPLE CHOICE CORRECT INDEX
========================================================= */

/*
   Your quizData.js uses TWO formats:

   CAO3 / CAO4:
       answer: "Operation Code"

   RAP3 / RAP4:
       answer: 0

   This function supports both.
*/

function getCorrectMultipleChoiceIndex(
    question
) {

    if (!question) {
        return -1;
    }


    /* -----------------------------------------
       ANSWER IS ALREADY AN INDEX
    ----------------------------------------- */

    if (
        typeof question.answer ===
        "number"
    ) {

        return question.answer;

    }


    /* -----------------------------------------
       ANSWER IS TEXT
    ----------------------------------------- */

    if (
        typeof question.answer ===
        "string"
    ) {

        return question.options.indexOf(
            question.answer
        );

    }


    return -1;

}


/* =========================================================
   GET MULTIPLE CHOICE CORRECT ANSWER TEXT
========================================================= */

function getCorrectMultipleChoiceAnswer(
    question
) {

    const correctIndex =
        getCorrectMultipleChoiceIndex(
            question
        );


    if (
        correctIndex < 0 ||
        correctIndex >= question.options.length
    ) {

        return "";

    }


    return question.options[
        correctIndex
    ];

}


/* =========================================================
   INITIALIZE
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        renderTopics();


        /* -----------------------------------------
           HOME BUTTON
        ----------------------------------------- */

        if (homeBtn) {

            homeBtn.addEventListener(
                "click",
                () => {

                    resetQuizState();

                    showScreen(
                        homeScreen
                    );

                }
            );

        }


        /* -----------------------------------------
           RESULTS HOME BUTTON
        ----------------------------------------- */

        if (resultsHomeBtn) {

            resultsHomeBtn.addEventListener(
                "click",
                () => {

                    showScreen(
                        homeScreen
                    );

                }
            );

        }


        /* -----------------------------------------
           RESULT HOME BUTTON
        ----------------------------------------- */

        if (resultHomeBtn) {

            resultHomeBtn.addEventListener(
                "click",
                () => {

                    resetQuizState();

                    showScreen(
                        homeScreen
                    );

                }
            );

        }


        /* -----------------------------------------
           RETAKE BUTTON
        ----------------------------------------- */

        if (resultRetakeBtn) {

            resultRetakeBtn.addEventListener(
                "click",
                () => {

                    if (!currentTopic) {

                        showScreen(
                            homeScreen
                        );

                        return;

                    }

                    startQuiz(
                        currentTopic
                    );

                }
            );

        }


        /* -----------------------------------------
           NEXT BUTTON
        ----------------------------------------- */

        if (nextBtn) {

            nextBtn.addEventListener(
                "click",
                () => {

                    if (
                        !currentQuestionAnswered
                    ) {

                        return;

                    }

                    goToNextQuestion();

                }
            );

        }


        /* -----------------------------------------
           REMOVE BACK BUTTON
        ----------------------------------------- */

        if (backBtn) {

            backBtn.style.display =
                "none";

        }


        /* -----------------------------------------
           CANCEL QUIZ
        ----------------------------------------- */

        if (cancelQuizBtn) {

            cancelQuizBtn.addEventListener(
                "click",
                async () => {

                    if (!currentTopic) {

                        showScreen(
                            homeScreen
                        );

                        return;

                    }


                    const confirmed =
                        confirm(
                            "Are you sure you want to cancel this quiz?\n\n" +
                            "Your current score and progress will be saved to the quiz history."
                        );


                    if (!confirmed) {
                        return;
                    }


                    await cancelAndSaveQuiz();

                }
            );

        }


        /* -----------------------------------------
           RESULTS BUTTON
        ----------------------------------------- */

        const resultsBtn =
            document.getElementById(
                "resultsBtn"
            );


        if (resultsBtn) {

            resultsBtn.addEventListener(
                "click",
                () => {

                    renderResults();

                }
            );

        }

    }
);


/* =========================================================
   RESET QUIZ STATE
========================================================= */

function resetQuizState() {

    currentTopic = null;

    currentQuestionIndex = 0;

    currentQuestions = [];

    currentAnswers = [];

    currentScore = 0;

    studentName = "";

    currentQuestionAnswered = false;


    if (nextBtn) {

        nextBtn.disabled = true;

        nextBtn.classList.remove(
            "next-ready"
        );

        nextBtn.style.opacity =
            "1";

        nextBtn.style.cursor =
            "not-allowed";

    }

}


/* =========================================================
   RENDER HOMEPAGE TOPICS
========================================================= */

function renderTopics() {

    if (!topicGrid) {
        return;
    }


    topicGrid.innerHTML = "";


    QUIZZES.forEach(
        (topic, index) => {

            const card =
                document.createElement(
                    "article"
                );


            card.className =
                "topic-card";


            /* -----------------------------------------
               NUMBER
            ----------------------------------------- */

            const number =
                document.createElement(
                    "div"
                );


            number.className =
                "topic-number";


            number.textContent =
                String(
                    index + 1
                ).padStart(
                    2,
                    "0"
                );


            /* -----------------------------------------
               CONTENT
            ----------------------------------------- */

            const content =
                document.createElement(
                    "div"
                );


            content.className =
                "topic-content";


            /* -----------------------------------------
               LABEL
            ----------------------------------------- */

            const label =
                document.createElement(
                    "div"
                );


            label.className =
                "topic-label";


            label.textContent =
                `TOPIC ${index + 1}`;


            /* -----------------------------------------
               TITLE
            ----------------------------------------- */

            const title =
                document.createElement(
                    "h3"
                );


            title.textContent =
                topic.title;


            /* -----------------------------------------
               DESCRIPTION
            ----------------------------------------- */

            if (topic.description) {

                const description =
                    document.createElement(
                        "p"
                    );


                description.textContent =
                    topic.description;


                content.appendChild(
                    description
                );

            }


            /* -----------------------------------------
               QUESTION COUNT
            ----------------------------------------- */

            const meta =
                document.createElement(
                    "div"
                );


            meta.className =
                "topic-meta";


            meta.innerHTML =
                `
                <span>
                    ${topic.questions.length}
                    Questions
                </span>
                `;


            /* -----------------------------------------
               START QUIZ BUTTON
            ----------------------------------------- */

            const startButton =
                document.createElement(
                    "button"
                );


            startButton.type =
                "button";


            startButton.className =
                "start-btn";


            startButton.innerHTML =
                `
                Start Quiz
                <span>→</span>
                `;


            startButton.addEventListener(
                "click",
                event => {

                    event.stopPropagation();

                    startQuiz(
                        topic
                    );

                }
            );


            /* -----------------------------------------
               BUILD CARD
            ----------------------------------------- */

            content.appendChild(
                label
            );


            content.appendChild(
                title
            );


            content.appendChild(
                meta
            );


            content.appendChild(
                startButton
            );


            card.appendChild(
                number
            );


            card.appendChild(
                content
            );


            card.addEventListener(
                "click",
                () => {

                    startQuiz(
                        topic
                    );

                }
            );


            topicGrid.appendChild(
                card
            );

        }
    );

}


/* =========================================================
   START QUIZ
========================================================= */

function startQuiz(topic) {

    if (!topic) {
        return;
    }


    const enteredName =
        prompt(
            "Enter your name before starting the quiz:"
        );


    if (
        enteredName === null
    ) {

        return;

    }


    const trimmedName =
        enteredName.trim();


    if (!trimmedName) {

        alert(
            "Please enter your name before starting the quiz."
        );

        return;

    }


    studentName =
        trimmedName;


    currentTopic =
        topic;


    currentQuestionIndex =
        0;


    currentScore =
        0;


    currentQuestionAnswered =
        false;


    currentQuestions =
        topic.questions.map(
            question => ({
                ...question
            })
        );


    currentAnswers =
        new Array(
            currentQuestions.length
        ).fill(null);


    /* -----------------------------------------
       SHUFFLE QUESTIONS
    ----------------------------------------- */

    currentQuestions =
        shuffleArray(
            currentQuestions
        );


    /* -----------------------------------------
       PREPARE QUESTIONS
    ----------------------------------------- */

    currentQuestions =
        currentQuestions.map(
            question => {

                /* -------------------------------------
                   MULTIPLE CHOICE
                ------------------------------------- */

                if (
                    question.type ===
                    "multiple"
                ) {

                    const preparedOptions =
                        question.options.map(
                            (
                                option,
                                index
                            ) => ({

                                text:
                                    option,

                                originalIndex:
                                    index

                            })
                        );


                    return {

                        ...question,

                        shuffledOptions:
                            shuffleArray(
                                preparedOptions
                            )

                    };

                }


                /* -------------------------------------
                   MATCHING

                   quizData.js uses:
                   pair.description
                ------------------------------------- */

                if (
                    question.type ===
                    "matching"
                ) {

                    const descriptions =
                        question.pairs.map(
                            pair =>
                                pair.description
                        );


                    return {

                        ...question,

                        shuffledDescriptions:
                            shuffleArray(
                                descriptions
                            )

                    };

                }


                return {
                    ...question
                };

            }
        );


    /* -----------------------------------------
       FIREBASE AUTH
    ----------------------------------------- */

    ensureAnonymousUser()
        .catch(
            error => {

                console.error(
                    "Firebase authentication error:",
                    error
                );

            }
        );


    showScreen(
        quizScreen
    );


    renderCurrentQuestion();

}


/* =========================================================
   RENDER CURRENT QUESTION
========================================================= */

function renderCurrentQuestion() {

    if (
        !currentTopic ||
        !currentQuestions.length
    ) {

        return;

    }


    const question =
        currentQuestions[
            currentQuestionIndex
        ];


    currentQuestionAnswered =
        false;


    /* -----------------------------------------
       QUIZ TITLE
    ----------------------------------------- */

    if (quizTitle) {

        quizTitle.textContent =
            currentTopic.title;

    }


    /* -----------------------------------------
       QUESTION NUMBER
    ----------------------------------------- */

    if (questionNumber) {

        questionNumber.textContent =
            currentQuestionIndex + 1;

    }


    /* -----------------------------------------
       TOTAL
    ----------------------------------------- */

    if (quizTotal) {

        quizTotal.textContent =
            currentQuestions.length;

    }


    /* -----------------------------------------
       QUESTION TEXT
    ----------------------------------------- */

    if (questionText) {

        questionText.textContent =
            question.question;

    }


    /* -----------------------------------------
       QUESTION TYPE
    ----------------------------------------- */

    if (questionType) {

        questionType.textContent =
            question.type ===
            "matching"
                ? "MATCHING"
                : "MULTIPLE CHOICE";

    }


    /* -----------------------------------------
       PROGRESS
    ----------------------------------------- */

    if (quizProgress) {

        const progress =
            (
                (currentQuestionIndex + 1) /
                currentQuestions.length
            ) * 100;


        quizProgress.style.width =
            `${progress}%`;

    }


    /* -----------------------------------------
       NEXT BUTTON
    ----------------------------------------- */

    if (nextBtn) {

        nextBtn.disabled =
            true;


        nextBtn.classList.remove(
            "next-ready"
        );


        nextBtn.style.opacity =
            "1";


        nextBtn.style.cursor =
            "not-allowed";


        nextBtn.textContent =
            currentQuestionIndex ===
            currentQuestions.length - 1
                ? "Finish Quiz"
                : "Next Question";

    }


    if (!questionArea) {
        return;
    }


    questionArea.innerHTML =
        "";


    /* -----------------------------------------
       MULTIPLE CHOICE
    ----------------------------------------- */

    if (
        question.type ===
        "multiple"
    ) {

        renderMultipleChoice(
            question
        );

        return;

    }


    /* -----------------------------------------
       MATCHING
    ----------------------------------------- */

    if (
        question.type ===
        "matching"
    ) {

        renderMatching(
            question
        );

        return;

    }


    questionArea.innerHTML =
        `
        <div class="answer-card">

            <p>
                This question type is not available.
            </p>

        </div>
        `;

}


/* =========================================================
   RENDER MULTIPLE CHOICE
========================================================= */

function renderMultipleChoice(
    question
) {

    const wrapper =
        document.createElement(
            "div"
        );


    wrapper.className =
        "multiple-choice-options";


    question.shuffledOptions.forEach(
        (
            option,
            index
        ) => {

            const button =
                document.createElement(
                    "button"
                );


            button.type =
                "button";


            button.className =
                "answer-card";


            button.dataset.originalIndex =
                option.originalIndex;


            button.innerHTML =
                `
                <span class="answer-letter">
                    ${String.fromCharCode(
                        65 + index
                    )}
                </span>

                <span class="answer-text">
                    ${escapeHTML(
                        option.text
                    )}
                </span>
                `;


            button.addEventListener(
                "click",
                () => {

                    if (
                        currentQuestionAnswered
                    ) {

                        return;

                    }


                    handleMultipleChoiceAnswer(
                        question,
                        option.originalIndex,
                        wrapper
                    );

                }
            );


            wrapper.appendChild(
                button
            );

        }
    );


    questionArea.appendChild(
        wrapper
    );

}


/* =========================================================
   HANDLE MULTIPLE CHOICE ANSWER
========================================================= */

function handleMultipleChoiceAnswer(
    question,
    selectedOriginalIndex,
    wrapper
) {

    if (currentQuestionAnswered) {
        return;
    }


    /* -----------------------------------------
       GET CORRECT INDEX

       Works with:

       answer: "Operation Code"

       OR

       answer: 0
    ----------------------------------------- */

    const correctIndex =
        getCorrectMultipleChoiceIndex(
            question
        );


    /* -----------------------------------------
       SAFETY CHECK
    ----------------------------------------- */

    if (
        correctIndex < 0 ||
        correctIndex >=
            question.options.length
    ) {

        console.error(
            "Could not find correct answer:",
            question
        );


        alert(
            "There is an invalid answer in this question's quiz data."
        );


        return;

    }


    currentQuestionAnswered =
        true;


    /* -----------------------------------------
       GET CORRECT ANSWER TEXT
    ----------------------------------------- */

    const correctAnswer =
        question.options[
            correctIndex
        ];


    /* -----------------------------------------
       CHECK ANSWER
    ----------------------------------------- */

    const isCorrect =
        selectedOriginalIndex ===
        correctIndex;


    /* -----------------------------------------
       SAVE ANSWER
    ----------------------------------------- */

    currentAnswers[
        currentQuestionIndex
    ] = {

        type:
            "multiple",

        selected:
            selectedOriginalIndex,

        correct:
            correctIndex,

        correctAnswer:
            correctAnswer,

        isCorrect:
            isCorrect

    };


    /* -----------------------------------------
       UPDATE SCORE
    ----------------------------------------- */

    if (isCorrect) {

        currentScore++;

    }


    /* -----------------------------------------
       LOCK ALL BUTTONS
    ----------------------------------------- */

    const buttons =
        wrapper.querySelectorAll(
            ".answer-card"
        );


    buttons.forEach(
        button => {

            button.disabled =
                true;


            const optionIndex =
                Number(
                    button.dataset.originalIndex
                );


            /* -------------------------------------
               CORRECT ANSWER
               GREEN
            ------------------------------------- */

            if (
                optionIndex ===
                correctIndex
            ) {

                button.classList.add(
                    "answer-correct"
                );

            }


            /* -------------------------------------
               SELECTED WRONG ANSWER
               RED
            ------------------------------------- */

            if (
                optionIndex ===
                    selectedOriginalIndex &&
                !isCorrect
            ) {

                button.classList.add(
                    "answer-wrong"
                );

            }


            button.classList.add(
                "locked"
            );

        }
    );


    /* -----------------------------------------
       FEEDBACK
    ----------------------------------------- */

    const feedback =
        document.createElement(
            "div"
        );


    feedback.className =
        isCorrect
            ? "answer-feedback correct"
            : "answer-feedback wrong";


    feedback.textContent =
        isCorrect
            ? "Correct!"
            : "Wrong!";


    wrapper.appendChild(
        feedback
    );


    /* -----------------------------------------
       SHOW CORRECT ANSWER IF WRONG
    ----------------------------------------- */

    if (!isCorrect) {

        const correctAnswerMessage =
            document.createElement(
                "div"
            );


        correctAnswerMessage.className =
            "correct-answer-message";


        correctAnswerMessage.textContent =
            `Correct answer: ${correctAnswer}`;


        wrapper.appendChild(
            correctAnswerMessage
        );

    }


    /* -----------------------------------------
       ENABLE NEXT
    ----------------------------------------- */

    enableNextButton();

}


/* =========================================================
   RENDER MATCHING
========================================================= */

function renderMatching(
    question
) {

    const wrapper =
        document.createElement(
            "div"
        );


    wrapper.className =
        "matching-container";


    /* -----------------------------------------
       IMPORTANT:

       Your quizData.js uses:

       pair.description

       NOT:

       pair.answer
    ----------------------------------------- */

    const availableDescriptions =
        [
            ...question.shuffledDescriptions
        ];


    question.pairs.forEach(
        (
            pair,
            pairIndex
        ) => {

            const row =
                document.createElement(
                    "div"
                );


            row.className =
                "matching-row";


            const term =
                document.createElement(
                    "div"
                );


            term.className =
                "matching-term";


            term.innerHTML =
                `
                <span class="matching-term-text">
                    ${escapeHTML(
                        pair.term
                    )}
                </span>
                `;


            const select =
                document.createElement(
                    "select"
                );


            select.className =
                "matching-select";


            select.innerHTML =
                `
                <option value="">
                    Select an answer
                </option>
                `;


            /* -----------------------------------------
               ADD DESCRIPTIONS
            ----------------------------------------- */

            availableDescriptions.forEach(
                description => {

                    const option =
                        document.createElement(
                            "option"
                        );


                    option.value =
                        description;


                    option.textContent =
                        description;


                    select.appendChild(
                        option
                    );

                }
            );


            const feedback =
                document.createElement(
                    "div"
                );


            feedback.className =
                "matching-feedback";


            /* -----------------------------------------
               WHEN MATCHING ANSWER IS SELECTED
            ----------------------------------------- */

            select.addEventListener(
                "change",
                () => {

                    if (
                        !select.value ||
                        select.disabled
                    ) {

                        return;

                    }


                    select.disabled =
                        true;


                    const selectedAnswer =
                        select.value;


                    /* -------------------------------------
                       IMPORTANT:

                       Correct matching answer is
                       pair.description
                    ------------------------------------- */

                    const correctAnswer =
                        pair.description;


                    const isCorrect =
                        selectedAnswer ===
                        correctAnswer;


                    /* -------------------------------------
                       CREATE QUESTION ANSWER STORAGE
                    ------------------------------------- */

                    if (
                        !currentAnswers[
                            currentQuestionIndex
                        ]
                    ) {

                        currentAnswers[
                            currentQuestionIndex
                        ] = {

                            type:
                                "matching",

                            pairs:
                                [],

                            isCorrect:
                                false,

                            answeredCount:
                                0

                        };

                    }


                    const storedAnswer =
                        currentAnswers[
                            currentQuestionIndex
                        ];


                    /* -------------------------------------
                       STORE THIS MATCH
                    ------------------------------------- */

                    storedAnswer.pairs[
                        pairIndex
                    ] = {

                        term:
                            pair.term,

                        selected:
                            selectedAnswer,

                        correct:
                            correctAnswer,

                        isCorrect:
                            isCorrect

                    };


                    storedAnswer.answeredCount++;


                    /* -------------------------------------
                       CORRECT
                    ------------------------------------- */

                    if (isCorrect) {

                        feedback.textContent =
                            "Correct!";


                        feedback.classList.add(
                            "correct"
                        );


                        row.classList.add(
                            "answer-correct"
                        );

                    }


                    /* -------------------------------------
                       WRONG
                    ------------------------------------- */

                    else {

                        feedback.innerHTML =
                            `
                            Wrong!
                            <br>
                            Correct answer:
                            ${escapeHTML(
                                correctAnswer
                            )}
                            `;


                        feedback.classList.add(
                            "wrong"
                        );


                        row.classList.add(
                            "answer-wrong"
                        );

                    }


                    /* -------------------------------------
                       CHECK IF ALL MATCHES ARE DONE
                    ------------------------------------- */

                    checkMatchingComplete(
                        question
                    );

                }
            );


            row.appendChild(
                term
            );


            row.appendChild(
                select
            );


            row.appendChild(
                feedback
            );


            wrapper.appendChild(
                row
            );

        }
    );


    questionArea.appendChild(
        wrapper
    );

}


/* =========================================================
   CHECK MATCHING COMPLETE
========================================================= */

function checkMatchingComplete(
    question
) {

    const storedAnswer =
        currentAnswers[
            currentQuestionIndex
        ];


    if (!storedAnswer) {
        return;
    }


    const totalPairs =
        question.pairs.length;


    const answeredPairs =
        storedAnswer.pairs.filter(
            item =>
                item !== undefined
        ).length;


    /* -----------------------------------------
       NOT ALL ROWS ANSWERED
    ----------------------------------------- */

    if (
        answeredPairs <
        totalPairs
    ) {

        return;

    }


    /* -----------------------------------------
       ALL ROWS ANSWERED
    ----------------------------------------- */

    currentQuestionAnswered =
        true;


    const allCorrect =
        storedAnswer.pairs.every(
            item =>
                item &&
                item.isCorrect
        );


    storedAnswer.isCorrect =
        allCorrect;


    /* -----------------------------------------
       ADD POINT ONLY IF ALL MATCHES CORRECT
    ----------------------------------------- */

    if (allCorrect) {

        currentScore++;

    }


    /* -----------------------------------------
       ENABLE NEXT BUTTON
    ----------------------------------------- */

    enableNextButton();

}


/* =========================================================
   ENABLE NEXT BUTTON
========================================================= */

function enableNextButton() {

    if (!nextBtn) {
        return;
    }


    nextBtn.disabled =
        false;


    nextBtn.classList.add(
        "next-ready"
    );


    nextBtn.style.opacity =
        "1";


    nextBtn.style.cursor =
        "pointer";

}


/* =========================================================
   NEXT QUESTION
========================================================= */

function goToNextQuestion() {

    if (
        !currentQuestionAnswered
    ) {

        return;

    }


    if (
        currentQuestionIndex >=
        currentQuestions.length - 1
    ) {

        finishQuiz();

        return;

    }


    currentQuestionIndex++;


    renderCurrentQuestion();

}


/* =========================================================
   COUNT ANSWERED QUESTIONS
========================================================= */

function getAnsweredQuestionCount() {

    return currentAnswers.filter(
        answer => {

            if (!answer) {
                return false;
            }


            /* -----------------------------------------
               MULTIPLE CHOICE
            ----------------------------------------- */

            if (
                answer.type ===
                "multiple"
            ) {

                return true;

            }


            /* -----------------------------------------
               MATCHING
            ----------------------------------------- */

            if (
                answer.type ===
                "matching"
            ) {

                return (
                    answer.answeredCount >
                    0
                );

            }


            return false;

        }
    ).length;

}


/* =========================================================
   CANCEL QUIZ + SAVE
========================================================= */

async function cancelAndSaveQuiz() {

    if (!currentTopic) {

        showScreen(
            homeScreen
        );

        return;

    }


    const answeredCount =
        getAnsweredQuestionCount();


    const totalQuestions =
        currentQuestions.length;


    const percentage =
        totalQuestions > 0
            ? Math.round(
                (
                    currentScore /
                    totalQuestions
                ) * 100
            )
            : 0;


    try {

        await saveQuizResult({

            studentName:
                studentName,

            topicId:
                currentTopic.id,

            topicTitle:
                currentTopic.title,

            score:
                currentScore,

            total:
                totalQuestions,

            percentage:
                percentage,

            answeredCount:
                answeredCount,

            currentQuestion:
                currentQuestionIndex + 1,

            status:
                "Cancelled",

            completed:
                false

        });


        alert(
            "Quiz cancelled.\n\n" +
            "Your current score and progress have been saved to the quiz history."
        );


    } catch (error) {

        console.error(
            "Failed to save cancelled quiz:",
            error
        );


        alert(
            "The quiz was cancelled, but the progress could not be saved to Firebase.\n\n" +
            "Please check your Firebase connection."
        );

    }


    resetQuizState();


    showScreen(
        homeScreen
    );

}


/* =========================================================
   FINISH QUIZ
========================================================= */

async function finishQuiz() {

    if (!currentTopic) {
        return;
    }


    const totalQuestions =
        currentQuestions.length;


    const percentage =
        totalQuestions > 0
            ? Math.round(
                (
                    currentScore /
                    totalQuestions
                ) * 100
            )
            : 0;


    const answeredCount =
        getAnsweredQuestionCount();


    try {

        await saveQuizResult({

            studentName:
                studentName,

            topicId:
                currentTopic.id,

            topicTitle:
                currentTopic.title,

            score:
                currentScore,

            total:
                totalQuestions,

            percentage:
                percentage,

            answeredCount:
                answeredCount,

            currentQuestion:
                totalQuestions,

            status:
                "Completed",

            completed:
                true

        });


        if (firebaseStatus) {

            firebaseStatus.textContent =
                "Result saved successfully.";

        }


    } catch (error) {

        console.error(
            "Firebase save error:",
            error
        );


        if (firebaseStatus) {

            firebaseStatus.textContent =
                "Result could not be saved to Firebase.";

        }

    }


    showResultScreen(
        percentage
    );

}


/* =========================================================
   SHOW RESULT SCREEN
========================================================= */

function showResultScreen(
    percentage
) {

    if (resultTopic) {

        resultTopic.textContent =
            currentTopic.title;

    }


    if (resultPercent) {

        resultPercent.textContent =
            `${percentage}%`;

    }


    if (resultScore) {

        resultScore.textContent =
            `${currentScore} / ${currentQuestions.length}`;

    }


    renderAnswerReview();


    showScreen(
        resultScreen
    );

}


/* =========================================================
   ANSWER REVIEW
========================================================= */

function renderAnswerReview() {

    let review =
        document.getElementById(
            "answerReview"
        );


    if (!review) {

        review =
            document.createElement(
                "div"
            );


        review.id =
            "answerReview";


        review.className =
            "answer-review";


        if (resultScreen) {

            resultScreen.appendChild(
                review
            );

        }

    }


    review.innerHTML =
        `
        <h3>
            Answer Review
        </h3>
        `;


    currentQuestions.forEach(
        (
            question,
            index
        ) => {

            const answer =
                currentAnswers[index];


            const item =
                document.createElement(
                    "div"
                );


            item.className =
                "review-item";


            /* =================================================
               MULTIPLE CHOICE REVIEW
            ================================================= */

            if (
                question.type ===
                "multiple"
            ) {

                const selected =
                    answer
                        ? question.options[
                            answer.selected
                        ]
                        : "Not answered";


                const correct =
                    getCorrectMultipleChoiceAnswer(
                        question
                    );


                const correctClass =
                    answer &&
                    answer.isCorrect
                        ? "correct"
                        : "wrong";


                item.innerHTML =
                    `
                    <div class="review-question">
                        ${index + 1}.
                        ${escapeHTML(
                            question.question
                        )}
                    </div>

                    <div class="review-answer ${correctClass}">
                        Your answer:
                        ${escapeHTML(
                            selected
                        )}
                    </div>

                    <div class="review-correct">
                        Correct answer:
                        ${escapeHTML(
                            correct
                        )}
                    </div>
                    `;

            }


            /* =================================================
               MATCHING REVIEW
            ================================================= */

            else if (
                question.type ===
                "matching"
            ) {

                let matchingHTML =
                    "";


                question.pairs.forEach(
                    (
                        pair,
                        pairIndex
                    ) => {

                        let selected =
                            "Not answered";


                        let isCorrect =
                            false;


                        /* -------------------------------------
                           CORRECT ANSWER IS pair.description
                        ------------------------------------- */

                        const correct =
                            pair.description;


                        if (
                            answer &&
                            answer.pairs &&
                            answer.pairs[
                                pairIndex
                            ]
                        ) {

                            selected =
                                answer.pairs[
                                    pairIndex
                                ].selected;


                            isCorrect =
                                answer.pairs[
                                    pairIndex
                                ].isCorrect;

                        }


                        matchingHTML +=
                            `
                            <div class="review-matching-row">

                                <strong>
                                    ${escapeHTML(
                                        pair.term
                                    )}
                                </strong>

                                <span class="${
                                    isCorrect
                                        ? "correct"
                                        : "wrong"
                                }">
                                    ${escapeHTML(
                                        selected
                                    )}
                                </span>

                                <small>
                                    Correct:
                                    ${escapeHTML(
                                        correct
                                    )}
                                </small>

                            </div>
                            `;

                    }
                );


                item.innerHTML =
                    `
                    <div class="review-question">
                        ${index + 1}.
                        ${escapeHTML(
                            question.question
                        )}
                    </div>

                    <div class="review-matching">
                        ${matchingHTML}
                    </div>
                    `;

            }


            review.appendChild(
                item
            );

        }
    );

}


/* =========================================================
   QUIZ HISTORY
========================================================= */

async function renderResults() {

    if (!resultsList) {
        return;
    }


    showScreen(
        resultsScreen
    );


    resultsList.innerHTML =
        `
        <div class="loading-results">
            Loading quiz history...
        </div>
        `;


    try {

        const results =
            await getAllResults();


        if (!results.length) {

            resultsList.innerHTML =
                `
                <div class="empty-results">
                    No quiz results yet.
                </div>
                `;

            return;

        }


        resultsList.innerHTML =
            "";


        results.forEach(
            result => {

                const card =
                    document.createElement(
                        "div"
                    );


                card.className =
                    "result-history-card";


                const status =
                    result.status ||
                    (
                        result.completed
                            ? "Completed"
                            : "Cancelled"
                    );


                const statusClass =
                    status.toLowerCase() ===
                    "completed"
                        ? "completed"
                        : "cancelled";


                const answeredCount =
                    result.answeredCount !==
                    undefined
                        ? result.answeredCount
                        : 0;


                card.innerHTML =
                    `
                    <div class="history-header">

                        <div>

                            <h3>
                                ${escapeHTML(
                                    result.studentName ||
                                    "Unknown Student"
                                )}
                            </h3>

                            <p>
                                ${escapeHTML(
                                    result.topicTitle ||
                                    result.topicId ||
                                    "Quiz"
                                )}
                            </p>

                        </div>


                        <span class="history-status ${statusClass}">
                            ${escapeHTML(
                                status
                            )}
                        </span>

                    </div>


                    <div class="history-details">

                        <div class="history-detail">

                            <span>
                                Score
                            </span>

                            <strong>
                                ${Number(
                                    result.score || 0
                                )}
                                /
                                ${Number(
                                    result.total || 0
                                )}
                            </strong>

                        </div>


                        <div class="history-detail">

                            <span>
                                Percentage
                            </span>

                            <strong>
                                ${Number(
                                    result.percentage || 0
                                )}%
                            </strong>

                        </div>


                        <div class="history-detail">

                            <span>
                                Answered
                            </span>

                            <strong>
                                ${Number(
                                    answeredCount
                                )}
                                /
                                ${Number(
                                    result.total || 0
                                )}
                            </strong>

                        </div>


                        <div class="history-detail">

                            <span>
                                Question Stopped
                            </span>

                            <strong>
                                ${Number(
                                    result.currentQuestion || 0
                                )}
                            </strong>

                        </div>

                    </div>


                    <div class="history-date">
                        ${escapeHTML(
                            formatDate(
                                result.createdAt
                            )
                        )}
                    </div>
                    `;


                resultsList.appendChild(
                    card
                );

            }
        );


    } catch (error) {

        console.error(
            "Failed to load quiz history:",
            error
        );


        resultsList.innerHTML =
            `
            <div class="empty-results">

                Unable to load quiz history.

                <br><br>

                Please check your Firebase connection.

            </div>
            `;

    }

}


/* =========================================================
   REFRESH HISTORY
========================================================= */

window.addEventListener(
    "focus",
    () => {

        if (
            resultsScreen &&
            resultsScreen.classList.contains(
                "active"
            )
        ) {

            renderResults();

        }

    }
);