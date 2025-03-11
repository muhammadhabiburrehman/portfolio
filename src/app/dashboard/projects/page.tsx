"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowLeftIcon,
  ImageIcon,
  PlusIcon,
  SaveIcon,
  TrashIcon,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface ProjectMetric {
  label: string;
  value: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  metrics: ProjectMetric[];
  imageUrl: string;
  diagramUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export default function ProjectsPage() {
  const initialProjects: Project[] = [
    {
      id: "project1",
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
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
      diagramUrl:
        "https://images.unsplash.com/photo-1542903660-eedba2cda473?w=800&q=80",
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      id: "project2",
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
        "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=80",
      diagramUrl:
        "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80",
      githubUrl: "#",
    },
  ];

  const [projects, setProjects] = useState<Project[]>(initialProjects);

  const handleAddProject = () => {
    const newProject: Project = {
      id: `project${projects.length + 1}`,
      title: "New Project",
      description: "Project description goes here",
      technologies: ["Technology 1", "Technology 2"],
      metrics: [
        { label: "Metric 1", value: "Value 1" },
        { label: "Metric 2", value: "Value 2" },
      ],
      imageUrl:
        "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&q=80",
    };
    setProjects([...projects, newProject]);
  };

  const handleRemoveProject = (projectId: string) => {
    setProjects(projects.filter((project) => project.id !== projectId));
  };

  const handleProjectChange = (
    projectId: string,
    field: string,
    value: any,
  ) => {
    setProjects(
      projects.map((project) => {
        if (project.id === projectId) {
          return { ...project, [field]: value };
        }
        return project;
      }),
    );
  };

  const handleTechnologiesChange = (projectId: string, value: string) => {
    const technologies = value.split(",").map((tech) => tech.trim());
    handleProjectChange(projectId, "technologies", technologies);
  };

  const handleMetricChange = (
    projectId: string,
    index: number,
    field: string,
    value: string,
  ) => {
    setProjects(
      projects.map((project) => {
        if (project.id === projectId) {
          const updatedMetrics = [...project.metrics];
          updatedMetrics[index] = { ...updatedMetrics[index], [field]: value };
          return { ...project, metrics: updatedMetrics };
        }
        return project;
      }),
    );
  };

  const handleAddMetric = (projectId: string) => {
    setProjects(
      projects.map((project) => {
        if (project.id === projectId) {
          return {
            ...project,
            metrics: [
              ...project.metrics,
              { label: "New Metric", value: "Value" },
            ],
          };
        }
        return project;
      }),
    );
  };

  const handleRemoveMetric = (projectId: string, index: number) => {
    setProjects(
      projects.map((project) => {
        if (project.id === projectId) {
          return {
            ...project,
            metrics: project.metrics.filter((_, i) => i !== index),
          };
        }
        return project;
      }),
    );
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <header className="border-b bg-background sticky top-0 z-30">
        <div className="flex h-16 items-center justify-between px-6">
          <Link href="/dashboard" className="flex items-center gap-2">
            <ArrowLeftIcon className="h-4 w-4" />
            <span>Back to Dashboard</span>
          </Link>
          <div className="text-xl font-bold">Projects Management</div>
          <Button className="gap-2">
            <SaveIcon className="h-4 w-4" /> Save Changes
          </Button>
        </div>
      </header>

      <main className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Your Projects</h1>
          <Button onClick={handleAddProject}>
            <PlusIcon className="h-4 w-4 mr-2" /> Add Project
          </Button>
        </div>

        <div className="space-y-6">
          <Accordion type="multiple" defaultValue={[projects[0]?.id]}>
            {projects.map((project) => (
              <AccordionItem key={project.id} value={project.id}>
                <AccordionTrigger className="hover:bg-muted/50 px-4 rounded-t-md">
                  <div className="flex justify-between items-center w-full pr-4">
                    <span>{project.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <Card className="border-t-0 rounded-t-none">
                    <CardContent className="pt-6">
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-4">
                            <div>
                              <Label htmlFor={`project-${project.id}-title`}>
                                Project Title
                              </Label>
                              <Input
                                id={`project-${project.id}-title`}
                                value={project.title}
                                onChange={(e) =>
                                  handleProjectChange(
                                    project.id,
                                    "title",
                                    e.target.value,
                                  )
                                }
                              />
                            </div>

                            <div>
                              <Label
                                htmlFor={`project-${project.id}-description`}
                              >
                                Description
                              </Label>
                              <Textarea
                                id={`project-${project.id}-description`}
                                value={project.description}
                                onChange={(e) =>
                                  handleProjectChange(
                                    project.id,
                                    "description",
                                    e.target.value,
                                  )
                                }
                                rows={4}
                              />
                            </div>

                            <div>
                              <Label
                                htmlFor={`project-${project.id}-technologies`}
                              >
                                Technologies (comma separated)
                              </Label>
                              <Input
                                id={`project-${project.id}-technologies`}
                                value={project.technologies.join(", ")}
                                onChange={(e) =>
                                  handleTechnologiesChange(
                                    project.id,
                                    e.target.value,
                                  )
                                }
                              />
                            </div>
                          </div>

                          <div className="space-y-4">
                            <div>
                              <Label htmlFor={`project-${project.id}-image`}>
                                Project Image URL
                              </Label>
                              <div className="flex gap-2">
                                <Input
                                  id={`project-${project.id}-image`}
                                  value={project.imageUrl}
                                  onChange={(e) =>
                                    handleProjectChange(
                                      project.id,
                                      "imageUrl",
                                      e.target.value,
                                    )
                                  }
                                />
                                <Button variant="outline" size="icon">
                                  <ImageIcon className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>

                            <div>
                              <Label htmlFor={`project-${project.id}-diagram`}>
                                Diagram URL (optional)
                              </Label>
                              <Input
                                id={`project-${project.id}-diagram`}
                                value={project.diagramUrl || ""}
                                onChange={(e) =>
                                  handleProjectChange(
                                    project.id,
                                    "diagramUrl",
                                    e.target.value,
                                  )
                                }
                              />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <Label htmlFor={`project-${project.id}-github`}>
                                  GitHub URL
                                </Label>
                                <Input
                                  id={`project-${project.id}-github`}
                                  value={project.githubUrl || ""}
                                  onChange={(e) =>
                                    handleProjectChange(
                                      project.id,
                                      "githubUrl",
                                      e.target.value,
                                    )
                                  }
                                />
                              </div>
                              <div>
                                <Label htmlFor={`project-${project.id}-live`}>
                                  Live Demo URL
                                </Label>
                                <Input
                                  id={`project-${project.id}-live`}
                                  value={project.liveUrl || ""}
                                  onChange={(e) =>
                                    handleProjectChange(
                                      project.id,
                                      "liveUrl",
                                      e.target.value,
                                    )
                                  }
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <Label>Project Metrics</Label>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleAddMetric(project.id)}
                            >
                              <PlusIcon className="h-3 w-3 mr-1" /> Add Metric
                            </Button>
                          </div>

                          <div className="space-y-3">
                            {project.metrics.map((metric, index) => (
                              <div
                                key={index}
                                className="grid grid-cols-12 gap-4 items-center"
                              >
                                <div className="col-span-5">
                                  <Input
                                    placeholder="Metric Label"
                                    value={metric.label}
                                    onChange={(e) =>
                                      handleMetricChange(
                                        project.id,
                                        index,
                                        "label",
                                        e.target.value,
                                      )
                                    }
                                  />
                                </div>
                                <div className="col-span-5">
                                  <Input
                                    placeholder="Metric Value"
                                    value={metric.value}
                                    onChange={(e) =>
                                      handleMetricChange(
                                        project.id,
                                        index,
                                        "value",
                                        e.target.value,
                                      )
                                    }
                                  />
                                </div>
                                <div className="col-span-2 flex justify-end">
                                  <Button
                                    variant="destructive"
                                    size="icon"
                                    onClick={() =>
                                      handleRemoveMetric(project.id, index)
                                    }
                                  >
                                    <TrashIcon className="h-4 w-4" />
                                  </Button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex justify-end gap-2">
                          <Button
                            variant="destructive"
                            onClick={() => handleRemoveProject(project.id)}
                          >
                            <TrashIcon className="h-4 w-4 mr-2" /> Delete
                            Project
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </main>
    </div>
  );
}
