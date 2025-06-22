import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const QuizScreen = ({ questionData, current, total, onAnswer }) => {
  const [selected, setSelected] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [time, setTime] = useState(25);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((t) => (t > 0 ? t - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleOptionClick = (opt) => {
    if (isAnswered) return;
    setSelected(opt);
    setIsAnswered(true);
  };

  const handleNext = () => {
    if (selected) {
      const isCorrect = selected === questionData.answer;
      onAnswer(isCorrect, navigate);
      setSelected(null);
      setIsAnswered(false);
      setTime(25);
    }
  };

  return (
    <div className="bg-white p-6 w-full max-w-md rounded-3xl shadow-xl">
      <div className="flex justify-between items-center text-sm mb-4">
        <div className="text-purple-600 font-medium">Question</div>
        <div className="flex items-center gap-1 text-purple-800 font-semibold">
          <span>{current}/{total}</span>
          <div className="w-6 h-6 border-2 border-purple-600 rounded-full flex items-center justify-center text-xs">
            {time}s
          </div>
        </div>
      </div>

      <div className="h-1 bg-purple-100 rounded-full overflow-hidden mb-4">
        <div
          className="bg-purple-500 h-full transition-all"
          style={{ width: `${(current / total) * 100}%` }}
        />
      </div>

      <div className="bg-pink-100 text-purple-900 p-4 rounded-xl font-semibold mb-4">
        {questionData.question}
      </div>

      <div className="space-y-3 mb-4">
        {questionData.options.map((opt, i) => {
          const isCorrect = opt === questionData.answer;
          const isSelected = selected === opt;

          let bg = "bg-gray-100";
          if (isAnswered) {
            if (isCorrect) bg = "bg-green-200 border border-green-400";
            else if (isSelected) bg = "bg-red-200 border border-red-400";
          } else if (isSelected) {
            bg = "bg-purple-100 border border-purple-500";
          }

          return (
            <button
              key={i}
              onClick={() => handleOptionClick(opt)}
              className={`w-full p-3 rounded-xl text-left ${bg} transition`}
              disabled={isAnswered}
            >
              {opt}
            </button>
          );
        })}
      </div>

      {isAnswered && (
        <button
          onClick={handleNext}
          className="w-full mt-2 bg-purple-700 text-white py-2 rounded-full font-medium hover:bg-purple-800"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default QuizScreen;
