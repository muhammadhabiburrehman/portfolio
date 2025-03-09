import { InteractiveTerminal } from "@/components/interactive-terminal";

export function TerminalSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight text-center mb-6">
          Interactive Terminal
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
          Try out the interactive terminal below to explore my skills, projects,
          and more. Type 'help' to see available commands.
        </p>
        <div className="flex justify-center">
          <InteractiveTerminal />
        </div>
      </div>
    </section>
  );
}
