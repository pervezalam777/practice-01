import { useState } from 'react';

const initialTodos = [
  {id:'001', text:'daily exercise 30 mins', status:'active'}
]

export function useTodosHook() {
  const [todos, updateTodos] = useState(initialTodos);

  function addTodo(text) {
    const id = Date.now()+'-todo';
    //console.log('id',id);
    //console.log('text', text)
    const todo = {id, text, status:'active'};
    //todos.push(todo) // wrong
    //updateTodos(todo) // wrong
    const cloneTodos = [todo, ...todos];
    //console.log(todos === cloneTodos, 'should be false');
    //console.log(todos[0] === cloneTodos[0], 'should be true')
    updateTodos(cloneTodos)
  }

  function updateTodoText(newText, id) {
    //console.log('todos length',todos.length);
    const index = todos.findIndex(todo => todo.id === id);
    //console.log('index is: ', index);
    const cloneTodos = [...todos];
    // const todo = cloneTodos[index]; //wrong
    // todo.text = newText; //wrong
    const todo = {...cloneTodos[index], text: newText};
    //console.log(todo === todos[index], 'should not be true')
    //const todo = {};
    cloneTodos[index] = todo;
    updateTodos(cloneTodos);
  }

  function deleteItemById(id) {
    const cloneTodos = todos.filter(item => item.id !== id);
    // console.log(cloneTodos === todos, 'should be false')
    // console.log(cloneTodos)
    updateTodos(cloneTodos)
  }


  return {
    todos,
    addTodo,
    updateTodoText,
    deleteItemById
  }
}