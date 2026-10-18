import { Icon } from "./Icons";
import {
    Rust, Python, TS, JS, React, NextJS, Tauri, FastAPI, Tailwind, ScikitLearn, RISCV, QEMU, Linux,
    Git, Postgres, Docker, Figma, Claude, SQLite,
} from "./Icons";

export interface Experience {
    role: string,
    org: string,
    location: string,
    dates: string,
    bullets: string[],
}

export const Experiences: Experience[] = [
    {
        role: "Research Intern",
        org: "Hyperlayer",
        location: "Hong Kong",
        dates: "May – Jul 2026",
        bullets: [
            "Designed 2 complete application flows in Figma for global banking clients on Hyperlayer's fintech SaaS platform",
            "Workshopped screens with the client across 4 design reviews, iterating on feedback each round",
            "Represented Hyperlayer at LEAP East and Accenture conferences, researching market opportunities",
        ],
    },
    {
        role: "Back End Developer",
        org: "Oak Ridge National Laboratory",
        location: "Oakland, CA",
        dates: "Jan – Mar 2026",
        bullets: [
            "Developed back-end architecture for a web app predicting polymerization conditions with a neural network",
            "Built the Docker hosting prototype that containerized the model and served predictions to the front end",
            "Selected through Northeastern's Oakland practicum to build on a 5-student team alongside ORNL researchers",
        ],
    },
    {
        role: "AI Consultant",
        org: "Northeastern University",
        location: "Boston, MA",
        dates: "Nov 2025 – Jan 2026",
        bullets: [
            "Delivered AI consulting to California small businesses as part of a selected programming team",
            "Built AI tools with MCP servers and Claude Connectors to guide companies through California business certification filings",
        ],
    },
    {
        role: "Information Services Intern",
        org: "U.S. Consulate General Hong Kong",
        location: "Hong Kong",
        dates: "Jul – Aug 2024",
        bullets: [
            "Automated IT ticketing in Power Automate — routing to the right staff, gating on approvals, logging completion",
            "Wrote a Python utility driving a USB card reader to log decommissioned access cards, replacing manual entry",
            "Configured network, lighting, and AV infrastructure for consulate event spaces",
        ],
    },
    {
        role: "Software Engineering Intern",
        org: "The Chinese University of Hong Kong",
        location: "Hong Kong",
        dates: "Sep 2023 – May 2024",
        bullets: [
            "Developed a scikit-learn regression model to interpret classroom communication input",
            "Built a companion app around the model helping autistic students communicate with teachers",
        ],
    },
]

export interface SkillGroup {
    title: string,
    skills: Icon[],
}

export const SkillGroups: SkillGroup[] = [
    { title: "Languages", skills: [Rust, Python, TS, JS, SQLite] },
    { title: "Frameworks & Libraries", skills: [React, NextJS, Tauri, FastAPI, Tailwind, ScikitLearn] },
    { title: "Systems & Tools", skills: [RISCV, QEMU, Linux, Docker, Postgres, Git, Figma, Claude] },
]

export const Coursework = ["Algorithms & Data", "Theory of Computation", "Data Science", "Foundations of Cybersecurity"]
