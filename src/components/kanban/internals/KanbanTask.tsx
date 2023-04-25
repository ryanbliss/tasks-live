import { FC } from "react";
import { ITask } from "../../../interfaces";
import { Card } from "@fluentui/react-components";

interface IKanbanTaskProps {
    task: ITask;
}

export const KanbanTask: FC<IKanbanTaskProps> = ({ task }) => {
    return (
        <Card>{task.title}</Card>
    );
};
