"use client";

import { SkillCard } from "@/components/skill-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CloudIcon,
  CodeIcon,
  CpuIcon,
  DatabaseIcon,
  GitBranchIcon,
  LineChartIcon,
  ServerIcon,
  SettingsIcon,
} from "lucide-react";

export function SkillsSection() {
  const skillCategories = [
    {
      id: "cicd",
      name: "CI/CD",
      skills: [
        { name: "Jenkins", proficiency: 90, icon: <GitBranchIcon size={20} /> },
        {
          name: "GitHub Actions",
          proficiency: 85,
          icon: <GitBranchIcon size={20} />,
        },
        {
          name: "GitLab CI",
          proficiency: 80,
          icon: <GitBranchIcon size={20} />,
        },
        {
          name: "CircleCI",
          proficiency: 75,
          icon: <GitBranchIcon size={20} />,
        },
      ],
    },
    {
      id: "iac",
      name: "Infrastructure as Code",
      skills: [
        { name: "Terraform", proficiency: 95, icon: <ServerIcon size={20} /> },
        {
          name: "CloudFormation",
          proficiency: 85,
          icon: <ServerIcon size={20} />,
        },
        { name: "Ansible", proficiency: 80, icon: <SettingsIcon size={20} /> },
        { name: "Pulumi", proficiency: 70, icon: <ServerIcon size={20} /> },
      ],
    },
    {
      id: "containers",
      name: "Containerization",
      skills: [
        { name: "Docker", proficiency: 95, icon: <CpuIcon size={20} /> },
        { name: "Kubernetes", proficiency: 90, icon: <CpuIcon size={20} /> },
        { name: "Helm", proficiency: 85, icon: <CpuIcon size={20} /> },
        {
          name: "Docker Compose",
          proficiency: 90,
          icon: <CpuIcon size={20} />,
        },
      ],
    },
    {
      id: "cloud",
      name: "Cloud Platforms",
      skills: [
        { name: "AWS", proficiency: 95, icon: <CloudIcon size={20} /> },
        { name: "Azure", proficiency: 80, icon: <CloudIcon size={20} /> },
        { name: "GCP", proficiency: 75, icon: <CloudIcon size={20} /> },
        {
          name: "DigitalOcean",
          proficiency: 85,
          icon: <CloudIcon size={20} />,
        },
      ],
    },
    {
      id: "monitoring",
      name: "Monitoring & Observability",
      skills: [
        {
          name: "Prometheus",
          proficiency: 90,
          icon: <LineChartIcon size={20} />,
        },
        { name: "Grafana", proficiency: 85, icon: <LineChartIcon size={20} /> },
        {
          name: "ELK Stack",
          proficiency: 80,
          icon: <DatabaseIcon size={20} />,
        },
        { name: "Datadog", proficiency: 75, icon: <LineChartIcon size={20} /> },
      ],
    },
    {
      id: "scripting",
      name: "Scripting & Programming",
      skills: [
        { name: "Bash", proficiency: 90, icon: <CodeIcon size={20} /> },
        { name: "Python", proficiency: 85, icon: <CodeIcon size={20} /> },
        { name: "Go", proficiency: 70, icon: <CodeIcon size={20} /> },
        { name: "JavaScript", proficiency: 80, icon: <CodeIcon size={20} /> },
      ],
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight text-center mb-12">
          Technical Skills
        </h2>

        <Tabs defaultValue="cicd" className="w-full">
          <TabsList className="flex flex-wrap justify-center mb-8">
            {skillCategories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="flex items-center gap-2"
              >
                {category.id === "cicd" && (
                  <GitBranchIcon className="h-4 w-4" />
                )}
                {category.id === "iac" && <ServerIcon className="h-4 w-4" />}
                {category.id === "containers" && (
                  <CpuIcon className="h-4 w-4" />
                )}
                {category.id === "cloud" && <CloudIcon className="h-4 w-4" />}
                {category.id === "monitoring" && (
                  <LineChartIcon className="h-4 w-4" />
                )}
                {category.id === "scripting" && (
                  <CodeIcon className="h-4 w-4" />
                )}
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {skillCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.skills.map((skill) => (
                  <SkillCard
                    key={skill.name}
                    name={skill.name}
                    icon={skill.icon}
                    proficiency={skill.proficiency}
                  />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
