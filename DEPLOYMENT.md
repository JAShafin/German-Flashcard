# Deployment Guide – AI Conversation Partner

Follow these steps to enable the AI chat feature on your German Flashcard app using **Firebase Cloud Functions** and the **free Google Gemini API**.

---

## Prerequisites

- Node.js 18 or later installed
- Firebase CLI installed (`npm install -g firebase-tools`)
- Your Firebase project: `flashcardapp-3c280`

---

## Step 1 – Get a Free Gemini API Key

1. Go to **[https://aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey)**
2. Sign in with your Google account
3. Click **"Get API key"** → **"Create API key in new project"**
4. Copy the generated key — you'll need it later

> The free tier allows **60 requests per minute** — more than enough for casual practice sessions.

---

## Step 2 – Log in to Firebase

```bash
firebase login
```

Select your Google account when prompted.

---

## Step 3 – Set the Active Firebase Project

```bash
firebase use flashcardapp-3c280
```

---

## Step 4 – Install Cloud Function Dependencies

```bash
cd functions
npm install
cd ..
```

---

## Step 5 – Deploy the Cloud Function

```bash
firebase deploy --only functions
```

After a successful deploy you will see output similar to:

```
✔  functions[chat(us-central1)]: Successful create operation.
Function URL (chat(us-central1)): https://us-central1-flashcardapp-3c280.cloudfunctions.net/chat
```

**Copy that URL** — you'll need it in the app settings.

---

## Step 6 – Deploy the Hosting (optional)

If you want Firebase to also host your frontend:

```bash
firebase deploy --only hosting
```

Your site will be available at **[https://flashcardapp-3c280.web.app](https://flashcardapp-3c280.web.app)**.

---

## Step 7 – Configure the App

1. Open your German Flashcard website
2. Enter your name to log in
3. Click **⚙️ Settings** (top-right corner)
4. Paste your **Gemini API key** and click **Save Key**
5. Paste the **Cloud Function URL** from Step 5 and click **Save URL**
6. Click **Close**

---

## Step 8 – Start Chatting!

1. Click the **💬 Chat with AI** tab
2. Choose your difficulty level (Beginner / Intermediate / Advanced)
3. Type a message in German or English and press **Enter** (or click **Send**)
4. Deutsch-Buddy will reply, correct any mistakes, and keep the conversation going!

---

## Free Tier Limits (Firebase + Gemini)

| Service | Free Limit |
|---|---|
| Firebase Cloud Functions | 2 million invocations / month |
| Gemini 1.5 Flash (free tier) | 60 requests / minute, 1,500 / day |
| Firebase Hosting | 10 GB storage, 360 MB / day transfer |

All limits are **more than sufficient** for personal or educational use.

---

## Troubleshooting

| Problem | Solution |
|---|---|
| "No API key found" | Add your Gemini key in ⚙️ Settings |
| "No Cloud Function URL" | Deploy the function (Step 5) and add the URL in Settings |
| "Invalid API key" | Double-check the key at aistudio.google.com |
| Function not responding | Run `firebase functions:log` to check for errors |
| CORS errors | The function already sets `Access-Control-Allow-Origin: *` – ensure the URL in Settings is correct |

---

## Project Structure

```
German-Flashcard/
├── index.html          # Main app (includes Chat tab)
├── script.js           # App logic + chat functionality
├── style.css           # Styles including chat UI
├── firebase.json       # Firebase project config
├── DEPLOYMENT.md       # This file
└── functions/
    ├── index.js        # Cloud Function (Gemini proxy)
    └── package.json    # Function dependencies
```
