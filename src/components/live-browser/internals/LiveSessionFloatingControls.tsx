import { FC } from "react";
import { FlexRow } from "../../common/flex";
import { tokens } from "@fluentui/react-theme";
import { InkingControls } from "./InkingControls";
import { Button } from "@fluentui/react-components";
import { InkingManager } from "@microsoft/live-share-canvas";
import { PresenceUser } from "../../../interfaces";
import { DropdownInput } from "../../common/input";
import { useLiveAssignedToFilter } from "../../../hooks";

interface ILiveSessionFloatingControlsProps {
    width: number;
    inkingManager?: InkingManager;
    inkingActive: boolean;
    setInkingActive: (enabled: boolean) => void;
    users: PresenceUser[];
}

export const LiveSessionFloatingControls: FC<
    ILiveSessionFloatingControlsProps
> = ({ width, inkingManager, inkingActive, setInkingActive, users }) => {
    const [assignedToFilterId, setAssignedToFilterId] = useLiveAssignedToFilter();
    const options = [
        {
            id: "everyone",
            displayText: "Everyone",
        },
        ...users.map((user) => ({
            id: user.userId,
            displayText: user.data?.displayName ?? "",
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
                    <InkingControls
                        inkingManager={inkingManager}
                        isEnabled={inkingActive}
                        setIsEnabled={setInkingActive}
                    />
                )}
                <Button
                    appearance="subtle"
                    size="small"
                    onClick={() => {
                        inkingManager?.clear();
                    }}
                >
                    {"Clear"}
                </Button>
            </FlexRow>
        </FlexRow>
    );
};
