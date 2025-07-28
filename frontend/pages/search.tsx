import React, { useState } from "react";
import Link from "next/link";

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement search logic
    setResults([`Result for "${query}" (placeholder)`]);
  };

  return (
    <div style={{ maxWidth: 500, margin: "40px auto", padding: 24, border: "1px solid #eee", borderRadius: 8 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
        <Link href="/" passHref>
          <button style={{ padding: 8, background: '#e53e3e', color: '#fff', border: 'none', borderRadius: 4, fontWeight: 'bold' }}>
            Logout
          </button>
        </Link>
        <Link href="/payment" passHref>
          <button style={{ padding: 8, background: '#635bff', color: '#fff', border: 'none', borderRadius: 4, fontWeight: 'bold' }}>
            Go Premium
          </button>
        </Link>
      </div>
      <h2>Search</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        <input
          type="text"
          placeholder="Search by name or interest"
          value={query}
          onChange={e => setQuery(e.target.value)}
          style={{ flex: 1 }}
        />
        <button type="submit" style={{ padding: 8, background: "#805ad5", color: "#fff", border: "none", borderRadius: 4 }}>
          Search
        </button>
      </form>
      <div>
        {results.length > 0 ? (
          <ul>
            {results.map((result, idx) => (
              <li key={idx}>{result}</li>
            ))}
          </ul>
        ) : (
          <p>No results yet.</p>
        )}
      </div>
    </div>
  );
} 