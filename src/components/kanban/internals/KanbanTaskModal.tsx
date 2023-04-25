import { FC, memo } from "react";
import { IKanbanBoard, ITask } from "../../../interfaces";
import { ModalContainer } from "../../modal";
import { AppRoutes } from "../../../constants";

interface IKanbanTaskModalProps {
    task: ITask | undefined;
    board: IKanbanBoard;
}

export const KanbanTaskModal: FC<IKanbanTaskModalProps> = memo(
    ({ task, board }) => {
        const dismissRoute = `${AppRoutes.teams.children.meeting.children.board.base}`
            .replace(":boardId", board.id);
        if (!task) {
            return (
                <ModalContainer dismissRoute={dismissRoute}>{"This task does not exist"}</ModalContainer>
            );
        }
        return (
            <ModalContainer dismissRoute={dismissRoute} title={task.title}>
                
            </ModalContainer>
        );
    }
);
