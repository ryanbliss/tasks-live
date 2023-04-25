
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
                    about: TEAMS_BASE_ROUTE + "/meeting/about",
                    board: TEAMS_BASE_ROUTE + "/meeting/board/:boardId",
                },
            },
            sidePanel: TEAMS_BASE_ROUTE + "/side-panel",
        },
    },
}