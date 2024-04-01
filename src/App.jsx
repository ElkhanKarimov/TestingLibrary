import { useState } from 'react';
import './App.css';

function App() {

  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  function handleChange(e) {
    setInputValue(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    setTodos([...todos, inputValue])
    setInputValue('')
  }
  return (
    <div className="App">
      <h1>Todo List</h1>
      <form>
        <input type='text' data-testid="test" value={inputValue} onChange={handleChange} />
        <button onClick={handleSubmit}>Add Todo</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo}>{todo}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
