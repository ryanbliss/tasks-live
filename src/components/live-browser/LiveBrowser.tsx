import { FC, useEffect, useRef } from "react";
import { FlexColumn } from "../flex";
import { Spinner, tokens } from "@fluentui/react-components";
import { useFluidObjectsContext } from "@microsoft/live-share-react";
import { PresenceState } from "@microsoft/live-share";
import { Outlet } from "react-router-dom";
import { NavigationBar } from "../navigation";
import { LiveCanvasOverlay, useLiveNavigate } from "./internals";
import debounce from "lodash.debounce";
import { NavigationProvider } from "../../context";
import { LOCAL_RANDOM_NAME } from "../../constants";
import { useCustomPresence, useCommonScreenSize } from "../../hooks";

interface ILiveBrowserProps {
    routePrefix: string;
}

export const LiveBrowser: FC<ILiveBrowserProps> = ({ routePrefix }) => {
    const browserContainerRef = useRef<HTMLDivElement | null>(null);
    const { container } = useFluidObjectsContext();
    const navigate = useLiveNavigate();

    const { allUsers, updatePresence } = useCustomPresence();
    const { width, height } = useCommonScreenSize(allUsers);

    useEffect(() => {
        const onResize = debounce((_: Event) => {
            updatePresence(PresenceState.online, {
                displayName: LOCAL_RANDOM_NAME,
                screenWidth: window.document.body.clientWidth,
                screenHeight: window.document.body.clientHeight,
            });
        }, 50);
        window.addEventListener("resize", onResize, true);
        return () => {
            window.removeEventListener("resize", onResize, true);
        };
    }, [updatePresence]);

    if (!container) {
        return (
            <FlexColumn fill="both" vAlign="center" hAlign="center">
                <Spinner />
            </FlexColumn>
        );
    }
    return (
        <NavigationProvider
            navigate={navigate}
            width={width}
            height={height}
        >
            <FlexColumn
                style={{
                    width: `${width}px`,
                    height: `${height}px`,
                    backgroundColor: tokens.colorNeutralBackground1,
                }}
                ref={browserContainerRef}
            >
                <LiveCanvasOverlay
                    width={width}
                    height={height}
                    hostRef={browserContainerRef}
                    users={allUsers}
                />
                <NavigationBar routePrefix={routePrefix} users={allUsers} />
                <Outlet />
            </FlexColumn>
        </NavigationProvider>
    );
};
