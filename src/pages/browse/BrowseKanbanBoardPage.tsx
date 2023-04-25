import { FC } from "react";
import { useParams } from "react-router-dom";
import { FlexColumn, FlexRow, KanbanColumn } from "../../components";
import { useKanbanBoard } from "../../hooks";
import { LiveScrollView } from "../../components/live-browser/internals";
import { tokens } from "@fluentui/react-theme";

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
                <FlexRow fill="both" style={{ paddingRight: "24px", }}>
                    {board.columns.map((column) => (
                        <FlexColumn
                            key={column.id}
                            fill="height"
                            style={{
                                marginTop: "24px",
                                marginBottom: "24px",
                                marginLeft: "24px",
                            }}
                        >
                            <KanbanColumn board={board} column={column} />
                        </FlexColumn>
                    ))}
                </FlexRow>
            </LiveScrollView>
        </FlexColumn>
    );
};
