export type WorkCapacityId =
  | "full-time"
  | "part-time"
  | "contract"
  | "temporary"
  | "freelance"
  | "personal";

export interface WorkCapacity {
  id: WorkCapacityId;
  label: string;
}