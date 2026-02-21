import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [fact, setFact] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const apiUrl = "https://uselessfacts.jsph.pl/api/v2/facts/random?language=en";

  useEffect(() => {
    let cancelled = false;
    async function fetchFact() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(apiUrl);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        if (!cancelled) setFact(data.text ?? JSON.stringify(data));
      } catch (err) {
        if (!cancelled)
          setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchFact();
    return () => {
      cancelled = true;
    };
  }, [count]);

  return (
    <>
      <h1>Fun Facts</h1>
      <div className="card">
        <button onClick={() => setCount((c) => c + 1)}>Get new fact</button>
        <div style={{ marginTop: 12 }}>
          {loading && <p>Loading...</p>}
          {error && <p style={{ color: "red" }}>Error: {error}</p>}
          {fact && <p>{fact}</p>}
        </div>
      </div>
    </>
  );
}

export default App;
