import TodoItem from './TodoItem'
import TodoFilter from './TodoFilter'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { TodoType } from '../types/Types'

const TodoList = () => {
  const { todos, searchQuery, filterByCompleted } = useSelector((state: RootState) => state.todo)

  const filteredTodos = todos
    .filter((todo: TodoType) => {
      if (filterByCompleted === null) return true;
      return todo.completed === filterByCompleted;
    })
    .filter((todo: TodoType) => {
      return todo.content.toLowerCase().includes(searchQuery.toLowerCase());
    });

  return (
    <div>
      <TodoFilter /> 
      {filteredTodos && filteredTodos.map((todo: TodoType) => (
        <TodoItem key={todo.id} todoProps={todo} />
      ))}
    </div>
  )
}

export default TodoList
