import { FC } from "react";
import { FlexRow } from "../../common";
import { Button, Subtitle2Stronger, tokens } from "@fluentui/react-components";
import { useAppContext } from "../../../context";
import { useParams } from "react-router-dom";
import { useKanbanBoard } from "../../../hooks";
import { Home24Filled } from "@fluentui/react-icons";
import { LiveAvatars } from "./LiveAvatars";
import { AppRoutes } from "../../../constants";

export const LiveNavigationBar: FC = () => {
    const { boardId } = useParams<{ boardId?: string }>();
    const board = useKanbanBoard(boardId);

    const { navigate } = useAppContext();

    const onNavigateHome = () => {
        navigate(AppRoutes.teams.children.meeting.children.home);
    };

    return (
        <FlexRow
            gap="small"
            vAlign="center"
            spaceBetween
            style={{
                padding: "8px",
                backgroundColor: tokens.colorNeutralBackground1,
                boxShadow: tokens.shadow4,
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
            <LiveAvatars />
        </FlexRow>
    );
};
