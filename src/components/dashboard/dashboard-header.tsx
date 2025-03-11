"use client";

import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { ArrowLeftIcon, BellIcon, MenuIcon, UserIcon } from "lucide-react";
import Link from "next/link";

export function DashboardHeader() {
  return (
    <header className="border-b bg-background sticky top-0 z-30">
      <div className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeftIcon className="h-4 w-4" />
            <span>Back to Portfolio</span>
          </Link>
        </div>
        <div className="text-xl font-bold">Portfolio Dashboard</div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <BellIcon className="h-5 w-5" />
          </Button>
          <ThemeSwitcher />
          <Button variant="ghost" size="icon">
            <UserIcon className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
