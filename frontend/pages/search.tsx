import React, { useState, useRef } from "react";
import Link from "next/link";

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<string[]>([]);

  const cardNames = [
    'clang',
    'cplus',
    'csharp',
    'cobol',
    'css',
    'dart',
    'fortran',
    'golang',
    'java',
    'javascript',
    'linux',
    'pascal',
    'php',
    'prog_lang',
    'python',
    'rust',
    'scratch',
    'solidity',
    'sql',
    'typescript',
  ];
  const cardRefs = useRef(cardNames.map(() => React.createRef<HTMLDivElement>()));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Find the index of the card that matches the query (case-insensitive, ignore spaces/underscores)
    const normalizedQuery = query.trim().toLowerCase().replace(/\s|_/g, "");
    const idx = cardNames.findIndex(name => name.replace(/_/g, "").toLowerCase() === normalizedQuery);
    if (idx !== -1 && cardRefs.current[idx].current) {
      cardRefs.current[idx].current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    setResults([`Result for "${query}"${idx !== -1 ? '' : ' (not found)'}`]);
  };

  return (
    <div style={{ maxWidth: 500, margin: "40px auto", padding: 24, border: "1px solid #eee", borderRadius: 8 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
        <Link href="/home" passHref>
          <button style={{ padding: 8, background: '#e53e3e', color: '#fff', border: 'none', borderRadius: 4, fontWeight: 'bold' }}>
            Home
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
      {/* Cards Grid */}
      <h2 style={{ marginTop: 40 }}>Available Items</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: 24,
        marginTop: 16
      }}>
        {cardNames.map((name, idx) => (
          <div
            key={name}
            ref={cardRefs.current[idx]}
            style={{
              border: '1px solid #eee',
              borderRadius: 8,
              padding: 16,
              textAlign: 'center',
              background: '#fafafa',
              boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
            }}
          >
            <img
              src={`/assets/png/${name}.png`}
              alt={name}
              style={{ width: 80, height: 80, objectFit: 'contain', marginBottom: 12 }}
            />
            <h3 style={{ margin: '8px 0 4px', textTransform: 'capitalize' }}>{name.replace('_', ' ')}</h3>
            <div style={{ fontWeight: 'bold', color: '#635bff', marginBottom: 8 }}>
              ${100 * (idx + 1)}
            </div>
            <button
              style={{
                padding: '8px 16px',
                background: '#805ad5',
                color: '#fff',
                border: 'none',
                borderRadius: 4,
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
              onClick={() => window.location.href = `/payment?item=${encodeURIComponent(name)}&price=${100 * (idx + 1)}`}
            >
              Buy
            </button>
          </div>
        ))}
      </div>
    </div>
  );
} 