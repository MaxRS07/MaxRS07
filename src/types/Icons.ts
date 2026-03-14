import { Url } from "next/dist/shared/lib/router/router";

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

export { Rust, NextJS, TS, React, CSS, GraphQL, SB, Python, YAML }