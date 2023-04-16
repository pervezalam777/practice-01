import {useTodosHook} from './hooks/useTodosHook'
import './App.css';

function App() {
  const { todos, addTodo, updateTodoText, deleteItemById } = useTodosHook();
  console.log('todos',  todos);
  return (
    <div className="App">
      <button onClick={() => {addTodo('Daily reading 30 mins')}}>add todo</button>
      <button onClick={() => {updateTodoText('daily writing 30 mins', '001')}}>update todo</button>
      <button onClick={() => {deleteItemById('001')}}>delete todo</button>
      <ul>
        {
          todos.map(item => (
            <li key={item.id}>
              <span>{item.text}</span><button>{item.status}</button>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
