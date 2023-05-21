import { FC, useEffect, useRef } from "react";
import { FlexColumn } from "../common";
import { Spinner, tokens } from "@fluentui/react-components";
import { PresenceState } from "@microsoft/live-share";
import {
    useFluidObjectsContext,
    useLivePresence,
    useLiveState,
} from "@microsoft/live-share-react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { LiveCanvasOverlay, LiveNavigationBar } from "./internals";
import debounce from "lodash.debounce";
import { AppContextProvider } from "../../context";
import { IUserData, PresenceUser } from "../../interfaces";
import { LiveObjectKeys } from "../../constants/LiveObjectKeys";

/**
 * Live browser that wraps any page within it to do things like synchronize scroll position and maintain a common viewport.
 */
export const LiveBrowser: FC = () => {
    const browserContainerRef = useRef<HTMLDivElement | null>(null);
    const { container } = useFluidObjectsContext();
    const navigate = useLiveNavigate();

    const { allUsers, localUser, updatePresence } = useLivePresence<IUserData>(
        LiveObjectKeys.PRESENCE,
        {
            screenWidth: window.document.body.clientWidth, // initial screen width for local user
            screenHeight: window.document.body.clientHeight, // initial screen height for local user
        }
    );

    // Effect to broadcast changes to local user's screen size whenever the window is resized.
    // That then updates the allUsers list, which causes `useCommonScreenSize` to refresh.
    useEffect(() => {
        const onResize = debounce((_: Event) => {
            updatePresence({
                screenWidth: window.document.body.clientWidth,
                screenHeight: window.document.body.clientHeight,
            })
                .catch((error) => console.error(error));
        }, 50);
        window.addEventListener("resize", onResize, true);
        return () => {
            window.removeEventListener("resize", onResize, true);
            onResize.cancel();
        };
    }, [updatePresence]);

    // Calculates the lowest common denominator for screen widths & heights for all users in session.
    // This helps us ensure that cursors, strokes, and scroll views are positioned correctly for all users.
    const { commonWidth, commonHeight } = useCommonScreenSize(allUsers);

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
                <LiveCanvasOverlay pointerElementRef={browserContainerRef} />
                <LiveNavigationBar />
                <Outlet />
            </FlexColumn>
        </AppContextProvider>
    );
};

/**
 * Sets up a synchronized router for everyone in a Live Share session.
 * @returns navigate callback for when you want to change the remote route for everyone in a Live Share session.
 */
const useLiveNavigate = (): ((route: string) => void) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [remoteRoute, setRemoteRoute] = useLiveState<string>(
        LiveObjectKeys.ROUTE, // unique string value for this useLiveState instance
        location.pathname // initial value
    );

    // When the remote route changes, navigate to that route locally
    useEffect(() => {
        if (!remoteRoute || location.pathname === remoteRoute) return;
        navigate(remoteRoute + window.location.hash ?? "");
    }, [remoteRoute, navigate]);

    return setRemoteRoute;
};

/**
 * React hook that calculates the lowest-common denominator width & height for all online users.
 * For a production scenario, you might consider highest common denominator or using width of the presenter.
 * This seemed to be a good compromise for this demo.
 *
 * @param allUsers users in the Live Share session
 * @returns common width and height that all users will be able to fit within the visible screen
 */
const useCommonScreenSize = (
    allUsers: PresenceUser[]
): {
    commonWidth: number;
    commonHeight: number;
} => {
    const onlineUsers = allUsers.filter(
        (user) => user.state === PresenceState.online
    );
    const sortedWidthUsers = [...onlineUsers].sort(
        (a, b) => (a.data?.screenWidth || 0) - (b.data?.screenWidth || 0)
    );
    const width =
        sortedWidthUsers.length > 0
            ? sortedWidthUsers[0].data?.screenWidth
            : window.document.body.clientWidth;
            
    const sortedHeightUsers = [...onlineUsers].sort(
        (a, b) => (a.data?.screenHeight || 0) - (b.data?.screenHeight || 0)
    );
    const height =
        sortedHeightUsers.length > 0
            ? sortedHeightUsers[0].data?.screenHeight
            : window.document.body.clientHeight;
    return {
        commonWidth: width ?? window.document.body.clientWidth,
        commonHeight: height ?? window.document.body.clientHeight,
    };
};
