import { useNavigate } from "react-router-dom";

const ResultScreen = ({ score, total }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white text-center px-6 py-10 rounded-3xl shadow-xl max-w-sm w-full">
      <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-pink-100 flex items-center justify-center">
        <span className="text-4xl">🎉</span>
      </div>
      <h2 className="text-xl font-bold text-purple-700 mb-2">Congratulations!</h2>
      <p className="text-gray-600 mb-4">You scored {score} out of {total}</p>
      <div className="bg-purple-100 text-purple-700 py-2 rounded-xl mb-6">
        <span className="font-bold">💎 200 Points</span>
      </div>
      <button
        onClick={() => navigate("/")}
        className="bg-purple-700 text-white px-6 py-2 rounded-full font-medium"
      >
        Back to Home
      </button>
    </div>
  );
};

export default ResultScreen;
