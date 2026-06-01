/* How it works — 3 steps with real photos */
import { img } from "../data.js";

export function HowItWorks({ onNav }) {
  const steps = [
    { n: 1, color: "var(--red)", tag: "Locking in patterns", title: "Students lock in patterns, step by step",
      body: "Oral sound play builds phonological awareness; brainstorming grows vocabulary. Kids get multiple chances to read and write each new pattern — no guessing involved.",
      media: img.patterns, link: "lessons", cta: "See the sequence" },
    { n: 2, color: "var(--green)", tag: "Writing from dictation", title: "Writing from dictation makes it stick",
      body: "This is where the rubber hits the road. Adults read sentences aloud and students write them on whiteboards. Writing reinforces reading — kids “own” the patterns they can spell with confidence.",
      media: img.dictation, link: "lessons", cta: "Browse the lessons" },
    { n: 3, color: "var(--blue)", tag: "Reading aloud", title: "Reading aloud builds real fluency",
      body: "Students do “triple reads” of longer decodable stories while adults cheer them on. Without curve-ball patterns they can't yet decode, reading starts to feel as easy as talking.",
      media: img.reading, link: "stories", cta: "Open the story library" },
  ];

  return (
    <section className="section" id="lessons">
      <div className="wrap">
        <div className="section__head">
          <span className="eyebrow">How it works</span>
          <h2>Practice that's <span className="mark green"><span>effective</span></span>, fun, and hands-on.</h2>
          <p>Three moves repeat across every lesson — a simple, research-backed rhythm any adult can run.</p>
        </div>

        <div className="steps">
          {steps.map((s) => (
            <article className="step" key={s.n}>
              <div className="step__media"><img src={s.media} alt={s.tag} loading="lazy" /></div>
              <div className="step__body">
                <div className="step__tag">
                  <span className="step__n" style={{ background: s.color }}><span style={{ color: "#ffffff" }}>{s.n}</span></span>
                  <span>{s.tag}</span>
                </div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
                <a className="btn btn--sm" href={"#" + s.link} onClick={(e) => { e.preventDefault(); onNav(s.link); }}>
                  {s.cta} <span className="arrow">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
