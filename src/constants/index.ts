import { getFluidEnvironment } from "../utils";

export * from "./AppRoutes";
export * from "./Strings";
export * from "./KanbanBoards";
export const FLUID_ENVIRONMENT = getFluidEnvironment();
export const IN_TEAMS = FLUID_ENVIRONMENT === "teams";
console.log(IN_TEAMS);
