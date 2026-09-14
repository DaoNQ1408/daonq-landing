import {
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
  MapPin,
  Phone,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { profile } from "@/data/portfolio";

const Contact = () => (
  <main className="page-container inner-page contact-page">
    <Link className="back-link" to="/">
      ← Back home
    </Link>
    <span className="eyebrow">Contact / 01</span>
    <h1>
      Let’s make something
      <br />
      <em>useful.</em>
    </h1>
    <p>
      Have a product, system, or tricky problem in mind? I’d love to hear the
      context.
    </p>
    <div className="contact-links">
      <a href={`mailto:${profile.email}`}>
        <EnvelopeSimple size={21} />
        <span>
          Email me<strong>{profile.email}</strong>
        </span>
      </a>
      <a href={`tel:${profile.phone}`}>
        <Phone size={21} />
        <span>
          Call me<strong>{profile.phone}</strong>
        </span>
      </a>
      <span>
        <MapPin size={21} />
        <span>
          Find me<strong>{profile.location}</strong>
        </span>
      </span>
    </div>
    <div className="contact-socials">
      <a href={profile.github} target="_blank" rel="noreferrer">
        <GithubLogo size={22} /> GitHub
      </a>
      <a href={profile.linkedin} target="_blank" rel="noreferrer">
        <LinkedinLogo size={22} /> LinkedIn
      </a>
    </div>
  </main>
);

export default Contact;
