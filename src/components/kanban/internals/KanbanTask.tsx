import { FC, useCallback, useState } from "react";
import { IKanbanBoard, ITask } from "../../../interfaces";
import {
    Button,
    Card,
    Menu,
    MenuItem,
    MenuList,
    MenuPopover,
    MenuTrigger,
} from "@fluentui/react-components";
import { MoreHorizontal24Regular } from "@fluentui/react-icons";
import { FlexRow } from "../../flex";
import { useNavigationContext } from "../../../context";

interface IKanbanTaskProps {
    board: IKanbanBoard;
    task: ITask;
    setTask: (updatedTask: ITask) => void;
}

export const KanbanTask: FC<IKanbanTaskProps> = ({ board, task, setTask }) => {
    const [mouseOver, setMouseOver] = useState(false);
    const { navigate } = useNavigationContext();
    const openTask = useCallback(() => {
        //
    }, [task, navigate]);
    return (
        <Card
            onMouseEnter={() => {
                setMouseOver(true);
            }}
            onMouseLeave={() => {
                setMouseOver(false);
            }}
            onClick={openTask}
        >
            <FlexRow spaceBetween vAlign="center">
                {task.title}
                <Menu>
                    <MenuTrigger disableButtonEnhancement>
                        <Button
                            icon={
                                <MoreHorizontal24Regular
                                    style={{
                                        visibility: mouseOver
                                            ? "visible"
                                            : "hidden",
                                    }}
                                />
                            }
                            title="More"
                            appearance="subtle"
                        />
                    </MenuTrigger>
                    <MenuPopover>
                        <MenuList>
                            <Menu>
                                <MenuTrigger>
                                    <MenuItem>{"Move to"}</MenuItem>
                                </MenuTrigger>
                                <MenuPopover>
                                    <MenuList>
                                        {board.columns.map((column) => (
                                            <MenuItem
                                                key={`menu-item-column/${column.id}`}
                                                disabled={
                                                    column.id === task.columnId
                                                }
                                                onClick={() => {
                                                    const newTask: ITask = {
                                                        ...task,
                                                        columnId: column.id,
                                                    };
                                                    setTask(newTask);
                                                }}
                                            >
                                                {column.title}
                                            </MenuItem>
                                        ))}
                                    </MenuList>
                                </MenuPopover>
                            </Menu>
                        </MenuList>
                    </MenuPopover>
                </Menu>
            </FlexRow>
        </Card>
    );
};
