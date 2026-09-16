function NavLink({ href, children }) {
  return (
    <a className="nav-link" href={href}>
      {children}
    </a>
  );
}

export default function SiteNav() {
  return (
    <nav>
      <div className="wrap nav-inner">
        <a className="nav-id mono" href="#top" aria-label="Back to the top of the portfolio">
          chintamani shidli
        </a>
        <div className="nav-links">
          <NavLink href="#experience">experience</NavLink>
          <NavLink href="#projects">projects</NavLink>
          <NavLink href="#skills">skills</NavLink>
          <NavLink href="#contact">contact</NavLink>
        </div>
      </div>
    </nav>
  );
}
