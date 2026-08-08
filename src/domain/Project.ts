import type { Technology } from "./Technology";

export interface Project {
    id: string;
    index: string;

    title: string;
    role: string;
    focus: string;
    status: string;
    description: string;

    technologies: readonly Technology[];

    featured: boolean;
    featuredOrder: number;

    demoUrl?: string;
    sourceUrl?: string;
}