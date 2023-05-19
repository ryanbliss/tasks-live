import { FC } from "react";
import {
    IKanbanBoard,
    IKanbanColumn,
    ITask,
} from "../../../interfaces";
import { FlexColumn } from "../../common/flex";
import { tokens } from "@fluentui/react-theme";
import { LiveScrollView } from "../../live-browser/internals";
import { Subtitle2 } from "@fluentui/react-components";
import { KanbanTask } from "./KanbanTask";
import { useAppContext } from "../../../context";

interface IKanbanColumnProps {
    board: IKanbanBoard;
    column: IKanbanColumn;
}

export const KanbanColumn: FC<IKanbanColumnProps> = ({
    board,
    column,
}) => {
    const { allUsers } = useAppContext();
    const tasks = board.tasks.filter((task) => task.columnId === column.id);
    return (
        <FlexColumn
            style={{
                marginTop: "24px",
                marginBottom: "24px",
                marginLeft: "24px",
            }}
        >
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
                                    user={
                                        task.assignedToId
                                            ? allUsers.find(
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
        </FlexColumn>
    );
};
