import Link from "next/link";
import { ArrowDown } from "lucide-react";

import { ProjectCard } from "@/components/project-card";
import { SkillList } from "@/components/skill-list";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";
import { skillNames } from "@/lib/skills";

export default function Home() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-5 pb-16 pt-12 sm:px-8 sm:pt-20 lg:pt-24">
        <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-muted-foreground">
          {site.tagline}
        </p>
        <h1 className="mt-6 max-w-4xl text-5xl leading-[1.05] text-balance sm:text-7xl">
          {site.name}
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          I make websites and programs. Here’s some of what I’ve built and
          the languages I use.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {skillNames.map((name) => (
            <Badge key={name} variant="secondary">
              {name}
            </Badge>
          ))}
        </div>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button nativeButton={false} size="lg" render={<Link href="/work" />}>
            Projects
          </Button>
          <Button
            nativeButton={false}
            size="lg"
            variant="outline"
            render={<Link href="/about" />}
          >
            About
          </Button>
        </div>
        <a
          href="#projects"
          className="mt-16 inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.18em] uppercase text-muted-foreground hover:text-foreground"
        >
          <ArrowDown className="size-3.5" />
          Scroll
        </a>
      </section>

      <Separator />

      <section
        id="projects"
        className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24"
      >
        <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-muted-foreground">
          Work
        </p>
        <h2 className="mt-4 max-w-2xl text-4xl sm:text-5xl">Projects</h2>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Click one for details and the languages used.
        </p>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <Separator />

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <h2 className="max-w-2xl text-4xl sm:text-5xl">Languages</h2>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Web: HTML, CSS, JavaScript. Everything else: Python, Java, C, C++.
        </p>
        <div className="mt-12">
          <SkillList heading="What I use them for" />
        </div>
      </section>

      <section className="border-t border-border bg-[oklch(0.28_0.03_45)] text-[oklch(0.96_0.02_85)]">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-16 sm:px-8 md:flex-row md:items-end md:justify-between lg:py-20">
          <div>
            <Badge className="bg-[oklch(0.47_0.13_38)] text-primary-foreground">
              Available
            </Badge>
            <h2 className="mt-5 max-w-lg text-4xl sm:text-5xl">
              Got a project? Email me.
            </h2>
          </div>
          <Button
            nativeButton={false}
            size="lg"
            className="bg-[oklch(0.96_0.02_85)] text-[oklch(0.22_0.028_48)] hover:bg-[oklch(0.96_0.02_85)]/90"
            render={<a href={`mailto:${site.email}`} />}
          >
            {site.email}
          </Button>
        </div>
      </section>
    </div>
  );
}
