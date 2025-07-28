import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/api/hello")
      .then(res => res.json())
      .then(data => setMessage(data.message));
  }, []);

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: 800, margin: '0 auto', padding: 32 }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, marginBottom: 16 }}>
        <Link href="/search" passHref>
          <button style={{ padding: 8, background: '#3182ce', color: '#fff', border: 'none', borderRadius: 4, fontWeight: 'bold' }}>
            Search
          </button>
        </Link>
        <Link href="/" passHref>
          <button style={{ padding: 8, background: '#e53e3e', color: '#fff', border: 'none', borderRadius: 4, fontWeight: 'bold' }}>
            Logout
          </button>
        </Link>
      </div>
      <h1 style={{ color: '#2d3748', fontSize: '2.5rem', marginBottom: 8 }}>Connections App</h1>
      <p style={{ color: '#4a5568', fontSize: '1.2rem', marginBottom: 24 }}>
        Meet new people, share your interests, and connect through private video calls and messaging. Secure, multilingual, and designed for meaningful connections.
      </p>
      {/* No Login button here, user is already logged in */}
      <div style={{ display: 'grid', gap: 24 }}>
        <section style={{ background: '#f7fafc', padding: 20, borderRadius: 8 }}>
          <h2>Profile Upload</h2>
          <p>Upload up to 5 photos, 2 video stories, and fill in your information to get started.</p>
        </section>
        <section style={{ background: '#f7fafc', padding: 20, borderRadius: 8 }}>
          <h2>Search & Match</h2>
          <p>Find people based on your interests and criteria. Start searching for your next connection!</p>
        </section>
        <section style={{ background: '#f7fafc', padding: 20, borderRadius: 8 }}>
          <h2>Messaging & Video Calls</h2>
          <p>Message in any language with automatic translation. Enjoy private, secure video calls.</p>
        </section>
        <section style={{ background: '#f7fafc', padding: 20, borderRadius: 8 }}>
          <h2>Calendar</h2>
          <p>Arrange and schedule video chat meetings easily with our built-in calendar feature.</p>
        </section>
        <section style={{ background: '#e6fffa', padding: 20, borderRadius: 8, border: '1px solid #b2f5ea' }}>
          <h2>Privacy & Security</h2>
          <p>Screen recording and screenshots are disabled to protect your privacy.</p>
        </section>
      </div>
      <div style={{ marginTop: 32, color: '#718096' }}>
        <strong>Backend says:</strong> {message}
      </div>
    </div>
  );
} 