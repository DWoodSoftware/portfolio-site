import type { Technology } from "./Technology";
import type { WorkCapacity } from "./WorkCapacity";

export interface Project {
    id: string;
    index: string;

    title: string;
    role: string;
    focus: string;
    status: string;
    description: string;

    capacity: WorkCapacity;

    technologies: readonly Technology[];

    featured: boolean;
    featuredOrder: number;

    demoUrl?: string;
    sourceUrl?: string;
}