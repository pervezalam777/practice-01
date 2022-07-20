import { Component } from "./firstClass.js";

(function() {
  // instance or object (componentOne)
  const componentOne = new Component();
  console.log('Wrong way of accessing property', componentOne.name)
  console.log('right way of accessing property', componentOne.getName())

  componentOne.name = 'My component'; // wrong way of doing
  componentOne.setName('my first component') // right way

  componentOne.render();

  console.log('old type.. ', componentOne.type)
  componentOne.cType = 'changed Type';
  console.log('new type.. ', componentOne.type)

  // Component.render() // wrong way of accessing class method and it will throw error
  // static method can be accessed
  Component.assignEvents();
})()