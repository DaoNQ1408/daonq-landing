import {
  ArrowDown,
  ArrowUpRight,
  BracketsCurly,
  Database,
  GithubLogo,
  LinkedinLogo,
  MapPin,
  TerminalWindow,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CertificationCard from "@/components/CertificationCard";
import ExperienceItem from "@/components/ExperienceItem";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import {
  certifications,
  experiences,
  profile,
  projects,
  skills,
} from "@/data/portfolio";

const Home = () => {
  return (
    <>
      <section className="hero page-container">
        <div className="hero__copy">
          <span className="eyebrow">{profile.eyebrow}</span>
          <h1>
            Building systems
            <br />
            <em>that move.</em>
          </h1>
          <p>{profile.summary}</p>
          <div className="hero__actions">
            <Button
              className="button button--primary"
              render={<Link to="/projects" />}
            >
              Explore my work <ArrowUpRight size={18} />
            </Button>
            <Button
              variant="link"
              className="button button--quiet"
              render={<a href={`mailto:${profile.email}`} />}
            >
              Start a conversation
            </Button>
          </div>
          <div className="hero__location">
            <MapPin size={17} /> Based in {profile.location}
          </div>
        </div>
        <div
          className="hero__diagram"
          aria-label="Abstract system architecture diagram"
        >
          <div className="diagram__label">SYSTEMS / 2026</div>
          <div className="diagram__core">
            <TerminalWindow size={34} />
            <span>CORE</span>
          </div>
          <div className="diagram__node diagram__node--one">
            <BracketsCurly size={20} />
            <span>API</span>
          </div>
          <div className="diagram__node diagram__node--two">
            <Database size={20} />
            <span>DATA</span>
          </div>
          <div className="diagram__node diagram__node--three">
            <span>AUTH</span>
          </div>
          <div className="diagram__line diagram__line--one" />
          <div className="diagram__line diagram__line--two" />
          <div className="diagram__line diagram__line--three" />
          <div className="diagram__status">
            <span /> All systems operational
          </div>
        </div>
        <a className="hero__scroll" href="#projects">
          <ArrowDown size={17} /> Scroll to explore
        </a>
      </section>
      <section className="section page-container" id="projects">
        <SectionHeading
          eyebrow="Selected work / 01"
          title="Projects with a point of view."
          description="A selection of products and systems I have helped shape, from the domain model up."
        />
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
        <div className="section-link">
          <Link className="text-link" to="/projects">
            View all project details <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
      <section className="section section--rule page-container" id="about">
        <SectionHeading
          eyebrow="Experience / 02"
          title="Curious by default."
          description="I like understanding the whole system: the people, constraints, data, and decisions behind the interface."
        />
        <div className="experience-list">
          {experiences.map((experience) => (
            <ExperienceItem key={experience.company} experience={experience} />
          ))}
        </div>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.label}>
              <span>{skill.label}</span>
              <strong>{skill.value}</strong>
            </div>
          ))}
        </div>
      </section>
      <section className="section section--rule page-container">
        <SectionHeading eyebrow="Credentials / 03" title="Always learning." />
        <div className="certification-grid">
          {certifications.map((certification) => (
            <CertificationCard
              key={certification.title}
              certification={certification}
            />
          ))}
        </div>
      </section>
      <footer className="site-footer page-container">
        <span>© 2026 DAO.NQ</span>
        <span>Designed for clarity. Built with intent.</span>
        <div>
          <a href={profile.github} target="_blank" rel="noreferrer">
            <GithubLogo size={19} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <LinkedinLogo size={19} />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Home;
