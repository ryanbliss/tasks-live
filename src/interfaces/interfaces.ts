
export interface IKanbanBoard {
    id: string;
    title: string;
    columns: IKanbanColumn[];
    tasks: ITask[];
}

export interface IKanbanColumn {
    id: string;
    title: string;
}

export interface ITask {
    id: string;
    title: string;
    columnId: string;
    assignedToId?: string;
}
