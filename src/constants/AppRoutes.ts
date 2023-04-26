
const TEAMS_BASE_ROUTE = "/teams";
export const AppRoutes = {
    home: "/",
    teams: {
        base: TEAMS_BASE_ROUTE,
        children: {
            config: TEAMS_BASE_ROUTE + "/config",
            meeting: {
                base: TEAMS_BASE_ROUTE + "/meeting",
                children: {
                    home: TEAMS_BASE_ROUTE + "/meeting/",
                    board: {
                        base: TEAMS_BASE_ROUTE + "/meeting/board/:boardId",
                        children: {
                            task: TEAMS_BASE_ROUTE + "/meeting/board/:boardId/task/:taskId",
                        },
                    },
                },
            },
            sidePanel: TEAMS_BASE_ROUTE + "/side-panel",
        },
    },
}