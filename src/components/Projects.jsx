import { ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function Projects({ projects }) {
  return (
    <section id="projects" className="section-pad wrap">
      <SectionHeading title="Projects" />
      {projects.map((project) => (
        <article className="project" key={project.name}>
          <div className="project-top">
            <div className="project-name">{project.name}</div>
            <a className="project-url mono" href={`https://${project.url}`} target="_blank" rel="noreferrer">
              {project.url} <ArrowUpRight size={12} />
            </a>
          </div>

          <p className="project-desc">{project.description}</p>

          {project.details?.length > 0 && (
            <ul className="project-details">
              {project.details.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}

          <div className="stack-row">
            {project.stack.map((technology) => <span className="tag mono" key={technology}>{technology}</span>)}
          </div>
        </article>
      ))}
    </section>
  );
}
