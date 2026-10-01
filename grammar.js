const grammarSections = [
    {
        id: "core",
        title: "Core Rules & Trigger Words",
        shortTitle: "Core Rules",
        theory: {
            intro: "German subordinate clauses (Nebensätze) follow predictable word-order rules. Learn the trigger words, then practice spotting the verb at the end.",
            rules: [
                ["1. Verb to the end", "The conjugated verb moves to the absolute end of the subordinate clause. With two verbs, the conjugated verb comes last.", "Ich weiß, dass er heute kommt. / Ich weiß, dass er heute kommen muss."],
                ["2. Verb, comma, verb", "When a subordinate clause comes first, the main clause begins immediately with its conjugated verb.", "Weil ich krank bin, bleibe ich zu Hause."],
                ["3. Separable verbs reconnect", "A separable verb stays together in a subordinate clause because the verb moves to the end.", "Ich bin müde, weil ich früh aufstehe."],
                ["4. Mandatory commas", "A comma separates the subordinate clause from the main clause.", "Weil es regnet, bleiben wir drinnen."]
            ],
            triggers: [
                ["Cause / Reason", "weil, da", "..., weil es regnet."],
                ["Time", "wenn, als, während, bevor, nachdem, bis, seit", "..., bevor wir essen."],
                ["Condition", "wenn, falls", "..., falls du Zeit hast."],
                ["Concession", "obwohl, auch wenn", "..., obwohl er müde ist."],
                ["Fact / Question", "dass, ob", "Ich hoffe, dass du kommst."],
                ["Purpose", "damit", "..., damit er besser lernt."]
            ]
        },
        sentences: [
            ["I know that you are coming.", "Ich weiß, dass du kommst."],
            ["I think that it is a good idea.", "Ich denke, dass es eine gute Idee ist."],
            ["He says that he has no time.", "Er sagt, dass er keine Zeit hat."],
            ["I hope that we see each other tomorrow.", "Ich hoffe, dass wir uns morgen sehen."],
            ["I am sure that he is at home.", "Ich bin sicher, dass er zu Hause ist."],
            ["It is important that you learn German.", "Es ist wichtig, dass du Deutsch lernst."],
            ["I believe that it will rain soon.", "Ich glaube, dass es bald regnet."],
            ["I am happy that you are here.", "Ich freue mich, dass du hier bist."],
            ["It is a pity that she cannot come.", "Es ist schade, dass sie nicht kommen kann."],
            ["Please tell me that everything is okay.", "Bitte sag mir, dass alles in Ordnung ist."],
            ["I don't know if he is coming today.", "Ich weiß nicht, ob er heute kommt."],
            ["Can you tell me if this is correct?", "Kannst du mir sagen, ob das richtig ist?"],
            ["I am asking myself if I should do that.", "Ich frage mich, ob ich das machen soll."],
            ["We will see if it works.", "Wir werden sehen, ob es funktioniert."],
            ["Do you know if she has time?", "Weißt du, ob sie Zeit hat?"],
            ["I am staying at home because I am sick.", "Ich bleibe zu Hause, weil ich krank bin."],
            ["We cannot come because we have to work.", "Wir können nicht kommen, weil wir arbeiten müssen."],
            ["I am learning German because I live in Berlin.", "Ich lerne Deutsch, weil ich in Berlin lebe."],
            ["He is tired because he slept poorly.", "Er ist müde, weil er schlecht geschlafen hat."],
            ["Because it is raining, we are staying inside.", "Weil es regnet, bleiben wir drinnen."],
            ["If I have time, I will come.", "Wenn ich Zeit habe, komme ich."],
            ["I will call you when I am at home.", "Ich rufe dich an, wenn ich zu Hause bin."],
            ["If you want, we can go to the cinema.", "Wenn du willst, können wir ins Kino gehen."],
            ["What do you do when it rains?", "Was machst du, wenn es regnet?"],
            ["When I am tired, I drink coffee.", "Wenn ich müde bin, trinke ich Kaffee."],
            ["If it is too expensive, I will not buy it.", "Wenn es zu teuer ist, kaufe ich es nicht."],
            ["We will eat outside if the weather is good.", "Wir essen draußen, wenn das Wetter gut ist."],
            ["In case I am late, please start without me.", "Falls ich zu spät komme, fangt bitte ohne mich an."],
            ["Call me in case you need help.", "Ruf mich an, falls du Hilfe brauchst."],
            ["If I need money, I will go to the bank.", "Wenn ich Geld brauche, gehe ich zur Bank."],
            ["When I was a child, I played soccer.", "Als ich ein Kind war, habe ich Fußball gespielt."],
            ["When I arrived in Germany, I spoke no German.", "Als ich in Deutschland ankam, sprach ich kein Deutsch."],
            ["I saw him when I was shopping.", "Ich habe ihn gesehen, als ich einkaufen war."],
            ["When he was young, he had a lot of free time.", "Als er jung war, hatte er viel Freizeit."],
            ["It was already dark when we arrived.", "Es war schon dunkel, als wir ankamen."],
            ["Before we eat, I wash my hands.", "Bevor wir essen, wasche ich mir die Hände."],
            ["I must finish this before I go.", "Ich muss das fertig machen, bevor ich gehe."],
            ["Before you ask, the answer is no.", "Bevor du fragst, die Antwort ist nein."],
            ["Read the contract before you sign.", "Lies den Vertrag, bevor du unterschreibst."],
            ["Before I sleep, I read a book.", "Bevor ich schlafe, lese ich ein Buch."],
            ["After I eat, I go for a walk.", "Nachdem ich esse, gehe ich spazieren."],
            ["We are driving to the beach after we finish work.", "Wir fahren zum Strand, nachdem wir die Arbeit beenden."],
            ["After he woke up, he drank coffee.", "Nachdem er aufgewacht ist, hat er Kaffee getrunken."],
            ["Speak louder so that everyone can hear you.", "Sprich lauter, damit dich jeder hören kann."],
            ["I will give you the key so that you can go in.", "Ich gebe dir den Schlüssel, damit du reingehen kannst."],
            ["I am saving money so that I can buy a car.", "Ich spare Geld, damit ich ein Auto kaufen kann."],
            ["Although it is raining, we are going for a walk.", "Obwohl es regnet, gehen wir spazieren."],
            ["I am buying it although it is expensive.", "Ich kaufe es, obwohl es teuer ist."],
            ["Although I am tired, I must work.", "Obwohl ich müde bin, muss ich arbeiten."],
            ["He is going to work although he is sick.", "Er geht zur Arbeit, obwohl er krank ist."]
        ]
    },
    {
        id: "relative",
        title: "Relative Clauses (Relativsätze)",
        shortTitle: "Relative Clauses",
        theory: {
            intro: "Relative clauses describe a specific noun you just mentioned. They use the same verb-to-the-end logic as other subordinate clauses.",
            rules: [
                ["Gender and number", "The relative pronoun matches the gender and number of the noun it describes."],
                ["Case", "The pronoun's case is determined by its grammatical role in the new clause, not by the main clause."],
                ["Word order", "The conjugated verb still goes to the very end."],
                ["Examples", "Das ist der Mann, der das Auto kauft. / Das ist der Mann, den ich sehe."]
            ],
            triggers: [
                ["Nominative", "der, die, das, die (plural)", "Der Mann, der hier wohnt, ist nett."],
                ["Accusative", "den, die, das, die (plural)", "Der Mann, den ich sehe, ist mein Bruder."],
                ["Dative", "dem, der, dem, denen", "Der Mann, dem ich helfe, ist alt."],
                ["Genitive", "dessen, deren", "Die Frau, deren Tasche gestohlen wurde, weint."],
                ["With prepositions", "mit dem, in der, zu dem", "Der Kollege, mit dem ich arbeite, ist freundlich."]
            ]
        },
        sentences: [
            ["The man who lives here is nice.", "Der Mann, der hier wohnt, ist nett."],
            ["The woman who is standing there is my boss.", "Die Frau, die dort steht, ist meine Chefin."],
            ["The child who is playing is my son.", "Das Kind, das spielt, ist mein Sohn."],
            ["The people who are waiting are my friends.", "Die Leute, die warten, sind meine Freunde."],
            ["The computer that is on the table is new.", "Der Computer, der auf dem Tisch steht, ist neu."],
            ["The man whom I see is my brother.", "Der Mann, den ich sehe, ist mein Bruder."],
            ["The woman whom I love is here.", "Die Frau, die ich liebe, ist hier."],
            ["The book that I am reading is good.", "Das Buch, das ich lese, ist gut."],
            ["The guests whom I invited are coming late.", "Die Gäste, die ich eingeladen habe, kommen spät."],
            ["The car that I bought is very fast.", "Das Auto, das ich gekauft habe, ist sehr schnell."],
            ["The man to whom I am helping is old.", "Der Mann, dem ich helfe, ist alt."],
            ["The woman to whom the car belongs is rich.", "Die Frau, der das Auto gehört, ist reich."],
            ["The child to whom I give the toy is happy.", "Das Kind, dem ich das Spielzeug gebe, ist glücklich."],
            ["The people to whom I am talking are nice.", "Die Leute, mit denen ich spreche, sind nett."],
            ["The colleague to whom I sent the email is not here.", "Der Kollege, dem ich die E-Mail geschickt habe, ist nicht hier."],
            ["Where is the key that was on the table?", "Wo ist der Schlüssel, der auf dem Tisch war?"],
            ["I have a friend who lives in Munich.", "Ich habe einen Freund, der in München lebt."],
            ["We need a solution that works for everyone.", "Wir brauchen eine Lösung, die für alle funktioniert."],
            ["Is that the package that arrived today?", "Ist das das Paket, das heute angekommen ist?"],
            ["I am looking for a jacket that is warm.", "Ich suche eine Jacke, die warm ist."],
            ["The apartment that we rented is very bright.", "Die Wohnung, die wir gemietet haben, ist sehr hell."],
            ["The dog that is barking belongs to my neighbor.", "Der Hund, der bellt, gehört meinem Nachbarn."],
            ["The train that travels to Berlin is late.", "Der Zug, der nach Berlin fährt, hat Verspätung."],
            ["This is the task that is very difficult.", "Das ist die Aufgabe, die sehr schwer ist."],
            ["The mistake that I made is annoying.", "Der Fehler, den ich gemacht habe, ist ärgerlich."],
            ["The hotel that we booked is central.", "Das Hotel, das wir gebucht haben, ist zentral."],
            ["The picture that hangs on the wall is old.", "Das Bild, das an der Wand hängt, ist alt."],
            ["The film that we saw yesterday was boring.", "Der Film, den wir gestern gesehen haben, war langweilig."],
            ["The student whom the teacher praises is diligent.", "Der Schüler, den der Lehrer lobt, ist fleißig."],
            ["The bag that I bought is made of leather.", "Die Tasche, die ich gekauft habe, ist aus Leder."],
            ["The colleague with whom I work is friendly.", "Der Kollege, mit dem ich arbeite, ist freundlich."],
            ["The city in which we live is very green.", "Die Stadt, in der wir leben, ist sehr grün."],
            ["The woman whose bag was stolen is crying.", "Die Frau, deren Tasche gestohlen wurde, weint."],
            ["The man whose car is blocking the street is angry.", "Der Mann, dessen Auto die Straße blockiert, ist wütend."],
            ["The children to whom we give sweets are happy.", "Die Kinder, denen wir Süßigkeiten geben, freuen sich."],
            ["The house that stands on the corner is empty.", "Das Haus, das an der Ecke steht, ist leer."],
            ["The language that I am learning is difficult.", "Die Sprache, die ich lerne, ist schwer."],
            ["The train that we missed departed at eight.", "Der Zug, den wir verpasst haben, fuhr um acht ab."],
            ["The doctor to whom I go is very competent.", "Der Arzt, zu dem ich gehe, ist sehr kompetent."],
            ["The neighbors who live next to us are quiet.", "Die Nachbarn, die neben uns wohnen, sind leise."],
            ["The joke that he told was not funny.", "Der Witz, den er erzählt hat, war nicht lustig."],
            ["The problem that we must solve is complex.", "Das Problem, das wir lösen müssen, ist komplex."],
            ["The keys that I am looking for are not here.", "Die Schlüssel, die ich suche, sind nicht hier."],
            ["The student to whom the book belongs is absent.", "Der Student, dem das Buch gehört, fehlt."],
            ["The woman who is calling me is my sister.", "Die Frau, die mich anruft, ist meine Schwester."],
            ["The restaurant that we recommend is cheap.", "Das Restaurant, das wir empfehlen, ist günstig."],
            ["The questions that he asks are interesting.", "Die Fragen, die er stellt, sind interessant."],
            ["The music that she is listening to is loud.", "Die Musik, die sie hört, ist laut."],
            ["The story that he wrote is famous.", "Die Geschichte, die er geschrieben hat, ist berühmt."],
            ["The computer that I need is expensive.", "Der Computer, den ich brauche, ist teuer."]
        ]
    },
    {
        id: "infinitive",
        title: "Infinitive Clauses (Infinitivkonstruktionen)",
        shortTitle: "Infinitive Clauses",
        theory: {
            intro: "Infinitive clauses have no conjugated verb or subject. They begin with a trigger phrase and put zu + infinitive at the end.",
            rules: [
                ["um ... zu", "in order to / for the purpose of", "Ich lerne Deutsch, um in Berlin zu leben."],
                ["ohne ... zu", "without doing something", "Er ist gegangen, ohne ein Wort zu sagen."],
                ["(an)statt ... zu", "instead of doing something", "Anstatt zu arbeiten, sieht er fern."],
                ["Separable verbs", "zu is placed between the prefix and the root.", "Er geht früh ins Bett, um morgen früh aufzustehen."]
            ],
            triggers: [
                ["Purpose", "um ... zu", "Ich spare Geld, um nach Japan zu reisen."],
                ["Without", "ohne ... zu", "Sie ist zur Arbeit gegangen, ohne zu frühstücken."],
                ["Instead", "(an)statt ... zu", "Anstatt zu arbeiten, sieht er fern."]
            ]
        },
        sentences: [
            ["I am learning German in order to live in Berlin.", "Ich lerne Deutsch, um in Berlin zu leben."],
            ["I go to the supermarket in order to buy food.", "Ich gehe in den Supermarkt, um Essen zu kaufen."],
            ["I am saving money in order to travel to Japan.", "Ich spare Geld, um nach Japan zu reisen."],
            ["He is doing sports in order to stay healthy.", "Er macht Sport, um gesund zu bleiben."],
            ["I am calling you in order to ask a question.", "Ich rufe dich an, um eine Frage zu stellen."],
            ["We work hard in order to have success.", "Wir arbeiten hart, um Erfolg zu haben."],
            ["I use this app in order to improve my grammar.", "Ich nutze diese App, um meine Grammatik zu verbessern."],
            ["I am going to bed early in order to be fit tomorrow.", "Ich gehe früh ins Bett, um morgen fit zu sein."],
            ["He reads a lot in order to learn new things.", "Er liest viel, um neue Dinge zu lernen."],
            ["I drink coffee in order to wake up.", "Ich trinke Kaffee, um aufzuwachen."],
            ["He left without saying a word.", "Er ist gegangen, ohne ein Wort zu sagen."],
            ["I bought the jacket without looking at the price.", "Ich habe die Jacke gekauft, ohne auf den Preis zu schauen."],
            ["She went to work without eating breakfast.", "Sie ist zur Arbeit gegangen, ohne zu frühstücken."],
            ["You cannot learn a language without making mistakes.", "Man kann keine Sprache lernen, ohne Fehler zu machen."],
            ["He drives the car without having a license.", "Er fährt das Auto, ohne einen Führerschein zu haben."],
            ["We solved the problem without needing help.", "Wir haben das Problem gelöst, ohne Hilfe zu brauchen."],
            ["He passed the test without studying.", "Er hat die Prüfung bestanden, ohne zu lernen."],
            ["Instead of working, he is watching TV.", "Anstatt zu arbeiten, sieht er fern."],
            ["Instead of buying a new car, I am repairing the old one.", "Anstatt ein neues Auto zu kaufen, repariere ich das alte."],
            ["I am drinking tea instead of drinking coffee.", "Ich trinke Tee, anstatt Kaffee zu trinken."],
            ["Instead of asking for help, he tries it alone.", "Anstatt um Hilfe zu bitten, versucht er es allein."],
            ["We are staying at home instead of going to the party.", "Wir bleiben zu Hause, anstatt zur Party zu gehen."],
            ["Instead of cooking, we are ordering a pizza.", "Anstatt zu kochen, bestellen wir eine Pizza."],
            ["She is reading a book instead of sleeping.", "Sie liest ein Buch, anstatt zu schlafen."],
            ["Instead of taking the bus, I am walking.", "Anstatt den Bus zu nehmen, gehe ich zu Fuß."],
            ["He goes to the bakery in order to buy bread.", "Er geht zur Bäckerei, um Brot zu kaufen."],
            ["I am learning vocabulary in order to speak better.", "Ich lerne Vokabeln, um besser zu sprechen."],
            ["We take a taxi in order to be on time.", "Wir nehmen ein Taxi, um pünktlich zu sein."],
            ["She wears glasses in order to read the text.", "Sie trägt eine Brille, um den Text zu lesen."],
            ["I exercise in order to lose weight.", "Ich mache Sport, um abzunehmen."],
            ["He turns on the lamp in order to see better.", "Er macht die Lampe an, um besser zu sehen."],
            ["I open the window in order to let fresh air in.", "Ich öffne das Fenster, um frische Luft hereinzulassen."],
            ["We go to the park in order to play soccer.", "Wir gehen in den Park, um Fußball zu spielen."],
            ["She leaves the house without closing the door.", "Sie verlässt das Haus, ohne die Tür zuzumachen."],
            ["He drives the car without wearing a seatbelt.", "Er fährt das Auto, ohne sich anzuschnallen."],
            ["I signed the contract without reading it.", "Ich habe den Vertrag unterschrieben, ohne ihn zu lesen."],
            ["He buys the shoes without trying them on.", "Er kauft die Schuhe, ohne sie anzuprobieren."],
            ["She cooks the soup without using salt.", "Sie kocht die Suppe, ohne Salz zu benutzen."],
            ["He speaks German without having an accent.", "Er spricht Deutsch, ohne einen Akzent zu haben."],
            ["We walked for hours without taking a break.", "Wir sind stundenlang gelaufen, ohne eine Pause zu machen."],
            ["Instead of helping me, he is playing on his phone.", "Anstatt mir zu helfen, spielt er am Handy."],
            ["Instead of apologizing, he left.", "Anstatt sich zu entschuldigen, ist er gegangen."],
            ["Instead of eating vegetables, he eats chocolate.", "Anstatt Gemüse zu essen, isst er Schokolade."],
            ["I stay in bed instead of standing up.", "Ich bleibe im Bett, anstatt aufzustehen."],
            ["Instead of doing his homework, he plays outside.", "Anstatt seine Hausaufgaben zu machen, spielt er draußen."],
            ["We drink water instead of drinking juice.", "Wir trinken Wasser, anstatt Saft zu trinken."],
            ["She takes the stairs instead of using the elevator.", "Sie nimmt die Treppe, anstatt den Aufzug zu benutzen."],
            ["I am writing an email instead of calling him.", "Ich schreibe eine E-Mail, anstatt ihn anzurufen."],
            ["Instead of waiting, we are leaving now.", "Anstatt zu warten, gehen wir jetzt los."],
            ["He buys a book instead of borrowing it.", "Er kauft ein Buch, anstatt es auszuleihen."]
        ]
    }
];

const GRAMMAR_PROGRESS_KEY = "germanGrammarProgress";
const allGrammarSections = [...grammarSections, ...(window.extraGrammarSections || [])];

function loadGrammarProgress() {
    try {
        return JSON.parse(localStorage.getItem(GRAMMAR_PROGRESS_KEY)) || {};
    } catch (_) {
        return {};
    }
}

function saveGrammarProgress(progress) {
    localStorage.setItem(GRAMMAR_PROGRESS_KEY, JSON.stringify(progress));
}

function speakGrammar(text) {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "de-DE";
    utterance.rate = 0.88;
    window.speechSynthesis.speak(utterance);
}

let activeGrammarSection = null;
let activeGrammarTopicId = "core";
let grammarQueue = [];
let grammarCursor = 0;
let grammarAnswerShown = false;

function initializeGrammar() {
    document.getElementById("grammar-home").style.display = "block";
    document.getElementById("grammar-module").style.display = "none";
    renderGrammarTopics();
}

function renderGrammarTopics() {
    const topics = document.getElementById("grammar-topic-list");
    if (!topics) return;
    const progress = loadGrammarProgress();
    topics.innerHTML = `<button class="grammar-topic-card" onclick="openGrammarModule('core')"><span class="topic-icon">§</span><span><strong>Subordinate Clause</strong><small></small></span><span class="topic-arrow">→</span></button>`;
    topics.innerHTML += allGrammarSections.slice(grammarSections.length).map(section => `<button class="grammar-topic-card" onclick="openGrammarModule('${section.id}')"><span class="topic-icon">§</span><span><strong>${section.title}</strong><small></small></span><span class="topic-arrow">→</span></button>`).join("");

}

function openGrammarModule(sectionId) {
    activeGrammarTopicId = sectionId;
    document.getElementById("grammar-home").style.display = "none";
    document.getElementById("grammar-module").style.display = "block";
    renderGrammarDashboard();
    renderGrammarSections();
    selectGrammarSection(sectionId || "core");
}

function closeGrammarModule() {
    activeGrammarTopicId = "core";
    document.getElementById("grammar-module").style.display = "none";
    document.getElementById("grammar-home").style.display = "block";
    renderGrammarTopics();
}

function showGrammarView(view) {
    const theory = document.getElementById("grammar-theory");
    const practice = document.getElementById("grammar-practice");
    const theoryButton = document.getElementById("grammar-view-theory");
    const practiceButton = document.getElementById("grammar-view-practice");
    const showTheory = view === "theory";
    theory.style.display = showTheory ? "block" : "none";
    practice.style.display = showTheory ? "none" : "block";
    theoryButton.classList.toggle("active", showTheory);
    practiceButton.classList.toggle("active", !showTheory);
}

function renderGrammarDashboard() {
    const dashboard = document.getElementById("grammar-dashboard");
    if (!dashboard) return;
    const progress = loadGrammarProgress();
    const sections = activeGrammarTopicId === "core" ? grammarSections : [allGrammarSections.find(section => section.id === activeGrammarTopicId)].filter(Boolean);
    dashboard.innerHTML = sections.map(section => {
        const learned = (progress[section.id] || []).length;
        const total = section.sentences.length;
        const percent = total ? Math.round((learned / total) * 100) : 0;
        return `<div class="grammar-progress-card"><div class="progress-card-top"><strong>${section.shortTitle}</strong><span>${percent}%</span></div><div class="progress-track"><span style="width:${percent}%"></span></div><small>${learned} of ${total} learned</small></div>`;
    }).join("");
}

function renderGrammarSections() {
    const selector = document.getElementById("grammar-section-tabs");
    if (!selector) return;
    const sections = activeGrammarTopicId === "core" ? grammarSections : [allGrammarSections.find(section => section.id === activeGrammarTopicId)].filter(Boolean);
    selector.innerHTML = sections.map((section, index) => `<button class="grammar-tab${index === 0 ? " active" : ""}" onclick="selectGrammarSection('${section.id}')">${section.shortTitle}</button>`).join("");
    selectGrammarSection(sections[0].id);
}

function selectGrammarSection(sectionId) {
    activeGrammarSection = allGrammarSections.find(section => section.id === sectionId) || grammarSections[0];
    document.getElementById("grammar-module-title").textContent = activeGrammarTopicId === "core" ? "Subordinate Clause" : activeGrammarSection.title;
    const selector = document.getElementById("grammar-section-tabs");
    if (selector) selector.querySelectorAll(".grammar-tab").forEach(button => button.classList.toggle("active", button.textContent === activeGrammarSection.shortTitle));
    renderGrammarTheory();
    startGrammarPractice();
    showGrammarView("practice");
}

function renderGrammarTheory() {
    const section = activeGrammarSection;
    const theory = document.getElementById("grammar-theory");
    if (!theory || !section) return;
    const rules = section.theory.content ? "" : section.theory.rules.map(rule => `<div class="theory-rule"><h4>${rule[0]}</h4><p>${rule[1]}</p>${rule[2] ? `<p class="grammar-example">${rule[2]}</p>` : ""}</div>`).join("");
    const table = section.theory.triggers.length ? `<div class="trigger-table-wrap"><table class="trigger-table"><thead><tr><th>Category</th><th>Words / structure</th><th>Example</th></tr></thead><tbody>${section.theory.triggers.map(row => `<tr><th>${row[0]}</th><td><strong>${row[1]}</strong></td><td>${row[2]}</td></tr>`).join("")}</tbody></table></div>` : "";
    theory.innerHTML = section.theory.content ? section.theory.content + table : `<p class="theory-intro">${section.theory.intro}</p><div class="theory-rules">${rules}</div>${table}`;
}

function startGrammarPractice() {
    const progress = loadGrammarProgress();
    const learned = progress[activeGrammarSection.id] || [];
    grammarQueue = activeGrammarSection.sentences.map((_, index) => index).filter(index => !learned.includes(index));
    grammarCursor = 0;
    grammarAnswerShown = false;
    renderGrammarPractice();
}

function currentGrammarSentence() {
    return activeGrammarSection.sentences[grammarQueue[grammarCursor]];
}

function renderGrammarPractice() {
    const practice = document.getElementById("grammar-practice");
    if (!practice || !activeGrammarSection) return;
    if (!grammarQueue.length) {
        practice.innerHTML = `<div class="grammar-complete"><span>✓</span><h3>Section complete</h3><p>You have learned every sentence in this section.</p><button class="grammar-secondary" onclick="resetGrammarSection('${activeGrammarSection.id}')">Practice again</button></div>`;
        return;
    }
    const sentence = currentGrammarSentence();
    practice.innerHTML = `<div class="practice-meta"><span>Practice</span><strong>${grammarCursor + 1} / ${grammarQueue.length}</strong></div><p class="english-prompt">${sentence[0]}</p><div class="answer-area${grammarAnswerShown ? " revealed" : ""}">${grammarAnswerShown ? `<p class="german-answer">${sentence[1]}</p>` : ""}</div><div class="practice-actions">${grammarAnswerShown ? `<button class="practice-again" onclick="practiceGrammarAgain()">Practice</button><button class="practice-next" onclick="nextGrammarSentence()">Next</button>` : `<button class="show-answer" onclick="showGrammarAnswer()">Show Answer</button>`}</div>`;
}

function showGrammarAnswer() {
    grammarAnswerShown = true;
    renderGrammarPractice();
    speakGrammar(currentGrammarSentence()[1]);
}

function practiceGrammarAgain() {
    grammarQueue.push(grammarQueue[grammarCursor]);
    grammarCursor += 1;
    grammarAnswerShown = false;
    renderGrammarPractice();
}

function nextGrammarSentence() {
    const progress = loadGrammarProgress();
    const learned = progress[activeGrammarSection.id] || [];
    const sentenceIndex = grammarQueue[grammarCursor];
    if (!learned.includes(sentenceIndex)) learned.push(sentenceIndex);
    progress[activeGrammarSection.id] = learned;
    saveGrammarProgress(progress);
    grammarQueue.splice(grammarCursor, 1);
    if (grammarCursor >= grammarQueue.length) grammarCursor = 0;
    grammarAnswerShown = false;
    renderGrammarDashboard();
    renderGrammarPractice();
}

function resetGrammarSection(sectionId) {
    const progress = loadGrammarProgress();
    delete progress[sectionId];
    saveGrammarProgress(progress);
    renderGrammarDashboard();
    if (activeGrammarSection.id === sectionId) startGrammarPractice();
}

function resetGrammarProgress() {
    if (!confirm("Reset all grammar progress?")) return;
    localStorage.removeItem(GRAMMAR_PROGRESS_KEY);
    renderGrammarDashboard();
    renderGrammarTopics();
    startGrammarPractice();
}
