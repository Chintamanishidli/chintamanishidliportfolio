import { useEffect } from "react";

function NavLink({ section, children, className = "nav-link", ...props }) {
  const href = section === "top" ? "/" : `/${section}`;

  function handleClick(event) {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    event.preventDefault();
    window.history.pushState({}, "", href);
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <a className={className} href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}

export default function SiteNav() {
  useEffect(() => {
    function scrollToCurrentPath() {
      const section = window.location.pathname.slice(1) || "top";
      document.getElementById(section)?.scrollIntoView();
    }

    scrollToCurrentPath();
    window.addEventListener("popstate", scrollToCurrentPath);

    return () => window.removeEventListener("popstate", scrollToCurrentPath);
  }, []);

  return (
    <nav>
      <div className="wrap nav-inner">
        <NavLink section="top" className="nav-id mono" aria-label="Back to the top of the portfolio">
          chintamani shidli
        </NavLink>
        <div className="nav-links">
          <NavLink section="experience">experience</NavLink>
          <NavLink section="projects">projects</NavLink>
          <NavLink section="skills">skills</NavLink>
          <NavLink section="contact">contact</NavLink>
        </div>
      </div>
    </nav>
  );
}
