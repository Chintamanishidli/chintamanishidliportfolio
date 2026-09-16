import { ArrowUpRight, MapPin } from "lucide-react";

const fieldRows = [
  { key: "role", value: "Full Stack Developer" },
  { key: "location", value: "Pune, India", icon: true },
  { key: "experience", value: "1.5 years, production web apps" },
  { key: "stack", value: "Laravel · CodeIgniter · React.js · MySQL" },
  {
    key: "summary",
    value: "Builds and independently maintains production-grade web apps end to end — REST APIs, relational schema design, and the React front ends on top of them.",
    summary: true,
  },
];

export default function Hero() {
  return (
    <section id="top" className="hero wrap">
      <h1 className="hero-name">
        <a className="hero-name-link" href="#top" aria-label="Back to the top of the portfolio">
          Chintamani Shidli
        </a>
      </h1>
      <div className="fields">
        {fieldRows.map((field, index) => (
          <div className="field-row" key={field.key} style={{ transitionDelay: `${index * 0.07 + 0.02}s` }}>
            <div className="field-key mono">{field.key}</div>
            <div className={`field-val${field.summary ? " field-summary" : ""}`}>
              {field.icon && <MapPin size={15} color="#5B6B78" />}
              {field.value}
            </div>
          </div>
        ))}
      </div>
      <div className="cta-row">
        <a className="btn btn-primary" href="#projects">
          View work <ArrowUpRight size={15} />
        </a>
        <a className="btn btn-ghost" href="#contact">
          Get in touch
        </a>
      </div>
    </section>
  );
}
