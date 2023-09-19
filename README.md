# Hot or Not
A modular application used to compare two images. The app uses [ELO Rating System](https://en.wikipedia.org/wiki/Elo_rating_system) and maintains a leaderboard of top scoring images. 

---

**NOTE:**
DO NOT USE THIS APPLICATION TO COMPARE STUDENTS WITH FARM ANIMALS

---
## Pre-Requisites
1. SQLite3 database with your data - Rows: Id, Image Name, Image Data (stored as a BLOB) and Score (default set as 1000). Keep this file inside a subdirectory named `databases` inside your backend service root folder.
2. [Backend Server](https://github.com/Aaryamann171/hot_or_not-backend) running on port `8000`.

## Install Dependencies
```bash
npm install
```

## Run dev server
```bash
npm run dev
```