import { useEffect, useState } from "react";
import { experience, projects, skillGroups } from "../data/portfolioData";
import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";
import Footer from "./Footer";
import Hero from "./Hero";
import Projects from "./Projects";
import SiteNav from "./SiteNav";
import Skills from "./Skills";
import "../styles/portfolio.css";

export default function Portfolio() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 60);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`portfolio-root${loaded ? " loaded" : ""}`}>
      <div className="grid-bg" aria-hidden="true" />
      <SiteNav />
      <main>
        <Hero />
        <Experience jobs={experience} />
        <Projects projects={projects} />
        <Skills groups={skillGroups} />
        <Education />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
