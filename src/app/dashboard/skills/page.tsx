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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeftIcon, PlusIcon, SaveIcon, TrashIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function SkillsPage() {
  const initialSkillCategories = [
    {
      id: "cicd",
      name: "CI/CD",
      skills: [
        { name: "Jenkins", proficiency: 90 },
        { name: "GitHub Actions", proficiency: 85 },
        { name: "GitLab CI", proficiency: 80 },
        { name: "CircleCI", proficiency: 75 },
      ],
    },
    {
      id: "iac",
      name: "Infrastructure as Code",
      skills: [
        { name: "Terraform", proficiency: 95 },
        { name: "CloudFormation", proficiency: 85 },
        { name: "Ansible", proficiency: 80 },
        { name: "Pulumi", proficiency: 70 },
      ],
    },
    // Other categories would be here
  ];

  const [skillCategories, setSkillCategories] = useState(
    initialSkillCategories,
  );
  const [selectedCategory, setSelectedCategory] = useState("cicd");

  const handleAddSkill = (categoryId: string) => {
    setSkillCategories((categories) =>
      categories.map((category) => {
        if (category.id === categoryId) {
          return {
            ...category,
            skills: [
              ...category.skills,
              { name: "New Skill", proficiency: 70 },
            ],
          };
        }
        return category;
      }),
    );
  };

  const handleRemoveSkill = (categoryId: string, skillIndex: number) => {
    setSkillCategories((categories) =>
      categories.map((category) => {
        if (category.id === categoryId) {
          return {
            ...category,
            skills: category.skills.filter((_, index) => index !== skillIndex),
          };
        }
        return category;
      }),
    );
  };

  const handleSkillChange = (
    categoryId: string,
    skillIndex: number,
    field: string,
    value: any,
  ) => {
    setSkillCategories((categories) =>
      categories.map((category) => {
        if (category.id === categoryId) {
          const updatedSkills = [...category.skills];
          updatedSkills[skillIndex] = {
            ...updatedSkills[skillIndex],
            [field]: field === "proficiency" ? parseInt(value) : value,
          };
          return {
            ...category,
            skills: updatedSkills,
          };
        }
        return category;
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
          <div className="text-xl font-bold">Skills Management</div>
          <Button className="gap-2">
            <SaveIcon className="h-4 w-4" /> Save Changes
          </Button>
        </div>
      </header>

      <main className="p-6">
        <Tabs
          defaultValue={selectedCategory}
          onValueChange={setSelectedCategory}
        >
          <div className="flex justify-between items-center mb-6">
            <TabsList>
              {skillCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
            <Button variant="outline">
              <PlusIcon className="h-4 w-4 mr-2" /> Add Category
            </Button>
          </div>

          {skillCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <Card>
                <CardHeader>
                  <CardTitle>Edit {category.name} Skills</CardTitle>
                  <CardDescription>
                    Add, remove, or modify skills in this category
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.skills.map((skill, index) => (
                      <div
                        key={index}
                        className="grid grid-cols-12 gap-4 items-center"
                      >
                        <div className="col-span-5">
                          <Label htmlFor={`skill-${index}-name`}>
                            Skill Name
                          </Label>
                          <Input
                            id={`skill-${index}-name`}
                            value={skill.name}
                            onChange={(e) =>
                              handleSkillChange(
                                category.id,
                                index,
                                "name",
                                e.target.value,
                              )
                            }
                          />
                        </div>
                        <div className="col-span-5">
                          <Label htmlFor={`skill-${index}-level`}>
                            Skill Level
                          </Label>
                          <Select
                            value={skill.proficiency.toString()}
                            onValueChange={(value) =>
                              handleSkillChange(
                                category.id,
                                index,
                                "proficiency",
                                value,
                              )
                            }
                          >
                            <SelectTrigger id={`skill-${index}-level`}>
                              <SelectValue placeholder="Select level" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="60">Basic</SelectItem>
                              <SelectItem value="70">Intermediate</SelectItem>
                              <SelectItem value="80">Advanced</SelectItem>
                              <SelectItem value="90">Expert</SelectItem>
                              <SelectItem value="95">Master</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="col-span-2 flex justify-end">
                          <Button
                            variant="destructive"
                            size="icon"
                            onClick={() =>
                              handleRemoveSkill(category.id, index)
                            }
                          >
                            <TrashIcon className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                    <Button
                      variant="outline"
                      className="w-full mt-4"
                      onClick={() => handleAddSkill(category.id)}
                    >
                      <PlusIcon className="h-4 w-4 mr-2" /> Add Skill
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </main>
    </div>
  );
}
