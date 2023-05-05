/**
 * We have todos list in which we need to update object at position 3
 * it should use shallow cloning so that only the object at position 3
 * updates. All the other object should remain same.
 * Also new todo array should be created so that only one inner object changes
 */

const todos = [
  {id: '001', text: 'some text'},
  {id: '002', text: 'some other text'},
  {id: '003', text: 'another text'},
  {id: '004', text: 'dummy text'},
];

const id = '003';
const updatedText = 'Another updated text';

const positionIndex = -1;
const updatedTodos = [];

console.log('todos should not be equal to updatedTodos', todos !== updatedTodos);
console.log('What is the position of object whose id is "003" it should be 2', positionIndex === 2);
console.log('todos and updatedTodos object at position 2 should not be same', todos[2] !== updatedTodos[2]);
console.log('todos and updatedTodos object at position 0 should be same', todos[0] === updatedTodos[0]);
console.log('todos and updatedTodos object at position 1 should be same', todos[1] === updatedTodos[1]);
console.log('todos and updatedTodos object at position 3 should be same', todos[3] === updatedTodos[3])