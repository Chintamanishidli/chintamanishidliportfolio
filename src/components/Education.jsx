import SectionHeading from "./SectionHeading";

const education = [
  ["B.E. in Computer Science Engineering", "Sharnabasav University, 2022"],
  ["Pre-University Course (PCMB)", "Basava PU College, 2017"],
];

export default function Education() {
  return (
    <section id="education" className="section-pad wrap">
      <SectionHeading title="Education" />
      {education.map(([degree, school]) => (
        <div className="edu-row" key={degree}>
          <div>{degree}</div>
          <div className="edu-school mono">{school}</div>
        </div>
      ))}
    </section>
  );
}
