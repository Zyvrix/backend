# Learn with Jiji – Backend (VeidaLabs Assignment)

Backend service for “Learn with Jiji”, an AI learning companion.
This service accepts user queries, fetches relevant learning resources from Supabase,
and returns a structured response.

## Tech Stack
- Node.js
- Express
- Supabase (Database, Auth, Storage)
- Nodemon

## Features
- POST API to accept learning queries
- Fetches related PPT & Video resources from Supabase
- Mocked AI response 
- Supabase Row Level Security (RLS)
- Basic input validation & error handling

## API Endpoint

### POST /ask-jiji
**Request Body**
```json
{
  "query": "Explain RAG"
}
Response

{
  "answer": "RAG (Retrieval-Augmented Generation)...",
  "resources": [
    { "type": "ppt", "url": "..." },
    { "type": "video", "url": "..." }
  ]
}

Supabase Setup

Tables: profiles, queries, resources

RLS enabled on all tables

Public read policy on resources

Storage bucket: learning-resources

How to Run Locally
npm install
npm run dev


Server runs on http://localhost:5000

Security Notes

Environment variables stored in .env

No secrets committed to repository

RLS enabled in Supabase

One Improvement with More Time

Add real AI integration (RAG-based search)

Add authentication-based user query history

Ranking resources by relevance


---


Thunder Client:

POST http://localhost:5000/ask-jiji

Body: { "query": "Explain RAG" }

Show 200 OK response