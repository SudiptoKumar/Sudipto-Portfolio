# Sudipto Kumar Portfolio

Private GitHub repository for the portfolio deployed on Vercel.

## Production

https://sudiptokumar.vercel.app/

## Vercel deployment

This repository is designed to connect to the existing Vercel project `sudipto`.
Vercel can build the Vite app with `npm run build` and deploy the serverless contact function in `api/contact.js`.

## Required Vercel environment variables

Set these in Vercel Project Settings -> Environment Variables. Do not commit their values to GitHub:

- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_CHAT_ID`

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```
