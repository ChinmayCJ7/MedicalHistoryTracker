import { useState } from "react";
import { register } from "../api/auth";

export default function Register() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await register(formData);
      setMessage("Registration successful for " + res.data.name);
    } catch (err) {
      if (err.response) {
        setMessage(err.response.data);
      } else {
        setMessage("Registration failed");
      }
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-2 border rounded"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
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
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
          Register
        </button>
        <button
          type="button"
          className="bg-blue-600 text-white px-4 py-2 rounded ml-2"
          onClick={() => window.location.href = "/login"}
        >
          Login
        </button>
      </form>
      {message && <p className="mt-4 text-red-600">{message}</p>}
    </div>
  );
}
