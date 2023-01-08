import { FormEvent, useCallback, useRef, useState } from 'react';
import './CreateBar.css';

interface CreateBarProps {
  addTodo(content: string): void;
}

export default function CreateBar({ addTodo }: CreateBarProps) {
  const [input, setInput] = useState('');

  const formSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      addTodo(input);
      setInput('');
    },
    [input],
  );

  return (
    <>
      <section className="add-section">
        <form onSubmit={formSubmit}>
          <input type="text" placeholder="Create a new task" value={input} onChange={(e) => setInput(e.target.value)} />
          <button type="submit" disabled={input.length === 0 || input.length > 50}>
            <i className="fa-solid fa-plus" />
          </button>
        </form>
      </section>
    </>
  );
}
