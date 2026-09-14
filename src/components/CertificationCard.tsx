import { ArrowUpRight, Certificate } from "@phosphor-icons/react";
import type { Certification } from "@/data/portfolio";
import { Card, CardContent } from "@/components/ui/card";

interface CertificationCardProps {
  certification: Certification;
}

export default function CertificationCard({
  certification,
}: Readonly<CertificationCardProps>) {
  return (
    <Card className="certification-card">
      <CardContent className="certification-card__content">
        <Certificate size={24} weight="duotone" />
        <div>
          <span className="certification-card__period">
            {certification.period}
          </span>
          <h3>{certification.title}</h3>
          <p>{certification.issuer}</p>
          <p>{certification.description}</p>
        </div>
        <a
          href={certification.href}
          target="_blank"
          rel="noreferrer"
          aria-label={`View ${certification.title}`}
          className="icon-link"
        >
          <ArrowUpRight size={20} />
        </a>
      </CardContent>
    </Card>
  );
}
