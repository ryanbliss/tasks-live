import { FC, memo, useRef } from "react";
import { IN_TEAMS } from "../../constants";
import { ILiveShareHost } from "@microsoft/live-share";
import { LiveShareHost } from "@microsoft/teams-js";
import { LiveBrowser } from "../../components/live-browser";
import { LiveShareProvider } from "@microsoft/live-share-react";
import { TestLiveShareHost } from "../../utils/TestLiveShareHost";

export const TeamsMeetingStagePage: FC = memo(() => {
    const host = useRef<ILiveShareHost>(
        IN_TEAMS ? LiveShareHost.create() : TestLiveShareHost.create()
    );
    return (
        <LiveShareProvider host={host.current} joinOnLoad>
            <LiveBrowser />
        </LiveShareProvider>
    );
});
