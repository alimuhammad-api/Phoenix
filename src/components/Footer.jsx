/* Endorsements slider + Final CTA + Footer */
import { useState } from "react";
import { groups, colorVar, endorsements, reviewedAgainst } from "../data.js";

/* Friendly illustrated avatar, palette-driven per endorser */
function Avatar({ a }) {
  const hair = {
    bob:   "M14 25 C 14 9 42 9 42 25 C 44 19 43 12 28 12 C 13 12 12 19 14 25 Z",
    long:  "M13 30 C 11 9 45 9 43 30 L 43 20 C 43 11 35 10 28 10 C 21 10 13 11 13 20 Z",
    short: "M15 22 C 15 11 41 11 41 22 C 41 17 38 13 28 13 C 18 13 15 17 15 22 Z",
  }[a.hairStyle];
  return (
    <svg className="quote__av" viewBox="0 0 56 56" aria-hidden="true">
      <defs><clipPath id={"clip-" + a.hairStyle}><circle cx="28" cy="28" r="26" /></clipPath></defs>
      <circle cx="28" cy="28" r="26" fill={a.bg} stroke="#211a14" strokeWidth="2.5" />
      <g clipPath={`url(#clip-${a.hairStyle})`}>
        <path d="M9 56 C 9 41 19 36 28 36 C 37 36 47 41 47 56 Z" fill={a.clothes} />
        <circle cx="28" cy="25" r="11" fill={a.skin} />
        <path d={hair} fill={a.hair} />
      </g>
    </svg>
  );
}

export function Endorsements() {
  const items = endorsements;
  const [i, setI] = useState(0);
  const go = (d) => setI((p) => (p + d + items.length) % items.length);
  const e = items[i];

  return (
    <section className="section endorse" id="endorse">
      <div className="wrap" style={{ maxWidth: 920 }}>
        <div className="section__head center">
          <span className="eyebrow">Endorsements</span>
          <h2>Backed by <span className="mark"><span>literacy experts.</span></span></h2>
        </div>

        <div className="quote">
          <div className="quote__mark">“</div>
          <p>{e.quote}</p>
          <div className="quote__by">
            <Avatar a={e.avatar} />
            <div><b>{e.name}</b><span>{e.role}</span></div>
          </div>
        </div>

        <div className="endorse__nav">
          <button className="round-btn" onClick={() => go(-1)} aria-label="Previous">←</button>
          <div className="endorse__dots">
            {items.map((_, k) =>
              <button key={k} className={"edot" + (k === i ? " active" : "")} onClick={() => setI(k)} aria-label={"Quote " + (k + 1)}></button>
            )}
          </div>
          <button className="round-btn" onClick={() => go(1)} aria-label="Next">→</button>
        </div>

        <div className="logos">
          <span className="logos__label">As reviewed against</span>
          {reviewedAgainst.map((r) => (
            <span key={r.label} className="logo-chip" style={{ background: r.color, color: r.text }}>{r.label}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCTA({ onNav }) {
  return (
    <section className="finalcta">
      <div className="wrap">
        <div className="finalcta__box" style={{ backgroundColor: "rgb(63, 75, 224)" }}>
          <span className="eyebrow" style={{ color: "#fff" }}>Start today · it's free</span>
          <h2 style={{ marginTop: 14 }}>Give your readers the practice they deserve.</h2>
          <p>Download lessons and decodable stories as print-ready PDFs. No account, no fees — just open materials any adult can use.</p>
          <div className="finalcta__cta">
            <a className="btn btn--gold btn--lg" href="#stories" onClick={(e) => { e.preventDefault(); onNav("stories"); }}>
              Browse stories <span className="arrow">→</span>
            </a>
            <a className="btn btn--lg" style={{ background: "var(--card)" }} href="#lessons" onClick={(e) => { e.preventDefault(); onNav("lessons"); }}>
              Get the 120 lessons
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer({ onNav }) {
  const cvar = colorVar;
  return (
    <footer className="footer" style={{ backgroundColor: "rgb(20, 24, 33)" }}>
      <div className="wrap">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="nav__logomark" style={{ transform: "rotate(-4deg)", backgroundColor: "var(--card)", padding: 5 }}>
              <img src="/favicon.svg" alt="Open Source Phonics" style={{ width: "100%", height: "100%" }} />
            </div>
            <p style={{ marginTop: 8, fontFamily: "var(--ff-display)", fontWeight: 800, fontSize: 20, color: "var(--paper)" }}>Open Source Phonics</p>
            <p>Free, high-quality phonics materials for teachers, tutors, and families. Literacy is a civil right.</p>
            <a className="btn btn--gold btn--sm" style={{ marginTop: 12, margin: "12px 0px 0px", padding: "12px 0px 12px 24px", textAlign: "left", color: "rgb(0, 0, 0)", backgroundColor: "rgb(241, 177, 42)" }} href="#stories" onClick={(e) => { e.preventDefault(); onNav("stories"); }}><span style={{ color: "#211a14" }}>Get materials →</span></a>
          </div>
          <div>
            <h5>Explore</h5>
            <a href="#who" onClick={(e) => { e.preventDefault(); onNav("who"); }}>Who we are</a>
            <a href="#why" onClick={(e) => { e.preventDefault(); onNav("lessons"); }}>Why phonics</a>
            <a href="#lessons" onClick={(e) => { e.preventDefault(); onNav("lessons"); }}>120 lessons</a>
            <a href="#endorse" onClick={(e) => { e.preventDefault(); onNav("endorse"); }}>Endorsements</a>
          </div>
          <div>
            <h5>Story groups</h5>
            {groups.slice(0, 5).map((g) =>
              <a key={g.n} href="#stories" onClick={(e) => { e.preventDefault(); onNav("stories"); }}>
                <span style={{ color: cvar[g.color], fontWeight: 800 }}>{g.n}.</span> {g.name.replace(" Stories", "")}
              </a>
            )}
          </div>
          <div>
            <h5>More groups</h5>
            {groups.slice(5).map((g) =>
              <a key={g.n} href="#stories" onClick={(e) => { e.preventDefault(); onNav("stories"); }}>
                <span style={{ color: cvar[g.color], fontWeight: 800 }}>{g.n}.</span> {g.name.replace(" Stories", "")}
              </a>
            )}
          </div>
        </div>
        <div className="footer__bottom">
          <small>Open Source Phonics © 2026 · Made for every reader.</small>
          <div style={{ display: "flex", gap: 18 }}>
            <a href="#top" onClick={(e) => { e.preventDefault(); onNav("top"); }} style={{ padding: 0 }}>Terms</a>
            <a href="#top" onClick={(e) => { e.preventDefault(); onNav("top"); }} style={{ padding: 0 }}>Privacy</a>
            <a href="#top" onClick={(e) => { e.preventDefault(); onNav("top"); }} style={{ padding: 0 }}>Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
