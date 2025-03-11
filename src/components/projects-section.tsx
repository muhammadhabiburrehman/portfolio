import { ProjectCard } from "@/components/project-card";

export function ProjectsSection() {
  const projects = [
    {
      title: "Cloud Infrastructure Automation",
      description:
        "Designed and implemented a fully automated cloud infrastructure using Terraform and AWS, reducing deployment time by 80%.",
      technologies: ["Terraform", "AWS", "CloudFormation", "GitHub Actions"],
      metrics: [
        { label: "Deployment Time", value: "-80%" },
        { label: "Cost Reduction", value: "35%" },
        { label: "Uptime", value: "99.9%" },
        { label: "Recovery Time", value: "<5min" },
      ],
      imageUrl:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=70",
      diagramUrl:
        "https://images.unsplash.com/photo-1542903660-eedba2cda473?w=600&q=70",
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Kubernetes Cluster Optimization",
      description:
        "Optimized a large-scale Kubernetes cluster, implementing auto-scaling and improving resource utilization by 40%.",
      technologies: ["Kubernetes", "Helm", "Prometheus", "Grafana"],
      metrics: [
        { label: "Resource Usage", value: "-40%" },
        { label: "Response Time", value: "-65%" },
        { label: "Availability", value: "99.99%" },
        { label: "Cost Savings", value: "$45K" },
      ],
      imageUrl:
        "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&q=70",
      diagramUrl:
        "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&q=70",
      githubUrl: "#",
    },
    {
      title: "CI/CD Pipeline Modernization",
      description:
        "Redesigned legacy CI/CD pipelines using GitHub Actions and Docker, reducing build times by 70% and enabling faster releases.",
      technologies: ["GitHub Actions", "Docker", "Node.js", "Python"],
      metrics: [
        { label: "Build Time", value: "-70%" },
        { label: "Deploy Frequency", value: "+300%" },
        { label: "Failed Deploys", value: "-85%" },
        { label: "Dev Productivity", value: "+40%" },
      ],
      imageUrl:
        "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=600&q=70",
      diagramUrl:
        "https://images.unsplash.com/photo-1633412802994-5c058f151b66?w=600&q=70",
      liveUrl: "#",
    },
    {
      title: "Monitoring & Alerting System",
      description:
        "Implemented a comprehensive monitoring solution using Prometheus, Grafana, and ELK stack, providing real-time visibility into system performance.",
      technologies: ["Prometheus", "Grafana", "ELK Stack", "Alertmanager"],
      metrics: [
        { label: "Incident Detection", value: "-85%" },
        { label: "MTTR", value: "-60%" },
        { label: "False Positives", value: "-90%" },
        { label: "Visibility", value: "+100%" },
      ],
      imageUrl:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=70",
      diagramUrl:
        "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=600&q=70",
      githubUrl: "#",
      liveUrl: "#",
    },
  ];

  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight text-center mb-12">
          Projects Showcase
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
