import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { setSearchQuery, setFilterByCompleted } from '../redux/todoSlice'

const TodoFilter = () => {
    const dispatch = useDispatch();
    const { searchQuery, filterByCompleted } = useSelector((state: RootState) => state.todo);
  
    return (
      <div className="todo-filter">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => dispatch(setSearchQuery(e.target.value))}
          className="todo-search"
        />
        <select
          value={filterByCompleted === null ? '' : filterByCompleted.toString()}
          onChange={(e) => dispatch(setFilterByCompleted(e.target.value === '' ? null : e.target.value === 'true'))}
          className="todo-completion-filter"
        >
          <option value="">All</option>
          <option value="true">Completed</option>
          <option value="false">Incomplete</option>
        </select>
      </div>
    );
  };

export default TodoFilter;
