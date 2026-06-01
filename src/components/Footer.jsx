/* Endorsements slider + Final CTA + Footer */
import { useState } from "react";
import { groups, colorVar, endorsements } from "../data.js";

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
            <div className="quote__av" style={{ background: e.color }}>{e.initials}</div>
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
          <span>As reviewed against</span>
          <span>• LETRS principles</span>
          <span>• Structured Literacy</span>
          <span>• The Science of Reading</span>
          <span>• Orton-Gillingham approach</span>
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
          <span className="float-tile" style={{ top: 20, left: 30, fontSize: 44 }}>📚</span>
          <span className="float-tile" style={{ bottom: 24, right: 40, fontSize: 40 }}>✏️</span>
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
            <div className="nav__logomark" style={{ transform: "rotate(-4deg)" }}>a</div>
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
