"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface TerminalOutput {
  text: string;
  isCommand: boolean;
}

export function InteractiveTerminal({ className }: { className?: string }) {
  const [command, setCommand] = useState("");
  const [history, setHistory] = useState<TerminalOutput[]>([
    {
      text: "Welcome to the interactive terminal! Try some commands:",
      isCommand: false,
    },
    { text: "help - Show available commands", isCommand: false },
    { text: "skills - List my technical skills", isCommand: false },
    { text: "projects - Show my projects", isCommand: false },
    { text: "contact - Get my contact information", isCommand: false },
    { text: "clear - Clear the terminal", isCommand: false },
  ]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!command.trim()) return;

    // Add the command to history
    setHistory([...history, { text: command, isCommand: true }]);

    // Process command
    const response = processCommand(command.toLowerCase().trim());
    setHistory((prev) => [...prev, ...response]);

    // Clear input
    setCommand("");
  };

  const processCommand = (cmd: string): TerminalOutput[] => {
    switch (cmd) {
      case "help":
        return [
          { text: "Available commands:", isCommand: false },
          { text: "skills - List my technical skills", isCommand: false },
          { text: "projects - Show my projects", isCommand: false },
          { text: "contact - Get my contact information", isCommand: false },
          { text: "experience - Show my work experience", isCommand: false },
          { text: "clear - Clear the terminal", isCommand: false },
        ];
      case "skills":
        return [
          { text: "Technical Skills:", isCommand: false },
          {
            text: "• CI/CD: Jenkins, GitHub Actions, GitLab CI, CircleCI",
            isCommand: false,
          },
          {
            text: "• IaC: Terraform, CloudFormation, Ansible, Pulumi",
            isCommand: false,
          },
          {
            text: "• Containers: Docker, Kubernetes, Helm, Docker Compose",
            isCommand: false,
          },
          { text: "• Cloud: AWS, Azure, GCP, DigitalOcean", isCommand: false },
          {
            text: "• Monitoring: Prometheus, Grafana, ELK Stack, Datadog",
            isCommand: false,
          },
          {
            text: "• Scripting: Bash, Python, Go, JavaScript",
            isCommand: false,
          },
        ];
      case "projects":
        return [
          { text: "Featured Projects:", isCommand: false },
          {
            text: "1. Cloud Infrastructure Automation - AWS, Terraform",
            isCommand: false,
          },
          {
            text: "2. Kubernetes Cluster Optimization - K8s, Prometheus",
            isCommand: false,
          },
          {
            text: "3. CI/CD Pipeline Modernization - GitHub Actions, Docker",
            isCommand: false,
          },
          {
            text: "4. Monitoring & Alerting System - Prometheus, Grafana, ELK",
            isCommand: false,
          },
          {
            text: "Scroll up to the Projects section for more details!",
            isCommand: false,
          },
        ];
      case "contact":
        return [
          { text: "Contact Information:", isCommand: false },
          { text: "Email: devops@example.com", isCommand: false },
          { text: "GitHub: github.com/devops-engineer", isCommand: false },
          {
            text: "LinkedIn: linkedin.com/in/devops-engineer",
            isCommand: false,
          },
          { text: "Twitter: @devops_engineer", isCommand: false },
        ];
      case "experience":
        return [
          { text: "Work Experience:", isCommand: false },
          {
            text: "• Senior DevOps Engineer at TechCloud Solutions (2021-Present)",
            isCommand: false,
          },
          {
            text: "• DevOps Engineer at InnovateSoft Inc. (2018-2021)",
            isCommand: false,
          },
          {
            text: "• Systems Administrator at DataSystems Corp (2016-2018)",
            isCommand: false,
          },
          {
            text: "Scroll up to the Experience section for more details!",
            isCommand: false,
          },
        ];
      case "clear":
        setHistory([]);
        return [];
      default:
        return [
          {
            text: `Command not found: ${cmd}. Type 'help' for available commands.`,
            isCommand: false,
          },
        ];
    }
  };

  return (
    <div
      className={cn(
        "bg-black/80 text-green-500 p-4 rounded-md font-mono w-full max-w-2xl h-80 flex flex-col",
        className,
      )}
    >
      <div className="flex items-center gap-1 mb-2">
        <div className="h-3 w-3 rounded-full bg-red-500"></div>
        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
        <div className="h-3 w-3 rounded-full bg-green-500"></div>
        <div className="ml-2 text-xs text-gray-400">interactive-terminal</div>
      </div>

      <div
        className="flex-1 overflow-auto mb-4 terminal-output"
        style={{ maxHeight: "300px" }}
      >
        {history.map((item, index) => (
          <div key={index} className="mb-1">
            {item.isCommand ? (
              <div>
                <span className="text-blue-400">guest@portfolio</span>
                <span className="text-gray-400">:~$</span> {item.text}
              </div>
            ) : (
              <div className="text-gray-300">{item.text}</div>
            )}
          </div>
        ))}
      </div>

      <form onSubmit={handleCommand} className="flex gap-2">
        <div className="flex-1 flex">
          <span className="text-blue-400 mr-1">guest@portfolio</span>
          <span className="text-gray-400 mr-1">:~$</span>
          <Input
            type="text"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            className="flex-1 bg-transparent border-none text-green-500 focus-visible:ring-0 focus-visible:ring-offset-0 p-0"
            autoFocus
          />
        </div>
        <Button type="submit" variant="outline" size="sm" className="text-xs">
          Enter
        </Button>
      </form>
    </div>
  );
}
