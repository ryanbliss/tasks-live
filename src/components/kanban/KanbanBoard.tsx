import { FC, memo, useCallback, useMemo } from "react";
import { IKanbanBoard, ITask } from "../../interfaces";
import { FlexColumn, FlexRow } from "../flex";
import { KanbanColumn } from "./internals/KanbanColumn";
import { useSharedMap } from "@microsoft/live-share-react";

interface IKanbanBoardProps {
    board: IKanbanBoard;
}

function boardTasksToMap(board: IKanbanBoard): Map<string, ITask> {
    const tasksMap: Map<string, ITask> = new Map();
    board.tasks.forEach((task) => {
        tasksMap.set(task.id, task);
    });
    return tasksMap;
}

export const KanbanBoard: FC<IKanbanBoardProps> = memo(({ board }) => {
    const {
        map,
        setEntry,
        deleteEntry,
    } = useSharedMap(`tasks/${board.id}`, boardTasksToMap(board));

    const liveBoard: IKanbanBoard = useMemo<IKanbanBoard>(() => {
        return {
            ...board,
            tasks: [...map.values()],
        }
    }, [map, board]);

    const setTask = useCallback((updatedTask: ITask) => {
        setEntry(updatedTask.id, updatedTask);
    }, [setEntry]);

    return (
        <FlexRow fill="both" style={{ paddingRight: "24px" }}>
            {board.columns.map((column) => (
                <FlexColumn
                    key={column.id}
                    style={{
                        marginTop: "24px",
                        marginBottom: "24px",
                        marginLeft: "24px",
                    }}
                >
                    <KanbanColumn board={liveBoard} column={column} setTask={setTask} />
                </FlexColumn>
            ))}
        </FlexRow>
    );
});
