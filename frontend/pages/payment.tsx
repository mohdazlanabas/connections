import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import Link from "next/link";
import { useRouter } from 'next/router';

export default function Payment() {
  const router = useRouter();
  const { item, price } = router.query;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubscribe = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("http://localhost:8080/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) {
        const data = await res.text();
        setError(data || "Failed to create Stripe session.");
        setLoading(false);
        return;
      }
      const { url } = await res.json();
      if (url) {
        window.location.href = url;
      } else {
        setError("No Stripe URL returned.");
        setLoading(false);
      }
    } catch (err) {
      setError("Network error. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "40px auto", padding: 24, border: "1px solid #eee", borderRadius: 8 }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 16 }}>
        <Link href="/search" passHref>
          <button style={{ padding: 8, background: '#805ad5', color: '#fff', border: 'none', borderRadius: 4, fontWeight: 'bold' }}>
            Back to Search
          </button>
        </Link>
      </div>
      {item && price ? (
        <>
          <h2>Purchase: {item.toString().replace('_', ' ')}</h2>
          <div style={{ background: '#f7fafc', padding: 16, borderRadius: 8, marginBottom: 24, textAlign: 'center' }}>
            <img
              src={`/assets/png/${item}.png`}
              alt={item.toString()}
              style={{ width: 80, height: 80, objectFit: 'contain', marginBottom: 12 }}
            />
            <h3>Item: {item.toString().replace('_', ' ')}</h3>
            <div style={{ fontWeight: 'bold', fontSize: '1.2rem', margin: '12px 0' }}>${price}</div>
          </div>
          <button
            style={{ padding: 12, background: '#635bff', color: '#fff', border: 'none', borderRadius: 4, fontSize: '1rem', width: '100%' }}
            onClick={handleSubscribe}
            disabled={loading}
          >
            {loading ? 'Redirecting...' : `Pay $${price} with Stripe`}
          </button>
        </>
      ) : (
        <>
          <h2>Subscribe to Connections App</h2>
          <p style={{ marginBottom: 24 }}>
            Unlock premium features and connect with more people! Choose a plan and pay securely with Stripe.
          </p>
          <div style={{ background: '#f7fafc', padding: 16, borderRadius: 8, marginBottom: 24 }}>
            <h3>Premium Membership</h3>
            <ul style={{ margin: '12px 0' }}>
              <li>Unlimited messaging</li>
              <li>Private video calls</li>
              <li>Priority search</li>
            </ul>
            <div style={{ fontWeight: 'bold', fontSize: '1.2rem', margin: '12px 0' }}>$9.99/month</div>
          </div>
          <button
            style={{ padding: 12, background: '#635bff', color: '#fff', border: 'none', borderRadius: 4, fontSize: '1rem', width: '100%' }}
            onClick={handleSubscribe}
            disabled={loading}
          >
            {loading ? 'Redirecting...' : 'Subscribe with Stripe'}
          </button>
        </>
      )}
      {error && <div style={{ color: 'red', marginTop: 12 }}>{error}</div>}
    </div>
  );
} 