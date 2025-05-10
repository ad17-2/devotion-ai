# DevotionAI

A full-stack application that helps users explore Bible passages and generate AI-powered devotionals with a modern, full-screen, and responsive UI.

## Features

- Search Bible passages using the Scripture API
- Generate AI-powered devotionals including:
  - Summary
  - Action Points
  - Prayer
  - Historical Context
  - Reflection Questions
- Beautiful, full-screen, and mobile-friendly design
- Fast, modern UX with Tailwind CSS and React Icons

## Tech Stack

### Frontend
- Next.js 14
- TypeScript
- Tailwind CSS
- React Icons

### Backend
- Express.js
- TypeScript
- OpenAI API
- Scripture API

## Prerequisites

- Node.js 18 or later
- Docker and Docker Compose
- API keys for:
  - OpenAI API

## Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd devotion-ai
```

2. Create environment files:

For backend:
```bash
cd backend
cp .env.example .env
```

Edit `.env` and add your API keys:
```
PORT=3001
OPENAI_API_KEY=open_ai_api_key_here
```

3. Install dependencies:

```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

4. Run with Docker:

```bash
# From the root directory
docker-compose up --build
```

Or run locally:

```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
cd frontend
npm run dev
```

## Usage

1. Open your browser and navigate to `http://localhost:3000`
2. Enter a Bible reference (e.g., "John 1:1-20")
3. Click "Search" to fetch the passage
4. Click "Generate Devotion" to create an AI-powered devotional

## Development Workflow

- All code is formatted and linted for consistency.
- The UI is now full-screen, open, and modern—no more tight cards.
- To contribute to the design, edit the files in `frontend/src/app` and `frontend/src/components`.
- Use Tailwind CSS utility classes for rapid prototyping.
- All environment files and build output are git-ignored for safety (see `.gitignore`).

## API Endpoints

### Backend

- `GET /api/bible/passage?reference=<reference>` - Fetch Bible passage
- `POST /api/devotion/generate` - Generate devotional content

## License

MIT 