import type { Metadata } from "next";

import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects by Matthew Reath",
};

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
      <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-muted-foreground">
        Work
      </p>
      <h1 className="mt-4 max-w-3xl text-5xl leading-[1.05] text-balance sm:text-7xl">
        Projects
      </h1>
      <p className="mt-6 max-w-xl text-lg text-muted-foreground">
        Stuff I’ve built. Languages are listed on each card.
      </p>

      <div className="mt-14 grid gap-8 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
