import { FC } from "react";
import { useParams } from "react-router-dom";
import { FlexColumn, KanbanBoard } from "../../components";
import { useKanbanBoard } from "../../hooks";
import { LiveScrollView } from "../../components/live-browser/internals";

export const BrowseKanbanBoardPage: FC = () => {
    const { boardId } = useParams<{ boardId: string }>();
    const board = useKanbanBoard(boardId);

    if (!board) {
        return <FlexColumn>{"No board found for " + boardId}</FlexColumn>;
    }
    return (
        <FlexColumn fill="both">
            <LiveScrollView
                uniqueKey="kanban-columns"
                direction="horizontal"
                fill="both"
            >
                <KanbanBoard board={board} />
            </LiveScrollView>
        </FlexColumn>
    );
};
