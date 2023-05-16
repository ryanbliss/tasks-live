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

        if (!task) {
            return (
                <ModalContainer dismissRoute={dismissRoute}>
                    {"This task does not exist"}
                </ModalContainer>
            );
        }
        const options = allUsers.map((user) => ({
            id: user.userId,
            displayText: user?.displayName ?? "",
        }));
        return (
            <ModalContainer dismissRoute={dismissRoute} title={task.title}>
                <FlexColumn gap="small">
                    <DropdownInput
                        id="assign-to"
                        label="Assign to"
                        placeholder="Select a user..."
                        value={task?.assignedToId}
                        options={options}
                        onDidSelect={onDidAssignTask}
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
