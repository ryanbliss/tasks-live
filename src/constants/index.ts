import { getFluidEnvironment } from "../utils";

export * from "./AppRoutes";
export * from "./Strings";
export * from "./KanbanBoards";
export * from "./LiveObjectKeys";
export const FLUID_ENVIRONMENT = getFluidEnvironment();
export const IN_TEAMS = FLUID_ENVIRONMENT === "teams";
