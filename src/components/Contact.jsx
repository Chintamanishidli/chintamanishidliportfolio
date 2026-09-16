import { Mail, Phone } from "lucide-react";
import { Github, Linkedin } from "./BrandIcons";
import SectionHeading from "./SectionHeading";

const contactLinks = [
  { href: "mailto:chintamanishidli@gmail.com", label: "chintamanishidli@gmail.com", icon: Mail },
  { href: "tel:+918431214354", label: "+91 8431214354", icon: Phone },
  { href: "https://linkedin.com/in/chintamani-shidli-729ab2219", label: "LinkedIn", icon: Linkedin, external: true },
  { href: "https://github.com/Chintamanishidli", label: "GitHub", icon: Github, external: true },
];

export default function Contact() {
  return (
    <section id="contact" className="section-pad wrap">
      <SectionHeading title="Contact" />
      <p className="contact-intro">Open to full-stack roles and freelance projects involving Laravel, React, or MySQL-backed systems.</p>
      <div className="contact-links">
        {contactLinks.map(({ href, label, icon: Icon, external }) => (
          <a className="contact-link" href={href} key={label} {...(external ? { target: "_blank", rel: "noreferrer" } : {})}>
            <Icon size={16} /> {label}
          </a>
        ))}
      </div>
    </section>
  );
}
