import { IUseLivePresenceResults, useLivePresence } from "@microsoft/live-share-react";
import { IUserData } from "../interfaces";
import { LOCAL_RANDOM_NAME } from "../constants";

export const useCustomPresence = (): IUseLivePresenceResults<IUserData> => {
    // TODO: remove custom display name once new presence changes are in
    return useLivePresence<IUserData>(undefined, {
        displayName: LOCAL_RANDOM_NAME,
        screenWidth: window.document.body.clientWidth,
        screenHeight: window.document.body.clientHeight,
    });
}