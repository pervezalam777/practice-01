import { Person } from "./person.js";

(function() {
  const ram = new Person('Ram', 33, 'male');
  ram.tellMeAboutYourSelf();

  const seeta = new Person('Seeta', 28, 'female');
  seeta.tellMeAboutYourSelf();

  const fakePerson = new Person(20, 'fake', 'abc')
  fakePerson.tellMeAboutYourSelf();
})()