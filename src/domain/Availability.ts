import type { WorkCapacity } from "./WorkCapacity";

export type AvailabilityStatus =
  | "available"
  | "limited"
  | "unavailable";

export type WorkingModel =
  | "Remote"
  | "Hybrid"
  | "On-site";

export interface Availability {
  status: AvailabilityStatus;

  headline: string;

  capacities: readonly WorkCapacity[];

  locations: readonly string[];

  workingModels: readonly WorkingModel[];
}