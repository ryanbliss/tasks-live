import { useEffect, useState } from "react";
import { IKanbanBoard } from "../interfaces";
import { getKanbanBoard } from "../utils";

/**
 * As the provided boardId changes, returns the corresponding IKanbanBoard item.
 * 
 * @param boardId Optional. Board ID you'd like to fetch.
 * @returns IKanbanBoard | undefined.
 */
export const useKanbanBoard = (boardId: string | undefined): IKanbanBoard | undefined => {
    const [selectedBoard, setSelectedBoard] = useState<IKanbanBoard>();

    useEffect(() => {
        if (selectedBoard?.id === boardId) return;
        if (!boardId) {
            setSelectedBoard(undefined);
            return;
        }
        setSelectedBoard(getKanbanBoard(boardId));
    }, [boardId, selectedBoard]);

    return selectedBoard;
}
