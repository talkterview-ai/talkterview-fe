import type { Profile } from "@/entities/user/models/types";

export interface UpdateRoleRequest extends Pick<Profile, "field" | "role"> {}
