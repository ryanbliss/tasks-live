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

const randomFrontNames = [
    "Dog",
    "Cat",
    "Clippy",
    "Micro",
    "Snake",
    "Dr",
    "Dino",
    "Gamer",
    "Rock",
    "Paper",
    "Scissors",
];

const randomBackNames = [
    "Dev",
    "Official",
    "Main",
    "Purse",
    "Star",
    "Martian",
    "Gaze",
    "Lock",
    "World",
    "Smile",
    "Stylist",
];

export const getRandomName = (): string => {
    const avatars = [];
    for (let i = 0; i <= 11; i++) {
        avatars.push(i);
    }

    function random<A>(list: A[]): A {
        return list[Math.floor(Math.random() * list.length)];
    }

    const randomNumbers = [];
    for (let i = 0; i <= 99; i++) {
        randomNumbers.push(i);
    }
    const randomName = `${random(randomFrontNames)}${random(
        randomBackNames
    )}${random(randomNumbers)}`;

    return randomName;
};
