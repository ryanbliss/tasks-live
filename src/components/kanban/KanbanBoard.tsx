import { FC, memo, useCallback, useMemo } from "react";
import { IKanbanBoard, ITask } from "../../interfaces";
import { FlexColumn, FlexRow } from "../common";
import { KanbanColumn } from "./internals/KanbanColumn";
import { useParams } from "react-router-dom";
import { KanbanTaskModal } from "./internals/KanbanTaskModal";
import { useLiveAssignedToFilter } from "../../hooks";
import { useSharedMap } from "@microsoft/live-share-react";

interface IKanbanBoardProps {
    board: IKanbanBoard;
}

export const KanbanBoard: FC<IKanbanBoardProps> = memo(({ board }) => {
    const { taskId } = useParams<{ taskId?: string }>();

    // The only part of the kanban board this app supports real-time edits on is tasks.
    // For simplicity, we use the tasks from `board` as an initial value in a SharedMap.
    // The values in the `tasksMap` become our new source of truth in `liveBoard`.
    const {
        liveBoard,
        setTask
    } = useLiveKanbanBoard(board);

    return (
        <>
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
                        <KanbanColumn
                            board={liveBoard}
                            column={column}
                            setTask={setTask}
                        />
                    </FlexColumn>
                ))}
            </FlexRow>
            {taskId && (
                <KanbanTaskModal
                    task={liveBoard.tasks.find((task) => task.id === taskId)}
                    board={liveBoard}
                    setTask={setTask}
                />
            )}
        </>
    );
});

function boardTasksToMap(board: IKanbanBoard): Map<string, ITask> {
    const tasksMap: Map<string, ITask> = new Map();
    board.tasks.forEach((task) => {
        tasksMap.set(task.id, task);
    });
    return tasksMap;
}

const useLiveKanbanBoard = (board: IKanbanBoard) => {
    // Create a real-time representation of tasks in the board using a Fluid SharedMap
    const { map: tasksMap, setEntry: setTaskEntry } = useSharedMap(
        `tasks/${board.id}`,
        boardTasksToMap(board)
    );
    const [assignedToFilterId] = useLiveAssignedToFilter();

    // The only part of the kanban board this app supports real-time edits on is tasks.
    // To keep it pretty simple, we just replace the tasks set in IKanbanBoard with the filtered live tasks.
    const liveBoard: IKanbanBoard = useMemo<IKanbanBoard>(() => {
        return {
            ...board,
            tasks: [...tasksMap.values()].filter((task) =>
                assignedToFilterId !== "everyone"
                    ? assignedToFilterId === task.assignedToId
                    : true
            ),
        };
    }, [tasksMap, board, assignedToFilterId]);

    const setTask = useCallback(
        (updatedTask: ITask) => {
            setTaskEntry(updatedTask.id, updatedTask);
        },
        [setTaskEntry]
    );

    return {
        liveBoard,
        setTask,
    };
}
