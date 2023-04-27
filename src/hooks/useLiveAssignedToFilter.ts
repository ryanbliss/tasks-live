import { SetLiveStateAction, useLiveState } from "@microsoft/live-share-react";

export const FILTER_BY_EVERYONE_ID = "everyone";

export const useLiveAssignedToFilter = (): [string, SetLiveStateAction<string>] => {
    return useLiveState<string>(
        "assigned-to-filter",
        FILTER_BY_EVERYONE_ID
    );
}
