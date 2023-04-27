import { FC } from "react";
import { AppRoutes, IN_TEAMS } from "../../constants";
import { TestLiveShareHost, ILiveShareHost } from "@microsoft/live-share";
import { LiveShareHost } from "@microsoft/teams-js";
import { LiveBrowser } from "../../components/live-browser";
import { LiveShareProvider } from "@microsoft/live-share-react";

const host: ILiveShareHost = IN_TEAMS
    ? LiveShareHost.create()
    : TestLiveShareHost.create();
export const TeamsMeetingStagePage: FC = () => {
    return (
        <LiveShareProvider host={host} joinOnLoad>
            <LiveBrowser routePrefix={AppRoutes.teams.children.meeting.base} />
        </LiveShareProvider>
    );
};
