import { useLivePresence } from "@microsoft/live-share-react";
import { PresenceState } from "@microsoft/live-share";
import { FC } from "react";
import { getRandomName } from "../../../utils";
import { AvatarGroup, AvatarGroupItem, AvatarGroupPopover, partitionAvatarGroupItems } from "@fluentui/react-components";
import { LOCAL_RANDOM_NAME } from "../../../constants";

interface ILiveAvatarsProps {}

export const LiveAvatars: FC<ILiveAvatarsProps> = () => {
    // TODO: remove custom display name once new presence changes are in
    const { allUsers } = useLivePresence<{
        displayName: string;
    }>(undefined, {
        displayName: LOCAL_RANDOM_NAME,
    });

    const { inlineItems, overflowItems } = partitionAvatarGroupItems({
        items: allUsers
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
                        <AvatarGroupItem name={name} key={name} />
                    ))}
                </AvatarGroupPopover>
            )}
        </AvatarGroup>
    );
};
