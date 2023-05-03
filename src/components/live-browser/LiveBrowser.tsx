import { FC, useEffect, useRef } from "react";
import { FlexColumn } from "../common/flex";
import { Spinner, tokens } from "@fluentui/react-components";
import { useFluidObjectsContext, useLivePresence } from "@microsoft/live-share-react";
import { PresenceState } from "@microsoft/live-share";
import { Outlet } from "react-router-dom";
import { LiveCanvasOverlay, LiveNavigationBar, useLiveNavigate } from "./internals";
import debounce from "lodash.debounce";
import { AppContextProvider } from "../../context";
import { LOCAL_RANDOM_NAME } from "../../constants";
import { useCommonScreenSize } from "../../hooks";
import { IUserData } from "../../interfaces";

export const LiveBrowser: FC = () => {
    const browserContainerRef = useRef<HTMLDivElement | null>(null);
    const { container } = useFluidObjectsContext();
    const navigate = useLiveNavigate();

    const { allUsers, localUser, updatePresence } = useLivePresence<IUserData>(undefined, {
        // TODO: remove custom display name once new presence changes are in
        displayName: LOCAL_RANDOM_NAME,
        screenWidth: window.document.body.clientWidth,
        screenHeight: window.document.body.clientHeight,
    });
    // Calculates the lowest common denominator for screen widths & heights for all users in session.
    // This helps us ensure that cursors, strokes, and scroll views are positioned correctly for all users.
    const { commonWidth, commonHeight } = useCommonScreenSize(allUsers);

    // Effect to broadcast changes to local user's screen size whenever the window is resized.
    // That then updates the allUsers list, which causes `useCommonScreenSize` to refresh.
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
            onResize.cancel();
        };
    }, [updatePresence]);

    // If we have not yet joined the session container, we show a loading spinner
    if (!container) {
        return (
            <FlexColumn fill="both" vAlign="center" hAlign="center">
                <Spinner />
            </FlexColumn>
        );
    }
    // Otherwise, we render the LiveBrowser contents
    return (
        <AppContextProvider
            navigate={navigate}
            commonWidth={commonWidth}
            commonHeight={commonHeight}
            allUsers={allUsers}
            localUser={localUser}
        >
            <FlexColumn
                style={{
                    width: `${commonWidth}px`,
                    height: `${commonHeight}px`,
                    backgroundColor: tokens.colorNeutralBackground1,
                }}
                ref={browserContainerRef}
            >
                <LiveCanvasOverlay
                    pointerElementRef={browserContainerRef}
                />
                <LiveNavigationBar />
                <Outlet />
            </FlexColumn>
        </AppContextProvider>
    );
};
