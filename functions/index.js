const functions = require("firebase-functions");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const DIFFICULTY_PROMPTS = {
    Beginner:
        "You are tutoring a complete beginner. Use very simple German sentences (A1-A2 level). " +
        "Always provide English translations in parentheses after German words or phrases. " +
        "Keep sentences short and vocabulary basic.",
    Intermediate:
        "You are tutoring an intermediate learner. Use B1-B2 level German with moderate vocabulary. " +
        "Provide English translations only for uncommon words. " +
        "Encourage longer sentences and correct verb conjugations.",
    Advanced:
        "You are tutoring an advanced learner. Use C1-C2 level German with rich vocabulary and complex grammar. " +
        "Respond almost entirely in German. Only provide translations when absolutely necessary.",
};

exports.chat = functions.https.onRequest(async (req, res) => {
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.set("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
        res.status(204).send("");
        return;
    }

    if (req.method !== "POST") {
        res.status(405).json({ error: "Method not allowed" });
        return;
    }

    const { message, history, difficulty, apiKey } = req.body || {};

    if (!apiKey) {
        res.status(400).json({ error: "API key is required. Please add your Gemini API key in Settings." });
        return;
    }

    if (!message || !message.trim()) {
        res.status(400).json({ error: "Message cannot be empty." });
        return;
    }

    const level = DIFFICULTY_PROMPTS[difficulty] || DIFFICULTY_PROMPTS.Beginner;
    const systemPrompt =
        `You are a friendly and encouraging German language tutor named "Deutsch-Buddy". ` +
        `Your goal is to help the user practice German conversation.\n\n` +
        `Rules:\n` +
        `1. ${level}\n` +
        `2. If the user writes in English, respond in German and gently encourage them to try German.\n` +
        `3. If the user makes a grammar or spelling mistake in German, politely correct it. ` +
        `Show the corrected sentence clearly, e.g. "✏️ Correction: [corrected sentence]", then briefly explain the rule.\n` +
        `4. Keep responses concise (2–4 sentences) and conversational.\n` +
        `5. End each response with a follow-up question to keep the conversation going.\n` +
        `6. Be warm, patient, and supportive.`;

    try {
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash",
            systemInstruction: systemPrompt,
        });

        const safeHistory = Array.isArray(history) ? history : [];
        const chatHistory = safeHistory.map((msg) => ({
            role: msg.role === "user" ? "user" : "model",
            parts: [{ text: String(msg.content) }],
        }));

        const chat = model.startChat({
            history: chatHistory,
            generationConfig: { maxOutputTokens: 512 },
        });

        const result = await chat.sendMessage(message.trim());
        const response = result.response.text();

        res.status(200).json({ response });
    } catch (err) {
        console.error("Gemini API error:", err);
        const message =
            err.message && err.message.includes("API key")
                ? "Invalid Gemini API key. Please check your key in Settings."
                : "Failed to get a response from the AI. Please try again.";
        res.status(500).json({ error: message });
    }
});
