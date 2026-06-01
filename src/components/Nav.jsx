/* Nav + mobile drawer */
import { useState, useEffect } from "react";
import { groups, colorVar } from "../data.js";

export function Logomark({ style }) {
  return <div className="nav__logomark" style={{ ...style, backgroundColor: "rgb(63, 75, 224)" }}>a</div>;
}

export default function Nav({ active, onNav }) {
  const [drawer, setDrawer] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const cvar = colorVar;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawer ? "hidden" : "";
  }, [drawer]);

  const links = [
    { id: "who", label: "Who We Are" },
    { id: "why", label: "Why Phonics" },
    { id: "lessons", label: "120 Lessons" },
  ];

  const go = (id) => { setDrawer(false); onNav(id); };

  return (
    <header className="nav" style={{ ...(scrolled ? { boxShadow: "0 6px 0 -3px rgba(33,26,20,.18)" } : null), backgroundColor: "rgb(225, 244, 247)" }}>
      <div className="wrap nav__inner">
        <a className="nav__logo" href="#top" onClick={(e) => { e.preventDefault(); go("top"); }}>
          <Logomark />
          <span>Open Source Phonics<small>Free · forever · for everyone</small></span>
        </a>

        <nav className="nav__links">
          {links.map((l) =>
            <a key={l.id} className={"nav__link" + (active === l.id ? " active" : "")}
              href={"#" + l.id} onClick={(e) => { e.preventDefault(); go(l.id); }}>{l.label}</a>
          )}

          <div className="nav__drop">
            <a className={"nav__link" + (active === "stories" ? " active" : "")}
              href="#stories" onClick={(e) => { e.preventDefault(); go("stories"); }}>Decodable Stories ▾</a>
            <div className="nav__menu">
              {groups.map((g) =>
                <a key={g.n} href="#stories" onClick={(e) => { e.preventDefault(); go("stories"); }}>
                  <span className="gnum" style={{ background: cvar[g.color] }}>{g.n}</span>
                  {g.name.replace(" Stories", "")}
                </a>
              )}
            </div>
          </div>

          <a className="nav__link" href="#endorse" onClick={(e) => { e.preventDefault(); go("endorse"); }}>Endorsements</a>
          <a className="btn btn--red btn--sm nav__cta" href="#stories" onClick={(e) => { e.preventDefault(); go("stories"); }} style={{ backgroundColor: "rgb(241, 177, 42)", color: "rgb(33, 26, 20)" }}>Get materials</a>
        </nav>

        <button className={"nav__burger" + (drawer ? " open" : "")} aria-label="Menu" onClick={() => setDrawer(!drawer)}>
          <span></span><span></span><span></span>
        </button>
      </div>

      <div className={"drawer" + (drawer ? " open" : "")}>
        <div className="drawer__scrim" onClick={() => setDrawer(false)}></div>
        <div className="drawer__panel">
          <button className="modal__close" style={{ position: "static", float: "right", marginBottom: 8 }} onClick={() => setDrawer(false)}>×</button>
          <div style={{ clear: "both" }}></div>
          {links.map((l) =>
            <a key={l.id} className="drawer__link" href={"#" + l.id} onClick={(e) => { e.preventDefault(); go(l.id); }}>{l.label}</a>
          )}
          <a className="drawer__link" href="#endorse" onClick={(e) => { e.preventDefault(); go("endorse"); }}>Endorsements</a>
          <h4>Decodable Stories</h4>
          {groups.map((g) =>
            <a key={g.n} className="drawer__sub" href="#stories" onClick={(e) => { e.preventDefault(); go("stories"); }}>
              <span className="gnum" style={{ background: cvar[g.color] }}>{g.n}</span>
              {g.name.replace(" Stories", "")}
            </a>
          )}
          <a className="btn btn--red" style={{ marginTop: 22, width: "100%", justifyContent: "center" }}
            href="#stories" onClick={(e) => { e.preventDefault(); go("stories"); }}>Get materials</a>
        </div>
      </div>
    </header>
  );
}
