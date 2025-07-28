import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Login() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      const res = await fetch("http://localhost:8080/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });
      if (res.ok) {
        router.push("/search");
      } else {
        const data = await res.text();
        setError(data || "Wrong username, email or password");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "40px auto", padding: 24, border: "1px solid #eee", borderRadius: 8 }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit" style={{ padding: 8, background: "#3182ce", color: "#fff", border: "none", borderRadius: 4 }}>
          Login
        </button>
      </form>
      {error && <div style={{ color: 'red', marginTop: 12 }}>{error}</div>}
      <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
        <Link href="/register" passHref>
          <button style={{ padding: 8, background: '#38a169', color: '#fff', border: 'none', borderRadius: 4, flex: 1 }}>
            Register
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