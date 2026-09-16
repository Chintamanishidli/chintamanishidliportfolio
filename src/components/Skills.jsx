import SectionHeading from "./SectionHeading";

export default function Skills({ groups }) {
  return (
    <section id="skills" className="section-pad wrap">
      <SectionHeading title="Skills"/>
      <div className="skill-table">
        {groups.map((group) => (
          <div className="skill-row" key={group.column}>
            <div className="skill-col-name">
              <span className="mono skill-column">{group.column}</span>
            </div>
            <div className="skill-items">
              {group.items.map((item) => <span className="tag" key={item}>{item}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
