import { FC } from "react";
import { FlexRow } from "../flex";
import { Button, Subtitle2Stronger, tokens } from "@fluentui/react-components";
import { useNavigationContext } from "../../context";
import { useParams } from "react-router-dom";
import { useKanbanBoard } from "../../hooks";
import { Home24Filled } from "@fluentui/react-icons";
import { LiveAvatars } from "./internal/LiveAvatars";

interface INavigationBarProps {
    routePrefix: string;
}

export const NavigationBar: FC<INavigationBarProps> = ({ routePrefix }) => {
    const { boardId } = useParams<{ boardId?: string }>();
    const board = useKanbanBoard(boardId);

    const { navigate } = useNavigationContext();
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
                    onClick={() => {
                        navigate(routePrefix + "/");
                    }}
                />
                {!!board && (
                    <Subtitle2Stronger>{board.title}</Subtitle2Stronger>
                )}
            </FlexRow>
            <LiveAvatars />
        </FlexRow>
    );
};
