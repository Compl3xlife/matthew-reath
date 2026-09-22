export type ProjectStatus = "Shipped" | "In progress";

export type ProjectSection = {
  heading: string;
  body: string[];
};

export type Project = {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  year: string;
  status: ProjectStatus;
  role: string;
  client: string;
  stack: string[];
  summary: string;
  shortDescription: string;
  pullQuote: string;
  featured: boolean;
  image: string;
  imageAlt: string;
  sections: ProjectSection[];
};

export const projects: Project[] = [
  {
    slug: "opus",
    number: "01",
    title: "Opus",
    subtitle: "PC + phone voice assistant",
    year: "2026",
    status: "Shipped",
    role: "Built it myself",
    client: "Personal",
    stack: ["Python", "JavaScript", "HTML", "CSS"],
    shortDescription:
      "Tray app on Windows that listens for “Opus,” plus a phone web app for chat when I’m not at the PC.",
    summary:
      "Local assistant. Wake word on the PC, chat/voice on the phone. Python on Windows; HTML/CSS/JS for the phone and settings UI.",
    pullQuote: "Same assistant on the desktop and on my phone.",
    featured: true,
    image: "/projects/opus.jpg",
    imageAlt: "Opus",
    sections: [
      {
        heading: "Desktop",
        body: [
          "Runs in the Windows tray. Say the wake word and it answers. Settings open from the tray, by voice, or Ctrl+Alt+O.",
          "Can look at the screen, search files, record clips, and scan Downloads with Defender. Mic audio stays local until you wake it.",
        ],
      },
      {
        heading: "Phone",
        body: [
          "Home-screen web app. Chat and talk work over the phone’s network. PC-only stuff (screenshots, Windows control) stays on the tray app.",
        ],
      },
      {
        heading: "Languages",
        body: [
          "Python for the Windows app. HTML, CSS, and JavaScript for the settings panel and the phone UI.",
        ],
      },
    ],
  },
  {
    slug: "day-trade-scanner",
    number: "02",
    title: "Day Trade Scanner",
    subtitle: "Market scanner for Windows",
    year: "2026",
    status: "Shipped",
    role: "Built it myself",
    client: "Personal",
    stack: ["Python"],
    shortDescription:
      "Windows tool that scans US stocks, crypto, and forex, scores them, and shows a ranked list. Ships as an .exe.",
    summary:
      "Python scanner with a config file for watchlists and weights. Builds to DayTradeScanner.exe.",
    pullQuote: "Ranks what’s moving right now. Doesn’t place trades.",
    featured: false,
    image: "/projects/day-trade-scanner.png",
    imageAlt: "Day Trade Scanner",
    sections: [
      {
        heading: "What it does",
        body: [
          "Pulls symbols from your watchlists, scores momentum, volatility, volume, trend, and liquidity, then prints a leaderboard.",
          "Edit config.yaml for symbols, weights, refresh rate, and how many rows to show. No rebuild needed after config changes.",
        ],
      },
      {
        heading: "Languages",
        body: ["Python. Packaged for Windows with a build script."],
      },
    ],
  },
  {
    slug: "backpack",
    number: "03",
    title: "Backpack",
    subtitle: "Minecraft plugin",
    year: "2026",
    status: "Shipped",
    role: "Built it myself",
    client: "Personal",
    stack: ["Java"],
    shortDescription:
      "Paper plugin that gives every player a backpack inventory, with an optional restock upgrade for blocks.",
    summary:
      "Java plugin for Paper. Extra chest inventory per player, craftable items, works with Geyser for Bedrock.",
    pullQuote: "Extra inventory without fighting the vanilla UI.",
    featured: false,
    image: "/projects/backpack-item.png",
    imageAlt: "Backpack item from the Minecraft plugin",
    sections: [
      {
        heading: "What it does",
        body: [
          "Players get a backpack item (open with /backpack or right-click). Size is configurable.",
          "Restock upgrade: when you place the last block in a hotbar slot, it pulls more of that block from the backpack.",
        ],
      },
      {
        heading: "Languages",
        body: ["Java. Built with Maven for Paper servers."],
      },
    ],
  },
  {
    slug: "portfolio",
    number: "04",
    title: "This site",
    subtitle: "Personal website",
    year: "2026",
    status: "Shipped",
    role: "Built it myself",
    client: "Personal",
    stack: ["HTML", "CSS", "JavaScript"],
    shortDescription:
      "My site. Projects, languages, and a way to email me.",
    summary: "Portfolio site. Next.js under the hood; pages are HTML/CSS/JS.",
    pullQuote: "Just the work, no fluff.",
    featured: false,
    image: "/projects/portfolio.jpg",
    imageAlt: "Personal website",
    sections: [
      {
        heading: "What it is",
        body: [
          "Home page, project list, project pages, and About. That’s it.",
        ],
      },
      {
        heading: "Languages",
        body: ["HTML, CSS, and JavaScript."],
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProject() {
  return projects.find((project) => project.featured) ?? projects[0];
}
