import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import QuizScreen from "./components/QuizScreen";
import ResultScreen from "./components/ResultScreen";
import { questions } from "./data";
import { useState } from "react";

function QuizWrapper() {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const navigate = useNavigate();

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      navigate("/result", {
        state: { score, total: questions.length },
      });
    }
  };

  return (
    <QuizScreen
      questionData={questions[currentQuestion]}
      current={currentQuestion + 1}
      total={questions.length}
      onAnswer={handleAnswer}
    />
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#f5f3fb] flex items-center justify-center p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<QuizWrapper />} />
          <Route path="/result" element={<ResultScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
