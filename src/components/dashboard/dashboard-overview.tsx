import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { EditIcon, EyeIcon, PlusIcon } from "lucide-react";

export function DashboardOverview() {
  const sections = [
    {
      title: "Hero Section",
      description: "Edit your main introduction and terminal skills",
      editHref: "/dashboard/hero",
    },
    {
      title: "Skills",
      description: "Manage your technical skills and proficiency levels",
      editHref: "/dashboard/skills",
    },
    {
      title: "Projects",
      description: "Showcase your portfolio projects and achievements",
      editHref: "/dashboard/projects",
    },
    {
      title: "Certifications",
      description: "Display your professional certifications",
      editHref: "/dashboard/certifications",
    },
    {
      title: "Experience",
      description: "Highlight your work history and responsibilities",
      editHref: "/dashboard/experience",
    },
    {
      title: "Contact",
      description: "Update your contact information and form settings",
      editHref: "/dashboard/contact",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold tracking-tight">Dashboard</h1>
        <div className="flex items-center gap-4">
          <Button variant="outline" className="gap-2">
            <EyeIcon className="h-4 w-4" /> Preview Site
          </Button>
          <Button className="gap-2">
            <PlusIcon className="h-4 w-4" /> Add New Section
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {sections.map((section) => (
          <Card key={section.title}>
            <CardHeader className="pb-2">
              <CardTitle>{section.title}</CardTitle>
              <CardDescription>{section.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full gap-2" asChild>
                <a href={section.editHref}>
                  <EditIcon className="h-4 w-4" /> Edit Section
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Quick Stats</CardTitle>
            <CardDescription>
              Overview of your portfolio website performance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="bg-muted p-4 rounded-lg text-center">
                <div className="text-2xl font-bold">6</div>
                <div className="text-sm text-muted-foreground">
                  Total Sections
                </div>
              </div>
              <div className="bg-muted p-4 rounded-lg text-center">
                <div className="text-2xl font-bold">4</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="bg-muted p-4 rounded-lg text-center">
                <div className="text-2xl font-bold">Last updated</div>
                <div className="text-sm text-muted-foreground">
                  {new Date().toLocaleDateString()}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
