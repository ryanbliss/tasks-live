import { FC } from "react";
import { IKanbanBoard, IKanbanColumn } from "../../interfaces";
import { FlexColumn, FlexRow } from "../flex";
import { tokens } from "@fluentui/react-theme";
import { LiveScrollView } from "../live-browser/internals";
import { Card, Subtitle2 } from "@fluentui/react-components";
import { KanbanTask } from "./internals/KanbanTask";

interface IKanbanColumnProps {
    board: IKanbanBoard;
    column: IKanbanColumn;
}

export const KanbanColumn: FC<IKanbanColumnProps> = ({ board, column }) => {
    const tasks = board.tasks.filter((task) => task.columnId === column.id);
    return (
        <FlexColumn
            fill="height"
            style={{
                width: "260px",
                paddingTop: "12px",
                paddingLeft: "16px",
                paddingRight: "16px",
                backgroundColor: tokens.colorNeutralBackground4,
            }}
            gap="smaller"
        >
            <Subtitle2>{column.title}</Subtitle2>
            <FlexColumn fill="height">
                <LiveScrollView
                    uniqueKey={`${board.id}/${column.id}/scroll`}
                    fill="both"
                >
                    <FlexColumn name={`${column.title} tasks`} gap="small">
                        {tasks.map((task) => (
                            <KanbanTask key={task.id} task={task} />
                        ))}
                    </FlexColumn>
                </LiveScrollView>
            </FlexColumn>
        </FlexColumn>
    );
};
