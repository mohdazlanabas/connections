# Connections App

A web application for connecting people, enabling users to upload profiles, search for others, message, and arrange video calls. The app supports multilingual messaging, privacy features, and membership subscriptions.

---

## Features
- User profile upload (photos, video stories, personal info)
- Search and match based on interests and criteria
- Private messaging with automatic language translation
- Private video calls
- Calendar for arranging video chat meetings
- Membership subscriptions (monthly/yearly)
- Privacy: screen recording and screenshots are disabled

---

## Tech Stack
- **Frontend:** Next.js (TypeScript)
- **Backend:** Go (net/http)

---

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/)
- [Go](https://golang.org/) (v1.18+ recommended)

---

## Setup Instructions

### 1. Clone the Repository
```sh
git clone <your-repo-url>
cd <project-root>
```

### 2. Backend Setup (Go)
```sh
cd backend
go run main.go
```
- The backend server will start on [http://localhost:8080](http://localhost:8080)
- The `/api/hello` endpoint is available for testing.

### 3. Frontend Setup (Next.js)
```sh
cd frontend
npm install
npm run dev
```
- The frontend will start on [http://localhost:3000](http://localhost:3000)

---

## Usage
- Open [http://localhost:3000](http://localhost:3000) in your browser.
- The frontend will fetch a welcome message from the backend at `/api/hello`.
- Ensure both backend and frontend servers are running for full functionality.

---

## Troubleshooting
- **CORS Issues:**
  - The Go backend includes CORS headers to allow requests from the frontend during development.
- **Backend Not Responding:**
  - Make sure you started the backend with `go run main.go` in the `backend` directory.
  - Test the backend directly at [http://localhost:8080/api/hello](http://localhost:8080/api/hello).
- **Frontend Not Responding:**
  - Make sure you started the frontend with `npm run dev` in the `frontend` directory.
- **Port Conflicts:**
  - Ensure no other services are running on ports 3000 (frontend) or 8080 (backend).

---

## Project Structure
```
<project-root>/
  backend/         # Go backend server
    main.go
  frontend/        # Next.js frontend app
    pages/
      index.tsx
    package.json
    next.config.js
  support_material/ # Project briefs, requirements, and other docs
```

---

## License
This project is for educational and demonstration purposes. 