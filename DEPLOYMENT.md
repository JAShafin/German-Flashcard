# Deployment Guide

## GitHub Pages

This is a static website and is deployed through GitHub Pages. No Firebase
hosting configuration or backend is required to serve the flashcards.

To enable or update deployment:

1. Open the repository on GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Select the `main` branch and the `/ (root)` folder.
5. Save the settings.

GitHub Pages will publish `index.html` and the JavaScript data files from the
repository root.

## Gemini API key

The optional AI conversation feature uses a Gemini API key entered in the
website settings. The key is stored in the browser's `localStorage` and sent
directly from the browser to Google's Gemini API.

## Discord presence

GitHub Pages cannot securely store a Discord webhook URL or provide a
server-side real-time presence service. Do not add a webhook secret to the
frontend. The current direct-webhook implementation sends a Discord message
when a user starts, every five minutes while the page is open, and when the
page is closed when the browser permits it. This is only a best-effort
presence signal: browser shutdowns, network loss, and blocked requests can
prevent the final offline message.

Because the webhook is necessarily visible in the frontend, anyone can
inspect it and send messages to that Discord channel. Rotate the webhook and
move to a private serverless relay, such as a Cloudflare Worker, if the
website becomes public or the webhook is abused.
