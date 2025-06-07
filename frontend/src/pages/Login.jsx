import { useState } from "react";
import { login } from "../api/auth";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login(formData);
      setMessage("Login successful! Welcome " + res.data.name);
      localStorage.setItem("userName", res.data.name);
      localStorage.setItem("token", res.data.token); // if not already set
      window.location.href = "/dashboard";
    } catch (err) {
      if (err.response) {
        setMessage(err.response.data);
      } else {
        setMessage("Login failed");
      }
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Login
        </button>
        <button
          type="button"
          className="bg-green-600 text-white px-4 py-2 rounded ml-2"
          onClick={() => window.location.href = "/register"}
        >
          Register
        </button>
      </form>
      {message && <p className="mt-4 text-red-600">{message}</p>}
    </div>
  );
}
