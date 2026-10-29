// ==========================================
// VERB MASTERY DATA
// ==========================================
const verbData = {
    perfectForms: {
        mixed: [
            { verb: "wissen", meaning: "to know (a fact)", form: "hat gewusst" },
            { verb: "denken", meaning: "to think", form: "hat gedacht" },
            { verb: "bringen", meaning: "to bring", form: "hat gebracht" },
            { verb: "kennen", meaning: "to know (a person/place)", form: "hat gekannt" },
            { verb: "nennen", meaning: "to name / to call", form: "hat genannt" },
            { verb: "rennen", meaning: "to run (sprint)", form: "ist gerannt" },
            { verb: "brennen", meaning: "to burn", form: "hat gebrannt" },
            { verb: "senden", meaning: "to send", form: "hat gesandt" },
            { verb: "wenden", meaning: "to turn", form: "hat gewandt" }
        ],
        a1: [
            { verb: "gehen", meaning: "to go", form: "ist gegangen" },
            { verb: "kommen", meaning: "to come", form: "ist gekommen" },
            { verb: "sehen", meaning: "to see", form: "hat gesehen" },
            { verb: "essen", meaning: "to eat", form: "hat gegessen" },
            { verb: "trinken", meaning: "to drink", form: "hat getrunken" },
            { verb: "schreiben", meaning: "to write", form: "hat geschrieben" },
            { verb: "lesen", meaning: "to read", form: "hat gelesen" },
            { verb: "sprechen", meaning: "to speak", form: "hat gesprochen" },
            { verb: "schlafen", meaning: "to sleep", form: "hat geschlafen" },
            { verb: "fahren", meaning: "to drive/go", form: "ist gefahren" },
            { verb: "finden", meaning: "to find", form: "hat gefunden" },
            { verb: "geben", meaning: "to give / to exist", form: "hat gegeben" },
            { verb: "nehmen", meaning: "to take", form: "hat genommen" },
            { verb: "bleiben", meaning: "to stay", form: "ist geblieben" },
            { verb: "stehen", meaning: "to stand", form: "hat gestanden" },
            { verb: "liegen", meaning: "to lie (flat)", form: "hat gelegen" },
            { verb: "sitzen", meaning: "to sit", form: "hat gesessen" },
            { verb: "treffen", meaning: "to meet", form: "hat getroffen" },
            { verb: "fliegen", meaning: "to fly", form: "ist geflogen" },
            { verb: "laufen", meaning: "to run / to go (flow)", form: "ist gelaufen" },
            { verb: "backen", meaning: "to bake", form: "hat gebacken" },
            { verb: "braten", meaning: "to fry / roast", form: "hat gebraten" },
            { verb: "stehlen", meaning: "to steal", form: "hat gestohlen" },
            { verb: "geschehen", meaning: "to happen", form: "ist geschehen" }
        ],
        a2: [
            { verb: "helfen", meaning: "to help", form: "hat geholfen" },
            { verb: "tragen", meaning: "to carry / wear", form: "hat getragen" },
            { verb: "ziehen", meaning: "to pull/move", form: "ist/hat gezogen" },
            { verb: "rufen", meaning: "to call (shout)", form: "hat gerufen" },
            { verb: "halten", meaning: "to hold / stop", form: "hat gehalten" },
            { verb: "lassen", meaning: "to let/leave", form: "hat gelassen" },
            { verb: "fallen", meaning: "to fall", form: "ist gefallen" },
            { verb: "schlagen", meaning: "to hit/beat", form: "hat geschlagen" },
            { verb: "bieten", meaning: "to offer", form: "hat geboten" },
            { verb: "bitten", meaning: "to ask / request", form: "hat gebeten" },
            { verb: "beginnen", meaning: "to begin", form: "hat begonnen" },
            { verb: "gewinnen", meaning: "to win/gain", form: "hat gewonnen" },
            { verb: "scheinen", meaning: "to shine / seem", form: "hat geschienen" },
            { verb: "wachsen", meaning: "to grow", form: "ist gewachsen" },
            { verb: "werfen", meaning: "to throw", form: "hat geworfen" },
            { verb: "treten", meaning: "to step/kick", form: "ist/hat getreten" },
            { verb: "brechen", meaning: "to break", form: "hat gebrochen" },
            { verb: "schneiden", meaning: "to cut", form: "hat geschnitten" },
            { verb: "tun", meaning: "to do", form: "hat getan" },
            { verb: "schließen", meaning: "to close/conclude", form: "hat geschlossen" },
            { verb: "springen", meaning: "to jump", form: "ist gesprungen" },
            { verb: "fangen", meaning: "to catch", form: "hat gefangen" },
            { verb: "waschen", meaning: "to wash", form: "hat gewaschen" },
            { verb: "schwimmen", meaning: "to swim", form: "ist geschwommen" },
            { verb: "laden", meaning: "to load/invite", form: "hat geladen" }
        ],
        b1: [
            { verb: "steigen", meaning: "to rise / climb", form: "ist gestiegen" },
            { verb: "sinken", meaning: "to sink / decrease", form: "ist gesunken" },
            { verb: "verlieren", meaning: "to lose", form: "hat verloren" },
            { verb: "empfehlen", meaning: "to recommend", form: "hat empfohlen" },
            { verb: "greifen", meaning: "to grab / grasp", form: "hat gegriffen" },
            { verb: "heben", meaning: "to lift/ raise", form: "hat gehoben" },
            { verb: "schieben", meaning: "to push / shove", form: "hat geschoben" },
            { verb: "weisen", meaning: "to point/show", form: "hat gewiesen" },
            { verb: "gleichen", meaning: "to equal/resemble", form: "hat geglichen" },
            { verb: "scheiden", meaning: "to separate/part", form: "hat/ist geschieden" },
            { verb: "raten", meaning: "to advise / guess", form: "hat geraten" },
            { verb: "leihen", meaning: "to lend/borrow", form: "hat geliehen" },
            { verb: "gelten", meaning: "to be valid/count", form: "hat gegolten" },
            { verb: "treiben", meaning: "to drive / do (sports)", form: "hat getrieben" },
            { verb: "klingen", meaning: "to sound", form: "hat geklungen" },
            { verb: "gelingen", meaning: "to succeed", form: "ist gelungen" },
            { verb: "leiden", meaning: "to suffer", form: "hat gelitten" },
            { verb: "schweigen", meaning: "to remain silent", form: "hat geschwiegen" },
            { verb: "streichen", meaning: "to cancel / paint", form: "hat gestrichen" },
            { verb: "wiegen", meaning: "to weigh", form: "hat gewogen" }
        ],
        b2: [
            { verb: "binden", meaning: "to bind/tie", form: "hat gebunden" },
            { verb: "schaffen", meaning: "to create (strong)", form: "hat geschaffen" },
            { verb: "stoßen", meaning: "to bump/encounter", form: "ist/hat gestoßen" },
            { verb: "fliehen", meaning: "to flee / escape", form: "ist geflohen" },
            { verb: "biegen", meaning: "to bend/turn", form: "hat/ist gebogen" },
            { verb: "zwingen", meaning: "to force", form: "hat gezwungen" },
            { verb: "streiten", meaning: "to argue", form: "hat gestritten" },
            { verb: "sterben", meaning: "to die", form: "ist gestorben" },
            { verb: "werben", meaning: "to advertise/recruit", form: "hat geworben" },
            { verb: "stehlen", meaning: "to steal", form: "hat gestohlen" },
            { verb: "bergen", meaning: "to rescue/harbor", form: "hat geborgen" },
            { verb: "schwinden", meaning: "to dwindle/fade", form: "ist geschwunden" },
            { verb: "dringen", meaning: "to penetrate / urge", form: "ist gedrungen" },
            { verb: "schreiten", meaning: "to stride/step", form: "ist geschritten" },
            { verb: "weichen", meaning: "to yield/give way", form: "ist gewichen" },
            { verb: "reißen", meaning: "to tear/snap", form: "hat/ist gerissen" },
            { verb: "lügen", meaning: "to lie (falsify)", form: "hat gelogen" },
            { verb: "trügen", meaning: "to deceive", form: "hat getrogen" },
            { verb: "stechen", meaning: "to sting/stab", form: "hat gestochen" },
            { verb: "schwören", meaning: "to swear", form: "hat geschworen" },
            { verb: "messen", meaning: "to measure", form: "hat gemessen" },
            { verb: "schmeißen", meaning: "to throw (colloquial)", form: "hat geschmissen" },
            { verb: "fließen", meaning: "to flow", form: "ist geflossen" },
            { verb: "verderben", meaning: "to spoil / ruin", form: "hat verdorben" },
            { verb: "verzeihen", meaning: "to forgive", form: "hat verziehen" }
        ]
    },
    conjugationForms: {
        shift_a_to_ae: [
            { verb: "schlafen", meaning: "to sleep", form: "du schläfst / er schläft" },
            { verb: "fahren", meaning: "to drive / go", form: "du fährst / er fährt" },
            { verb: "tragen", meaning: "to carry / wear", form: "du trägst / er trägt" },
            { verb: "halten", meaning: "to hold / stop", form: "du hältst / er hält" },
            { verb: "lassen", meaning: "to let/leave", form: "du lässt / er lässt" },
            { verb: "fallen", meaning: "to fall", form: "du fällst / er fällt" },
            { verb: "schlagen", meaning: "to hit/beat", form: "du schlägst / er schlägt" },
            { verb: "wachsen", meaning: "to grow", form: "du wächst / er wächst" },
            { verb: "fangen", meaning: "to catch", form: "du fängst / er fängt" },
            { verb: "waschen", meaning: "to wash", form: "du wäschst / er wäscht" },
            { verb: "laden", meaning: "to load/invite", form: "du lädst / er lädt" },
            { verb: "raten", meaning: "to advise / guess", form: "du rätst / er rät" },
            { verb: "backen", meaning: "to bake", form: "du bäckst / er bäckt" },
            { verb: "braten", meaning: "to fry/roast", form: "du brätst / er brät" },
            { verb: "laufen", meaning: "to run", form: "du läufst / er läuft" },
            { verb: "stoßen", meaning: "to bump/encounter", form: "du stößt / er stößt" }
        ],
        shift_e_to_i: [
            { verb: "essen", meaning: "to eat", form: "du isst / er isst" },
            { verb: "sprechen", meaning: "to speak", form: "du sprichst / er spricht" },
            { verb: "geben", meaning: "to give", form: "du gibst / er gibt" },
            { verb: "nehmen", meaning: "to take", form: "du nimmst / er nimmt" },
            { verb: "treffen", meaning: "to meet", form: "du triffst / er trifft" },
            { verb: "helfen", meaning: "to help", form: "du hilfst / er hilft" },
            { verb: "werfen", meaning: "to throw", form: "du wirfst / er wirft" },
            { verb: "treten", meaning: "to step", form: "du trittst / er tritt" },
            { verb: "brechen", meaning: "to break", form: "du brichst / er bricht" },
            { verb: "gelten", meaning: "to be valid", form: "du giltst / er gilt" },
            { verb: "sterben", meaning: "to die", form: "du stirbst / er stirbt" },
            { verb: "stechen", meaning: "to sting/stab", form: "du stichst / er sticht" },
            { verb: "messen", meaning: "to measure", form: "du misst / er misst" },
            { verb: "verderben", meaning: "to spoil", form: "du verdirbst / er verdirbt" }
        ],
        shift_e_to_ie: [
            { verb: "sehen", meaning: "to see", form: "du siehst / er sieht" },
            { verb: "lesen", meaning: "to read", form: "du liest / er liest" },
            { verb: "empfehlen", meaning: "to recommend", form: "du empfiehlst / er empfiehlt" },
            { verb: "stehlen", meaning: "to steal", form: "du stiehlst / er stiehlt" },
            { verb: "geschehen", meaning: "to happen", form: "(nur 3. Person) / es geschieht" }
        ]
    }
};

// ==========================================
// DYNAMIC MENU GENERATION
// ==========================================
const verbMenuConfig = {
    perfectForms: [
        { id: "mixed", label: "Mixed Verbs" },
        { id: "a1", label: "A1 Irregular Verbs" },
        { id: "a2", label: "A2 Irregular Verbs" },
        { id: "b1", label: "B1 Irregular Verbs" },
        { id: "b2", label: "B2 Irregular Verbs" }
    ],
    conjugationForms: [
        { id: "shift_a_to_ae", label: "Shift: a → ä" },
        { id: "shift_e_to_i", label: "Shift: e → i" },
        { id: "shift_e_to_ie", label: "Shift: e → ie" }
    ]
};

function openVerbMenu() {
    document.getElementById("grammar-home").style.display = "none";
    document.getElementById("verb-section-home").style.display = "block";
    document.getElementById("verb-flashcard-area").style.display = "none";
    renderVerbMenu();
}

function closeVerbMenu() {
    document.getElementById("verb-section-home").style.display = "none";
    document.getElementById("grammar-home").style.display = "block";
}

function renderVerbMenu() {
    renderVerbCategory("perfectForms", "verb-perfect-list");
    renderVerbCategory("conjugationForms", "verb-conjugation-list");
}

function renderVerbCategory(mainCat, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";

    verbMenuConfig[mainCat].forEach(subCat => {
        const list = verbData[mainCat][subCat.id];
        const total = list.length;
        const storageKey = `verbProgress_${mainCat}_${subCat.id}`;
        const learned = JSON.parse(localStorage.getItem(storageKey)) || [];
        const progress = learned.length;

        let btnLabel = `${subCat.label} (${total})`;
        if (progress === total && total > 0) {
            btnLabel += " ✅";
        } else if (progress > 0) {
            btnLabel += ` - ${Math.floor((progress / total) * 100)}%`;
        }

        const wrapper = document.createElement("div");
        wrapper.style.display = "flex";
        wrapper.style.justifyContent = "space-between";
        wrapper.style.alignItems = "center";
        wrapper.style.marginBottom = "10px";
        wrapper.style.width = "100%";

        const button = document.createElement("button");
        button.className = "grammar-topic-card verb-menu-btn";
        button.onclick = () => startVerbFlashcards(mainCat, subCat.id);
        button.innerHTML = `<span><strong>${btnLabel}</strong></span><span class="topic-arrow">→</span>`;
        button.style.flexGrow = "1";
        button.style.marginRight = "10px";

        const resetBtn = document.createElement("button");
        resetBtn.innerHTML = "🔁";
        resetBtn.title = "Reset progress";
        resetBtn.style.border = "none";
        resetBtn.style.background = "transparent";
        resetBtn.style.cursor = "pointer";
        resetBtn.style.fontSize = "18px";
        resetBtn.onclick = () => {
            localStorage.removeItem(storageKey);
            renderVerbMenu(); // Re-draw menu instantly
        };

        wrapper.appendChild(button);
        wrapper.appendChild(resetBtn);
        container.appendChild(wrapper);
    });
}

// ==========================================
// VERB MASTERY LOGIC (Practice / Learned / Undo)
// ==========================================
let currentVerbList = [];
let currentVerbStorageKey = "";
let verbLearnedIndices = [];
let verbHistory = [];
let activeVerbIndex = 0;

function startVerbFlashcards(mainCat, subCat) {
    currentVerbList = verbData[mainCat][subCat];
    currentVerbStorageKey = `verbProgress_${mainCat}_${subCat}`;
    verbLearnedIndices = JSON.parse(localStorage.getItem(currentVerbStorageKey)) || [];
    verbHistory = [];
    activeVerbIndex = 0;

    document.getElementById("verb-section-home").style.display = "none";
    document.getElementById("verb-flashcard-area").style.display = "block";

    findNextUnlearnedVerb();
    loadVerbCard();
}

function findNextUnlearnedVerb() {
    // If everything is learned, set index to -1 so we can show "All done"
    if (verbLearnedIndices.length >= currentVerbList.length) {
        activeVerbIndex = -1;
        return;
    }
    // Skip words that are already in the learned array
    while (verbLearnedIndices.includes(activeVerbIndex)) {
        activeVerbIndex++;
        if (activeVerbIndex >= currentVerbList.length) activeVerbIndex = 0;
    }
}

function loadVerbCard() {
    const card = document.getElementById("verb-card");
    const front = document.getElementById("verb-front");
    const back = document.getElementById("verb-back");
    const progress = document.getElementById("verb-progress");

    const btnPractice = document.getElementById("verb-btn-practice");
    const btnLearned = document.getElementById("verb-btn-learned");
    const btnFlip = document.getElementById("verb-btn-flip");
    const btnBack = document.getElementById("verb-btn-back");

    card.classList.remove("flipped");
    btnPractice.style.display = "none";
    btnLearned.style.display = "none";

    // Manage Back Button visibility
    if (verbHistory.length > 0) {
        btnBack.style.visibility = "visible";
    } else {
        btnBack.style.visibility = "hidden";
    }

    if (activeVerbIndex === -1 || verbLearnedIndices.length >= currentVerbList.length) {
        front.innerHTML = `<h3>🎉 All done!</h3>`;
        back.innerHTML = "";
        btnFlip.style.display = "none";
        progress.innerText = `${currentVerbList.length} / ${currentVerbList.length}`;
        return;
    }

    btnFlip.style.display = "inline-block";
    const word = currentVerbList[activeVerbIndex];

    front.innerHTML = `<h3>${word.verb}</h3>`;
    back.innerHTML = `<p style="color: #666; margin-bottom:10px;">${word.meaning}</p>
                      <h3 style="color: #d32f2f;">${word.form}</h3>`;

    progress.innerText = `${verbLearnedIndices.length} / ${currentVerbList.length}`;
}

function flipVerbCard() {
    document.getElementById("verb-card").classList.add("flipped");
    document.getElementById("verb-btn-flip").style.display = "none";

    // Reveal Practice (Left) and Learned (Right)
    document.getElementById("verb-btn-practice").style.display = "inline-block";
    document.getElementById("verb-btn-learned").style.display = "inline-block";
}

function practiceVerbCard() {
    // Record history but do NOT add to learned list
    verbHistory.push({ index: activeVerbIndex, learned: false });

    activeVerbIndex++;
    if (activeVerbIndex >= currentVerbList.length) activeVerbIndex = 0;
    findNextUnlearnedVerb();
    loadVerbCard();
}

function markVerbLearned() {
    // Record history and ADD to learned list
    verbHistory.push({ index: activeVerbIndex, learned: true });

    if (!verbLearnedIndices.includes(activeVerbIndex)) {
        verbLearnedIndices.push(activeVerbIndex);
        localStorage.setItem(currentVerbStorageKey, JSON.stringify(verbLearnedIndices));
    }

    activeVerbIndex++;
    if (activeVerbIndex >= currentVerbList.length) activeVerbIndex = 0;
    findNextUnlearnedVerb();
    loadVerbCard();
}

function prevVerbCard() {
    if (verbHistory.length === 0) return;

    // Pop the last card off the history stack
    const lastAction = verbHistory.pop();
    activeVerbIndex = lastAction.index;

    // If it was marked as learned, un-learn it!
    if (lastAction.learned) {
        verbLearnedIndices = verbLearnedIndices.filter(idx => idx !== activeVerbIndex);
        localStorage.setItem(currentVerbStorageKey, JSON.stringify(verbLearnedIndices));
    }

    loadVerbCard();
}