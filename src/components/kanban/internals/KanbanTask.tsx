import { FC, useState } from "react";
import { IKanbanBoard, ITask, PresenceUser } from "../../../interfaces";
import {
    Avatar,
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
import { FlexColumn, FlexRow } from "../../common/flex";
import { useAppContext } from "../../../context";
import { AppRoutes } from "../../../constants";

interface IKanbanTaskProps {
    board: IKanbanBoard;
    task: ITask;
    setTask: (updatedTask: ITask) => void;
    user?: PresenceUser;
}

export const KanbanTask: FC<IKanbanTaskProps> = ({
    board,
    task,
    setTask,
    user,
}) => {
    // While hovering over the card, we show an overflow menu
    const [mouseOver, setMouseOver] = useState(false);
    const { navigate } = useAppContext();

    // Callback to open the task in a modal
    const openTask = () => {
        const route =
            `${AppRoutes.teams.children.meeting.children.board.children.task}`
                .replace(":boardId", board.id)
                .replace(":taskId", task.id);
        navigate(route);
    };

    // Callback to reassign a task to a new column in the kanban board.
    const onChangeTaskColumn = (columnId: string) => {
        const newTask: ITask = {
            ...task,
            columnId: columnId,
        };
        setTask(newTask);
    }
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
                            <MenuGroup>
                                <MenuGroupHeader>
                                    {"Move to..."}
                                </MenuGroupHeader>
                                {board.columns.map((column) => (
                                    <MenuItem
                                        key={`menu-item-column/${column.id}`}
                                        disabled={column.id === task.columnId}
                                        onClick={(ev) => {
                                            ev.stopPropagation();
                                            onChangeTaskColumn(column.id);
                                        }}
                                    >
                                        {column.title}
                                    </MenuItem>
                                ))}
                            </MenuGroup>
                        </MenuList>
                    </MenuPopover>
                </Menu>
            </FlexRow>
        </Card>
    );
};
