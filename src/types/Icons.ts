import { Url } from "next/dist/shared/lib/router/router";

export interface Icon {
    name: string,
    imgUrl: Url,
    altUrl?: Url,
}

// Simple Icons CDN — `col` overrides the brand colour for icons that are black by default
// (they'd vanish against the dark theme).
const createSkill = (name: string, slug: string = name, col?: string): Icon => {
    return { name: name, imgUrl: `https://cdn.simpleicons.org/${slug}` + (col ? `/${col}` : '') }
}

const Rust: Icon = createSkill('Rust', 'rust', 'DEA584')
const NextJS: Icon = createSkill('Next.js', 'nextdotjs', '9CA3AF')
const TS: Icon = createSkill("TypeScript", 'typescript')
const JS: Icon = createSkill("JavaScript", 'javascript')
const React: Icon = createSkill("React", 'react')
const CSS: Icon = createSkill("CSS", 'css')
const GraphQL: Icon = createSkill("GraphQL", 'graphql')
const SB: Icon = createSkill("Supabase", 'supabase')
const Python: Icon = createSkill("Python", 'python')
const YAML: Icon = createSkill("YAML", 'yaml')
const Tauri: Icon = createSkill("Tauri", 'tauri')
const FastAPI: Icon = createSkill("FastAPI", 'fastapi')
const RISCV: Icon = createSkill("RISC-V", 'riscv', 'F9B21D')
const QEMU: Icon = createSkill("QEMU", 'qemu')
const Tailwind: Icon = createSkill("Tailwind CSS", 'tailwindcss')
const Docker: Icon = createSkill("Docker", 'docker')
const Postgres: Icon = createSkill("Postgres", 'postgresql')
const Figma: Icon = createSkill("Figma", 'figma')
const Linux: Icon = createSkill("Linux", 'linux', 'FCC624')
const Git: Icon = createSkill("Git", 'git')
const SQLite: Icon = createSkill("SQL", 'sqlite', '44A1D8')
const ScikitLearn: Icon = createSkill("scikit-learn", 'scikitlearn')
const Claude: Icon = createSkill("MCP / Claude", 'claude')
const GitLab: Icon = createSkill("GitLab CI", 'gitlab')

export {
    Rust, NextJS, TS, JS, React, CSS, GraphQL, SB, Python, YAML, Tauri, FastAPI, RISCV, QEMU,
    Tailwind, Docker, Postgres, Figma, Linux, Git, SQLite, ScikitLearn, Claude, GitLab,
}
