import { FC, memo, useCallback } from "react";
import { IKanbanBoard, ITask, PresenceUser } from "../../../interfaces";
import { ModalContainer } from "../../modal";
import { AppRoutes, LOCAL_RANDOM_NAME } from "../../../constants";
import { DropdownInput } from "../../input";
import { useLivePresence } from "@microsoft/live-share-react";

interface IKanbanTaskModalProps {
    task: ITask | undefined;
    board: IKanbanBoard;
    setTask: (task: ITask) => void;
    users: PresenceUser[];
}

export const KanbanTaskModal: FC<IKanbanTaskModalProps> = memo(
    ({ task, board, setTask, users }) => {
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
        const options = users.map((user) => ({
            id: user.userId,
            displayText: user.data?.displayName ?? "",
        }));
        return (
            <ModalContainer dismissRoute={dismissRoute} title={task.title}>
                <DropdownInput
                    id="assign-to"
                    label="Assign to"
                    placeholder="Select a user..."
                    value={task?.assignedToId}
                    options={options}
                    onDidSelect={onDidAssignTask}
                />
            </ModalContainer>
        );
    }
);
