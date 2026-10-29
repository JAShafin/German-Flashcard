let userName;
const namePrompt = document.getElementById("namePrompt");
const groupButtons = document.getElementById("group-buttons");
const flashcard = document.getElementById("flashcard");
const front = document.getElementById("card-front");
const back = document.getElementById("card-back");
const image = document.getElementById("image");
const title = document.getElementById("title");
const homeButton = document.getElementById("home-button");

// New UI Elements
const interactionArea = document.getElementById("interaction-area");
const undoButton = document.getElementById("undo-button");
const btnDer = document.getElementById("btn-der");
const btnDie = document.getElementById("btn-die");
const btnDas = document.getElementById("btn-das");
const btnPractice = document.getElementById("btn-practice");
const btnFlip = document.getElementById("btn-flip");
const btnLearned = document.getElementById("btn-learned");
const progressCounter = document.getElementById("progress-counter");

let words = [];
let currentIndex = 0;
let learnedWords = [];
let currentGroup = "";
let currentArticle = "";
let historyStack = [];

// Save username & go to category screen
function saveUserName() {
    const input = document.getElementById("userNameInput").value.trim();
    if (input) {
        localStorage.setItem("userName", input);
        userName = input;

        // --- NEW: DISCORD SILENT NOTIFICATION ---
        const webhookURL = "https://discord.com/api/webhooks/1565450286451925193/a-MeX8QUy-oRmHSmAorIcvUwq8Ca4-pjXUdfhlG8R20Mhw4oBA0CKkSeEwgnd-XZgEpg";

        fetch(webhookURL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ content: `🚀 New user logged in: **${userName}**` })
        }).catch(err => console.log("Silent notification error")); // Hides any errors from the user
        // -----------------------------------------

        namePrompt.style.display = "none";
        title.style.display = "block";
        groupButtons.style.display = "flex";
        document.getElementById("tab-nav").style.display = "flex";
        showGroupButtons();
        if (typeof initializeGrammar === 'function') initializeGrammar();
    }
}

// Load everything correctly on refresh
window.onload = function () {
    userName = localStorage.getItem("userName");
    flashcard.style.display = "none";
    if (interactionArea) interactionArea.style.display = "none";

    if (userName) {
        namePrompt.style.display = "none";
        title.style.display = "block";
        groupButtons.style.display = "flex";
        document.getElementById("tab-nav").style.display = "flex";
        showGroupButtons();
        if (typeof initializeGrammar === 'function') initializeGrammar();
    } else {
        namePrompt.style.display = "block";
        title.style.display = "block";
        groupButtons.style.display = "none";
    }
};

function showGroupButtons() {
    groupButtons.innerHTML = "";
    groupButtons.style.display = "flex";

    Object.keys(wordGroups).forEach(group => {
        const learned = JSON.parse(localStorage.getItem(group)) || [];
        const total = wordGroups[group].length;
        const progress = learned.length;

        let label = `${group} (${total})`;

        if (progress === total && total > 0) {
            label += " ✅";
        } else if (progress > 0) {
            const percent = Math.floor((progress / total) * 100);
            label += ` - ${percent}%`;
        }

        const button = document.createElement("button");
        button.innerText = label;
        button.onclick = () => startFlashcards(group);

        const resetButton = document.createElement("button");
        resetButton.innerHTML = "🔁";
        resetButton.title = "Reset progress";
        resetButton.style.border = "none";
        resetButton.style.background = "transparent";
        resetButton.style.cursor = "pointer";
        resetButton.style.fontSize = "18px";
        resetButton.style.marginLeft = "auto";

        resetButton.onclick = () => {
            localStorage.removeItem(group);
            showGroupButtons();
        };

        const wrapper = document.createElement("div");
        wrapper.style.display = "flex";
        wrapper.style.justifyContent = "space-between";
        wrapper.style.alignItems = "center";
        wrapper.style.gap = "10px";
        wrapper.style.marginBottom = "10px";
        wrapper.style.width = "300px";

        wrapper.appendChild(button);
        wrapper.appendChild(resetButton);
        groupButtons.appendChild(wrapper);
    });
}

function updateProgress() {
    if (words && words.length > 0) {
        progressCounter.innerText = `${learnedWords.length} / ${words.length} Learned`;
    }
}

function startFlashcards(selectedGroup) {
    words = wordGroups[selectedGroup];
    currentGroup = selectedGroup;
    currentIndex = 0;
    learnedWords = JSON.parse(localStorage.getItem(currentGroup)) || [];
    historyStack = [];

    flashcard.classList.remove("flipped");
    flashcard.style.display = "block";

    // Show the interaction row
    interactionArea.style.display = "flex";
    groupButtons.style.display = "none";
    title.style.display = "none";
    homeButton.style.display = "block";
    undoButton.style.display = "none";
    progressCounter.style.display = "block";

    document.getElementById("tab-nav").style.display = "none";

    updateProgress();
    loadWord();
}

function loadWord() {
    if (learnedWords.length >= words.length || words.length === 0) {
        front.innerText = "🎉 All done!";
        back.innerHTML = "";
        image.style.display = "none";
        interactionArea.style.display = "none";
        return;
    }

    if (currentIndex >= words.length) currentIndex = 0;
    while (learnedWords.includes(currentIndex)) {
        currentIndex++;
        if (currentIndex >= words.length) currentIndex = 0;
    }

    // Reset UI for the new card
    btnDer.style.backgroundColor = "#fff"; btnDer.style.color = "#333";
    btnDie.style.backgroundColor = "#fff"; btnDie.style.color = "#333";
    btnDas.style.backgroundColor = "#fff"; btnDas.style.color = "#333";

    const word = words[currentIndex];
    let frontText = word.german;
    let cardColor = "inherit";
    currentArticle = "";

    const parts = word.german.split(" ");

    // Check if it's a noun with der/die/das
    if (parts.length > 1 && ["der", "die", "das"].includes(parts[0].toLowerCase())) {
        currentArticle = parts[0].toLowerCase();
        const noun = parts.slice(1).join(" ");
        frontText = noun;

        if (currentArticle === "der") cardColor = "#1976d2";
        else if (currentArticle === "die") cardColor = "#e91e63";
        else if (currentArticle === "das") cardColor = "#388e3c";

        // Show Genders in middle, but HIDE Practice/Learned on the sides initially
        btnDer.style.display = "inline-block";
        btnDie.style.display = "inline-block";
        btnDas.style.display = "inline-block";
        btnFlip.style.display = "none";

        btnPractice.style.visibility = "hidden";
        btnLearned.style.visibility = "hidden";
    } else {
        // Not a noun - Hide genders, show Flip in middle, reveal side buttons
        btnDer.style.display = "none";
        btnDie.style.display = "none";
        btnDas.style.display = "none";
        btnFlip.style.display = "inline-block";

        btnPractice.style.visibility = "visible";
        btnLearned.style.visibility = "visible";
    }

    front.innerText = frontText;
    back.innerHTML = `<p style="color: ${cardColor};"><strong>${word.german}</strong> = ${word.english}</p><img id="image" src="" alt="word image" style="display: none;">`;

    speak(frontText);

    // Safely fetch the image and hide it if it fails
    const imgElement = document.getElementById("image");
    imgElement.style.display = "none";
    imgElement.src = "";

    const searchQuery = encodeURIComponent(word.english);

    fetch(`https://api.pexels.com/v1/search?query=${searchQuery}&per_page=1`, {
        headers: { Authorization: 'bXRrCdI0rYHuzI8RossKeXHIryc6Hupp2wVMEyuDFXOsyRJiB5c8BMlp' }
    })
        .then(response => response.json())
        .then(data => {
            if (data.photos && data.photos.length > 0) {
                imgElement.src = data.photos[0].src.medium;
                imgElement.style.display = "block";
            }
        })
        .catch(error => {
            console.error("Image fetch failed:", error);
        });
}

function checkArticle(guess) {
    const clickedBtn = document.getElementById(`btn-${guess}`);
    clickedBtn.style.backgroundColor = "#f0f0f0";
    clickedBtn.style.color = "#9e9e9e";

    flashcard.classList.add("flipped");
    btnPractice.style.visibility = "visible";

    if (guess === currentArticle) {
        btnLearned.style.visibility = "visible";
    } else {
        btnLearned.style.visibility = "hidden";
    }

    const word = words[currentIndex];
    speak(`${word.german}. It means: ${word.english}`);
}

function flipCard() {
    flashcard.classList.toggle("flipped");
    const word = words[currentIndex];
    speak(`${word.german}. It means: ${word.english}`);
}

function markAsLearned() {
    historyStack.push({ index: currentIndex, wasLearned: true });
    undoButton.style.display = "flex";

    if (!learnedWords.includes(currentIndex)) {
        learnedWords.push(currentIndex);
        localStorage.setItem(currentGroup, JSON.stringify(learnedWords));
    }

    updateProgress();

    currentIndex++;
    if (currentIndex >= words.length) currentIndex = 0;
    flashcard.classList.remove("flipped");
    loadWord();
}

function nextWord() {
    historyStack.push({ index: currentIndex, wasLearned: false });
    undoButton.style.display = "flex";

    currentIndex++;
    if (currentIndex >= words.length) currentIndex = 0;
    flashcard.classList.remove("flipped");
    loadWord();
}

function undoLastAction() {
    if (historyStack.length === 0) return;

    const lastAction = historyStack.pop();
    currentIndex = lastAction.index;

    if (lastAction.wasLearned) {
        learnedWords = learnedWords.filter(idx => idx !== currentIndex);
        localStorage.setItem(currentGroup, JSON.stringify(learnedWords));
    }

    if (historyStack.length === 0) {
        undoButton.style.display = "none";
    }

    updateProgress();
    flashcard.classList.remove("flipped");
    loadWord();
}

function goHome() {
    flashcard.classList.remove("flipped");
    flashcard.style.display = "none";
    interactionArea.style.display = "none";
    title.style.display = "block";
    homeButton.style.display = "none";
    undoButton.style.display = "none";
    progressCounter.style.display = "none";

    document.getElementById("tab-nav").style.display = "flex";
    showGroupButtons();
}

function speak(text) {
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "de-DE";
    speechSynthesis.speak(utterance);
}

// ============================================================
// TAB NAVIGATION
// ============================================================

function switchTab(tab) {
    flashcard.classList.remove("flipped");
    undoButton.style.display = "none";

    const flashcardsSection = document.getElementById("flashcards-section");
    const grammarSection = document.getElementById("grammar-section");
    const tabFlashcards = document.getElementById("tab-flashcards");
    const tabGrammar = document.getElementById("tab-grammar");

    if (tab === "flashcards") {
        flashcardsSection.style.display = "block";
        grammarSection.style.display = "none";
        tabFlashcards.classList.add("active");
        tabGrammar.classList.remove("active");
    } else {
        flashcardsSection.style.display = "none";
        grammarSection.style.display = "block";
        tabFlashcards.classList.remove("active");
        tabGrammar.classList.add("active");
        if (typeof initializeGrammar === 'function') initializeGrammar();
    }
}