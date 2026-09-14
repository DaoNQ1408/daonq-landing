import { CheckCircle } from "@phosphor-icons/react";
import { useState } from "react";
import type { Experience } from "@/data/portfolio";

interface ExperienceItemProps {
  experience: Experience;
}

export default function ExperienceItem({
  experience,
}: Readonly<ExperienceItemProps>) {
  const [hasImage, setHasImage] = useState(Boolean(experience.imageUrl));

  return (
    <article className="experience-item">
      <div className="experience-item__meta">
        {experience.imageUrl && hasImage ? (
          <img
            className="experience-item__logo"
            src={experience.imageUrl}
            alt={`${experience.company} logo`}
            loading="lazy"
            onError={() => setHasImage(false)}
          />
        ) : (
          <div
            className="experience-item__logo experience-item__logo--fallback"
            aria-hidden="true"
          >
            {experience.company.slice(0, 1)}
          </div>
        )}
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
