import { FC } from "react";
import { FlexRow } from "../../common/flex";
import { tokens } from "@fluentui/react-theme";
import { LiveCanvasControls } from "./LiveCanvasControls";
import { InkingManager } from "@microsoft/live-share-canvas";
import { PresenceUser } from "../../../interfaces";
import { DropdownInput } from "../../common/input";
import { useLiveState } from "@microsoft/live-share-react";
import { ASSIGNED_TO_FILTER_DEFAULT, LiveObjectKeys } from "../../../constants";

interface ILiveSessionFloatingControlsProps {
    width: number;
    inkingManager?: InkingManager;
    inkingActive: boolean;
    setInkingActive: (enabled: boolean) => void;
    users: PresenceUser[];
}

export const LiveSessionControls: FC<
    ILiveSessionFloatingControlsProps
> = ({ width, inkingManager, inkingActive, setInkingActive, users }) => {
    const [assignedToFilterId, setAssignedToFilterId] = useLiveState<string>(
        LiveObjectKeys.ASSIGNED_TO_FILTER, // unique key for this useLiveState instance
        ASSIGNED_TO_FILTER_DEFAULT, // default value
    );
    const options = [
        {
            id: ASSIGNED_TO_FILTER_DEFAULT,
            displayText: "Everyone's tasks",
        },
        ...users.map((user) => ({
            id: user.userId,
            displayText: user?.displayName ?? "",
        })),
    ];

    return (
        <FlexRow
            hAlign="center"
            style={{
                bottom: "24px",
                left: 0,
                width: `${width}px`,
                position: "fixed",
                zIndex: 3,
                borderRadius: "4px",
                shadow: tokens.shadow28,
                pointerEvents: "none",
            }}
        >
            <FlexRow
                vAlign="center"
                style={{
                    paddingLeft: "8px",
                    paddingTop: "4px",
                    paddingBottom: "4px",
                    paddingRight: "4px",
                    backgroundColor: tokens.colorNeutralBackground6,
                    borderRadius: "4px",
                    shadow: tokens.shadow28,
                    pointerEvents: "auto",
                }}
            >
                <DropdownInput
                    id="assigned-to-filter"
                    options={options}
                    value={assignedToFilterId}
                    onDidSelect={setAssignedToFilterId}
                />
                {inkingManager && (
                    <LiveCanvasControls
                        inkingManager={inkingManager}
                        isEnabled={inkingActive}
                        setIsEnabled={setInkingActive}
                    />
                )}
            </FlexRow>
        </FlexRow>
    );
};
