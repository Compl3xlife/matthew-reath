import Link from "next/link";

import { site } from "@/lib/site";
import { skillLine } from "@/lib/skills";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-end md:justify-between">
        <div className="space-y-2">
          <p className="text-sm font-medium text-foreground">{site.name}</p>
          <p className="max-w-sm text-sm text-muted-foreground">
            {site.tagline}. {skillLine}.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm md:items-end">
          <a
            href={`mailto:${site.email}`}
            className="text-foreground underline-offset-4 hover:underline"
          >
            {site.email}
          </a>
          <p className="text-muted-foreground">
            <Link href="/work" className="hover:text-foreground">
              Projects
            </Link>
            <span className="mx-2 text-border">/</span>
            <Link href="/about" className="hover:text-foreground">
              About
            </Link>
            <span className="mx-2 text-border">/</span>
            <span>© {new Date().getFullYear()}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
