import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import QuizScreen from "./components/QuizScreen";
import ResultScreen from "./components/ResultScreen";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { questions } from "./data";

function QuizWrapper() {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore((prev) => prev + 1);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      navigate("/result", { state: { score, total: questions.length } });
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
