/* App — compose + scroll spy + smooth nav */
import { useState, useEffect } from "react";
import Nav from "./components/Nav.jsx";
import { Hero, Mission } from "./components/Hero.jsx";
import { HowItWorks } from "./components/HowItWorks.jsx";
import { Stories } from "./components/Stories.jsx";
import { Endorsements, FinalCTA, Footer } from "./components/Footer.jsx";

export default function App() {
  const [active, setActive] = useState("top");

  const onNav = (id) => {
    const map = { why: "lessons", who: "who" };
    const target = map[id] || id;
    const el = document.getElementById(target);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - (target === "top" ? 0 : 60);
      window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
    }
  };

  useEffect(() => {
    const ids = ["top", "who", "lessons", "stories", "endorse"];
    const onScroll = () => {
      const y = window.scrollY + 120;
      let cur = "top";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) cur = id;
      }
      setActive(cur);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Nav active={active} onNav={onNav} />
      <main>
        <Hero onNav={onNav} />
        <Mission />
        <HowItWorks onNav={onNav} />
        <Stories />
        <Endorsements />
        <FinalCTA onNav={onNav} />
      </main>
      <Footer onNav={onNav} />
    </>
  );
}
