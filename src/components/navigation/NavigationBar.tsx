import { FC, useState } from "react";
import { FlexRow } from "../flex";
import { Button, Subtitle2Stronger, tokens } from "@fluentui/react-components";
import { useNavigationContext } from "../../context";
import { useParams } from "react-router-dom";
import { useKanbanBoard } from "../../hooks";

interface INavigationBarProps {
    routePrefix: string;
}

export const NavigationBar: FC<INavigationBarProps> = ({ routePrefix }) => {
    const { boardId } = useParams<{ boardId?: string; }>();
    const board = useKanbanBoard(boardId);
    
    const { navigate } = useNavigationContext();
    return (
        <FlexRow
            vAlign="center"
            style={{
                padding: "8px",
                backgroundColor: tokens.colorNeutralBackground4,
                boxShadow: "2px 2px 4px 0px rgba(0, 0, 0, 0.2)",
            }}
        >
            <Button
                appearance="subtle"
                onClick={() => {
                    navigate(routePrefix + "/");
                }}
            >
                {"Home"}
            </Button>
            { !!board && (
                <Subtitle2Stronger>
                    { board.title }
                </Subtitle2Stronger>
            )}
        </FlexRow>
    );
};
