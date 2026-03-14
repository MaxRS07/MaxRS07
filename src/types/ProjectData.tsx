import { Url } from "next/dist/shared/lib/router/router";

import notion1 from "../assets/project_media/notion_1.png"
import notion2 from "../assets/project_media/notion_2.png"
import { StaticImageData } from "next/image";

export interface Icon {
    name: string,
    imgUrl: Url,
    altUrl?: Url,
}
const createSkill = (name: string, img?: string): Icon => {
    return { name: name, imgUrl: `https://cdn.simpleicons.org/${img ?? name}` }
}
const Rust: Icon = createSkill('Rust')
const NextJS: Icon = createSkill('Next.js')
const TS: Icon = createSkill("TypeScript")
const React: Icon = createSkill("React")
const CSS: Icon = createSkill("CSS")
const GraphQL: Icon = createSkill("GraphQL")
const SB: Icon = createSkill("Supabase")
const Python: Icon = createSkill("Python")
const YAML: Icon = createSkill("YAML")

export interface DisplayProject {
    name: string,
    desc: string,

    tags: Icon[],
    media?: (string | StaticImageData)[],

    url?: string,

    github?: string
    gitlab?: string
}

export const DisplayProjects: DisplayProject[] = [
    {
        name: "Notion Integration",
        desc: "A Zapier-style desktop app that allows you to create workflows by dragging and dropping blocks. Originally built to automatically list canvas assignments in Notion. Made with React and the Tauri framework.",
        tags: [Rust, TS, React, CSS],
        github: 'https://github.com/MaxRS07/notion-integration',
        media: [notion1, notion2]
    },
    {
        name: "GRID Watch",
        desc: "A full-stack web application to track player statistics and match history for competitive games like CS:GO and Valorant using GRID.gg data. AI reports give personalized strategies and advice. Built with NextJS, TypeScript, and GraphQL. Created for and submitted to the 2026 Cloud9 X JETBRAINS Hackathon.",
        tags: [NextJS, TS, CSS, GraphQL],
        github: 'https://github.com/MaxRS07/GRID-Watch',
        url: 'https://grid-watch-page-kn68koo1y-max-siebengartners-projects.vercel.app/'
    },
    {
        name: "NovaFlow",
        desc: "Nova Flow is a web application that runs AI-powered browser agents against a target URL to automatically detect UI faults and visual errors. It provides a real-time dashboard for launching test fleets, monitoring agent activity over WebSockets, and reviewing the resulting fault reports.",
        tags: [
            // Replace these with whatever Icon[] values you actually use in your app
            NextJS,
            TS,
            SB,
        ],
        // No media files were found via the repo scan I attempted; add screenshots/logos if you have them.
        media: [],
        url: undefined, // repo has no homepage URL set
        github: "https://github.com/MaxRS07/nova-flow",
    },
    {
        name: "Greenline CI",
        desc: "A CI agent that integrates into your projects to provide optimization advice, predict energy usage, and generate sustainability scores. Features multiple configuration options to block merge requests that don't meet sustainability requirements, plus chat support for tailored recommendations.",
        tags: [
            Python,
            YAML
        ],
        media: [
            // Add screenshots or demo images if available
        ],
        url: "https://gitlab.com/gitlab-ai-hackathon/participants/34577036",
        gitlab: "https://gitlab.com/gitlab-ai-hackathon/participants/34577036" // No GitHub link found in repository
    }
]