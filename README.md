A full-stack AI application built using React.js, Express.js, Node.js, and the Google Gemini API.

The application allows users to enter prompts through a React-based interface and receive AI-generated responses using the Gemini API.

Tech Stack
Frontend: React.js
Backend: Express.js
Runtime: Node.js
AI: Google Gemini API
Language: JavaScript
Version Control: Git & GitHub


1. Clone the Repository

2. Install Frontend Dependencies
cd frontend
npm install
3. Install Backend Dependencies
cd ../backend
npm install
4. Configure Environment Variables
Create a .env file inside the backend folder:
GEMINI_API_KEY=your_gemini_api_key


Run the Application
Start the Backend
From the backend folder:
node server.js
The Express server will start on the port configured in your application.

Start the Frontend
Open another terminal and navigate to the frontend:
cd frontend
npm run dev
Open the local URL displayed in the terminal.



How It Works
User
  ↓
React Frontend
  ↓
Express + Node.js Backend
  ↓
Google Gemini API
  ↓
AI Generated Response
  ↓
Express Backend
  ↓
React Frontend
  ↓
User
