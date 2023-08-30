const areaToggleLinks = document.querySelectorAll('.area-toggle');
        const areaContents = document.querySelectorAll('.area-content');

        areaToggleLinks.forEach((link, index) => {
            link.addEventListener('click', function(event) {
                event.preventDefault();

                if (areaContents[index].style.display === 'block') {
                    areaContents[index].style.display = 'none';
                } else {
                    areaContents[index].style.display = 'block';
                }

                areaToggleLinks.forEach(areaToggleLink => areaToggleLink.classList.remove('active'));
                this.classList.add('active');
            });
        });

        const quizzes = [
            {
                questions: [
                    {
                        question: "1.Qual partícula subatômica possui uma carga negativa e orbita ao redor do núcleo do átomo?",
                        options: ["Próton", "Nêutron", "Elétron", "Íon", "Átomo"],
                        correctAnswer: "Elétron"
                    },
                    {
                        question: "2.De acordo com o modelo atômico proposto por Rutherford, qual é a característica principal do átomo?",
                        options: ["Os elétrons estão distribuídos uniformemente em toda a massa do átomo.", "O átomo é uma esfera sólida e indivisível.", "A maioria da massa e carga positiva do átomo está concentrada no núcleo.", "Os elétrons estão dispostos em órbitas quantizadas ao redor do núcleo.", "O núcleo é formado por nêutrons e elétrons."],
                        correctAnswer: "A maioria da massa e carga positiva do átomo está concentrada no núcleo."
                    }
                    // Adicione mais perguntas aqui
                ],
                questionContainer: document.getElementById("questionContainer1"),
                questionElement: document.getElementById("question1"),
                quizForm: document.getElementById("quizForm1"),
                resultElement: document.getElementById("result1"),
                scoreContainer: document.getElementById("scoreContainer1"),
                scoreElement: document.getElementById("score1"),
                totalQuestionsElement: document.getElementById("totalQuestions1"),
                checkButton: document.getElementById("checkButton1"),
                currentQuestionIndex: 0,
                score: 0
            },
            {
                questions: [
                    {
                        question: "1.Qual é a distribuição eletrônica do átomo de cloro (Z = 17)?",
                        options: ["1s² 2s² 2p⁶ 3s² 3p⁵", "1s² 2s² 2p⁶ 3s² 3p³", " 1s² 2s² 2p⁶ 3s² 3p⁶", "1s² 2s² 2p⁶ 3s² 3p⁴", "1s² 2s² 2p⁶ 3s² 3p²"],
                        correctAnswer: "1s² 2s² 2p⁶ 3s² 3p⁵"
                    },
                    {
                        question: "2.Qual é a configuração eletrônica abreviada do elemento ferro (Z = 26)?",
                        options: ["[Ar] 4s² 3d⁶", "[Ar] 4s² 3d⁸", "[Ne] 4s² 3d⁶", "[Kr] 4s² 3d⁶", "[Kr] 4s² 3d⁶"],
                        correctAnswer: "[Ar] 4s² 3d⁶"
                    },
                    {
                        question: "Qual é a distribuição eletrônica do íon oxigênio (O²⁻)?",
                        options: ["1s² 2s² 2p²", "1s² 2s² 2p³", "1s² 2s² 2p⁴", "1s² 2s² 2p⁶", "1s² 2s² 2p⁶ 3s² 3p⁶"],
                        correctAnswer: "1s² 2s² 2p⁴"
                    }    
                ],
                questionContainer: document.getElementById("questionContainer2"),
                questionElement: document.getElementById("question2"),
                quizForm: document.getElementById("quizForm2"),
                resultElement: document.getElementById("result2"),
                scoreContainer: document.getElementById("scoreContainer2"),
                scoreElement: document.getElementById("score2"),
                totalQuestionsElement: document.getElementById("totalQuestions2"),
                checkButton: document.getElementById("checkButton2"),
                currentQuestionIndex: 0,
                score: 0
            },
            {
                questions: [
                    {
                        question: "Qual é o maior rio do mundo?",
                        options: ["Nilo", "Amazonas", "Mississippi", "Yangtzé", "Ganges"],
                        correctAnswer: "Amazonas"
                    },
                    {
                        question: "Qual é o maior deserto do mundo?",
                        options: ["Saara", "Atacama", "Gobi", "Antártico", "Arábico"],
                        correctAnswer: "Saara"
                    }
                    // Adicione mais perguntas aqui
                ],
                questionContainer: document.getElementById("questionContainer3"),
                questionElement: document.getElementById("question3"),
                quizForm: document.getElementById("quizForm3"),
                resultElement: document.getElementById("result3"),
                scoreContainer: document.getElementById("scoreContainer3"),
                scoreElement: document.getElementById("score3"),
                totalQuestionsElement: document.getElementById("totalQuestions3"),
                checkButton: document.getElementById("checkButton3"),
                currentQuestionIndex: 0,
                score: 0
            }
        ];

        function showQuestion(quiz) {
            const currentQuestion = quiz.questions[quiz.currentQuestionIndex];
            quiz.questionElement.textContent = currentQuestion.question;

            quiz.quizForm.innerHTML = "";
            currentQuestion.options.forEach((option, index) => {
                const label = document.createElement("label");
                const input = document.createElement("input");
                input.type = "radio";
                input.name = `answer${quiz.currentQuestionIndex}`;
                input.value = option;
                label.appendChild(input);
                label.appendChild(document.createTextNode(option));
                quiz.quizForm.appendChild(label);
            });
        }

        function checkAnswer(quiz) {
            const selectedAnswer = document.querySelector(`input[name="answer${quiz.currentQuestionIndex}"]:checked`);

            if (selectedAnswer) {
                const userAnswer = selectedAnswer.value;
                const correctAnswer = quiz.questions[quiz.currentQuestionIndex].correctAnswer;

                if (userAnswer === correctAnswer) {
                    quiz.resultElement.textContent = "Resposta correta!";
                    quiz.score++;
                } else {
                    quiz.resultElement.textContent = "Resposta incorreta. Tente novamente.";
                }

                quiz.currentQuestionIndex++;
                if (quiz.currentQuestionIndex < quiz.questions.length) {
                    showQuestion(quiz);
                } else {
                    quiz.questionContainer.style.display = "none";
                    quiz.checkButton.style.display = "none";
                    quiz.scoreContainer.style.display = "block";
                    quiz.scoreElement.textContent = quiz.score;
                    quiz.totalQuestionsElement.textContent = quiz.questions.length;
                }
            } else {
                alert("Selecione uma resposta antes de verificar.");
            }
        }

        quizzes.forEach((quiz, index) => {
            showQuestion(quiz);
            quiz.checkButton.addEventListener("click", () => checkAnswer(quiz));
        });