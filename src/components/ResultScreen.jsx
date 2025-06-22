import { useLocation, useNavigate } from "react-router-dom";

const ResultScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { score = 0, total = 10 } = location.state || {};

  return (
    <div className="min-h-screen bg-[#f5f3fb] flex items-center justify-center px-4">
      <div className="bg-white max-w-md w-full p-8 rounded-3xl shadow-xl text-center flex flex-col justify-between">
        <div>
          <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-pink-100 flex items-center justify-center text-4xl">
            🎉
          </div>

          <h1 className="text-2xl font-bold text-purple-700 mb-2">Congratulations!</h1>
          <p className="text-gray-500 mb-4">
            You scored <strong>{score}</strong> out of <strong>{total}</strong>
          </p>

          <div className="bg-purple-100 text-purple-700 font-medium px-4 py-2 rounded-xl inline-flex items-center justify-center gap-2 mb-6">
            💎 {score * 20} Points
          </div>
        </div>

        <button
          onClick={() => navigate("/")}
          className="mt-6 bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-full font-semibold"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default ResultScreen;
