import { FC, memo, useCallback } from "react";
import { IKanbanBoard, ITask } from "../../../interfaces";
import { ModalContainer } from "../../common/modal";
import { AppRoutes } from "../../../constants";
import { DropdownInput } from "../../common/input";
import { useAppContext } from "../../../context";
import { LiveTextInput } from "../../live-browser";
import { FlexColumn } from "../../common";

interface IKanbanTaskModalProps {
    task: ITask | undefined;
    board: IKanbanBoard;
    setTask: (task: ITask) => void;
}

export const KanbanTaskModal: FC<IKanbanTaskModalProps> = memo(
    ({ task, board, setTask }) => {
        const { allUsers } = useAppContext();

        const dismissRoute =
            `${AppRoutes.teams.children.meeting.children.board.base}`.replace(
                ":boardId",
                board.id
            );

        /**
         * Callback for assigning a task to a user from a dropdown menu
         */
        const onDidAssignTask = useCallback(
            (userId: string) => {
                if (!task) return;
                const newTask: ITask = {
                    ...task,
                    assignedToId: userId,
                };
                setTask(newTask);
            },
            [task, setTask]
        );
        // Callback to reassign a task to a new column in the kanban board.
        const onChangeTaskColumn = (columnId: string) => {
            if (!task) return;
            const newTask: ITask = {
                ...task,
                columnId: columnId,
            };
            setTask(newTask);
        }

        if (!task) {
            return (
                <ModalContainer dismissRoute={dismissRoute}>
                    {"This task does not exist"}
                </ModalContainer>
            );
        }
        const userOptions = allUsers.map((user) => ({
            id: user.userId,
            displayText: user?.displayName ?? "",
        }));
        const columnOptions = board.columns.map((column) => ({
            id: column.id,
            displayText: column.title,
        }));
        return (
            <ModalContainer dismissRoute={dismissRoute} title={task.title}>
                <FlexColumn gap="small">
                    <DropdownInput
                        id="assign-to"
                        label="Assign to"
                        placeholder="Select a user..."
                        value={task?.assignedToId}
                        options={userOptions}
                        onDidSelect={onDidAssignTask}
                    />
                    <DropdownInput
                        id="column-assign"
                        label="Column"
                        placeholder="Select a column..."
                        value={task?.columnId}
                        options={columnOptions}
                        onDidSelect={onChangeTaskColumn}
                    />
                    <LiveTextInput
                        uniqueKey={`board/${board.id}/tasks/${task.id}/description`}
                        label="Description"
                        placeholder="Enter a description..."
                    />
                    <LiveTextInput
                        uniqueKey={`board/${board.id}/tasks/${task.id}/status`}
                        label="Status"
                        placeholder="Enter a status..."
                    />
                </FlexColumn>
            </ModalContainer>
        );
    }
);
