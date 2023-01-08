import { useCallback, useMemo, useState } from 'react';
import './App.css';
import CreateBar from './components/CreateBar';
import TodoManager from './components/TodoManager';

export type Todo = string;

function App() {
  const cachedTodos = useMemo(() => {
    const todos = localStorage.getItem('todos');
    if (!todos) return [];

    return JSON.parse(todos) as Todo[];
  }, []);

  const [todos, setTodos] = useState(cachedTodos);

  const addTodo = useCallback(
    (content: string) =>
      setTodos((todoList) => {
        const newTodos = [...todoList, content];

        localStorage.setItem('todos', JSON.stringify(newTodos));
        return newTodos;
      }),
    [],
  );

  const removeTodo = useCallback(
    (index: number) =>
      setTodos((todoList) => {
        const newTodos = [...todoList];
        newTodos.splice(index, 1);

        localStorage.setItem('todos', JSON.stringify(newTodos));
        return newTodos;
      }),
    [],
  );

  return (
    <div className="container">
      <section className="header-section">
        <CreateBar addTodo={addTodo} />
        <div className="separator" />

        <section className="todo-section">
          <TodoManager todos={todos} removeTodo={removeTodo} />
        </section>
      </section>
    </div>
  );
}

export default App;
