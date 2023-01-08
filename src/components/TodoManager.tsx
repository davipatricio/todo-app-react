import { Todo } from '../App';
import TodoItem from './TodoItem';

interface TodoManagerProps {
  todos: Todo[];
  removeTodo(index: number): void;
}

export default function TodoManager({ todos, removeTodo }: TodoManagerProps) {
  return (
    <>
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} index={index} removeTodo={removeTodo} />
      ))}
    </>
  );
}
