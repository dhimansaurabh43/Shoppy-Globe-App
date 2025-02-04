import { Link } from "react-router-dom";

//Basic error page for unknown routes

const ErrorPage = (): JSX.Element => {
  return (
    <div className="sm:min-h-[75vh] min-h-screen flex flex-col items-center justify-center px-8">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="bg-[#1995AD] hover:bg-[#356570] transition-all duration-300 ease-linear text-white px-4 py-2 mt-2 rounded flex items-center gap-1"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
