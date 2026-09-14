import { ArrowUpRight, GithubLogo } from "@phosphor-icons/react";
import type { Project } from "@/data/portfolio";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: Readonly<ProjectCardProps>) {
  return (
    <Card className={`project-card project-card--${project.accent}`}>
      <CardHeader className="project-card__topline">
        <span className="project-card__index">
          0
          {project.title === "Culture Quest Lite"
            ? 1
            : project.title === "Coffee Management SaaS"
              ? 2
              : 3}
        </span>
        <span>{project.period}</span>
      </CardHeader>
      <div className="project-card__visual" aria-hidden="true">
        <span className="project-card__visual-grid" />
        <span className="project-card__visual-node project-card__visual-node--one" />
        <span className="project-card__visual-node project-card__visual-node--two" />
        <span className="project-card__visual-line" />
        <span className="project-card__visual-label">{project.category}</span>
      </div>
      <CardContent className="project-card__body">
        <div className="project-card__title-row">
          <div>
            <span className="project-card__category">{project.category}</span>
            <h3>{project.title}</h3>
          </div>
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${project.title} repository`}
            className="icon-link"
          >
            <GithubLogo size={20} weight="bold" />
          </a>
        </div>
        <p>{project.description}</p>
        <div className="tag-list">
          {project.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <a
          className="text-link"
          href={project.href}
          target="_blank"
          rel="noreferrer"
        >
          View project <ArrowUpRight size={16} />
        </a>
      </CardContent>
    </Card>
  );
}
