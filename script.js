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
let imageRequestId = 0;
let imageRequestController = null;

// NEW: Track which deck we are in
let currentDeckType = 'general';
let filteredGoetheData = {}; // Will hold deduplicated Goethe lists

// Save username & go to category screen
function saveUserName() {
    const input = document.getElementById("userNameInput").value.trim();
    if (input) {
        localStorage.setItem("userName", input);
        userName = input;

        // --- DISCORD NOTIFICATION (OBFUSCATED) ---
        const hookParts = [
            "https://discord",
            ".com/api/webhooks/",
            "1566451144740573267",
            "/",
            "s3zW_Q6X-HuuYTCBS20RFHcsGvQDs9zCeEeYsNIjZkKQKxSlIQ7sGlsEOldMWosARYp_"
        ];
        const webhookURL = hookParts.join("");
        fetch(webhookURL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ content: `🚀 New user logged in: **${userName}**` })
        }).catch(err => console.log("Silent notification error"));
        // -----------------------------------------

        namePrompt.style.display = "none";
        title.style.display = "block";
        document.getElementById("tab-nav").style.display = "flex";

        document.getElementById("deck-selection-home").style.display = "block";
        document.getElementById("deck-groups-area").style.display = "none";

        if (typeof initializeGrammar === 'function') initializeGrammar();
    }
}

// Load everything correctly on refresh
window.onload = function () {
    userName = localStorage.getItem("userName");
    flashcard.style.display = "none";
    if (interactionArea) interactionArea.style.display = "none";

    // Safety fallback for Goethe lists
    if (typeof goetheGroups === 'undefined') {
        window.goetheGroups = {};
    }

    // Safety fallback for General words
    if (typeof wordGroups === 'undefined') {
        window.wordGroups = {};
    }

    // Build the Deduplicated Goethe Data once on load
    buildFilteredGoetheData();

    if (userName) {
        namePrompt.style.display = "none";
        title.style.display = "block";
        document.getElementById("tab-nav").style.display = "flex";

        document.getElementById("deck-selection-home").style.display = "block";
        document.getElementById("deck-groups-area").style.display = "none";

        if (typeof initializeGrammar === 'function') initializeGrammar();
    } else {
        namePrompt.style.display = "block";
        title.style.display = "block";
        document.getElementById("deck-selection-home").style.display = "none";
        document.getElementById("deck-groups-area").style.display = "none";
    }
};

// --- AUTOMATIC DEDUPLICATION LOGIC ---
function buildFilteredGoetheData() {
    const seenWords = new Set();
    filteredGoetheData = { A1: {}, A2: {}, B1: {}, B2: {} };

    // Helper function to extract just the base German word (ignoring der/die/das)
    function getBaseWord(fullString) {
        if (!fullString) return "";
        const parts = fullString.split(" ");
        if (parts.length > 1 && ["der", "die", "das"].includes(parts[0].toLowerCase())) {
            return parts.slice(1).join(" ").trim().toLowerCase();
        }
        return fullString.trim().toLowerCase();
    }

    // Process levels in order so higher levels strip out lower-level duplicates
    const levels = ["A1", "A2", "B1", "B2"];

    levels.forEach(level => {
        if (goetheGroups[level]) {
            Object.keys(goetheGroups[level]).forEach(listName => {
                filteredGoetheData[level][listName] = goetheGroups[level][listName].filter(wordObj => {
                    const base = getBaseWord(wordObj.german);
                    // If we already saw this word in a lower level, remove it here
                    if (seenWords.has(base)) return false;

                    // Otherwise, add it to our seen list and keep it
                    seenWords.add(base);
                    return true;
                });
            });
        }
    });
}
// -------------------------------------


// --- NEW DECK NAVIGATION ---
function openDeck(type) {
    currentDeckType = type;
    document.getElementById("deck-selection-home").style.display = "none";

    if (type === 'goethe') {
        document.getElementById("goethe-sections-area").style.display = "block";
        document.getElementById("deck-groups-area").style.display = "none";
    } else {
        document.getElementById("goethe-sections-area").style.display = "none";
        document.getElementById("deck-groups-area").style.display = "block";
        showGroupButtons(wordGroups);
    }
}

function openGoetheSection(level) {
    document.getElementById("goethe-sections-area").style.display = "none";
    document.getElementById("deck-groups-area").style.display = "block";
    showGroupButtons(filteredGoetheData[level]); // Show specific level
}

function closeDeck() {
    if (currentDeckType === 'goethe' && document.getElementById("deck-groups-area").style.display === "block") {
        // Back from lists to the 4 sections
        document.getElementById("deck-groups-area").style.display = "none";
        document.getElementById("goethe-sections-area").style.display = "block";
    } else {
        // Back to main home
        document.getElementById("deck-groups-area").style.display = "none";
        document.getElementById("goethe-sections-area").style.display = "none";
        document.getElementById("deck-selection-home").style.display = "block";
    }
}
// ---------------------------

function showGroupButtons(dataSource) {
    groupButtons.innerHTML = "";
    groupButtons.style.display = "flex";

    if (!dataSource || Object.keys(dataSource).length === 0) {
        groupButtons.innerHTML = "<p>No lists available for this section yet.</p>";
        return;
    }

    Object.keys(dataSource).forEach(group => {
        // If a list was completely emptied by filtering, skip it
        if (!dataSource[group] || dataSource[group].length === 0) return;

        const learned = JSON.parse(localStorage.getItem(group)) || [];
        const total = dataSource[group].length;
        const progress = learned.length;

        let label = `${group} (${total})`;

        if (progress >= total && total > 0) {
            label += " ✅";
        } else if (progress > 0) {
            const percent = Math.floor((progress / total) * 100);
            label += ` - ${percent}%`;
        }

        const button = document.createElement("button");
        button.innerText = label;
        button.onclick = () => startFlashcards(group, dataSource[group]);

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
            showGroupButtons(dataSource); // Refresh
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

function startFlashcards(selectedGroup, selectedWordsArray) {
    words = selectedWordsArray;
    currentGroup = selectedGroup;
    currentIndex = 0;
    learnedWords = JSON.parse(localStorage.getItem(currentGroup)) || [];
    historyStack = [];

    flashcard.classList.remove("flipped");
    flashcard.style.display = "block";

    interactionArea.style.display = "flex";
    document.getElementById("deck-groups-area").style.display = "none";
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

    btnDer.style.backgroundColor = "#fff"; btnDer.style.color = "#333";
    btnDie.style.backgroundColor = "#fff"; btnDie.style.color = "#333";
    btnDas.style.backgroundColor = "#fff"; btnDas.style.color = "#333";

    const word = words[currentIndex];
    let frontText = word.german;
    let cardColor = "inherit";
    currentArticle = "";

    const parts = word.german.split(" ");

    if (parts.length > 1 && ["der", "die", "das"].includes(parts[0].toLowerCase())) {
        currentArticle = parts[0].toLowerCase();
        const noun = parts.slice(1).join(" ");
        frontText = noun;

        if (currentArticle === "der") cardColor = "#1976d2";
        else if (currentArticle === "die") cardColor = "#e91e63";
        else if (currentArticle === "das") cardColor = "#388e3c";

        btnDer.style.display = "inline-block";
        btnDie.style.display = "inline-block";
        btnDas.style.display = "inline-block";
        btnFlip.style.display = "none";

        btnPractice.style.visibility = "hidden";
        btnLearned.style.visibility = "hidden";
    } else {
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

    const imgElement = document.getElementById("image");
    imgElement.style.display = "none";
    imgElement.src = "";

    imageRequestId++;
    const requestId = imageRequestId;
    if (imageRequestController) imageRequestController.abort();
    imageRequestController = new AbortController();

    const imageCacheKey = `flashcard-image:v2:${word.german}`;
    const cachedImageUrl = sessionStorage.getItem(imageCacheKey);
    if (cachedImageUrl) {
        imgElement.src = cachedImageUrl;
        imgElement.style.display = "block";
        return;
    }

    const searchQuery = encodeURIComponent(word.german);

    fetch(`https://api.pexels.com/v1/search?query=${searchQuery}&per_page=1`, {
        headers: { Authorization: 'bXRrCdI0rYHuzI8RossKeXHIryc6Hupp2wVMEyuDFXOsyRJiB5c8BMlp' },
        signal: imageRequestController.signal
    })
        .then(response => response.json())
        .then(data => {
            if (requestId !== imageRequestId) return;
            if (data.photos && data.photos.length > 0) {
                const imageUrl = data.photos[0].src.medium;
                sessionStorage.setItem(imageCacheKey, imageUrl);
                imgElement.src = imageUrl;
                imgElement.style.display = "block";
            }
        })
        .catch(error => {
            if (error.name !== "AbortError") {
                console.error("Image fetch failed:", error);
            }
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

    // We determine where home actually is based on currentDeckType
    if (currentDeckType === 'goethe') {
        document.getElementById("deck-groups-area").style.display = "block";
        showGroupButtons(filteredGoetheData[currentGroup.substring(0, 2)]);
    } else {
        document.getElementById("deck-groups-area").style.display = "block";
        showGroupButtons(wordGroups);
    }
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

        // Reset to Deck Home when switching tabs
        document.getElementById("deck-selection-home").style.display = "block";
        document.getElementById("goethe-sections-area").style.display = "none";
        document.getElementById("deck-groups-area").style.display = "none";
    } else {
        flashcardsSection.style.display = "none";
        grammarSection.style.display = "block";
        tabFlashcards.classList.remove("active");
        tabGrammar.classList.add("active");
        if (typeof initializeGrammar === 'function') initializeGrammar();
    }
}