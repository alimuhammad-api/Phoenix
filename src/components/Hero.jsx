/* Hero + Mission band */
import { img } from "../data.js";

export function Tile({ ch, color, pop, style }) {
  return (
    <span className={"tile t-" + (color || "gold") + (pop ? " pop" : "")} style={style} tabIndex={pop ? 0 : undefined}>{ch}</span>
  );
}

export function Hero({ onNav }) {
  const word = [["s", "red"], ["o", "gold"], ["u", "green"], ["n", "blue"], ["d", "red"]];
  return (
    <section className="hero" id="top">
      <div className="wrap hero__grid">
        <div className="hero__copy">
          <span className="eyebrow">Free phonics materials · open to all</span>
          <h1 style={{ marginTop: 18 }}>
            Helping every kid <span className="mark"><span>sound&nbsp;it&nbsp;out</span></span> — and read with confidence.
          </h1>
          <p className="hero__sub">
            120 sequenced lessons and 130+ decodable stories for teachers, tutors, and families. Built on the science of reading. Always free.
          </p>
          <div className="hero__cta">
            <a className="btn btn--red btn--lg" href="#stories" onClick={(e) => { e.preventDefault(); onNav("stories"); }} style={{ backgroundColor: "rgb(63, 75, 224)" }}>
              Browse decodable stories <span className="arrow">→</span>
            </a>
            <a className="btn btn--lg" href="#lessons" onClick={(e) => { e.preventDefault(); onNav("lessons"); }}>
              See the 120 lessons
            </a>
          </div>
          <div className="hero__trust">
            <span className="pill-free">✓ No sign-up</span>
            <span>Downloadable PDFs · <b>print &amp; go</b> · used in 1,200+ classrooms</span>
          </div>
        </div>

        <div className="hero__art">
          <div className="hero__photo">
            <img src={img.hero} alt="Children reading together in a classroom" loading="eager" />
          </div>
          <div className="hero__badge b1"><span className="dot" style={{ background: "var(--green)" }}></span> Science of reading</div>
          <div className="hero__badge b2"><span className="dot" style={{ background: "var(--red)" }}></span> 100% free PDFs</div>
          <div className="hero__tiles tiles">
            {word.map(([c, col], i) => <Tile key={i} ch={c} color={col} pop style={{ transform: `rotate(${(i - 2) * 2}deg)` }} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Mission() {
  return (
    <section className="mission" id="who" style={{ backgroundColor: "rgb(20, 24, 33)" }}>
      <div className="wrap mission__inner">
        <div>
          <span className="eyebrow" style={{ color: "rgb(67, 211, 219)" }}>Our mission</span>
          <h2 style={{ marginTop: 16 }}>
            Literacy is a <span className="u" style={{ color: "rgb(58, 210, 219)" }}>civil right.</span>
          </h2>
          <p style={{ marginTop: 18 }}>
            The research supporting phonics is too strong to ignore — yet quality programs for struggling readers are long and expensive. We make them open, so every teacher, tutor, and family can reach the kids who need more practice.
          </p>
        </div>
        <div className="stats">
          <div className="stat"><div className="n" style={{ color: "rgb(191, 167, 224)" }}>120</div><div className="l">Sequenced lessons, free to download</div></div>
          <div className="stat"><div className="n green">130+</div><div className="l">Decodable stories across 10 groups</div></div>
          <div className="stat"><div className="n red">$0</div><div className="l">Cost — now and forever</div></div>
        </div>
      </div>
    </section>
  );
}
