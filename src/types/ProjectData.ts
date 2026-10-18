import { Icon } from "./Icons";

import notion_1 from "../assets/project_media/notion/1.png"
import notion_2 from "../assets/project_media/notion/2.png"

import grid_watch_1 from "../assets/project_media/grid_watch/1.png"
import grid_watch_2 from "../assets/project_media/grid_watch/2.png"
import grid_watch_3 from "../assets/project_media/grid_watch/3.png"
import grid_watch_4 from "../assets/project_media/grid_watch/4.png"
import grid_watch_5 from "../assets/project_media/grid_watch/5.png"

import nova_1 from "../assets/project_media/nova_test/1.png"
import nova_2 from "../assets/project_media/nova_test/2.png"
import nova_3 from "../assets/project_media/nova_test/3.png"
import nova_4 from "../assets/project_media/nova_test/4.png"
import nova_5 from "../assets/project_media/nova_test/5.png"

import greenline_1 from "../assets/project_media/greenline/1.png"

import { StaticImageData } from "next/image";
import { Rust, NextJS, TS, React, CSS, GraphQL, SB, Python, YAML, Tauri, FastAPI, RISCV, QEMU, Tailwind, GitLab } from "./Icons";

export interface DisplayProject {
    name: string,
    desc: string,
    highlights?: string[],
    date?: string,
    context?: string,

    icons: Icon[],
    tags?: string[]
    media?: (string | StaticImageData)[],

    url?: string,

    github?: string
    gitlab?: string
}

// Lead project, shown full-width above the grid
export const FeaturedProject: DisplayProject = {
    name: "Max OS",
    date: "Jun 2026 – Present",
    desc: "A hobbyist operating system written from scratch in pure Rust, booting on RISC-V under QEMU. By far my biggest (and most fun) project yet.",
    highlights: [
        "Freestanding no_std kernel with hand-written boot assembly and MMIO",
        "Virtual memory paging, a kernel heap allocator, and thread-safe sync primitives",
        "Custom filesystem with its own on-disk format and thread locking",
        "virtio block + input drivers and a 2D framebuffer graphics library",
    ],
    icons: [Rust, RISCV, QEMU],
    tags: ["Systems", "OS"],
    github: "https://github.com/MaxRS07/max_os",
}

export const DisplayProjects: DisplayProject[] = [
    {
        name: "NovaTest",
        date: "Feb – Mar 2026",
        context: "Amazon Nova AI Hackathon",
        desc: "An AI browser-testing platform that launches autonomous Amazon Nova Act agents against a URL to find UI defects, visual errors, and broken user flows — no hand-written test scripts. Agent logs, reasoning traces, and detected faults stream live to the dashboard over Supabase Realtime.",
        icons: [NextJS, TS, Python, FastAPI, SB],
        media: [nova_1, nova_2, nova_3, nova_4, nova_5],
        github: "https://github.com/MaxRS07/nova-test",
        tags: ["AgenticAI", "WebDevelopment", "Automation"]
    },
    {
        name: "Notion Hub",
        date: "Dec 2025 – Feb 2026",
        desc: "A Zapier-style Tauri desktop app connecting the Notion and Canvas LMS APIs. Build automations in a visual editor with drag-and-drop action blocks, trigger logic, and field mapping — originally built to sync Canvas assignments into Notion.",
        icons: [Tauri, Rust, TS, React],
        tags: ["Automation", "AppDevelopment"],
        github: 'https://github.com/MaxRS07/notion-integration',
        media: [notion_1, notion_2]
    },
    {
        name: "GRID Watch",
        date: "Jan – Feb 2026",
        context: "Cloud9 × JetBrains Hackathon",
        desc: "Scouting analytics for VALORANT and CS. Streams raw GRID series telemetry (ZIP → JSONL), aggregates player and team metrics, and turns them into AI-written scouting reports on playstyle, tendencies, strengths, and risks.",
        icons: [NextJS, TS, GraphQL, CSS],
        media: [grid_watch_1, grid_watch_2, grid_watch_3, grid_watch_4, grid_watch_5],
        tags: ["AgenticAI", "WebDevelopment", "DataVisualization"],
        github: 'https://github.com/MaxRS07/grid-watch',
        url: 'https://grid-watch-page.vercel.app'
    },
    {
        name: "Greenline CI",
        context: "GitLab AI Hackathon",
        desc: "A CI agent that plugs into your pipeline to predict energy usage, generate sustainability scores, and suggest optimizations. Can block merge requests that miss sustainability targets, with chat support for tailored recommendations.",
        icons: [Python, YAML, GitLab],
        tags: ["AgenticAI", "CI"],
        media: [greenline_1],
        gitlab: "https://gitlab.com/gitlab-ai-hackathon/participants/34577036"
    },
]

export interface MiniProject {
    name: string,
    desc: string,
    lang: string,
    url: string,
}

export const OtherProjects: MiniProject[] = [
    { name: "Particle Simulator", lang: "Rust", desc: "Falling-sand sandbox with sand, fire, water, and wood running as a 60 FPS cellular automaton.", url: "https://github.com/MaxRS07/particle_simulator" },
    { name: "RoomieMatch", lang: "SQL", desc: "Relational roommate-finder database — ERD, BCNF schema, and preference-matching queries.", url: "https://github.com/MaxRS07/roomie-match" },
    { name: "Terraria Agent", lang: "C# · PyTorch", desc: "A game mod that hands control of Terraria to a PyTorch-trained agent.", url: "https://github.com/MaxRS07/TerrariaAgent" },
    { name: "NASA Widget", lang: "JavaScript", desc: "Configurable widget that pulls imagery from the NASA image library API.", url: "https://maxrs07.github.io/NasaWidget/" },
]
