import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Award, Calendar, ExternalLink } from "lucide-react";

interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  skills: string[];
}

export function CertificationsSection() {
  const certifications: Certification[] = [
    {
      name: "AWS Certified Solutions Architect - Professional",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-ASP-12345",
      credentialUrl: "#",
      skills: [
        "AWS",
        "Cloud Architecture",
        "Security",
        "Networking",
        "Cost Optimization",
      ],
    },
    {
      name: "Certified Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation",
      date: "2022",
      credentialId: "CKA-1234-5678",
      credentialUrl: "#",
      skills: ["Kubernetes", "Container Orchestration", "Cluster Management"],
    },
    {
      name: "HashiCorp Certified: Terraform Associate",
      issuer: "HashiCorp",
      date: "2022",
      credentialId: "HCTA-1234-5678",
      credentialUrl: "#",
      skills: ["Terraform", "Infrastructure as Code", "Cloud Provisioning"],
    },
    {
      name: "Microsoft Certified: Azure DevOps Engineer Expert",
      issuer: "Microsoft",
      date: "2021",
      credentialId: "MS-ADOE-12345",
      credentialUrl: "#",
      skills: ["Azure DevOps", "CI/CD", "Azure", "Infrastructure as Code"],
    },
  ];

  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight text-center mb-12">
          Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <Card
              key={cert.name}
              className="overflow-hidden border-l-4 border-l-primary"
            >
              <CardHeader className="pb-2">
                <div className="flex justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-primary" />
                      {cert.name}
                    </CardTitle>
                    <CardDescription className="mt-1">
                      {cert.issuer}
                    </CardDescription>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {cert.date}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-3">
                  {cert.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
                {cert.credentialId && (
                  <div className="text-sm text-muted-foreground flex justify-between items-center">
                    <span>Credential ID: {cert.credentialId}</span>
                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-primary hover:underline"
                      >
                        Verify <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
