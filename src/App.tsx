import { useCallback, useEffect, useState } from "react";

export default function App() {
  const [revision, setRevision] = useState(1);
  const [enabled, setEnabled] = useState(true);
  const [logs, setLogs] = useState<string[]>([]);
  const addLog = useCallback((message: string) => {
    const stamp = new Date().toLocaleTimeString();
    setLogs(previous => [stamp + " · " + message, ...previous].slice(0, 40));
  }, []);

  useEffect(() => {
    if (!enabled) {
      addLog("effect skipped: disabled");
      return;
    }
    addLog("setup: subscription for revision " + revision);
    const timer = window.setInterval(() => addLog("tick: revision " + revision), 1000);
    return () => {
      window.clearInterval(timer);
      addLog("cleanup: revision " + revision);
    };
  }, [enabled, revision, addLog]);

  return <main className="shell">
    <p className="eyebrow">REACT HOOKS PLAYGROUND</p>
    <h1>Effect setup &amp; cleanup</h1>
    <p className="lead">Change a dependency or disable the effect. Watch cleanup run before the next setup.</p>
    <section className="controls">
      <div><span className="label">Dependency value</span><strong className="number">{revision}</strong></div>
      <button onClick={() => setRevision(value => value + 1)}>Change dependency</button>
      <button className="secondary" onClick={() => setEnabled(value => !value)}>{enabled ? "Disable effect" : "Enable effect"}</button>
      <button className="quiet" onClick={() => setLogs([])}>Clear log</button>
    </section>
    <section className="status"><span className={enabled ? "dot on" : "dot"} />Effect {enabled ? "enabled" : "disabled"} · StrictMode is on in development</section>
    <section className="panel"><div className="panel-head"><h2>Lifecycle timeline</h2><span>{logs.length} events</span></div>
      {logs.length === 0 ? <p className="empty">Waiting for lifecycle events…</p> : <ol>{logs.map((line, index) => <li key={index}>{line}</li>)}</ol>}
    </section>
    <p className="note">The development StrictMode check may run an extra setup → cleanup → setup cycle. Production behavior differs.</p>
  </main>;
}
