import { Link } from "react-router-dom";
import { ArrowLeft } from "@phosphor-icons/react";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/data/portfolio";

const Projects = () => (
  <main className="page-container inner-page">
    <Link className="back-link" to="/">
      <ArrowLeft size={16} /> Back home
    </Link>
    <SectionHeading
      eyebrow="Projects / 01"
      title="Architecture in practice."
      description="The decisions, systems, and tradeoffs behind selected work."
    />
    <div className="project-grid project-grid--page">
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  </main>
);

export default Projects;
