import { CheckCircle } from "@phosphor-icons/react";
import type { Experience } from "@/data/portfolio";

interface ExperienceItemProps {
  experience: Experience;
}

export default function ExperienceItem({
  experience,
}: Readonly<ExperienceItemProps>) {
  return (
    <article className="experience-item">
      <div className="experience-item__meta">
        <span>{experience.period}</span>
        <span>{experience.location}</span>
      </div>
      <div className="experience-item__content">
        <h3>{experience.role}</h3>
        <p className="experience-item__company">{experience.company}</p>
        <p>{experience.summary}</p>
        <ul>
          {experience.highlights.map((highlight) => (
            <li key={highlight}>
              <CheckCircle size={17} weight="fill" />
              {highlight}
            </li>
          ))}
        </ul>
        <div className="tag-list">
          {experience.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </article>
  );
}
