/* Decodable Stories browser — filter, search, modal */
import { useState, useEffect } from "react";
import { groups, colorVar } from "../data.js";

/* A themed white-line icon per story group (cat, cake, music…) */
function GroupIcon({ n }) {
  const paths = {
    1: <><path d="M5 4l2.5 5M19 4l-2.5 5" /><circle cx="12" cy="13" r="7.5" /><path d="M9.5 12.5v1M14.5 12.5v1M12 16l-1.6 1M12 16l1.6 1" /></>, /* cat */
    2: <><path d="M4 21h16M5 21v-7h14v7M5 14.5c2-1.8 4 .2 7 .2s5-2 7-.2M12 14V8.5M12 6v.01" /></>, /* cake */
    3: <><path d="M9 17V4l10-2v13" /><circle cx="6.5" cy="17" r="2.6" /><circle cx="16.5" cy="15" r="2.6" /></>, /* music */
    4: <><path d="M7 13a4 4 0 1 1 1.2-7.8A5 5 0 0 1 18 8a3.3 3.3 0 0 1 0 6.6H7.5" /><path d="M8 18l-1 2M12 18l-1 2M16 18l-1 2" /></>, /* rain */
    5: <><path d="M3 13l2-5h14l2 5v4h-2.5M8.5 17H3v-4M3 13h18" /><circle cx="7" cy="17.5" r="2" /><circle cx="17" cy="17.5" r="2" /></>, /* car */
    6: <><path d="M7 18a4.2 4.2 0 1 1 1.2-8.2A5.2 5.2 0 0 1 18 12a3.4 3.4 0 0 1 0 6.8H7.5" /></>, /* cloud */
    7: <><path d="M12 9c3.5-2.6 7.5.6 5.8 5.4S13 20 12 20s-4.8-1.6-5.8-5.6S8.5 6.4 12 9z" /><path d="M12 9V5M12 5.5c.8-1.4 2.8-1.2 3 .4" /></>, /* apple */
    8: <><circle cx="12" cy="12" r="4.5" /><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.6 4.6l1.8 1.8M17.6 17.6l1.8 1.8M19.4 4.6l-1.8 1.8M6.4 17.6l-1.8 1.8" /></>, /* sun */
    9: <><path d="M3 21h18M5 21V8l5-3v16M14 21V11h5v10M7.5 9v.01M7.5 12.5v.01M7.5 16v.01M16.5 14v.01M16.5 17.5v.01" /></>, /* city */
    10: <><path d="M12 3.2l2.5 5.4 5.9.5-4.5 3.9 1.4 5.8L12 18.6l-5.3 2.6 1.4-5.8-4.5-3.9 5.9-.5z" /></>, /* star */
  };
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[n] || paths[10]}
    </svg>
  );
}

export function StoryCard({ g, onOpen }) {
  const cvar = colorVar;
  return (
    <button className="card" onClick={() => onOpen(g)}>
      <div className="card__top">
        <span className="card__num" style={{ background: cvar[g.color] }}><GroupIcon n={g.n} /></span>
        <span className="card__level">{g.level}</span>
      </div>
      <h3>{g.name.replace(" Stories", "")}</h3>
      <p className="card__focus">{g.focus}</p>
      <div className="card__tiles">
        {g.tiles.map((c, i) => <span key={i} className={"tile t-" + g.color}>{c}</span>)}
      </div>
      <div className="card__foot">
        <span className="card__count">{g.count} stories</span>
        <span className="card__go">Preview <span>→</span></span>
      </div>
    </button>
  );
}

export function StoryModal({ g, onClose }) {
  const cvar = colorVar;
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, []);
  if (!g) return null;
  return (
    <div className="modal" role="dialog" aria-modal="true">
      <div className="modal__scrim" onClick={onClose}></div>
      <div className="modal__panel">
        <button className="modal__close" onClick={onClose} aria-label="Close">×</button>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 18 }}>
          <span className="modal__num" style={{ background: cvar[g.color] }}>{g.n}</span>
          <div>
            <span className="card__level" style={{ marginBottom: 6, display: "inline-block" }}>{g.level} · Group {g.n}</span>
            <h2 style={{ fontSize: 28, lineHeight: 1.05 }}>{g.name}</h2>
          </div>
        </div>
        <p style={{ color: "var(--ink-soft)", margin: "0 0 18px", fontWeight: 600 }}>
          <b style={{ color: "var(--ink)" }}>Phonics focus:</b> {g.focus}
        </p>
        <div className="tiles" style={{ marginBottom: 22 }}>
          {g.tiles.map((c, i) => <span key={i} className={"tile t-" + g.color} style={{ fontSize: 24 }}>{c}</span>)}
        </div>
        <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--ink-soft)", marginBottom: 10 }}>
          Sample decodable passage
        </div>
        <div className="sample" dangerouslySetInnerHTML={{ __html: g.sample }}></div>
        <div style={{ display: "flex", gap: 12, marginTop: 26, flexWrap: "wrap" }}>
          <a className="btn btn--red" href="#stories" onClick={onClose}>Download {g.count} stories (PDF) <span className="arrow">→</span></a>
          <a className="btn btn--green" href="#stories" onClick={onClose}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M11 5 6 9H3v6h3l5 4z" />
              <path d="M15.5 8.5a5 5 0 0 1 0 7" />
              <path d="M18.5 6a8 8 0 0 1 0 12" />
            </svg>
            Download audio
          </a>
          <a className="btn btn--ghost" href="#stories" onClick={onClose}>View teacher notes</a>
        </div>
      </div>
    </div>
  );
}

export function Stories() {
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(null);

  const filters = ["All", "Beginner", "Building", "Advanced"];
  const list = groups.filter((g) => {
    const okF = filter === "All" || g.level === filter;
    const q = query.trim().toLowerCase();
    const okQ = !q || g.name.toLowerCase().includes(q) || g.focus.toLowerCase().includes(q) || ("group " + g.n).includes(q);
    return okF && okQ;
  });
  const total = list.reduce((a, g) => a + g.count, 0);

  return (
    <section className="stories section" id="stories" style={{ backgroundColor: "rgb(225, 244, 247)" }}>
      <div className="wrap">
        <div className="section__head">
          <span className="eyebrow">Decodable story library</span>
          <h2>Find the right stories in <span className="mark red"><span>seconds.</span></span></h2>
          <p>Ten groups follow our phonics sequence — from short vowels to advanced patterns. Filter by level or search a sound, then preview and download.</p>
        </div>

        <div className="browser__bar">
          <label className="search">
            <span aria-hidden="true">🔎</span>
            <input value={query} onChange={(e) => setQuery(e.target.value)}
              placeholder="Search a sound or pattern — e.g. silent-e, ar, vowel teams" />
          </label>
          <span className="browser__count">{list.length} groups · {total} stories</span>
        </div>

        <div className="chips">
          {filters.map((f) =>
            <button key={f} className={"chip" + (filter === f ? " active" : "")} onClick={() => setFilter(f)}>{f}</button>
          )}
        </div>

        {list.length === 0 ?
          <div style={{ textAlign: "center", padding: "48px 0", color: "var(--ink-soft)", fontWeight: 600 }}>
            No groups match “{query}”. <button className="btn btn--sm" style={{ marginLeft: 10 }} onClick={() => { setQuery(""); setFilter("All"); }}>Clear</button>
          </div> :
          <div className="cards">
            {list.map((g) => <StoryCard key={g.n} g={g} onOpen={setOpen} />)}
          </div>
        }
      </div>

      {open && <StoryModal g={open} onClose={() => setOpen(null)} />}
    </section>
  );
}
