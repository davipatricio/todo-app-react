import { Todo } from '../App';
import './TodoItem.css';

interface TodoItemProps {
  todo: Todo;
  index: number;
  removeTodo(index: number): void;
}

export default function TodoItem({ removeTodo, index, todo }: TodoItemProps) {
  return (
    <div className="todo-item">
      <p>{todo}</p>
      <button onClick={() => removeTodo(index)}>
        <i className="fa-solid fa-trash" />
      </button>
    </div>
  );
}
