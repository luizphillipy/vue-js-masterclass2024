 export type ID = string;
export interface Column {
    title: string;
    id: ID;
    tastks: Task[];

}
export interface Task {
    id: ID;
    title: string;
    createdAt: Date;
}