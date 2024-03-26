export interface AddEdit {
    active: string;
    isImportant: boolean;
    isCreated: boolean;
    title: string;
    description: string;
    id: string;
}

export interface TextTask {
    title: string;
    description: string;
}

export interface EditTask {
    newTitle: string;
    newDescription: string;
}

export interface CreateTask {
    title: string;
    description: string;
    isImportant: boolean;
}