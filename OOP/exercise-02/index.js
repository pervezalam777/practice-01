import { Person, GENDERS } from "./person.js";

(function() {
  const ram = new Person('Ram', 33, GENDERS.MALE);
  ram.tellMeAboutYourSelf();

  const seeta = new Person('Seeta', 28, GENDERS.FEMALE);
  seeta.tellMeAboutYourSelf();

  const fakePerson = new Person(20, 'fake', GENDERS.TRANS)
  fakePerson.tellMeAboutYourSelf();
})()