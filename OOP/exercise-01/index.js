import { Person } from "./person.js";

(function() {
  // Create 3 instance of person class
 // Instance name should be.. arif, narender and ram

  const arif = new Person();
  const narender = new Person();
  const ram = new Person();

  console.log('arif === narender',arif === narender);
  console.log('arif === ram',arif === ram);
  console.log('narender === ram',narender === ram);

  arif.setName('Arif');
  narender.setName('Narender'); 
  ram.setName('Ram');

  // Assign age to each twice one should be wrong an one should be correct
  
  // The following is the calling of setter method
  arif.age = 1;

  // The following is the calling of getter method
  console.log('arif\'s default age', arif.age);

  arif.age = 30;
  console.log('arif\'s age after assignment of correct age', arif.age);

  narender.age = 90;
  console.log('narender\'s default age', narender.age);
  narender.age = 35;
  console.log('narender\'s age after assignment of correct age', narender.age);

  ram.age = -10;
  console.log('ram\'s default age', ram.age);
  ram.age = 33;
  console.log('ram\'s age after assignment of correct age', ram.age);

})()