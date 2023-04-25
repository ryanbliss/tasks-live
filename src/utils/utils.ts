import { KANBAN_BOARDS } from "../constants";
import { IKanbanBoard } from "../interfaces";

export function getFluidEnvironment(): "teams" | "local" {
    const currentUrl = window.location.href;
    // Check if using HistoryRouter
    const url = currentUrl.includes("/#/")
        ? new URL(`${window.location.href.split("/#/").join("/")}`)
        : new URL(window.location.href);
    const params = url.searchParams;
    const env = params.get("fluidEnv");
    if (env && ["teams", "local"].includes(env)) {
        return env as "teams" | "local";
    }
    return "local";
}

export function fillArray(n: number): number[] {
    return Array.from({ length: n }, (_, i) => i + 1);
}

export function getKanbanBoard(id: string): IKanbanBoard | undefined {
    return KANBAN_BOARDS.find((board) => board.id === id);
}
