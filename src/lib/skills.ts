export type Skill = {
  name: string;
  kind: "Web" | "Programming";
  uses: string;
};

export const skills: Skill[] = [
  { name: "HTML", kind: "Web", uses: "Page structure." },
  { name: "CSS", kind: "Web", uses: "Layout and styling." },
  {
    name: "JavaScript",
    kind: "Web",
    uses: "Menus, buttons, and anything interactive.",
  },
  {
    name: "Python",
    kind: "Programming",
    uses: "Scripts, tools, Windows apps.",
  },
  {
    name: "Java",
    kind: "Programming",
    uses: "Apps and Minecraft plugins.",
  },
  { name: "C", kind: "Programming", uses: "Lower-level programs." },
  { name: "C++", kind: "Programming", uses: "Same lane as C, more structure." },
];

export const skillNames = skills.map((skill) => skill.name);

export const skillLine = skillNames.join(", ");
