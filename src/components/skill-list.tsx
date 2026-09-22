import { Badge } from "@/components/ui/badge";
import { skills, type Skill } from "@/lib/skills";

export function SkillList({
  heading = "Languages I use",
}: {
  heading?: string;
}) {
  const web = skills.filter((skill) => skill.kind === "Web");
  const programming = skills.filter((skill) => skill.kind === "Programming");

  return (
    <div>
      <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-muted-foreground">
        {heading}
      </p>
      <div className="mt-8 grid gap-10 md:grid-cols-2">
        <SkillGroup title="Web" items={web} />
        <SkillGroup title="Programming" items={programming} />
      </div>
    </div>
  );
}

function SkillGroup({ title, items }: { title: string; items: Skill[] }) {
  return (
    <div className="border-t border-border pt-6">
      <h3 className="text-2xl">{title}</h3>
      <ul className="mt-5 space-y-5">
        {items.map((skill) => (
          <li key={skill.name}>
            <div className="flex items-baseline gap-2">
              <Badge variant="secondary">{skill.name}</Badge>
            </div>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {skill.uses}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
