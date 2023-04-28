import { FC, useState } from "react";
import { AppRoutes, IN_TEAMS } from "../../constants";
import { TestLiveShareHost, ILiveShareHost } from "@microsoft/live-share";
import { LiveShareHost } from "@microsoft/teams-js";
import { LiveBrowser } from "../../components/live-browser";
import { LiveShareProvider } from "@microsoft/live-share-react";

export const TeamsMeetingStagePage: FC = () => {
    const [host] = useState<ILiveShareHost>(
        IN_TEAMS ? LiveShareHost.create() : TestLiveShareHost.create()
    );
    return (
        <LiveShareProvider host={host} joinOnLoad>
            <LiveBrowser routePrefix={AppRoutes.teams.children.meeting.base} />
        </LiveShareProvider>
    );
};
