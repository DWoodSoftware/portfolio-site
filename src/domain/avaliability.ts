import type { Availability } from "./Availability";
import { workCapacities } from "./workCapacities";

export const availability: Availability = {
  status: "available",

  headline: "Fideron is currently available for Q3/Q4 technical engagements and project delivery.",

  capacities: [
    workCapacities.fullTime,
    workCapacities.contract,
  ],

  locations: [
    "United Kingdom",
  ],

  workingModels: [
    "Remote",
    "Hybrid",
  ],
};