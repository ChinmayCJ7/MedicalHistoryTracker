import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Landing() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const name = localStorage.getItem("userName");
    setUserName(name || "");
  }, []);

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col">
      <header className="bg-blue-700 text-white p-4 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold">Medical History Tracker</h1>
        <nav className="space-x-4 flex items-center">
          {userName ? (
            <>
              <span className="font-semibold">Welcome, {userName}</span>
              <Link to="/dashboard" className="hover:underline">Dashboard</Link>
              <button
                className="hover:underline"
                onClick={() => {
                  localStorage.removeItem("userName");
                  localStorage.removeItem("token");
                  window.location.reload();
                }}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:underline">Login</Link>
              <Link to="/register" className="hover:underline">Sign Up</Link>
            </>
          )}
        </nav>
      </header>

      <main className="flex-1 flex flex-col justify-center items-center text-center px-4">
        <h2 className="text-4xl font-bold text-blue-800 mb-4">Track Medical Records Seamlessly</h2>
        <p className="text-lg text-gray-700 mb-6 max-w-xl">
          Store, view, and manage patient medical history all in one place. Secure, efficient, and easy to use.
        </p>
        <Link to="/dashboard" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
          Go to Dashboard
        </Link>
      </main>
    </div>
  );
}

export default Landing;
