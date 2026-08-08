import type { WorkCapacity } from "./WorkCapacity";

export const workCapacities = {
  fullTime: {
    id: "full-time",
    label: "Full-time",
  },

  partTime: {
    id: "part-time",
    label: "Part-time",
  },

  contract: {
    id: "contract",
    label: "Contract",
  },

  temporary: {
    id: "temporary",
    label: "Temporary",
  },

  freelance: {
    id: "freelance",
    label: "Freelance",
  },

  personal: {
    id: "personal",
    label: "Personal project",
  },
} as const satisfies Record<string, WorkCapacity>;