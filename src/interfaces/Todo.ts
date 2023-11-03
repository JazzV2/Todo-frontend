export interface ITask{
    updatedAt: Date;
    id: string;
    title: string;
    description: string;
    isDone: boolean;
    isImportant: boolean;
}