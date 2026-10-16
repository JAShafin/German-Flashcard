let userName;
const namePrompt = document.getElementById("namePrompt");
const groupButtons = document.getElementById("group-buttons");
const flashcard = document.getElementById("flashcard");
const front = document.getElementById("card-front");
const back = document.getElementById("card-back");
const image = document.getElementById("image");
const buttons = document.getElementById("buttons");
const title = document.getElementById("title");
const homeButton = document.getElementById("home-button");

let words = [];
let currentIndex = 0;
let learnedWords = [];
let currentGroup = "";

// Save username & go to category screen
function saveUserName() {
    const input = document.getElementById("userNameInput").value.trim();
    if (input) {
        localStorage.setItem("userName", input);
        userName = input;
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
    buttons.style.display = "none";

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

        let label = group;
        if (progress === total && total > 0) {
            label += " ✅";
        } else if (progress > 0) {
            const percent = Math.floor((progress / total) * 100);
            label += ` (${percent}%)`;
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

function startFlashcards(selectedGroup) {
    words = wordGroups[selectedGroup];
    currentGroup = selectedGroup;
    currentIndex = 0;
    learnedWords = JSON.parse(localStorage.getItem(currentGroup)) || [];

    flashcard.classList.remove("flipped");

    flashcard.style.display = "block";
    buttons.style.display = "block";
    groupButtons.style.display = "none";
    title.style.display = "none";
    homeButton.style.display = "block";

    loadWord();
}

function loadWord() {
    // 1. Check if EVERY SINGLE WORD is actually learned
    if (learnedWords.length >= words.length || words.length === 0) {
        front.innerText = "🎉 All done!";
        back.innerHTML = "";
        image.src = "";
        return;
    }

    // 2. Safety catch: if the index went out of bounds, bring it back to 0
    if (currentIndex >= words.length) {
        currentIndex = 0;
    }

    // 3. Find the next unlearned word, looping back to 0 if necessary
    while (learnedWords.includes(currentIndex)) {
        currentIndex++;
        if (currentIndex >= words.length) {
            currentIndex = 0;
        }
    }

    const word = words[currentIndex];

    // Separate the article from the noun
    let frontText = word.german;
    let cardColor = "inherit";

    const parts = word.german.split(" ");
    if (parts.length > 1 && ["der", "die", "das"].includes(parts[0].toLowerCase())) {
        const article = parts[0].toLowerCase();
        const noun = parts.slice(1).join(" ");

        frontText = noun; // Hide article on the front

        // Determine the color for the ENTIRE text
        if (article === "der") cardColor = "#1976d2"; // Blue
        else if (article === "die") cardColor = "#e91e63"; // Pink
        else if (article === "das") cardColor = "#388e3c"; // Green
    }

    // Display the texts - Applying the color to the whole paragraph!
    front.innerText = frontText;
    back.innerHTML = `<p style="color: ${cardColor};"><strong>${word.german}</strong> = ${word.english}</p><img id="image" src="" alt="word image">`;

    // Speak ONLY the noun on the front
    speak(frontText);

    // Fetch the image
    fetch(`https://api.pexels.com/v1/search?query=${word.english}&per_page=1`, {
        headers: {
            Authorization: 'bXRrCdI0rYHuzI8RossKeXHIryc6Hupp2wVMEyuDFXOsyRJiB5c8BMlp'
        }
    })
        .then(response => response.json())
        .then(data => {
            if (data.photos && data.photos.length > 0) {
                document.getElementById("image").src = data.photos[0].src.medium;
            } else {
                document.getElementById("image").alt = "No image found";
            }
        });
}

function flipCard() {
    flashcard.classList.toggle("flipped");
    const word = words[currentIndex];

    // Now that the card is flipped, speak the FULL word with the article
    speak(`${word.german}. That means: ${word.english}`);
}

function markAsLearned() {
    if (!learnedWords.includes(currentIndex)) {
        learnedWords.push(currentIndex);
        localStorage.setItem(currentGroup, JSON.stringify(learnedWords));
    }
    currentIndex++;
    // Loop back to the beginning if we pass the last word
    if (currentIndex >= words.length) {
        currentIndex = 0;
    }
    flashcard.classList.remove("flipped");
    loadWord();
}

function goHome() {
    flashcard.classList.remove("flipped");
    flashcard.style.display = "none";
    buttons.style.display = "none";
    title.style.display = "block";
    homeButton.style.display = "none";
    showGroupButtons();
}

function nextWord() {
    currentIndex++;
    // Loop back to the beginning if we pass the last word
    if (currentIndex >= words.length) {
        currentIndex = 0;
    }
    flashcard.classList.remove("flipped");
    loadWord();
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