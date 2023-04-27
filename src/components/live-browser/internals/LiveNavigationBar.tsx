import { FC } from "react";
import { FlexRow } from "../../common";
import { Button, Subtitle2Stronger, tokens } from "@fluentui/react-components";
import { useNavigationContext } from "../../../context";
import { useParams } from "react-router-dom";
import { useKanbanBoard } from "../../../hooks";
import { Home24Filled } from "@fluentui/react-icons";
import { LiveAvatars } from "./LiveAvatars";
import { PresenceUser } from "../../../interfaces";

interface INavigationBarProps {
    routePrefix: string;
    users: PresenceUser[];
}

export const LiveNavigationBar: FC<INavigationBarProps> = ({ routePrefix, users }) => {
    const { boardId } = useParams<{ boardId?: string }>();
    const board = useKanbanBoard(boardId);

    const { navigate } = useNavigationContext();

    const onNavigateHome = () => {
        navigate(routePrefix + "/");
    };

    return (
        <FlexRow
            gap="small"
            vAlign="center"
            spaceBetween
            style={{
                padding: "8px",
                backgroundColor: tokens.colorNeutralBackground1,
                boxShadow: "2px 2px 4px 0px rgba(0, 0, 0, 0.2)",
            }}
        >
            <FlexRow gap="small" vAlign="center">
                <Button
                    icon={<Home24Filled />}
                    title={"Home"}
                    appearance="subtle"
                    onClick={onNavigateHome}
                />
                {!!board && (
                    <Subtitle2Stronger>{board.title}</Subtitle2Stronger>
                )}
            </FlexRow>
            <LiveAvatars users={users} />
        </FlexRow>
    );
};
