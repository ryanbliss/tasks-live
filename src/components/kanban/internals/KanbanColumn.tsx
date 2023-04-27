import { FC } from "react";
import {
    IKanbanBoard,
    IKanbanColumn,
    ITask,
    PresenceUser,
} from "../../../interfaces";
import { FlexColumn } from "../../flex";
import { tokens } from "@fluentui/react-theme";
import { LiveScrollView } from "../../live-browser/internals";
import { Subtitle2 } from "@fluentui/react-components";
import { KanbanTask } from "./KanbanTask";

interface IKanbanColumnProps {
    board: IKanbanBoard;
    column: IKanbanColumn;
    setTask: (updatedTask: ITask) => void;
    users: PresenceUser[];
}

export const KanbanColumn: FC<IKanbanColumnProps> = ({
    board,
    column,
    setTask,
    users,
}) => {
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
                borderRadius: "8px",
                boxShadow: tokens.shadow16,
            }}
            gap="smaller"
        >
            <Subtitle2>{column.title}</Subtitle2>
            <FlexColumn fill="height">
                <LiveScrollView
                    uniqueKey={`scroll/${board.id}/${column.id}`}
                    fill="both"
                >
                    <FlexColumn
                        name={`${column.title} tasks`}
                        gap="small"
                        style={{
                            paddingBottom: "24px",
                        }}
                    >
                        {tasks.map((task) => (
                            <KanbanTask
                                key={task.id}
                                board={board}
                                task={task}
                                setTask={setTask}
                                user={
                                    task.assignedToId
                                        ? users.find(
                                              (user) =>
                                                  user.userId ===
                                                  task.assignedToId
                                          )
                                        : undefined
                                }
                            />
                        ))}
                    </FlexColumn>
                </LiveScrollView>
            </FlexColumn>
        </FlexColumn>
    );
};
