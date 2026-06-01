/* Decodable Stories browser — filter, search, modal */
import { useState, useEffect } from "react";
import { groups, colorVar } from "../data.js";

export function StoryCard({ g, onOpen }) {
  const cvar = colorVar;
  return (
    <button className="card" onClick={() => onOpen(g)}>
      <div className="card__top">
        <span className="card__num" style={{ background: cvar[g.color] }}>{g.n}</span>
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
