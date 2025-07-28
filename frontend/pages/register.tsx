import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Register() {
  const [form, setForm] = useState({
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    gender: "",
    birthdate: "",
    email: ""
  });
  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    setError(null);
    try {
      const res = await fetch("http://localhost:8080/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("Registration successful! Redirecting to login...");
        setForm({
          username: "",
          password: "",
          first_name: "",
          last_name: "",
          gender: "",
          birthdate: "",
          email: ""
        });
        setTimeout(() => {
          router.push("/login");
        }, 1200);
      } else {
        const data = await res.text();
        setError(data || "Registration failed.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "40px auto", padding: 24, border: "1px solid #eee", borderRadius: 8 }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="first_name"
          placeholder="First Name"
          value={form.first_name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="last_name"
          placeholder="Last Name"
          value={form.last_name}
          onChange={handleChange}
          required
        />
        <select
          name="gender"
          value={form.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <input
          type="date"
          name="birthdate"
          placeholder="Birthdate"
          value={form.birthdate}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <button type="submit" style={{ padding: 8, background: "#38a169", color: "#fff", border: "none", borderRadius: 4 }}>
          Register
        </button>
      </form>
      {status && <div style={{ color: 'green', marginTop: 12 }}>{status}</div>}
      {error && <div style={{ color: 'red', marginTop: 12 }}>{error}</div>}
      <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
        <Link href="/login" passHref>
          <button style={{ padding: 8, background: '#3182ce', color: '#fff', border: 'none', borderRadius: 4, flex: 1 }}>
            Login
          </button>
        </Link>
        <Link href="/" passHref>
          <button style={{ padding: 8, background: '#4a5568', color: '#fff', border: 'none', borderRadius: 4, flex: 1 }}>
            Home
          </button>
        </Link>
      </div>
    </div>
  );
} 