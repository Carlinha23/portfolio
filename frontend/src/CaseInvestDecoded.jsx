import React from "react";
import "./CaseStudy.css";

import beforeHero from "./images/invest/before-hero.PNG";
import afterHero  from "./images/invest/after-hero.jpg";
import beforeCards from "./images/invest/before-cards.jpg";
import afterCards  from "./images/invest/after-cards.PNG";

function BeforeAfter({ before, after, labelBefore = "Before", labelAfter = "After" }) {
  return (
    <div className="ba-grid">
      <figure className="ba-frame">
        <img src={before} alt={labelBefore} />
        <figcaption>{labelBefore}</figcaption>
      </figure>
      <figure className="ba-frame">
        <img src={after} alt={labelAfter} />
        <figcaption>{labelAfter}</figcaption>
      </figure>
    </div>
  );
}

export default function CaseInvestDecoded() {
  return (
    <main className="case">
      <header className="case-hero">
        <h1>InvestDecoded — UX/UI Front-End Improvements</h1>
        <p className="case-sub">
          Mobile-first layout, visual hierarchy, Portuguese copyfit, and CTA clarity.
        </p>
        <a
          className="case-cta"
          href="https://investdecoded.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          View live site →
        </a>
      </header>

      <div className="case-body">
        <section className="case-section">
          <h2> Course Page </h2>
          <BeforeAfter before={beforeHero} after={afterHero} />
        </section>

        <section className="case-section">
          <h2>Course Cards</h2>
          <BeforeAfter before={beforeCards} after={afterCards} />
        </section>

      </div>
    </main>
  );
}

