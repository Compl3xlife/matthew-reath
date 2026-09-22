import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Project } from "@/lib/projects";
import { withBasePath } from "@/lib/base-path";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="bg-card py-0 ring-foreground/8">
      <div className="relative aspect-[3/2] overflow-hidden">
        <Image
          src={withBasePath(project.image)}
          alt={project.imageAlt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <CardHeader className="pt-5">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="outline">{project.year}</Badge>
          <Badge variant="secondary">{project.status}</Badge>
        </div>
        <CardTitle className="font-heading text-2xl font-normal">
          {project.title}
        </CardTitle>
        <CardDescription className="text-base">
          {project.shortDescription}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-muted-foreground">
          {project.stack.join(" · ")}
        </p>
      </CardContent>
      <CardFooter className="justify-between bg-transparent">
        <span className="text-sm text-muted-foreground">{project.subtitle}</span>
        <Button
          nativeButton={false}
          size="sm"
          render={<Link href={`/work/${project.slug}`} />}
        >
          Read more
          <ArrowUpRight data-icon="inline-end" />
        </Button>
      </CardFooter>
    </Card>
  );
}
