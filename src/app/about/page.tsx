import type { Metadata } from "next";

import { SkillList } from "@/components/skill-list";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { site } from "@/lib/site";
import { skillNames } from "@/lib/skills";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name}`,
};

export default function AboutPage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-muted-foreground">
          About
        </p>
        <h1 className="mt-4 max-w-3xl text-5xl leading-[1.05] text-balance sm:text-7xl">
          {site.name}
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          I write websites and software. Mostly web stuff, Python tools, Java
          (including Minecraft plugins), and some C/C++.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {skillNames.map((name) => (
            <Badge key={name} variant="secondary">
              {name}
            </Badge>
          ))}
        </div>
      </section>

      <Separator />

      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:py-20">
        <h2 className="text-4xl">Languages</h2>
        <div className="mt-10">
          <SkillList heading="Breakdown" />
        </div>
      </section>

      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <h2 className="text-4xl">Contact</h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Best way to reach me is email.
          </p>
          <Button
            nativeButton={false}
            size="lg"
            className="mt-8"
            render={<a href={`mailto:${site.email}`} />}
          >
            {site.email}
          </Button>
        </div>
      </section>
    </div>
  );
}
