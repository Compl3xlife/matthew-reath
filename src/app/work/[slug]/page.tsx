import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getProject, projects } from "@/lib/projects";
import { withBasePath } from "@/lib/base-path";

type WorkParams = { slug: string };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<WorkParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) {
    return { title: "Not found" };
  }
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<WorkParams>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <article>
      <div className="mx-auto max-w-6xl px-5 pt-8 sm:px-8 sm:pt-12">
        <Button
          nativeButton={false}
          variant="ghost"
          size="sm"
          className="-ml-2 text-muted-foreground"
          render={<Link href="/work" />}
        >
          <ArrowLeft data-icon="inline-start" />
          All projects
        </Button>
      </div>

      <header className="mx-auto max-w-6xl px-5 pb-10 pt-4 sm:px-8">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="outline">Project {project.number}</Badge>
          <Badge variant="secondary">{project.status}</Badge>
        </div>
        <h1 className="mt-6 max-w-4xl text-5xl leading-[1.05] text-balance sm:text-7xl">
          {project.title}
        </h1>
        <p className="mt-5 max-w-2xl text-xl text-muted-foreground">
          {project.shortDescription}
        </p>
      </header>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="relative aspect-[3/2] overflow-hidden rounded-xl">
          <Image
            src={withBasePath(project.image)}
            alt={project.imageAlt}
            fill
            priority
            sizes="(min-width: 1024px) 72rem, 100vw"
            className="object-cover"
          />
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:py-20">
        <aside className="space-y-8 lg:sticky lg:top-24 lg:self-start">
          <Meta label="Year" value={project.year} />
          <Meta label="Role" value={project.role} />
          <Meta label="Client" value={project.client} />
          <div>
            <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-muted-foreground">
              Languages
            </p>
            <ul className="mt-2 space-y-1 text-sm">
              {project.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </aside>

        <div className="max-w-2xl">
          <blockquote className="border-l-2 border-primary pl-5 font-heading text-3xl leading-snug text-foreground">
            {project.pullQuote}
          </blockquote>

          <div className="mt-14 space-y-14">
            {project.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-3xl sm:text-4xl">{section.heading}</h2>
                <div className="mt-5 space-y-4 text-base leading-7 text-muted-foreground sm:text-[1.05rem] sm:leading-8">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>

      <Separator />

      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-14 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="max-w-md text-muted-foreground">{project.summary}</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button nativeButton={false} variant="outline" render={<Link href="/work" />}>
            Back to projects
          </Button>
        </div>
      </div>
    </article>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-muted-foreground">
        {label}
      </p>
      <p className="mt-1 text-sm">{value}</p>
    </div>
  );
}
