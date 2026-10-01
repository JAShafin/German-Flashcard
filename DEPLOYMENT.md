# Deployment Guide – AI Conversation Partner

The AI chat feature calls the **Google Gemini API directly from your browser** — no Cloud Functions or Blaze plan required. Everything runs on the free Firebase Spark plan.

---

## Prerequisites

- Node.js 18 or later installed on your computer
- Firebase CLI installed — run once: `npm install -g firebase-tools`
- The `.firebaserc` file in this repo already points to your project (`flashcardapp-3c280`), so no extra setup needed

---

## Step 1 – Get a Free Gemini API Key

1. Go to **[https://aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey)**
2. Sign in with your Google account
3. Click **"Get API key"** → **"Create API key in new project"**
4. Copy the generated key — you'll need it in Step 5

> The free tier allows **60 requests per minute** and **1,500 requests per day** — more than enough for practice sessions.

---

## Step 2 – Merge This Pull Request

On GitHub, open this PR and click **"Merge pull request"**. Then pull the latest code to your local machine:

```bash
git pull origin main
```

---

## Step 3 – Log in to Firebase

```bash
firebase login
```

Select your Google account when prompted. You only need to do this once.

---

## Step 4 – Deploy to Firebase Hosting

```bash
firebase deploy
```

Your site will be live at **[https://flashcardapp-3c280.web.app](https://flashcardapp-3c280.web.app)**.

> **No Blaze plan required.** The `functions` section has been removed from `firebase.json`, so only the static hosting is deployed.

---

## Step 5 – Configure the App Settings

1. Open your German Flashcard website
2. Enter your name to log in
3. Click **⚙️ Settings** (top-right corner)
4. Paste your **Gemini API key** (from Step 1) → click **💾 Save Key**
5. Click **✖ Close**

> ⚠️ Your API key is saved only in **your browser's localStorage** and is sent directly to Google's Gemini API from your browser — it never passes through any intermediate server.

---

## Step 6 – Start Chatting!

1. Click the **💬 Chat with AI** tab
2. Choose your difficulty level (Beginner / Intermediate / Advanced)
3. Type a message in German or English and press **Enter** (or click **Send ➤**)
4. Deutsch-Buddy will reply, correct any grammar mistakes, and keep the conversation going!

---

## Free Tier Limits

| Service | Free Limit |
|---|---|
| Gemini 1.5 Flash (free tier) | 60 requests / minute, 1,500 / day |
| Firebase Hosting | 10 GB storage, 360 MB / day transfer |

All limits are **more than sufficient** for personal or educational use.

---

## Troubleshooting

| Problem | Solution |
|---|---|
| "No API key found" | Add your Gemini key in ⚙️ Settings |
| "Invalid API key" | Double-check the key at aistudio.google.com |
| Empty or no AI response | Check your internet connection; ensure the API key is valid |

---

## Project Structure

```
German-Flashcard/
├── index.html          # Main app (includes Chat tab)
├── script.js           # App logic + client-side Gemini chat
├── style.css           # Styles including chat UI
├── firebase.json       # Firebase hosting config
└── DEPLOYMENT.md       # This file
```

