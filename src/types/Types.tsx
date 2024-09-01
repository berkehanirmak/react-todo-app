export interface TodoInitialState {
    todos: TodoType[]
    searchQuery: string;          
    filterByCompleted: boolean | null;  
}
export interface TodoType {
    id: number
    content: string;
    completed?: boolean; 

}