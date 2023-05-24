import { PresenceState } from "@microsoft/live-share";
import { FC, useEffect, useState } from "react";
import {
    AvatarGroup,
    AvatarGroupItem,
    AvatarGroupPopover,
    partitionAvatarGroupItems,
} from "@fluentui/react-components";
import { useAppContext } from "../../../context";
import { FlexRow, ModalContainer } from "../../common";

interface ILiveAvatarsProps {}

/**
 * Shows the online user avatars in a Live Share session
 */
export const LiveAvatars: FC<ILiveAvatarsProps> = () => {
    // TODO: remove after demo
    const [showUserListModal, setShowUserListModal] = useState(false);
    const { allUsers } = useAppContext();
    const { inlineItems, overflowItems } = partitionAvatarGroupItems({
        items: allUsers
            .filter((user) => user.state === PresenceState.online)
            .map((user) => user.displayName ?? "Unknown"),
        maxInlineItems: 5,
    });

    // TODO: remove after demo
    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {  
            if (e.ctrlKey && e.shiftKey && e.code === 'KeyY') {
                setShowUserListModal(true);
            }
        };
        document.addEventListener('keydown', onKeyDown);
        return () => {
            document.removeEventListener('keydown', onKeyDown);
        };
    }, []);

    return (
        <>
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
            {/* TODO: Remove after demo */}
            {showUserListModal && (
                <ModalContainer title="Dev users menu" onDidDismiss={() => {
                    setShowUserListModal(false);
                }}>
                    {allUsers.map((user) => (
                        <FlexRow key={`user-list-item-${user.userId}`}>
                            <div>
                                {`${user.displayName} / ${user.userId}`}
                            </div>
                        </FlexRow>
                    ))}
                </ModalContainer>
            )}
        </>
    );
};
