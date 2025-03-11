"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  BarChart3Icon,
  BriefcaseIcon,
  AwardIcon,
  HomeIcon,
  LayoutDashboardIcon,
  MailIcon,
  SettingsIcon,
  TerminalIcon,
  UserIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarItem {
  icon: React.ReactNode;
  label: string;
  href: string;
}

export function DashboardSidebar() {
  const pathname = usePathname();

  const sidebarItems: SidebarItem[] = [
    {
      icon: <LayoutDashboardIcon className="h-5 w-5" />,
      label: "Overview",
      href: "/dashboard",
    },
    {
      icon: <HomeIcon className="h-5 w-5" />,
      label: "Hero Section",
      href: "/dashboard/hero",
    },
    {
      icon: <BarChart3Icon className="h-5 w-5" />,
      label: "Skills",
      href: "/dashboard/skills",
    },
    {
      icon: <TerminalIcon className="h-5 w-5" />,
      label: "Projects",
      href: "/dashboard/projects",
    },
    {
      icon: <AwardIcon className="h-5 w-5" />,
      label: "Certifications",
      href: "/dashboard/certifications",
    },
    {
      icon: <BriefcaseIcon className="h-5 w-5" />,
      label: "Experience",
      href: "/dashboard/experience",
    },
    {
      icon: <MailIcon className="h-5 w-5" />,
      label: "Contact",
      href: "/dashboard/contact",
    },
    {
      icon: <UserIcon className="h-5 w-5" />,
      label: "Profile",
      href: "/dashboard/profile",
    },
    {
      icon: <SettingsIcon className="h-5 w-5" />,
      label: "Settings",
      href: "/dashboard/settings",
    },
  ];

  return (
    <aside className="w-64 border-r bg-background min-h-[calc(100vh-4rem)] p-4">
      <nav className="space-y-2">
        {sidebarItems.map((item) => (
          <Button
            key={item.href}
            variant={pathname === item.href ? "secondary" : "ghost"}
            className={cn(
              "w-full justify-start gap-2",
              pathname === item.href ? "bg-secondary" : "hover:bg-secondary/50",
            )}
            asChild
          >
            <Link href={item.href}>
              {item.icon}
              {item.label}
            </Link>
          </Button>
        ))}
      </nav>
    </aside>
  );
}
