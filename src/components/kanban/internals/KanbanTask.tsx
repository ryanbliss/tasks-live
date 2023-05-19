import { FC } from "react";
import { IKanbanBoard, ITask, PresenceUser } from "../../../interfaces";
import {
    Avatar,
    Card,
} from "@fluentui/react-components";
import { FlexColumn } from "../../common/flex";
import { useAppContext } from "../../../context";
import { AppRoutes } from "../../../constants";

interface IKanbanTaskProps {
    board: IKanbanBoard;
    task: ITask;
    user?: PresenceUser;
}

export const KanbanTask: FC<IKanbanTaskProps> = ({
    board,
    task,
    user,
}) => {
    // While hovering over the card, we show an overflow menu
    const { navigate } = useAppContext();

    // Callback to open the task in a modal
    const openTask = () => {
        const route =
            `${AppRoutes.teams.children.meeting.children.board.children.task}`
                .replace(":boardId", board.id)
                .replace(":taskId", task.id);
        navigate(route);
    };
    return (
        <Card
            onClick={openTask}
        >
            <FlexColumn gap="smaller">
                <FlexColumn>{task.title}</FlexColumn>
                {user?.displayName && (
                    <Avatar
                        color="colorful"
                        name={user.displayName}
                        size={24}
                        title={user.displayName}
                    />
                )}
            </FlexColumn>
        </Card>
    );
};
