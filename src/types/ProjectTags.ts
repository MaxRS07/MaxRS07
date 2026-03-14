export interface ProjectTag {
    name: string,
    className: string
}

export const ProjectTags: Record<string, ProjectTag> = {
    "AgenticAI": { name: "Agentic AI", className: "bg-red-500/15 text-red-400 text-sm font-medium" },
    "WebDevelopment": { name: "Web Development", className: "bg-blue-500/15 text-blue-400 text-sm font-medium" },
    "AppDevelopment": { name: "App Development", className: "bg-green-500/15 text-green-400 text-sm font-medium" },
    "AIML": { name: "AI/ML", className: "bg-purple-500/15 text-purple-400 text-sm font-medium" },
    "Automation": { name: "Automation", className: "bg-amber-500/15 text-amber-400 text-sm font-medium" },
    "DataVisualization": { name: "Data Visualization", className: "bg-pink-500/15 text-pink-400 text-sm font-medium" },
    "MobileApps": { name: "Mobile Apps", className: "bg-cyan-500/15 text-cyan-400 text-sm font-medium" },
    "CI": { name: "CI", className: "bg-gray-500/15 text-gray-400 text-sm font-medium" }
}