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
import { Rust, NextJS, TS, React, CSS, GraphQL, SB, Python, YAML } from "./Icons";

export interface DisplayProject {
    name: string,
    desc: string,

    icons: Icon[],
    tags?: string[]
    media?: (string | StaticImageData)[],

    url?: string,

    github?: string
    gitlab?: string
}

export const DisplayProjects: DisplayProject[] = [
    {
        name: "Notion Integration",
        desc: "A Zapier-style desktop app that allows you to create workflows by dragging and dropping blocks. Originally built to automatically list canvas assignments in Notion. Made with React and the Tauri framework.",
        icons: [Rust, TS, React, CSS],
        tags: ["Automation", "AppDevelopment"],
        github: 'https://github.com/MaxRS07/notion-integration',
        media: [notion_1, notion_2]
    },
    {
        name: "GRID Watch",
        desc: "A full-stack web application to track player statistics and match history for competitive games like CS:GO and Valorant using GRID.gg data. AI reports give personalized strategies and advice. Built with NextJS, TypeScript, and GraphQL. Created for and submitted to the 2026 Cloud9 X JETBRAINS Hackathon.",
        icons: [NextJS, TS, CSS, GraphQL],
        media: [grid_watch_1, grid_watch_2, grid_watch_3, grid_watch_4, grid_watch_5],
        tags: ["AgenticAI", "WebDevelopment", "AIML"],
        github: 'https://github.com/MaxRS07/GRID-Watch',
        url: 'https://grid-watch-page-kn68koo1y-max-siebengartners-projects.vercel.app/'
    },
    {
        name: "Nova Test",
        desc: "Nova Test is a web application that runs AI-powered browser agents against a target URL to automatically detect UI faults and visual errors. It provides a real-time dashboard for launching test fleets, monitoring agent activity over WebSockets, and reviewing the resulting fault reports. Built for Amazon Nova AI Hackathon 2026",
        icons: [
            NextJS,
            TS,
            SB,
            Python
        ],
        media: [nova_1, nova_2, nova_3, nova_4, nova_5],
        url: undefined,
        github: "https://github.com/MaxRS07/nova-flow",
        tags: ["AgenticAI", "WebDevelopment", "AIML", "Automation"]
    },
    {
        name: "Greenline CI",
        desc: "A CI agent that integrates into your projects to provide optimization advice, predict energy usage, and generate sustainability scores. Features multiple configuration options to block merge requests that don't meet sustainability requirements, plus chat support for tailored recommendations.",
        icons: [
            Python,
            YAML
        ],
        tags: ["AgenticAI", "CI"],
        media: [
            greenline_1
        ],
        url: "https://gitlab.com/gitlab-ai-hackathon/participants/34577036",
        gitlab: "https://gitlab.com/gitlab-ai-hackathon/participants/34577036" // No GitHub link found in repository
    }
]