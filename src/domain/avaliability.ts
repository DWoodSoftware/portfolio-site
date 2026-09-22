import type { Availability } from "./Availability";
import { workCapacities } from "./workCapacities";

export const availability: Availability = {
  status: "available",

  headline: "Currently open to software engineering roles, contracts and interesting technical work.",

  capacities: [
    workCapacities.fullTime,
    workCapacities.contract,
    workCapacities.freelance,
  ],

  locations: [
    "United Kingdom",
  ],

  workingModels: [
    "Remote",
    "Hybrid",
  ],
};