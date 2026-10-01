// Database of Pure Dative Verbs (From PDF)
const dativeVerbs = [
    { verb: "absagen", meaning: "to cancel (on someone)" },
    { verb: "abraten", meaning: "to advise against" },
    { verb: "ähneln", meaning: "to resemble" },
    { verb: "antworten", meaning: "to answer" },
    { verb: "applaudieren", meaning: "to applaud" },
    { verb: "assistieren", meaning: "to assist" },
    { verb: "auffallen", meaning: "to catch the eye" },
    { verb: "ausweichen", meaning: "to dodge / avoid" },
    { verb: "befehlen", meaning: "to command/order" },
    { verb: "begegnen", meaning: "to meet / encounter" },
    { verb: "beipflichten", meaning: "to agree with" },
    { verb: "beistehen", meaning: "to stand by / support" },
    { verb: "beitreten", meaning: "to join" },
    { verb: "dämmern", meaning: "to dawn on" },
    { verb: "danken", meaning: "to thank" },
    { verb: "dienen", meaning: "to serve" },
    { verb: "drohen", meaning: "to threaten" },
    { verb: "einfallen", meaning: "to come to mind" },
    { verb: "einleuchten", meaning: "to make sense to" },
    { verb: "entfliehen", meaning: "to escape (from)" },
    { verb: "entgegenfahren", meaning: "to drive towards" },
    { verb: "entgegengehen", meaning: "to go towards" },
    { verb: "entgegenkommen", meaning: "to accommodate / approach" },
    { verb: "entkommen", meaning: "to escape" },
    { verb: "entsagen", meaning: "to renounce" },
    { verb: "entsprechen", meaning: "to correspond to" },
    { verb: "fehlen", meaning: "to be missing / to miss" },
    { verb: "folgen", meaning: "to follow" },
    { verb: "fremdgehen", meaning: "to cheat on" },
    { verb: "gefallen", meaning: "to please / to like" },
    { verb: "gehen (gut/schlecht)", meaning: "to fare / to be doing" },
    { verb: "gehorchen", meaning: "to obey" },
    { verb: "gehören", meaning: "to belong to" },
    { verb: "gelingen", meaning: "to succeed" },
    { verb: "genügen", meaning: "to suffice / be enough" },
    { verb: "glauben", meaning: "to believe" },
    { verb: "gratulieren", meaning: "to congratulate" },
    { verb: "helfen", meaning: "to help" },
    { verb: "lauschen", meaning: "to listen closely" },
    { verb: "leidtun", meaning: "to be sorry" },
    { verb: "mangeln", meaning: "to lack" },
    { verb: "missfallen", meaning: "to displease" },
    { verb: "misslingen", meaning: "to fail" },
    { verb: "misstrauen", meaning: "to distrust" },
    { verb: "nacheifern", meaning: "to emulate" },
    { verb: "nachgeben", meaning: "to yield / give in" },
    { verb: "nachgehen", meaning: "to pursue (a hobby/job)" },
    { verb: "nachlaufen", meaning: "to run after" },
    { verb: "nähern (sich)", meaning: "to approach" },
    { verb: "nützen/nutzen", meaning: "to be of use" },
    { verb: "passen", meaning: "to fit / suit" },
    { verb: "passieren", meaning: "to happen" },
    { verb: "raten", meaning: "to advise" },
    { verb: "schaden", meaning: "to harm" },
    { verb: "schmecken", meaning: "to taste (good to)" },
    { verb: "schmeicheln", meaning: "to flatter" },
    { verb: "schwerfallen", meaning: "to be difficult for" },
    { verb: "stehen (gut/schlecht)", meaning: "to suit (appearance)" },
    { verb: "tun (gut/leid/weh)", meaning: "to do good/be sorry/hurt" },
    { verb: "unterliegen", meaning: "to succumb / be subject to" },
    { verb: "vergeben", meaning: "to forgive" },
    { verb: "vertrauen", meaning: "to trust" },
    { verb: "verzeihen", meaning: "to forgive" },
    { verb: "wehtun", meaning: "to hurt" },
    { verb: "widersprechen", meaning: "to contradict" },
    { verb: "winken", meaning: "to wave to" },
    { verb: "zürnen", meaning: "to be angry with" },
    { verb: "zusagen", meaning: "to appeal to / promise / accept" },
    { verb: "zusehen / zuschauen", meaning: "to watch" },
    { verb: "zustimmen", meaning: "to agree with" },
    { verb: "zuwenden (sich)", meaning: "to turn towards" },
    { verb: "zuhören", meaning: "to listen to" }
];

// Expanded Accusative verbs with BRUTAL B2 trick questions
const accusativeVerbs = [
    // Standard common verbs
    { verb: "sehen", meaning: "to see" }, { verb: "hören", meaning: "to hear" },
    { verb: "kaufen", meaning: "to buy" }, { verb: "suchen", meaning: "to search for" },
    { verb: "finden", meaning: "to find" }, { verb: "trinken", meaning: "to drink" },
    { verb: "essen", meaning: "to eat" }, { verb: "lesen", meaning: "to read" },
    { verb: "schreiben", meaning: "to write" }, { verb: "machen", meaning: "to make / do" },
    { verb: "brauchen", meaning: "to need" }, { verb: "besuchen", meaning: "to visit" },
    { verb: "lieben", meaning: "to love" }, { verb: "kennen", meaning: "to know" },
    { verb: "verstehen", meaning: "to understand" }, { verb: "fragen", meaning: "to ask" },
    { verb: "treffen", meaning: "to meet (someone)" }, { verb: "anrufen", meaning: "to call (someone)" },
    { verb: "bezahlen", meaning: "to pay" }, { verb: "vergessen", meaning: "to forget" },

    // THE BRUTAL TRICK VERBS (Synonyms for Dative verbs that take Accusative)
    { verb: "beantworten", meaning: "to answer (something) [Trick for antworten]" },
    { verb: "beraten", meaning: "to advise (someone) [Trick for raten]" },
    { verb: "befolgen", meaning: "to follow (rules) [Trick for folgen]" },
    { verb: "verfolgen", meaning: "to pursue / chase [Trick for nachgehen]" },
    { verb: "unterstützen", meaning: "to support [Trick for helfen]" },
    { verb: "bedienen", meaning: "to serve (someone) [Trick for dienen]" },
    { verb: "betreten", meaning: "to enter [Trick for beitreten]" },
    { verb: "vermissen", meaning: "to miss (someone) [Trick for fehlen]" },
    { verb: "belauschen", meaning: "to eavesdrop on [Trick for lauschen]" },
    { verb: "vermeiden", meaning: "to avoid [Trick for ausweichen]" },
    { verb: "verletzen", meaning: "to hurt / injure [Trick for wehtun]" },
    { verb: "beschädigen", meaning: "to damage [Trick for schaden]" },
    { verb: "beglückwünschen", meaning: "to congratulate [Trick for gratulieren]" },
    { verb: "überzeugen", meaning: "to convince [Trick for glauben]" },
    { verb: "bestätigen", meaning: "to confirm / agree [Trick for zustimmen]" },
    { verb: "erwarten", meaning: "to expect" },
    { verb: "benutzen", meaning: "to use [Trick for nützen]" },
    { verb: "begeistern", meaning: "to inspire / thrill [Trick for gefallen]" },
    { verb: "akzeptieren", meaning: "to accept [Trick for zusagen]" },
    { verb: "widerlegen", meaning: "to refute [Trick for widersprechen]" },
    { verb: "beobachten", meaning: "to observe / watch [Trick for zusehen]" },
    { verb: "betrügen", meaning: "to cheat / betray [Trick for fremdgehen]" },
    { verb: "warnen", meaning: "to warn [Trick for drohen]" },
    { verb: "anlächeln", meaning: "to smile at [Trick for winken/zürnen]" }
];

// Game State
let dativeQueue = [];
let currentVerbObj = null;
let isCurrentDative = true;
const DATIVE_PROGRESS_KEY = "dativeMasteryProgress";

function loadDativeProgress() {
    return JSON.parse(localStorage.getItem(DATIVE_PROGRESS_KEY)) || [];
}

function saveDativeProgress(learnedVerbs) {
    localStorage.setItem(DATIVE_PROGRESS_KEY, JSON.stringify(learnedVerbs));
}

function resetDativeProgress() {
    if (!confirm("Reset all Dative Mastery progress?")) return;
    localStorage.removeItem(DATIVE_PROGRESS_KEY);
    startDativeGame(); // Restarts the game instantly
}

function initDativeGame() {
    // 1. SWITCH THE SCREEN
    document.getElementById("grammar-home").style.display = "none";
    document.getElementById("grammar-module").style.display = "block";
    document.getElementById("grammar-module-title").textContent = "Dative Verb Mastery";

    // 2. INJECT CSS TO HIDE THE GLOBAL UI ELEMENTS (Dashboard, Text, Global Reset Button)
    const styleId = "dative-game-styles";
    if (!document.getElementById(styleId)) {
        const style = document.createElement("style");
        style.id = styleId;
        style.innerHTML = `
            #grammar-dashboard { display: none !important; }
            #grammar-section-tabs { display: none !important; }
            button[onclick="resetGrammarProgress()"] { display: none !important; }
            #grammar-module-title + p { display: none !important; }
            .grammar-header p { display: none !important; }
        `;
        document.head.appendChild(style);
    }

    const theoryBtn = document.getElementById("grammar-view-theory");
    const practiceBtn = document.getElementById("grammar-view-practice");
    if (theoryBtn) theoryBtn.style.display = "none";
    if (practiceBtn) practiceBtn.style.display = "none";

    // 3. Render the Game Container
    const container = document.getElementById("grammar-theory");
    container.style.display = "block";
    document.getElementById("grammar-practice").style.display = "none";

    container.innerHTML = `
        <div style="text-align:center; padding: 20px;">
            <div style="background:#f4f6f8; border-radius:12px; padding:30px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); max-width: 400px; margin: 0 auto;">
                <div id="dative-progress" style="font-size: 0.9em; color:#666; margin-bottom:15px; font-weight:bold;">Progress: 0 / ${dativeVerbs.length}</div>
                
                <h1 id="dative-verb-display" style="font-size: 2.5em; margin: 10px 0; color:#1976d2;">Laden...</h1>
                <p id="dative-meaning-display" style="color:#666; font-style:italic; margin-bottom:30px;">Loading...</p>
                
                <div id="dative-feedback" style="height: 24px; margin-bottom: 15px; font-weight:bold; font-size:1.1em;"></div>

                <div style="display:flex; gap:15px; justify-content:center;">
                    <button id="btn-acc" onclick="checkDativeAnswer('acc')" style="flex:1; padding: 15px; background:white; border:2px solid #d32f2f; color:#d32f2f; border-radius:8px; font-size:1.1em; font-weight:bold; cursor:pointer; transition: 0.2s;">Accusative</button>
                    <button id="btn-dat" onclick="checkDativeAnswer('dat')" style="flex:1; padding: 15px; background:white; border:2px solid #388e3c; color:#388e3c; border-radius:8px; font-size:1.1em; font-weight:bold; cursor:pointer; transition: 0.2s;">Dative</button>
                </div>
                <button id="btn-next-dative" onclick="nextDativeVerb()" style="display:none; width:100%; margin-top:15px; padding:15px; background:#1976d2; color:white; border:none; border-radius:8px; font-size:1.1em; font-weight:bold; cursor:pointer;">Next Verb</button>
                
                <button onclick="resetDativeProgress()" style="margin-top: 25px; background: transparent; border: none; color: #999; cursor: pointer; text-decoration: underline; font-size: 0.9em;">Reset Dative Progress</button>
            </div>
        </div>
    `;

    startDativeGame();
}

function startDativeGame() {
    const learned = loadDativeProgress();
    dativeQueue = dativeVerbs.filter(v => !learned.includes(v.verb));

    if (dativeQueue.length === 0) {
        document.getElementById("dative-verb-display").innerText = "🏆 Mastered!";
        document.getElementById("dative-meaning-display").innerText = "You have mastered all pure Dative verbs.";
        document.getElementById("btn-acc").style.display = "none";
        document.getElementById("btn-dat").style.display = "none";
        document.getElementById("dative-progress").innerText = `Progress: ${dativeVerbs.length} / ${dativeVerbs.length}`;
        return;
    }

    nextDativeVerb();
}

function nextDativeVerb() {
    document.getElementById("dative-feedback").innerText = "";
    document.getElementById("btn-acc").style.display = "block";
    document.getElementById("btn-dat").style.display = "block";
    document.getElementById("btn-next-dative").style.display = "none";

    const learnedCount = loadDativeProgress().length;
    document.getElementById("dative-progress").innerText = `Progress: ${learnedCount} / ${dativeVerbs.length}`;

    // 50/50 Probability
    if (Math.random() < 0.5 && dativeQueue.length > 0) {
        isCurrentDative = true;
        const randomIndex = Math.floor(Math.random() * dativeQueue.length);
        currentVerbObj = dativeQueue[randomIndex];
    } else {
        isCurrentDative = false;
        const randomIndex = Math.floor(Math.random() * accusativeVerbs.length);
        currentVerbObj = accusativeVerbs[randomIndex];
    }

    document.getElementById("dative-verb-display").innerText = currentVerbObj.verb;
    document.getElementById("dative-meaning-display").innerText = currentVerbObj.meaning;

    if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(currentVerbObj.verb);
        utterance.lang = "de-DE";
        window.speechSynthesis.speak(utterance);
    }
}

function checkDativeAnswer(selectedCase) {
    const feedback = document.getElementById("dative-feedback");
    document.getElementById("btn-acc").style.display = "none";
    document.getElementById("btn-dat").style.display = "none";
    document.getElementById("btn-next-dative").style.display = "block";

    const isCorrect = (selectedCase === 'dat' && isCurrentDative) || (selectedCase === 'acc' && !isCurrentDative);

    if (isCorrect) {
        feedback.innerText = "✅ Correct!";
        feedback.style.color = "#388e3c";

        if (isCurrentDative) {
            const learned = loadDativeProgress();
            if (!learned.includes(currentVerbObj.verb)) {
                learned.push(currentVerbObj.verb);
                saveDativeProgress(learned);
                dativeQueue = dativeQueue.filter(v => v.verb !== currentVerbObj.verb);
            }
        }
    } else {
        feedback.innerText = "❌ Incorrect.";
        feedback.style.color = "#d32f2f";
    }
}

// Restore standard UI when closing the module
const originalCloseGrammarModule = window.closeGrammarModule;
window.closeGrammarModule = function () {
    // Remove the CSS that hid the global elements
    const injectedStyles = document.getElementById("dative-game-styles");
    if (injectedStyles) injectedStyles.remove();

    const theoryBtn = document.getElementById("grammar-view-theory");
    const practiceBtn = document.getElementById("grammar-view-practice");

    if (theoryBtn) theoryBtn.style.display = "";
    if (practiceBtn) practiceBtn.style.display = "";

    if (originalCloseGrammarModule) originalCloseGrammarModule();
};