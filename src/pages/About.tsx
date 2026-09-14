import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "@phosphor-icons/react";
import ExperienceItem from "@/components/ExperienceItem";
import SectionHeading from "@/components/SectionHeading";
import { experiences, profile, skills } from "@/data/portfolio";

const About = () => (
  <main className="page-container inner-page">
    <Link className="back-link" to="/">
      <ArrowLeft size={16} /> Back home
    </Link>
    <SectionHeading
      eyebrow="About / 01"
      title="The human behind the systems."
      description={profile.summary}
    />
    <div className="about-layout">
      <div className="about-statement">
        <p>
          I’m a software engineering graduate with a strong focus on backend
          architecture. I enjoy the quiet work of making systems legible:
          choosing the right boundaries, naming the domain clearly, and making
          the next change easier than the last.
        </p>
        <a className="text-link" href={`mailto:${profile.email}`}>
          Get in touch <ArrowUpRight size={16} />
        </a>
      </div>
      <div className="skills-grid skills-grid--about">
        {skills.map((skill) => (
          <div key={skill.label}>
            <span>{skill.label}</span>
            <strong>{skill.value}</strong>
          </div>
        ))}
      </div>
    </div>
    <section className="section section--compact">
      <SectionHeading
        eyebrow="Experience / 02"
        title="Where I’ve contributed."
      />
      <div className="experience-list">
        {experiences.map((experience) => (
          <ExperienceItem key={experience.company} experience={experience} />
        ))}
      </div>
    </section>
  </main>
);

export default About;
