import type { Availability } from "./Availability";
import { workCapacities } from "./workCapacities";

export const availability: Availability = {
  status: "available",

  headline: "Currently open to new opportunities.",

  capacities: [
    workCapacities.fullTime,
    workCapacities.partTime,
    workCapacities.contract,
    workCapacities.temporary,
  ],

  locations: [
    "United Kingdom",
  ],

  workingModels: [
    "Remote",
    "Hybrid",
    "On-site",
  ],
};