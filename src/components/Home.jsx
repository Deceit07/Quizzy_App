import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f5f3fb] flex items-center justify-center px-4">
      <div className="bg-white max-w-md w-full p-8 rounded-3xl shadow-xl text-center">
        {/* Logo Circle */}
        <div className="w-28 h-28 mx-auto mb-6 rounded-full bg-purple-100 flex items-center justify-center text-4xl">
          📚
        </div>

        {/* Welcome Title */}
        <h1 className="text-3xl font-bold text-purple-700 mb-2">Welcome to Quizzy!</h1>

        {/* Description */}
        <p className="text-gray-500 mb-6">
          Challenge yourself with 10 fun and tricky questions. How many can you get right?
        </p>

        {/* Start Button */}
        <button
          onClick={() => navigate("/quiz")}
          className="bg-purple-700 hover:bg-purple-800 transition text-white px-6 py-3 rounded-full font-semibold shadow-md"
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default Home;
