import SectionHeading from "./SectionHeading";

export default function Experience({ jobs }) {
  return (
    <section id="experience" className="section-pad wrap">
      <SectionHeading title="Experience" />
      {jobs.map((job) => (
        <article className="migration" key={job.file}>
          <div className="migration-head">
            <div className="migration-role">{job.role}</div>
            <div className="migration-period mono">{job.period}</div>
          </div>
          <div className="migration-org">{job.org}</div>
          <ul>
            {job.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
          </ul>
        </article>
      ))}
    </section>
  );
}
