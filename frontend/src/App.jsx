import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [mode, setMode] = useState("Explain");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  async function askAI() {
    if (!text.trim()) return;

    setLoading(true);
    setAnswer("");

    try {
      const response = await fetch("https://ai-text-assistant-backend-ovor.onrender.com/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: `${mode} the following text:\n\n${text}`,
        }),
      });

      const data = await response.json();

      setAnswer(data.answer);
    } catch (error) {
      console.error(error);
      setAnswer("Something went wrong. Please try again.");
    }

    setLoading(false);
  }

  return (
    <div className="app">
      <div className="container">
        <h1>🤖 AI Text Assistant</h1>

        <p className="subtitle">
          Explain, summarize, or improve your text using AI.
        </p>

        <div className="modes">
          <button
            className={mode === "Explain" ? "active" : ""}
            onClick={() => setMode("Explain")}
          >
            💡 Explain
          </button>

          <button
            className={mode === "Summarize" ? "active" : ""}
            onClick={() => setMode("Summarize")}
          >
            📝 Summarize
          </button>

          <button
            className={mode === "Improve" ? "active" : ""}
            onClick={() => setMode("Improve")}
          >
            ✨ Improve
          </button>
        </div>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your text here..."
        />

        <button className="generate" onClick={askAI} disabled={loading}>
          {loading ? "Thinking..." : "✨ Generate"}
        </button>

        {answer && (
          <div className="response">
            <h2>AI Response</h2>
            <p>{answer}</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Ranjitha Prabu. All rights reserved.</p>

        <p>
          Powered by AI. Response times may vary as this application uses a
          free API service.
        </p>
      </footer>
    </div>
  );
}

export default App;