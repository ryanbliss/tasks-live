import { FC, useState } from "react";
import { IKanbanBoard, ITask } from "../../../interfaces";
import {
    Button,
    Card,
    Menu,
    MenuGroup,
    MenuGroupHeader,
    MenuItem,
    MenuList,
    MenuPopover,
    MenuTrigger,
} from "@fluentui/react-components";
import { MoreHorizontal24Regular } from "@fluentui/react-icons";
import { FlexRow } from "../../flex";
import { useNavigationContext } from "../../../context";
import { AppRoutes } from "../../../constants";

interface IKanbanTaskProps {
    board: IKanbanBoard;
    task: ITask;
    setTask: (updatedTask: ITask) => void;
}

export const KanbanTask: FC<IKanbanTaskProps> = ({ board, task, setTask }) => {
    const [mouseOver, setMouseOver] = useState(false);
    const { navigate } = useNavigationContext();
    const openTask = () => {
        console.log("open task");
        const route =
            `${AppRoutes.teams.children.meeting.children.board.children.task}`
                .replace(":boardId", board.id)
                .replace(":taskId", task.id);
        navigate(route);
    };
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
                            onClick={(ev) => {
                                ev.stopPropagation();
                            }}
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
                                        <MenuGroup>
                                            <MenuGroupHeader>
                                                {"Move to..."}
                                            </MenuGroupHeader>
                                            {board.columns.map((column) => (
                                                <MenuItem
                                                    key={`menu-item-column/${column.id}`}
                                                    disabled={
                                                        column.id ===
                                                        task.columnId
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
                                        </MenuGroup>
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
