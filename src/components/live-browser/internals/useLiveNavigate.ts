import { useEffect } from "react";
import { useLiveState } from "@microsoft/live-share-react";
import { useLocation, useNavigate } from "react-router-dom";

const ROUTE_KEY = "ROUTE_KEY";

/**
 * Sets up a synchronized router for everyone in a Live Share session.
 * @returns navigate callback for when you want to change the remote route for everyone in a Live Share session.
 */
export const useLiveNavigate = (): (route: string) => void => {
    const location = useLocation();
    const navigate = useNavigate();
    const [remoteRoute, setRemoteRoute] = useLiveState<string>(ROUTE_KEY, location.pathname);

    // When the remote route changes, navigate to that route locally
    useEffect(() => {
        if (!remoteRoute || location.pathname === remoteRoute) return;
        navigate(remoteRoute + window.location.hash ?? "");
    }, [remoteRoute, navigate]);

    return setRemoteRoute;
}
