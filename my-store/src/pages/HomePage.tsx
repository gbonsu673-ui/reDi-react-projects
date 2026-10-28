import { Link } from "react-router-dom";
function HomePage() {
  return (
    <div className="m-auto max-w-275 min-h-screen overflow-auto p-6 px-10">
      <div className="mx-auto max-w-140 text-center">
        <h1>
          {" "}
          Welcome to <span className="text-blue-500">Blue</span>{" "}
          <span className="text-gray-400">Kiosk</span>
        </h1>
        <p className="w-full text-lg font-sans">
          Whether you’re furnishing a new place, hunting for the perfect gift,
          or just treating yourself, we’re glad you’re here.
        </p>

        <Link to="/products">
          <button className="mt-5 p-2 w-75 mx-auto text-white text-xs font-semibold bg-blue-400 rounded uppercase hover:scale-95 hover:cursor-pointer transition-transform">
            Start Exploring...
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
