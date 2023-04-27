import { PresenceState } from "@microsoft/live-share";
import { FC } from "react";
import {
    AvatarGroup,
    AvatarGroupItem,
    AvatarGroupPopover,
    partitionAvatarGroupItems,
} from "@fluentui/react-components";
import { PresenceUser } from "../../../interfaces";

interface ILiveAvatarsProps {
    users: PresenceUser[];
}

export const LiveAvatars: FC<ILiveAvatarsProps> = ({users}) => {
    const { inlineItems, overflowItems } = partitionAvatarGroupItems({
        items: users
            .filter((user) => user.data && user.state === PresenceState.online)
            .map((user) => user.data!.displayName),
    });

    return (
        <AvatarGroup layout="stack">
            {inlineItems.map((name) => (
                <AvatarGroupItem name={name} key={name} />
            ))}

            {overflowItems && (
                <AvatarGroupPopover>
                    {overflowItems.map((name) => (
                        <AvatarGroupItem name={name} key={name} title={name} />
                    ))}
                </AvatarGroupPopover>
            )}
        </AvatarGroup>
    );
};
