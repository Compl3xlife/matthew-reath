import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-start px-5 py-24 sm:px-8">
      <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-muted-foreground">
        404
      </p>
      <h1 className="mt-4 text-5xl sm:text-6xl">This page does not exist.</h1>
      <p className="mt-5 max-w-md text-muted-foreground">
        The link is wrong or the page was removed. Try Home or Projects.
      </p>
      <div className="mt-8 flex gap-3">
        <Button nativeButton={false} render={<Link href="/" />}>
          Home
        </Button>
        <Button nativeButton={false} variant="outline" render={<Link href="/work" />}>
          Projects
        </Button>
      </div>
    </div>
  );
}
