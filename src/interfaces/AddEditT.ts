export interface AddEdit {
    active: string;
    isImportant: boolean;
    isCreated: boolean;
    title: string;
    description: string;
}

export interface TextTask {
    title: string;
    description: string;
}

export interface CreateTask {
    title: string;
    description: string;
    isImportant: boolean;
}