document.addEventListener('DOMContentLoaded', function () {
    const riddles = [
        { question: "I keep the forms and formats of letters for applications of licensing. Which schedule am I?", answer: "Schedule A" },
        { question: "I provide the form for the application of import of drugs. Which schedule am I?", answer: "Schedule B" },
        { question: "Under me those diseases are kept whose drugs are not available in the market. Which schedule am I?", answer: "Schedule J" },
        { question: "I list the drugs which are habit-forming psychotropic and other drugs likely to be misused for addictive purposes. Which schedule am I?", answer: "Schedule X" },
        { question: "I am about the drugs exempted from the provision of import of drugs. Which schedule am I?", answer: "Schedule D" },
        { question: "I provide the standards for poisonous substances under Ayurvedic, Siddha, and Unani. Which schedule am I?", answer: "Schedule E1" },
        { question: "I am related to production testing, storage, packing, and labelling of biological and other special products. I?", answer: "Schedule F & F1" },
        { question: "I set the requirements for factory premises, etc. for the manufacture of homeopathic drugs. Which schedule am I?", answer: "Schedule M1" },
        { question: "I set standards for sterilized umbilical tapes. Which schedule am I?", answer: "Schedule F3" },
        { question: "I set the requirements for factory premises for the manufacture of medical devices. Which schedule am I?", answer: "Schedule M3" },
        { question: "Under me, various drugs/substances are to be used under medical supervision and are to be labelled accordingly. Which schedule am I?", answer: "Schedule G" },
        { question: "I allow drugs to be sold only on the prescription of an RMP. Which schedule am I?", answer: "Schedule H" },
        { question: "I am about the requirement and guidelines for clinical trials. Which schedule am I?", answer: "Schedule Y" },
        { question: "I set the standards for patent and proprietary medicines. Which schedule am I?", answer: "Schedule V" },
        { question: "I set standards for surgical dressings. Which schedule am I?", answer: "Schedule F2" },
        { question: "I keep a list of drugs exempted from provisions related to the manufacture of drugs. Which schedule am I?", answer: "Schedule K" },
        { question: "I set the standards for good manufacturing practices (GMP) for drugs and cosmetics. Which schedule am I?", answer: "Schedule M" },
        { question: "I set standards for ophthalmic preparations. Which schedule am I?", answer: "Schedule FF" },
        { question: "I set the requirements for factory premises for the manufacture of cosmetics. Which schedule am I?", answer: "Schedule M2" },
        { question: "I set the standards for medical devices. Which schedule am I?", answer: "Schedule R1" },
        { question: "I provide the list of manufacturing equipment for the efficient running of a pharmacy. Which schedule am I?", answer: "Schedule N" },
        { question: "I set standards for disinfectant fluids. Which schedule am I?", answer: "Schedule O" },
        { question: "I keep info about the life period and storage of various drugs. Which schedule am I?", answer: "Schedule P" },
        { question: "I allow for maintenance of manufacturing and analytical records of drugs. Which schedule am I?", answer: "Schedule U" },
        { question: "I am for the standards for colours used in drugs and cosmetics. Which schedule am I?", answer: "Schedule Q" },
        { question: "I provide the standards for condoms and other mechanical contraceptives. Which schedule am I?", answer: "Schedule R" },
        { question: "I allow for maintenance of manufacturing, raw material and analytical records of cosmetics. Which schedule am I?", answer: "Schedule U1" },
        { question: "I set the standards for cosmetics. Which schedule am I?", answer: "Schedule S" },
        { question: "I give requirements for factory premises and manufacture of Ayurvedic, Siddha, and Unani products. Which schedule am I?", answer: "Schedule T" },
        { question: "I provide the regulations regarding retail package size of various drugs. Which schedule am I?", answer: "Schedule P1" },
        { question: "I extend the standards of Schedule C for other drugs. Which schedule am I?", answer: "Schedule C1" },
        { question: "I list the drugs which can be marketed under generic names only. Which schedule am I?", answer: "Schedule W" },
        { question: "I set the standards for biological products. Which schedule am I?", answer: "Schedule C" },
        { question: "I ENSURE that antibiotics are not misused. Which schedule am I?", answer: "Schedule HX" },
    ];

    let currentRiddleIndex = 0;
    let score = 0;
    let rollNumber = '';
    let completedRiddles = 0;

    const riddlesContainer = document.getElementById('riddles-container');
    const progress = document.getElementById('progress');

    document.getElementById('start-page').classList.remove('hidden');

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    shuffle(riddles);

    function startQuiz() {
        rollNumber = document.getElementById('roll-number').value.trim();
        if (rollNumber === '') {
            alert('Please enter your roll number.');
            return;
        }
        document.getElementById('start-page').classList.add('hidden');
        riddlesContainer.classList.remove('hidden');
        showRiddle();
    }

    function showRiddle() {
        if (currentRiddleIndex >= riddles.length) {
            showLeaderboard();
            return;
        }

        const riddle = riddles[currentRiddleIndex];
        riddlesContainer.innerHTML = `
            <div class="riddle">
                <p>${riddle.question}</p>
                <input type="text" class="input-answer" id="answer-input" placeholder="Your answer here...">
                <button onclick="checkAnswer()">Show Answer</button>
            </div>
            <div class="footer">
                <p class="fancy-text" style="font-family: 'Great Vibes', cursive; color: green; background: #e0f7e0; padding: 10px; border-radius: 5px;">
                    Lalit Nimekar Roll No 36
                </p>
                <p class="fancy-text" style="font-family: 'Great Vibes', cursive; color: green; background: #e0f7e0; padding: 10px; border-radius: 5px;">
                    Maharshi Ahirrao Roll No 37
                </p>
                <p>Third Year</p>
                <p>Dr. D. Y. Patil College of Pharmacy, Akurdi, Pune</p>
            </div>
        `;
        updateProgress();
    }

    function updateProgress() {
        completedRiddles = currentRiddleIndex + 1;
        const progressPercentage = (completedRiddles / riddles.length) * 100;
        progress.style.width = `${progressPercentage}%`;
    }

    function checkAnswer() {
        const answerInput = document.getElementById('answer-input').value.trim();
        const correctAnswer = riddles[currentRiddleIndex].answer;

        if (answerInput.toLowerCase() === correctAnswer.toLowerCase()) {
            score++;
        }

        currentRiddleIndex++;
        showPopup(correctAnswer);
    }

    function showPopup(correctAnswer) {
        document.getElementById('overlay').classList.remove('hidden');
        const popup = document.getElementById('popup');
        const popupText = document.getElementById('popup-text');
        popupText.textContent = `The answer is: ${correctAnswer}`;
        popup.classList.remove('hidden');
    }

    function closePopup() {
        document.getElementById('overlay').classList.add('hidden');
        document.getElementById('popup').classList.add('hidden');
        showRiddle();
    }

    function showLeaderboard() {
        riddlesContainer.classList.add('hidden');
        const leaderboardPage = document.getElementById('leaderboard-page');
        leaderboardPage.classList.remove('hidden');

        const leaderboardList = document.getElementById('leaderboard-list');
        leaderboardList.innerHTML = `
            <li>${rollNumber}: ${score} points</li>
        `;
    }

    function restartQuiz() {
        currentRiddleIndex = 0;
        score = 0;
        riddlesContainer.classList.remove('hidden');
        document.getElementById('leaderboard-page').classList.add('hidden');
        showRiddle();
    }

    window.startQuiz = startQuiz;
    window.checkAnswer = checkAnswer;
    window.closePopup = closePopup;
    window.restartQuiz = restartQuiz;
});
