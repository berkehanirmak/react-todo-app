import { IoMdRemoveCircleOutline } from "react-icons/io";
import { FaEdit, FaCheck } from "react-icons/fa";
import { TodoType } from '../types/Types';
import { useDispatch } from "react-redux";
import { removeTodoById, updateTodoById } from "../redux/todoSlice";
import { useState } from "react";

interface TodoItemProps {
  todoProps: TodoType;
}

const TodoItem = ({ todoProps }: TodoItemProps) => {
  const { id, content, completed } = todoProps;
  const dispatch = useDispatch();
  const [editable, setEditable] = useState<boolean>(false);
  const [newTodo, setNewTodo] = useState<string>(content);

  const handleRemoveTodo = () => {
    dispatch(removeTodoById(id));
  };

  const handleUpdateTodo = () => {
    const payload: TodoType = {
      id: id,
      content: newTodo,
      completed: completed,
    };
    dispatch(updateTodoById(payload));
    setEditable(false);
  };

  const toggleCompleted = () => {
    const payload: TodoType = {
      id: id,
      content: content,
      completed: !completed, 
    };
    dispatch(updateTodoById(payload));
  };

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={toggleCompleted}
      />
      {editable ? (
        <input
          type="text"
          value={newTodo}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)}
        />
      ) : (
        <div style={{ textDecoration: completed ? 'line-through' : 'none' }}>
          {content}
        </div>
      )}
      <div className="icons">
        <IoMdRemoveCircleOutline onClick={handleRemoveTodo} />
        {editable ? (
          <FaCheck onClick={handleUpdateTodo} />
        ) : (
          <FaEdit onClick={() => setEditable(true)} />
        )}
      </div>
    </div>
  );
};

export default TodoItem;
