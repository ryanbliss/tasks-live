import { FC, memo, useCallback, useMemo } from "react";
import { IKanbanBoard, ITask, IUserData } from "../../interfaces";
import { FlexColumn, FlexRow } from "../flex";
import { KanbanColumn } from "./internals/KanbanColumn";
import {
    useLivePresence,
    useLiveState,
    useSharedMap,
} from "@microsoft/live-share-react";
import { useParams } from "react-router-dom";
import { KanbanTaskModal } from "./internals/KanbanTaskModal";
import { LOCAL_RANDOM_NAME } from "../../constants";

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
    const { taskId } = useParams<{ taskId?: string }>();
    const { map, setEntry, deleteEntry } = useSharedMap(
        `tasks/${board.id}`,
        boardTasksToMap(board)
    );
    // TODO: remove custom display name once new presence changes are in
    const { allUsers } = useLivePresence<IUserData>(undefined, {
        displayName: LOCAL_RANDOM_NAME,
    });
    const [assignedToFilterId] = useLiveState<string>(
        "assigned-to-filter",
        "everyone"
    );

    const liveBoard: IKanbanBoard = useMemo<IKanbanBoard>(() => {
        return {
            ...board,
            tasks: [...map.values()].filter((task) =>
                assignedToFilterId !== "everyone"
                    ? assignedToFilterId === task.assignedToId
                    : true
            ),
        };
    }, [map, board, assignedToFilterId]);

    const setTask = useCallback(
        (updatedTask: ITask) => {
            setEntry(updatedTask.id, updatedTask);
        },
        [setEntry]
    );

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
                            users={allUsers}
                        />
                    </FlexColumn>
                ))}
            </FlexRow>
            {taskId && (
                <KanbanTaskModal
                    task={liveBoard.tasks.find((task) => task.id === taskId)}
                    board={liveBoard}
                    setTask={setTask}
                    users={allUsers}
                />
            )}
        </>
    );
});
